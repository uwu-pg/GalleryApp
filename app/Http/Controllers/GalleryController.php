<?php

namespace App\Http\Controllers;

use App\Gallery;

class GalleryController extends Controller
{
    public static function GetGalleryInfo($galleryid)
    {
        $gallery = Gallery::find($galleryid);
        $listfile = self::getGalleryDirectory($gallery->name);
        $data = [
            'id' => $gallery->id,
            'name' => $gallery->name,
            'image' => array_diff($listfile, array('infotxt', 'tastxt')),//clean info.txt and tags.txt
            'uploaded' => $gallery->created_at,

        ];
        return $data;
    }
    public static function getGalleryDirectory($foldername)
    {
        $data = array_values(array_diff(scandir(storage_path("image/$foldername")),array('.','..')));
        return preg_replace("/[\.jpg]/", "", $data );
    }
    public function getImage($galleryid,$page)
    {
        $folder = Gallery::find($galleryid);
        $res = file_get_contents(storage_path("image/$folder->name/$page.jpg"));
        return response($res)->header('Content-Type', 'image/jpg');
    }
    public static function getStorage()
    {
        return array_values(array_diff(scandir(storage_path('image')),array('.','..')));
    }
    public static function insertData()
    {
        foreach( self::getStorage() as $val)
        {
            $obj = new Gallery();
            $obj->name = $val;
            $obj->tags = 'bruh';
            $obj->save();
        }
    }
}
