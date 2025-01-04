<?php

namespace App\Providers;

use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Route;


class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Vite::prefetch(concurrency: 3);
        $this->mapApiRoutes();
    }

    protected function mapApiRoutes()
    {
        Route::prefix('api')
        ->middleware('api') // Make sure this matches your controller namespace
        ->group(base_path('routes/api.php'));
    }
}
