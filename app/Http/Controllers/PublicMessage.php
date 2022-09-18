<?php

namespace App\Http\Controllers;

use App\Http\Requests\Publicmessage as RequestsPublicmessage;
use App\Mail\MessageReceived;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Redirect;

class PublicMessage extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(RequestsPublicmessage $request)
    {
        $data= $request->validated();
        Mail::to(["dev.alnadjom@gmail.com","monsieurdanko@gmail.com"])->send(new MessageReceived($data));

            return Redirect::back()->with('message', "Your Message has been sent");
    }
}
