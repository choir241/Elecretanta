<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    
   
    public function up(): void
    {
        Schema::create('memberships', function (Blueprint $table) {
            // Composite key fields
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('group_id');

            // Additional fields
            $table->unsignedBigInteger('giftee_id'); // Points to another user
            $table->unsignedBigInteger('gift_id'); // Points to a gift
            $table->unsignedBigInteger('role_id');

            // Set the composite primary key
            $table->primary(['user_id', 'group_id']);

            // Foreign key constraints
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('group_id')->references('id')->on('exchange_groups')->onDelete('cascade');
            $table->foreign('giftee_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('gift_id')->references('id')->on('gifts')->onDelete('cascade');
            $table->foreign('role_id')->references('id')->on('roles')->onDelete('cascade');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('memberships');
    }
};
