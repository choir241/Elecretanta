<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Hobby>
 */
class HobbyFactory extends Factory
{
    public function definition() : array{
        return [
            'hobby_name' => fake()->name,
            'user_id' => User::factory()
        ];
    }

}
