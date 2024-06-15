<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreExperienceRequest extends FormRequest
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
            'title' =>'required|string|max:100',
            'description' =>'required|string|max:4000',
            'date_start' =>'nullable|date',
            'date_end' =>'nullable|date',
            'company' =>'required|string|max:100',
            'address' =>'required|string|max:100',
            'country' =>'required|string|max:100',
            // 'note' =>'nullable|string|max:100',
            //'candidate_id' =>'nullable|numeric',
        ];
    }


    protected function prepareForValidation()
    {
        // $this->merge([
        //     'created_by' => auth()->user()->id,
        // ]);
    }
}
