<?php

namespace App\Traits;

use Illuminate\Database\Eloquent\Builder;

trait BelongsToCompany
{
    protected static function bootBelongsToCompany()
    {
        $user = request()->user();

        if (! $user || $user->can('view_all_companies')) {
            return;
        }

        static::addGlobalScope('company', function (Builder $builder) use ($user) {
            if ($user->company_id) {
                $builder->where('company_id', $user->company_id);
            }
        });

        static::creating(function ($model) use ($user) {
            if ($user->company_id) {
                $model->company_id = $user->company_id;
            }
        });
    }
}
