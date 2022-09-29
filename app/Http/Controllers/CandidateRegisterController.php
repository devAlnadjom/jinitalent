<?php

namespace App\Http\Controllers;

use App\Http\Requests\UploadcvRequest;
use App\Models\Candidate;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use PhpParser\Node\Stmt\TryCatch;

class CandidateRegisterController extends Controller
{
    public function index(\Spatie\Honeypot\Honeypot $honeypot){

        return Inertia::render('Frontoffice/Uploadcv', [
            'status'=>'success',
            'canLogin' => true,
            'canRegister' => true,
            'honeypot' => $honeypot,
        ]);

    }

    public function UploadCv(UploadcvRequest $request){

        $validated = $request->validated();
        $validated= $request->safe()->except(array('resume'));

        $candidate= Candidate::create($validated);

        if($request->has('resume') && $request['resume']){
            try{
                $file= $request['resume'];
                $fileName = 'resume-'.time().'.'.$file->getClientOriginalExtension();
                $path = $file->storeAs('resume', $fileName);
                $candidate->resume= 'resume/'.$fileName;
                $candidate->save();
            }
            catch(\Exception $e){

            }

        }

        return Redirect::route('public.confirmcv',[$candidate->id, sha1("jini".$candidate->id)]);

    }


    public function confirmCvSaved( Request $request,int $id, $shakey){

        $candidate = Candidate::findOrFail($id);
        abort_if((sha1("jini".$id) !==  $shakey ),"404");

        return Inertia::render('Frontoffice/ConfirmCv', [
            'candidate'=>$candidate,
        ]);

    }
}
