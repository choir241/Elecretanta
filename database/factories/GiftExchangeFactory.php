<?php

namespace Database\Factories;

use App\Models\GiftExchange;
use App\Models\User;

class GiftExchangeFactory
{
    public function definition(): array{
        return [
            'gifts' => fake()->name,
            'user_id' => User::factory(),
        ];
    }
}