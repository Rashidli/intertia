<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CustomerController extends Controller
{
    public function index()
    {
        $customers = Customer::query()->paginate(10);

        return Inertia::render('Customers/Index', compact('customers'));
    }

    public function create()
    {
        return Inertia::render('Customers/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'car_model' => 'nullable|string|max:255',
            'car_make' => 'nullable|string|max:255',
            'car_number' => 'nullable|string|max:255',
            'phone' => 'required|string|max:20',
        ]);

        Customer::create($validated);

        return redirect()->route('customers.index')->with('success', 'Customer created.');
    }

    public function show(Customer $customer)
    {
        return Inertia::render('Customers/Show', compact('customer'));
    }

    public function edit(Customer $customer)
    {
        return Inertia::render('Customers/Edit', compact('customer'));
    }

    public function update(Request $request, Customer $customer)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'car_model' => 'nullable|string|max:255',
            'car_make' => 'nullable|string|max:255',
            'car_number' => 'nullable|string|max:255',
            'phone' => 'required|string|max:20',
        ]);

        $customer->update($validated);

        return redirect()->route('customers.index')->with('success', 'Customer updated.');
    }

    public function destroy(Customer $customer)
    {
        $customer->delete();

        return redirect()->route('customers.index')->with('success', 'Customer deleted.');
    }
}
