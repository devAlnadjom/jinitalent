<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreOrganizationRequest;
use App\Models\jobs;
use Inertia\Inertia;
use App\Models\organization;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class OrganizationController extends Controller
{

    public function index(Request $request)
    {
        return Inertia::render('Organizations/Index', [
            //'orders' => Order::paginate(),
            'filters' => $request->all('search', 'trashed'),
            'organizations' => organization::Select('*')
                ->filter($request->only('search'/*, 'trashed'*/))
                ->paginate(10)
                ->withQueryString()
        ]);
    }


    public function create()
    {
        return Inertia::render('Organizations/Create', [

        ]);
    }


    public function store(StoreOrganizationRequest $request)
    {
        $validated = $request->validated();
        organization::create($validated);
        return Redirect::route("organizations.index")->with('success',"Organization created successfully.");
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\organization  $organization
     * @return \Illuminate\Http\Response
     */
    public function show(organization $organization)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\organization  $organization
     * @return \Illuminate\Http\Response
     */
    public function edit(organization $organization)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\organization  $organization
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, organization $organization)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\organization  $organization
     * @return \Illuminate\Http\Response
     */
    public function destroy(organization $organization)
    {
        //
    }
}
