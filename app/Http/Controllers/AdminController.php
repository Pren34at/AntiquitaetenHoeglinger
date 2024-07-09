<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function Auth(Request $request){
        if(Auth::check()){
            $usertype = Auth() -> user() -> usertype;
            if($usertype == 'admin'){
                return Inertia::render('adminDashboard');
            } 
            else if($usertype == 'user'){
                return Inertia::render('dashboard');
            }
        }
    }

    public function store(Request $request){
        dd('works');
    }
}
