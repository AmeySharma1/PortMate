<?php

use Illuminate\Support\Facades\Route;

// Public routes
Route::get('/', function () {
    return view('welcome');
});

// Portfolio builder routes
Route::get('/portfolio', function () {
    return view('portfolio.index');
})->name('portfolio');

// API routes are defined in routes/api.php
