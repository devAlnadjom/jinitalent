<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class OnlyAdmin
{

    public function handle(Request $request, Closure $next)
    {
        if (auth()->id() > 2) {
            abort('403', "Forbiden");
            //return redirect('home');
        }
        return $next($request);
    }
}
