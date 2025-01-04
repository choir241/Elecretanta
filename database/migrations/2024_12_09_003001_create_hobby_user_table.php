<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('hobby_user', function (Blueprint $table) {
            $table->unsignedBigInteger('user_id');
            $table->string('hobby_name');

            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('hobby_name')->references('name')->on('hobbies')->onDelete('cascade');
            $table->primary(['user_id', 'hobby_name']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('hobby_user');
    }
};
