<?php

namespace App\Http\Controllers;

use App\Models\Hobby;
use Illuminate\Http\Request;

class HobbyController extends Controller
{

    public function index(){
        return auth()->user()->hobbies;
    }
    public function store(Request $request){
        $validated = $request->validate([
            "hobby_name" => "required", "string"
        ]);
        Hobby::create([
            "hobby_name" => $validated['hobby_name'],
            "user_id" => $request->user()->id,
        ]);
        $hobbies = auth()->user()->hobbies->pluck('hobby_name');
        Inertia::render('/Hobbies',['hobbies' => $hobbies]);

    }

    public function update(Request $request, Hobby $hobby){
        $validated = $request->validate([
            "hobby_name" => "required", "string"
        ]);

        $hobby->update([
            "hobby_name" => $validated['hobby_name'],
        ]);
    }
    public function destroy(Request $request, Hobby $hobby){
        $hobby->delete();
    }
}

