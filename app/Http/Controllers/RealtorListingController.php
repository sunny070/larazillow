<?php

namespace App\Http\Controllers;

use App\Models\Listing;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RealtorListingController extends Controller
{
    public function __construct()
    {
        $this->authorizeResource(Listing::class,'listing');
    }
    public function index(Request $request)
    {
        // dd($request->all());
        $filters = [
            'deleted' => $request->boolean('deleted'),
            ... $request->only(['by','order'])
        ];
        // dd(Auth::user()->listings);
        return inertia('Realtor/Index',[
            'listings'=>Auth::user()
            ->listings()
            // ->mostRecent()
            ->filter($filters)->get()
        ]);
    }
    public function destroy(Listing $listing)
    {
        $listing->deleteOrFail();

        return redirect()->back()
        ->with('success', 'Listing was deleted!');
    }
}
