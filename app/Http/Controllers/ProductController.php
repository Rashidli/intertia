<?php

namespace App\Http\Controllers;

use App\Models\Company;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::query()->with('company')->get();
//        dd($products->toArray());
        return inertia('Products/Index', compact('products'));
    }

    public function create()
    {
        $companies = Company::all();
        return inertia('Products/Create', compact('companies'));
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'price' => 'required|numeric|min:0',
            'company_id' => 'required',
        ]);

        Product::create($validated);

        return redirect()->route('products.index');
    }

    public function show(Product $product)
    {
        return inertia('Products/Show', compact('product'));
    }

    public function edit(Product $product)
    {
        return inertia('Products/Edit', compact('product'));
    }

    public function update(Request $request, Product $product)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'price' => 'required|numeric|min:0',
            'company_id' => 'required',
        ]);
        $product->update($validated);

        return redirect()->route('products.index');
    }

    public function destroy(Product $product)
    {
        $product->delete();

        return redirect()->route('products.index');
    }
}
