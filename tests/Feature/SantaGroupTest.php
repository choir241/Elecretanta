<?php

namespace Tests\Feature;

use App\Models\SantaGroup;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class SantaGroupControllerTest extends TestCase
{
    public function TestSantaGroup()
    {
        $groups = SantaGroup::factory()->create();

        $response = $this->actingAs($user)->post(route('setBudget'));

        $response->assertOk();
    }
}