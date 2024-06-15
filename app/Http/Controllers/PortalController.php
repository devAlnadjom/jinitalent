<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreEducationRequest;
use App\Http\Requests\StoreExperienceRequest;
use App\Models\Candidate;
use App\Models\Education;
use App\Models\Experience;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\jobs;
use Illuminate\Support\Facades\Redirect;

class PortalController extends Controller
{
    public function index(Request $request)
    {

        $jobs= Jobs::Select(['id', 'name as job_tite','location','salary','level', 'no_of_vacancy','status','style','date_start_job','organization_id'])
                    ->with(['organization:id,name'])
                    ->filter($request->only('search'/*, 'trashed'*/))
                    ->paginate(20)
                    ->withQueryString();


        return Inertia::render('Portal/Index', [
            //'orders' => Order::paginate(),
            'filters' => $request->all('search', 'trashed'),
            'jobs' => $jobs
        ]);
    }



    public function show(Jobs $job)
    {
        $organization = $job->organization()->first();
        //dd($job);
        return Inertia::render('Portal/Show', [
            'jobs' => $job,
            'organization' => $organization,
        ]);
    }

    public function cv_index()
    {
        if (!auth()?->id()) {
            return redirect('login');
        }

        $candidate = auth()->user()->candidate;
        //dd($cndidate);
        return Inertia::render('Portal/CvIndex', [
            'candidate' =>   $candidate ,
            'jobs' => [],
            'organization' => [],
        ]);
    }

    public function cv_education()
    {
        if (!auth()?->id()) {
            return redirect('login');
        }
        $cndidate_id = auth()->user()->candidate->id;

        $educations = Education::where('candidate_id', $cndidate_id)->get();
        //dd($job);
        return Inertia::render('Portal/CvEducation', [
            'educations' => $educations,
            'jobs' => [],
            'organization' => [],
        ]);
    }

    public function cv_experience()
    {
        if (!auth()?->id()) {
            return redirect('login');
        }

        $cndidate_id = auth()->user()->candidate->id;

        $experiences = Experience::where('candidate_id', $cndidate_id)->get();
        //dd($job);
        return Inertia::render('Portal/CvExperience', [
            'experiences' => $experiences,
            'jobs' => [],
            'organization' => [],
        ]);
    }

    public function saveEducation (StoreEducationRequest $request) {
        if (!auth()?->id()) {
            return redirect('login');
        }

        $validated = $request->validated();
        $cndidate_id = auth()->user()->candidate->id;
        $validated["candidate_id"] = $cndidate_id;
        Education::create($validated);

        // Log: in system
        return Redirect::back()->with('success',"Ligne educations ajoutés");
    }

    public function deleteEducation (int $education) {
        if (!auth()?->id()) {
            return redirect('login');
        }

        $cndidate_id = auth()->user()->candidate->id;
        $educationModel = Education::find($education);
        if($educationModel->candidate_id == $cndidate_id) {
            $educationModel->delete();
        }

        // Log: in system

        return Redirect::back()->with('success',"Ligne educations ajoutés");
    }


    public function saveExperience (StoreExperienceRequest $request) {
        if (!auth()?->id()) {
            return redirect('login');
        }

        $validated = $request->validated();
        $cndidate_id = auth()->user()->candidate->id;
        $validated["candidate_id"] = $cndidate_id;
        Experience::create($validated);

        // Log: in system
        return Redirect::back()->with('success',"Ligne educations ajoutés");
    }

    public function deleteExperience (int $experience) {
        if (!auth()?->id()) {
            return redirect('login');
        }

        $cndidate_id = auth()->user()->candidate->id;
        $experienceModel = Experience::find($experience);
        if($experienceModel->candidate_id == $cndidate_id) {
            $experienceModel->delete();
        }

        // Log: in system

        return Redirect::back()->with('success',"Ligne educations ajoutés");
    }
}
