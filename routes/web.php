<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SantaGroupController;
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

Route::middleware('auth')->group(function () {
    Route::get('/giftExchange', [GiftController::class, 'index'])->name('giftExchange.index');
    Route::post('/giftExchange', [GiftController::class, 'store'])->name('giftExchange.store');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/ideas', function () {
    return Inertia::render('Ideas');
})->middleware(['auth', 'verified'])->name('ideas');

Route::middleware('auth')->group(function () {
    Route::get('/santaGroup', [SantaGroupController::class, 'index'])->name('santaGroup.index');
    Route::post('/santaGroup', [SantaGroupController::class, 'store'])->name('santaGroup.store');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
