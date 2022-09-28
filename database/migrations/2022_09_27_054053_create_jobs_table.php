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
        Schema::create('positions', function (Blueprint $table) {
            $table->id();
            $table->string('code');
            $table->string('name');
            $table->string('location')->nullable();
            $table->string('level')->nullable();
            $table->integer('salary')->nullable();
            $table->integer('public')->default(1);
            $table->text('description')->nullable();
            $table->integer('no_of_vacancy')->default(1);
            $table->integer('status')->nullable();
            $table->string('style')->nullable(); // Remotly - Presently
            $table->string('cover_image')->nullable(); // corver_image
            $table->date('date_start_job')->nullable();
            $table->bigInteger('job_category_id')->nullable();
            $table->bigInteger('organization_id')->nullable();
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
