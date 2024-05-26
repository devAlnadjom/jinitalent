<?php

use App\Http\Controllers\ApplicationController;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\PublicMessage;
use Spatie\Honeypot\ProtectAgainstSpam;
use App\Http\Controllers\CandidateController;
use App\Http\Controllers\CandidateRegisterController;
use App\Http\Controllers\JobsController;
use App\Http\Controllers\OrganizationController;
use App\Http\Controllers\PortalController;
use App\Http\Controllers\UserController;

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

//Portals Routes
Route::get('/portal/cv/index', [PortalController::class, 'cv_index'])->name('portal.cv.index');
Route::get('/portal/cv/experience', [PortalController::class, 'cv_experience'])->name('portal.cv.experience');
Route::get('/portal/cv/education', [PortalController::class, 'cv_education'])->name('portal.cv.education');

Route::get('/portal/jobs/{job}/info', [PortalController::class, 'show'])->name('portal.show');
Route::get('/portal/jobs', [PortalController::class, 'index'])->name('portal.index');

Route::post('/globals/sendmessage', PublicMessage::class)->middleware(ProtectAgainstSpam::class)->name('public.message');
Route::post('/globals/uploadcv', [CandidateRegisterController::class, 'UploadCv'])->middleware(ProtectAgainstSpam::class)->name('public.storecv');

Route::get('/globals/uploadcv', [CandidateRegisterController::class, 'index'])->name('public.uploadcv');
Route::get('/globals/confirm/{id}/success/{shakey}', [CandidateRegisterController::class, 'confirmCvSaved'])->name('public.confirmcv');

Route::get('/welcome', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
        })->name('dashboard');

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified','only.admin'
])->group(function () {


    Route::resource('applications', ApplicationController::class);
    Route::resource('candidates', CandidateController::class);
    Route::resource('organizations', OrganizationController::class);


    Route::get('/jobs/{job}/applications', [JobsController::class, 'showApplications'])->name('jobs.applicationlist');
    Route::resource('jobs', JobsController::class);
    Route::resource('users', UserController::class)->only("index");

});
