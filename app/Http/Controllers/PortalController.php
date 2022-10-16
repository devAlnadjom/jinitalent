<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\jobs;

class PortalController extends Controller
{
    public function index(Request $request)
    {

        $jobs= Jobs::Select(['id', 'name as job_tite', 'no_of_vacancy','status','style','date_start_job','organization_id'])
                    ->with(['organization:id,name'])
                    ->filter($request->only('search'/*, 'trashed'*/))
                    ->paginate(20)
                    ->withQueryString();
       //dd($jobs);

        return Inertia::render('Portal/Index', [
            //'orders' => Order::paginate(),
            'filters' => $request->all('search', 'trashed'),
            'jobs' => $jobs
        ]);
    }



    public function show(Jobs $job)
    {
        $organization = $job->organization()->first();

        return Inertia::render('Portal/Show', [
            'jobs' => $job,
            'organization' => $organization,
        ]);
    }
}
