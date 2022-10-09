<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class jobs extends Model
{
    use HasFactory;

    protected $table = 'positions';

    protected $guarded =[];

    public function organization():BelongsTo
    {
        return $this->belongsTo(organization::class);
    }

    public function applications(): HasMany
    {
        return $this->hasMany(Application::class,'position_id');
    }

    public function applicants(): BelongsToMany
    {
        return $this->belongsToMany(Candidate::class,'applications', 'position_id', 'candidate_id');
                   // ->wherePivotIn('priority', [1, 2]);
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
