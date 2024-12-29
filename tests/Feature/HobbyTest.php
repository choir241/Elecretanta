<?php

namespace Tests\Feature;

use App\Models\Hobby;
use App\Models\User;


    test('user can create a hobby', function () {
    $user = User::factory()->create();

    $response = $this
        ->actingAs($user)
        ->post(route('hobby.store'), [
            "hobby_name" => "Hobby 1",
        ]);

    $response->assertCreated();
});

test('user can edit a hobby', function () {
    $user = User::factory()->create();
    $hobby =  Hobby::factory()->recycle($user)->create();
    $response = $this->actingAs($user)->put(route('hobby.update', $hobby), [
        "hobby_name" => "Hobby 2",
    ]);
     $hobby = $hobby->fresh();
    // want to assert that $hobby now has hobby_name === "Hobby 2"
    expect($hobby->hobby_name)->toBe("Hobby 2");
});

test('user can delete a hobby', function () {
   $user = User::factory()->create();
   $hobby =  Hobby::factory()->recycle($user)->create();
   $response = $this->actingAs($user)->delete(route('hobby.delete', $hobby));
   $hobby = $hobby->fresh();
   expect($hobby)->toBeNull();
});
