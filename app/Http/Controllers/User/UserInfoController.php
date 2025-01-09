<?php
namespace App\Http\Controllers\User;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Hobby;

class UserInfoController extends Controller
{
    public function __invoke(Request $request)
    {
        $user = auth()->user();
        return Inertia::render("Dashboard", ['user' => $user]);
    }
    public function getUserById(Request $request){
        $user = User::find($request -> id);

        return response()->json($user);

    }
    public function addHobbyToUser(Request $request){
        
    
        try{
            
          
            $user = User::findOrFail($request -> user_id);
            echo "USER:", $user;
            $hobby = Hobby::findOrFail($request -> hobby_name);
            

            echo $hobby->name;
            echo $user->name;
            $user->hobbies()->attach($hobby->name);
            $user->save();
            return response()->json([$user, "message" => "Hobby has been successfully added to the users profile :)!"]);

        } catch(\Exception $e){
            Log::error('Failed to add hobby to user', [
                'erorr_message' => $e,
                'user_id' => $user->id,
                'hobby_name'=> $request->hobby_name,
            ]);
            return response()->json(['error' => 'Failed to add hobby to user.', 'message' => $e], 500);
        }
    }
}