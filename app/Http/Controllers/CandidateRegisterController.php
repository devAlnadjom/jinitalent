<?php

namespace App\Http\Controllers;

use App\Http\Requests\UploadcvRequest;
use App\Models\Candidate;
use App\Models\User;
use Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
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

        // Create User
        $user = User::create([
            'email' => $validated['email'],
            'password' => Hash::make(time()),
            'name' => $validated['first_name'],
            'users_type' => 'CANDIDATE',
        ]);

        // User setRole Candidate
        // Send mail to reset password

        $candidate = Candidate::create($validated);
        $candidate->user_id = $user->id;
        $candidate->save();
        Auth::login($user);

        if($request->hasFile('resume')){
            try{
                $file= $request['resume'];
                $fileName = 'resume-'.time().'.'.$file->getClientOriginalExtension();
                $path = $file->storeAs('resume', $fileName);
                $candidate->resume = 'resume/'.$fileName;
                $candidate->save();
            }
            catch(\Exception $e){

            }

        }
        // auth()->user()->sendEmailVerificationNotification();
        return Redirect::route('portal.cv.index');
        //return Redirect::route('public.confirmcv',[$candidate->id, sha1("jini".$candidate->id)]);

    }


    public function confirmCvSaved( Request $request,int $id, $shakey){

        $candidate = Candidate::findOrFail($id);
        abort_if((sha1("jini".$id) !==  $shakey ),"404");

        return Inertia::render('Frontoffice/ConfirmCv', [
            'candidate'=>$candidate,
        ]);

    }
}
