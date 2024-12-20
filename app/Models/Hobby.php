<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Notifications\Notifiable;

class Hobby extends Model
{
    /** @use HasFactory<\Database\Factories\HobbyFactory> */
    use HasFactory, Notifiable;
    protected $fillable = [
        'hobby_name',
        'user_id'
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
