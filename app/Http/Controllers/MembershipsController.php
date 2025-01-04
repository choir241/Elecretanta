<?php 

namespace App\Http\Controllers;

use App\Models\Membership;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Roles;
use App\Models\ExchangeGroup;
use Illuminate\Support\Facades\Log;


class MembershipsController extends Controller
{
    public function addMembership(Request $request)
    {
        try{
            $group = ExchangeGroup::findOrFail($request->groupId);
            $gifter = User::findOrFail($request->userId);
            $giftee = User::findOrFail($request-> gifteeId);
            $role = Roles::findOrFail($request->roleId);

            echo $group, $gifter, $giftee, $role;

            echo "We made it this far";

            

            return response()->json($group);
        } catch (\Exception $e) {
            Log::error($e->getMessage());
            return response()->json(["message"=> $e]);
        }
    }
}