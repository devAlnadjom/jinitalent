<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreJobRequest extends FormRequest
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
            'code' =>'required|string|max:10',
            'name' =>'required|string|max:40',
            'location' =>'required|string|max:100',
            'level' =>'nullable|numeric',
            'salary' =>'numeric|nullable',
            'description' =>'required|string|max:3000',
            'no_of_vacancy' =>'required|numeric',
            'status' =>'nullable|alpha_num',
            'public' =>'nullable|boolean',
            'style' =>'required|string|max:20',
            'organization_id' =>'nullable|numeric',
            'date_start_job' =>'nullable|date',
            'created_by' =>'nullable|numeric',
        ];
    }


    protected function prepareForValidation()
    {
        $this->merge([
            'created_by' => auth()->user()->id,
        ]);
    }
}
