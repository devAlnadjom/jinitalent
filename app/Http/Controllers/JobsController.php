<?php

namespace App\Http\Controllers;

use App\Models\jobs;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Requests\StoreJobRequest;
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
        return Inertia::render('Jobs/Create', [

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
        return Inertia::render('Jobs/Show', [
            'jobs' => $job,
            'organization' => $organization,
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
}
