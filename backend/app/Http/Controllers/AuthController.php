<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class AuthController extends Controller
{
    public function login( Request $request)
    {
        //Log::info('Login route hit'); // Debug log
        $credentials= $request->validate([
            'email'=>'required|email',
            'password'=> 'required'
        ]);

         if(!Auth::attempt($credentials)){
             return response()->json(["message"=>'Invalid credentials'], status: 401);
        }
        $user = Auth::user();


        $token = $user->createToken('admin-token')->accessToken;

        return response()->json([
            'token' => $token,
            'user' => $user,
            'roles' => $user->getRoleNames() // returns array of roles
        ]);
    }

    public function me(Request $request)
    {
        return response()->json($request->user());
    }

    //
}
