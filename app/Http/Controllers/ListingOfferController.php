<?php

namespace App\Http\Controllers;

use App\Models\Listing;
use App\Models\Offer;
use App\Notifications\OfferMade;
use App\Policies\ListingPolicy;
use Illuminate\Http\Request;

class ListingOfferController extends Controller
{
    public function store(Listing $listing,Request $request)
    {
        // ListingPolicy
        $this->authorize('view',$listing);
        $offer = $listing->offers()->save(
            Offer::make(
                $request->validate([
                        'amount'=>'required|integer|min:1|max:200000000'
                    ])
            )->bidder()->associate($request->user())
                );
                // Notification
                $listing->owner->notify(
                    new OfferMade($offer)
                );
            return redirect()->back()->with('success','Offer was Made!');
    }
}
