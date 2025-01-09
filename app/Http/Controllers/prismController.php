<?php

namespace App\Http\Controllers;

use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
class prismController extends Controller
{
    //
    function generateGiftSuggestions(Request $request){        
            try {
                
            } catch (QueryException $e) {
                return response()->json($e->getMessage());
        }
    }
}