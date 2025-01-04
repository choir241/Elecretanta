<?php 

namespace App\Models;
use Illuminate\Database\Eloquent\Relations\Pivot;

class Membership extends Pivot
{
    protected $table = "memberships";

    protected $primaryKey = ['user_id', 'group_id'];
    public $incrementing = false;
    public $timestamps = false;

    protected $fillable = ['user_id', 'group_id', 'giftee_id', 'gift_id'];

    protected function casts():array 
    {
        return [
            'user_id' => $this->user_id,
             'group_id' => $this->group_id, 
             'giftee_id' => $this->giftee_id, 
             'gift_id' => $this->gift_id,
        ];
    }
}