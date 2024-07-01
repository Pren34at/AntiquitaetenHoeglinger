<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class OrderController extends Controller
{
    public function test(Request $request){
        if(Auth::check()){
            dd(Auth::id());
        }
    }
}
