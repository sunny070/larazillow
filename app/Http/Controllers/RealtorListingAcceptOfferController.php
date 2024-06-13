<?php

namespace App\Http\Controllers;

use App\Models\Offer;
use App\Policies\ListingPolicy;
use Illuminate\Http\Request;

class RealtorListingAcceptOfferController extends Controller
{
    public function __invoke(Offer $offer)
    {
        // ListingPolicy
        $listing = $offer->listing;
        $this->authorize('update',$listing);

        // Accept selected offer
        $offer->update(['accepted_at' => now()]);
        $listing->sold_at = now();
        $listing->save();

        // REject all other offers
        $listing->offers()->except($offer)->update(['rejected_at' => now()]);

        return redirect()->back()
            ->with(
                'success',"Offer #{$offer->id} accepted, other offers rejected"
            );
    }
}
