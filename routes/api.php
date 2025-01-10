<?php

use App\Http\Controllers\WebscrapperController;
use Illuminate\Support\Facades\Route;



Route::get("/webscrapper", [WebscrapperController::class, "scrape"] ) ->name("webscrapper");

Route::post("/generateGiftIdeas", [WebscrapperController::class, "generateGiftIdeas"] ) -> name("generateGiftIdeas");
Route::get("/generateGiftIdeasByImage", [WebscrapperController::class, "generateGiftIdeasByImage"] ) -> name("generateGiftIdeasByImage");
