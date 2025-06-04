<?php

namespace App\Models;

use App\Traits\BelongsToCompany;
use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    use BelongsToCompany;

    protected $guarded = [];
}
