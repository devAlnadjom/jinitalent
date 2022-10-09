<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreApplicationRequest extends FormRequest
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
            'position_id' =>'required|numeric|max:10',
            'candidate_id' =>'required|numeric|max:40',
            'source' =>'required|string|max:40',
            'ratings' =>'nullable|numeric',

            'status_text' =>'string|max:100',
            'created_by' =>'nullable|numeric',
        ];
    }


    protected function prepareForValidation()
    {
        $this->merge([
            'created_by' => auth()->user()->id,
            'status_text'=> "New"
        ]);
    }
}
