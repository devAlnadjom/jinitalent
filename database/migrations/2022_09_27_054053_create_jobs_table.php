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
        Schema::create('jobs', function (Blueprint $table) {
            $table->id();
            $table->string('code');
            $table->text('description')->nullable();
            $table->integer('no_of_vacancy')->default(1);
            $table->integer('status')->nullable();
            $table->string('style')->nullable(); // Remotly - Presently
            $table->date('date_start_job')->nullable();
            $table->bigInteger('job_category_id')->nullable();
            $table->bigInteger('orgarnization_id')->nullable();
            $table->bigInteger('job_position_id')->nullable();
            $table->bigInteger('process_id')->nullable();
            $table->bigInteger('created_by')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('jobs');
    }
};
