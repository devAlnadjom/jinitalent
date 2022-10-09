<?php

namespace App\Http\Controllers;

use App\Models\jobs;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Requests\StoreJobRequest;
use App\Models\Candidate;
use App\Models\organization;
use Illuminate\Support\Facades\Redirect;

class JobsController extends Controller
{

    public function index(Request $request)
    {


        return Inertia::render('Jobs/Index', [
            //'orders' => Order::paginate(),
            'filters' => $request->all('search', 'trashed'),
            'jobs' => Jobs::Select(['id', 'name as job_tite', 'no_of_vacancy','status','style','date_start_job','organization_id'])
                ->with(['organization:id,name'])
                ->filter($request->only('search'/*, 'trashed'*/))
                ->paginate(10)
                ->withQueryString()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //dd(Organization::where('status','1')->get(['id','name']));
        return Inertia::render('Jobs/Create', [
            'organization'=>Organization::where('status','1')->get(['id','name']),
        ]);
    }


    public function store(StoreJobRequest $request)
    {
        $validated = $request->validated();

        Jobs::create($validated);
        return Redirect::route("jobs.index")->with('success',"Jobs created successfully.");

    }


    public function show(Jobs $job)
    {
        $organization = $job->organization()->first();

        //Select that are not actualy on another Job
        //dd(Jobs::where('id',$job->id)->with("applicants")->get());

        $candidates = Candidate::Select(['id','first_name','last_name','resume'])
                        ->get();


        return Inertia::render('Jobs/Show', [
            'jobs' => $job,
            'organization' => $organization,
            'candidates' => $candidates,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\jobs  $jobs
     * @return \Illuminate\Http\Response
     */
    public function edit(jobs $jobs)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\jobs  $jobs
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, jobs $jobs)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\jobs  $jobs
     * @return \Illuminate\Http\Response
     */
    public function destroy(jobs $jobs)
    {
        //
    }



    public function showApplications(Jobs $job)
    {
        $organization = $job->organization()->first();


        $job->load(["applications"=> function ($query) {
                $query->with("candidate");
            }]);

      /* dd(Jobs::where('id',$job->id)->
            with(["applications"=> function ($query) {
                $query->with("candidate");
            }])
       ->get());*/


        $candidates = Candidate::Select(['id','first_name','last_name','resume'])
                        ->get();


        return Inertia::render('Jobs/ShowApplications', [
            'jobs' => $job,
            'organization' => $organization,
            'candidates' => $candidates,
        ]);
    }
}
