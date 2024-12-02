<?php
namespace App\Http\Controllers\User;
use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use Inertia\Inertia;

class UserInfoController extends Controller
{
    public function __invoke(Request $request)
    {
        $user = auth()->user();
        return Inertia::render("Dashboard", ['user' => $user]);
    }
}