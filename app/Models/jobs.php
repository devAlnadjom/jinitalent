<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class jobs extends Model
{
    use HasFactory;

    protected $table = 'positions';
    protected $guarded=[];

    public function organization():BelongsTo
    {
        return $this->belongsTo(Organization::class);
    }

    public function scopeFilter($query, array $filters)
    {
        $query->when($filters['search'] ?? null, function ($query, $search) {
            $query->where('name', 'like', '%'.$search.'%')
                    ->orWhere('description', 'like', '%'.$search.'%');
        });/*->when($filters['trashed'] ?? null, function ($query, $trashed) {
            $query->where('status', '=', $trashed);
            /*if ($trashed === 'with') {
                $query->withTrashed();
            } elseif ($trashed === 'only') {
                $query->onlyTrashed();
            }*
        });*/
    }
}
