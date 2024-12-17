<?php

namespace App\Http\Controllers;

use App\Models\SantaGroup;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class SantaGroupController extends Controller
{
    public function index(Request $request) : Response
    {
        $groups = SantaGroup::where('user_id',$request->user()->id)->get();

        return Inertia::render('/santaGroup', [
           'groups' => $groups
        ]);
    }

    public function store(Request $request) : RedirectResponse
    {
        $validated = $request->validate([
            'budget' => 'required','number','max:500',
            'members' => 'required', 'array', 'max: 500'
        ]);

        SantaGroupExchange::create(['user_id' => $request->user_id, 'budget' => $validated['budget'], 'members' => $validated['members']]);
        return redirect()->route('santaGroup.index');
    }
}

