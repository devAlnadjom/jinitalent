@component('mail::message')
# Hi Admin

You have receive message from: {{ $name}}

Subjet:  {{ $subject}}

Message: {{ $message }}


Thanks,<br>
{{ config('app.name') }}
@endcomponent
