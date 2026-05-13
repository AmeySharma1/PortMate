<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\PortfolioController;
use App\Http\Controllers\Api\SectionController;
use App\Http\Controllers\Api\ProjectController;
use App\Http\Controllers\Api\SkillController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
*/

// Public routes (no auth required for development)
Route::get('/health', function () {
    return response()->json(['status' => 'ok', 'timestamp' => now()]);
});

// Portfolio routes
Route::apiResource('portfolios', PortfolioController::class);

// Nested routes under portfolios
Route::prefix('portfolios/{portfolio}')->group(function () {
    Route::apiResource('sections', SectionController::class);
    Route::apiResource('projects', ProjectController::class);
    Route::apiResource('skills', SkillController::class);
});
