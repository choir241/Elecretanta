<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class UserInfoControllerTest extends TestCase
{
    public function TestUserInfo()
    {
        $user = User::factory()->create();

        $response = $this->actingAs($user)->get(route('user.request'));

        $response->assertOk();
        $response->assertJson([
            'id' => $user->id,
            'name' => $user->name,
            'email' => $user->email,
        ]);
    }
}
