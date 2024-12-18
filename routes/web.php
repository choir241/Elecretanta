<?php

use App\Http\Controllers\HobbyController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\GiftController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

//buy gift exchange

Route::middleware('auth')->group(function () {
    Route::post('/giftExchange', [GiftController::class, 'store'])->name('giftExchange.store');
});

Route::middleware(['auth', 'verified'])->group(function () {
   Route::get('/hobby', function () {
    return Inertia::render('Hobby', ['hobbies' => HobbyController::class, 'index']);
   })->name('hobby.index');

   Route::post('/hobby', [HobbyController::class, 'store'])->name('hobby.store');
   Route::put('hobby/{hobby}', [HobbyController::class, 'update'])->name('hobby.update');
   Route::delete('/hobby/{hobby}', [HobbyController::class, 'destroy'])->name('hobby.delete');
});
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
