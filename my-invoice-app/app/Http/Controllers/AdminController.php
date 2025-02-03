<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function dashboard()
    {
        $user = Auth::user(); // Get authenticated user
        return Inertia::render('Admin/Dashboard',[
            'title' => 'Dashboard',
            'user' => $user
        ]);
    }
}
