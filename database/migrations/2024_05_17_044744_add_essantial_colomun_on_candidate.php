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
        Schema::table('candidates', function (Blueprint $table) {

                $table->text('biography')->nullable();
                $table->string('gender', 10)->nullable(); // Masculin
                $table->string('title')->nullable();  // Ingemieur Tech

                $table->unsignedBigInteger('user_id')->nullable();

                $table->index('user_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('candidates', function (Blueprint $table) {
            $table->dropColumn('biography');
            $table->dropColumn('gender');
            $table->dropColumn('biography');
            $table->dropColumn('user_id');
        });
    }
};
