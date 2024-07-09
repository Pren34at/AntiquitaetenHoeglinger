<?php

use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\AdminController;
use GuzzleHttp\Psr7\Request;
use Hamcrest\Number\OrderingComparison;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Middleware\admin;
Route::get('/Orders', function(){
    return Inertia::render('Orders');
})->middleware(['auth', 'verified']) -> name("Orders");

Route::post('/Orders/{order}', [OrderController::class, 'test']);

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/products', function(){
    return Inertia::render('products');
}) -> middleware(['auth', 'verified']) -> name("Products");

Route::get('/admin', function() {
    return Inertia::render('adminDashboard');
}) -> middleware(admin::class) -> name('Admin');

Route::get('/addAdmin', function() {
    return Inertia::render('addAdmin');
}) -> middleware(admin::class) -> name('addAdmin');

Route::post('/addAdm', [AdminController::class, 'store']) -> middleware(admin::class);

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
