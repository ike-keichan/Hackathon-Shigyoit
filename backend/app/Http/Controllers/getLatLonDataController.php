<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;

class getLatLonDataController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param integer lat 緯度
     * @param integer lon 経度
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        // API キー
        $api_key = "ciCs66mDVE6OUlonzEs6R95ouMHi5sV7jiAPV0Hf";
        
        // ベースURL
        $base_url = 'openapi.test.api.jp';

        // インスタンス作成
        $client = new Client([
            'base_url' => $base_url,
        ]);

        $options = [
            // デバック（デバックしたい時は記述）
            'debug' => true,

            // 
            // パラメーター（Header）
            'headers' => [
                'api-key' => $api_key,
            ],

            // パラメーター（Query）
            'query' => [
                'lat' => 35,
                'lon' => 135,

                // 'lat' => $request->lat,
                // 'lon' => $request->lon,
            ],

            // パラメーター（Body）
            // 'json' => [
            //     'password' => 'password',
            // ],
        ];

        // パス
        $path = '/api/v1/ss1wx';

        // リクエストするURL（openapi.test.api.jp/v2/test）
        $send_url = $base_url . $path;

        $response = $client->request('GET', $send_url, $options);

        // JSONデータとして取得
        $json = $response->getBody();

        // JSONデータを連想配列にする
        $api_token = json_decode($json, true);

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
