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
        Schema::table('education', function (Blueprint $table) {
            // $table->renameColumn('date_sart', 'date_start');
            $table->date('date_start')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('education', function (Blueprint $table) {
            //$table->renameColumn('date_start', 'date_sart');
            $table->dropColumn('date_start');
        });
    }
};
