<?php

namespace Database\Factories;

use App\Models\GiftExchange;

class GiftExchangeFactory
{
    public function definition(): array{
        return [
            'gifts' => fake()->name,
            'user_id' => User::factory(),
        ];
    }
}