<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\PublicMessage;
use Spatie\Honeypot\ProtectAgainstSpam;
use App\Http\Controllers\CandidateController;
use App\Http\Controllers\CandidateRegisterController;
use App\Http\Controllers\JobsController;
use App\Http\Controllers\OrganizationController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::view('/', 'welcome');
Route::post('/globals/sendmessage', PublicMessage::class)->middleware(ProtectAgainstSpam::class)->name('public.message');
Route::post('/globals/uploadcv', [CandidateRegisterController::class, 'UploadCv'])->middleware(ProtectAgainstSpam::class)->name('public.storecv');
Route::get('/globals/uploadcv', [CandidateRegisterController::class, 'index'])->name('public.uploadcv');

Route::get('/welcome', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    Route::resource('candidates', CandidateController::class);
    Route::resource('organizations', OrganizationController::class);
    Route::resource('jobs', JobsController::class);
});
