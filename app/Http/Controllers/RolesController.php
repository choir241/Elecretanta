<?php

namespace App\Http\Controllers;

use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use App\Models\Roles;
class RolesController extends Controller
{
    //
    function createRole(Request $request){        

            $customerMessage = ['name.unique' => "This Role Already Exists Please Select From Downdown!"];
            
            $req_body = $request -> validate([
                "name" => ["required", "string", "max:15"]
            ], $customerMessage);

            try {
                $createdRole = Roles::create(["name" => $req_body["name"]]);
                return response()-> json([$createdRole]);
            } catch (QueryException $e) {
                return response()->json(["erorr" => "Failed to create role",
                "message"=> $e->getMessage()]);
        }
    }
}