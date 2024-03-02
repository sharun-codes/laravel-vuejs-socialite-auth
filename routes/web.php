<?php

use App\Http\Controllers\Auth\SocialiteController;
use Illuminate\Support\Facades\Route;

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

Route::get('/', function () {
    return ['Laravel' => app()->version()];
});
 
Route::get('/auth/{provider}/redirect', [SocialiteController::class, 'redirect']);
 
Route::get('/auth/{provider}/callback', [SocialiteController::class, 'callback']);

require __DIR__.'/auth.php';
