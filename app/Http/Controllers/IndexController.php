<?php

namespace App\Http\Controllers;

use App\Models\Listing;
use Inertia\Inertia;
use Illuminate\Http\Request;

class IndexController extends Controller
{
    //
    public function index()
    {
        // dd(Listing::all());
        return inertia(
            'Index/Index',
            [
            'message'=>"Hello fro Laravel!"
            ]

    );

    }
    public function show()
    {
        return inertia('Index/Show');

    }
    
}
