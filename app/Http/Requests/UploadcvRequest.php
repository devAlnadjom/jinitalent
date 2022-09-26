<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UploadcvRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
                'first_name' =>'required|string|max:40',
                'last_name' =>'required|string|max:100',
                'email' =>'required|email|max:100',
                'phone_number' =>'required|string|max:30',
                'country' =>'required|string|max:40',
                'city' =>'required|string|max:40',
                'address' =>'required|string|max:100',
                'summary' =>'string|max:250',
                'resume' =>'nullable|file|mimes:pdf|max:5000',
        ];
    }
}
