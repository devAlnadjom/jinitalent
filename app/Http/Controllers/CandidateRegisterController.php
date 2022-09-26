<?php

namespace App\Http\Controllers;

use App\Http\Requests\UploadcvRequest;
use App\Models\Candidate;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CandidateRegisterController extends Controller
{
    public function index(){

        return Inertia::render('Frontoffice/Uploadcv', [
            'status'=>'success',
            'canLogin' => true,
            'canRegister' => true,
        ]);

    }

    public function UploadCv(UploadcvRequest $request){

        $validated = $request->validated();
        $validated= $request->safe()->except(array('resume'));

        $candidate= Candidate::create($validated);

        if($request->has('resume')){
            $file= $request['resume'];
            $fileName = 'resume-'.time().'.'.$file->getClientOriginalExtension();
            $path = $file->storeAs('resume', $fileName);
            $candidate->resume= 'resume/'.$fileName;
            $candidate->save();
        }

        dd($candidate);
    }
}
