<?php
use App\Http\Controllers\User\UserInfoController;
use App\Http\Controllers\HobbyController;
use App\Http\Controllers\RolesController;
use App\Http\Controllers\GroupController;
use App\Models\Roles;
use Illuminate\Support\Facades\Route;


Route::post('/roles', [RolesController::class, "createRole"])->name("roles");

Route::get("/hobby", [HobbyController::class,"fetchAllHobbies"])->name("fetchAllHobbies");

Route::post('/hobby', [HobbyController::class, 'createHobby'])->name('hobby');

Route::get("/users", [UserInfoController::class, "getUserById"])->name("user");

Route::post("/user/add/hobby", [UserInfoController::class,"addHobbyToUser"])->name("hobby");

Route::post("/group", [GroupController::class,"createGroup"])->name("group");

Route::get("/group", [GroupController::class,"groupById"])->name("group");

Route::post("/group/addMember", [GroupController::class,"addMember"])->name("group");