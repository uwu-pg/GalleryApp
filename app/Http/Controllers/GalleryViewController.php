<?php

namespace App\Http\Controllers;


use Symfony\Component\HttpFoundation\Request;
use App\Http\Controllers\GalleryController;


class GalleryViewController extends Controller
{
    public function viewGalleryData($galleryid)
    {
        $data = GalleryController::GetGalleryInfo($galleryid);
        return view('gallerydata')->with('data', json_encode($data));
    }

    public function viewImagePage($galleryid, Request $request)
    {
        $data = GalleryController::GetGalleryInfo($galleryid);
        //Programmer Count from zero
        $data['currentpage'] = isset($request->page) ? $request->page : 0;
        return view('galleryview')->with('data', json_encode($data));
    }
}
