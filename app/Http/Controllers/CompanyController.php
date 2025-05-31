<?php

namespace App\Http\Controllers;

use App\Models\Company;
use Illuminate\Http\Request;

class CompanyController extends Controller
{
    public function index()
    {
        $companies = Company::all();

        return inertia('Companies/Index', compact('companies'));
    }

    public function create()
    {
        return inertia('Companies/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate(['title' => 'required|string|max:255']);
        Company::create($validated);

        return redirect()->route('companies.index');
    }

    public function show(Company $company)
    {
        return inertia('Companies/Show', compact('company'));
    }

    public function edit(Company $company)
    {
        return inertia('Companies/Edit', compact('company'));
    }

    public function update(Request $request, Company $company)
    {
        $validated = $request->validate(['title' => 'required|string|max:255']);
        $company->update($validated);

        return redirect()->route('companies.index');
    }

    public function destroy(Company $company)
    {
        $company->delete();

        return redirect()->route('companies.index');
    }
}
