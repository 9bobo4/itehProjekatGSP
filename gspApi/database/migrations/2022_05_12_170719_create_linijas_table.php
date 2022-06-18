<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLinijasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('linijas', function (Blueprint $table) {
            $table->id();
            $table->string('brojLinije');
            $table->integer('vreme');
            $table->foreignId('pocetnaDestinacija');
            $table->foreignId('zavrsnaDestinacija');

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
        Schema::dropIfExists('linijas');
    }
}
