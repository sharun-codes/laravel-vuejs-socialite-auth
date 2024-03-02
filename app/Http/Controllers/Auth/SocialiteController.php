<?php

namespace App\Http\Controllers\auth;
use App\Models\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Laravel\Socialite\Facades\Socialite;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;

class SocialiteController extends Controller
{
    public function redirect($provider)
    {
        return Socialite::driver($provider)->redirect();
    }

    public function callback($provider) 
    {
        $socialUser = Socialite::driver($provider)->user();
        
        $existingUser = User::where('email', $socialUser->email)->first();

        if($existingUser) {
            $existingUser->update([
                'provider_id' => $socialUser->id,
                'provider' => $provider
            ]);
            Auth::login($existingUser);
            
        } else {
            $newUser = User::create([
                'name' => $socialUser->name,
                'email' => $socialUser->email,
                'password' => bcrypt(Str::random(16)),
                'provider' => $provider,
                'provider_id' => $socialUser->id,
                'provider_token' => $socialUser->token,
            ]);
            Auth::login($newUser);
        }

        return redirect()->away(env('FRONTEND_URL'));
    }
}
