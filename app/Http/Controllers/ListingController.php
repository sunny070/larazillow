<?php

namespace App\Http\Controllers;

use App\Models\Listing;
use App\Policies\ListingPolicy;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ListingController extends Controller
{
    public function __construct()
    {
        // ListingPolicy
        $this->authorizeResource(Listing::class,'listing');
    }
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $filters = $request->only([
            'priceFrom', 'priceTo', 'beds', 'baths', 'areaFrom', 'areaTo'
        ]);
        

        // if($filters['priceFrom'] ??false){
        //     $query->where('price','>=',$filters['priceFrom']);
        // }
        // if($filters['priceTo']??false){
        //     $query->where('price','<=',$filters['priceTo']);
        // }
        // if($filters['beds']??false){
        //     $query->where('beds',$filters['beds']);
        // }
        // if($filters['baths']??false){
        //     $query->where('baths',$filters['baths']);
        // }
        // if($filters['areaFrom']??false){
        //     $query->where('area','<=',$filters['areaFrom']);
        // }
        // if($filters['areaTo']??false){
        //     $query->where('area','<=',$filters['areaTo']);
        // }


        return inertia(

            'Listing/Index',
            [
                'filters' => $filters,
                'listings' =>Listing::mostRecent()
                    ->filter($filters)
                    ->withoutSold()
                    ->paginate(10)
                    ->withQueryString()
            ]
        );
    }
    public function show(Listing $listing)
    {
        // if(Auth::user()->cannot('view',$listing)){
        //     abort(403);
        // }
        // $this->authorize('view',$listing);
            $listing->load(['images']);
            $offer = !Auth::user() ? null : $listing->offers()->byMe()->first();
        return inertia(
            'Listing/Show',
            [
                'listing' => $listing,
                'offerMade' => $offer,
            ]
        );
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        // $this->authorize('create',Listing::class);
        return inertia(
            'Listing/Create'
        );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //    dd($request);
        $request->user()->listings()->create(
            $request->validate([
                'beds' => 'required|integer|min:0|max:20',
                'baths' => 'required|integer|min:0|max:20',
                'area' => 'required|integer|min:15|max:1500',
                'city' => 'required',
                'code' => 'required',
                'street' => 'required',
                'street_nr' => 'required|integer|min:1|max:1000',
                'price' => 'required|integer|min:1|max:200000000',
            ])
        );



        return redirect()->route('listing.index')
            ->with('success', 'Listing was created!');
    }

    /**
     * Display the specified resource.
     */
    // Route Model Binding
    

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Listing $listing)
    {
        return inertia(
            'Listing/Edit',
            [
                'listing' => $listing
            ]
        );
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Listing $listing)
    {
        $listing->update(
            $request->validate([
                'beds' => 'required|integer|min:0|max:20',
                'baths' => 'required|integer|min:0|max:20',
                'area' => 'required|integer|min:15|max:1500',
                'city' => 'required',
                'code' => 'required',
                'street' => 'required',
                'street_nr' => 'required|integer|min:1|max:1000',
                'price' => 'required|integer|min:1|max:200000000',
            ])
        );

        return redirect()->route('listing.index')
            ->with('success', 'Listing was Changed!');
    }


    /**
     * Remove the specified resource from storage.
     */
    
}
