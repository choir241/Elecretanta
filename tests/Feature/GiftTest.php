<?php

namespace Tests\Feature;

use App\Models\GiftExchange;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class GiftExchangeControllerTest extends TestCase
{
    public function TestGiftExchange()
    {
        $gift = GiftExchange::factory()->create();
        $user = User::factory()->create();
        $response = $this->actingAs($user)->post(route('giftexchange'));

        $response->assertOk();
    }
}
