<?php

namespace App\Http\Controllers;
use App\Models\ExchangeGroup;
use Illuminate\Support\Facades\Log;
use Illuminate\Http\Request;
use Carbon\Carbon;

class GroupController extends Controller
{
    public function createGroup(Request $request){
        
    try {

        $year = $request->year;
        $month = $request->month;
        $day = $request->day;
        $hour = $request->hour;

        $exchangeDate = Carbon::create($year, $month, $day, $hour);

        $createGroup = ExchangeGroup::create(['name' => $request->name, "budget" => $request -> budget, "exchangeDate" => $exchangeDate]);

        $createGroup -> save();

        return response()->json(["data" => $createGroup, "message" => "Group was successfully created"]);

    } catch (\Exception $e) {

        Log::error($e->getMessage());
        return response()->json(["message"=> $e]);
    }
        
    }

    public function groupById(Request $request){ 
        try{
            $group = ExchangeGroup::findOrFail($request->id);
            return response()->json($group);
        } catch (\Exception $e) {
            Log::error($e->getMessage());
            return response()->json(["message"=> $e]);
    }
    }
}