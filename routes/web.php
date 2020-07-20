<?php

use Illuminate\Support\Facades\Route;
use App\Gallery;
use App\Http\Controllers\GalleryController;

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
    return view('welcome');
});
Route::group(['prefix' => 'ajax'], function()
{
    Route::get('/all', function(){
        $data = array();
        $gallery = Gallery::all();
        foreach( $gallery as $val)
        {
            $datas = $val;
            $datas['image'] = GalleryController::getGalleryDirectory($val['name']);
            array_push($data, $datas);
            //($data, );
        }
        return $data;
    });
    Route::get('/{galleryid}', 'GalleryController@GetGalleryInfo');
    Route::get('/{galleryid}/{page}', 'GalleryController@getImage');
});
Route::get('/g/{galleryid}', 'GalleryViewController@viewGalleryData');
Route::get('/g/{galleryid}/view', 'GalleryViewController@viewImagePage');
Route::get('/nice', function()
{
    return storage_path('image/file.txt');
});
