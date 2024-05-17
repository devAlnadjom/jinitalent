<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('education', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('description')->nullable();
            $table->date('date_sart')->nullable();
            $table->date('date_end')->nullable();
            $table->string('school')->nullable();
            $table->string('address')->nullable();
            $table->string('country')->nullable();
            $table->string('note')->nullable();
            $table->timestamps();

            $table->unsignedBigInteger('candidate_id')->nullable();
            $table->index('candidate_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('education');
    }
};
