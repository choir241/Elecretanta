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
        Schema::create('exchange_groups', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->decimal('budget', 5,2)->default(0);
            $table->timestamp('exchangeDate');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('exchange_groups');
        Schema::dropIfExists('group');
        Schema::dropIfExists('groups');
    }
};
