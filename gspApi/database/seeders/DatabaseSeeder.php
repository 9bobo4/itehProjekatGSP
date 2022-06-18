<?php

namespace Database\Seeders;

use App\Models\Destinacija;
use App\Models\Dolazak;
use App\Models\Linija;
use App\Models\Stanica;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        User::truncate();
        Dolazak::truncate();
        Stanica::truncate();
        Linija::truncate();
        Destinacija::truncate();


        User::factory(10)->create();
        $ds = new DestinacijaSeeder();
        $ds->run();

        $ls = new LinijaSeeder();
        $ls->run();


        $ss = new StanicaSeeder();
        $ss->run();

        $dos=new DolazakSeeder();
        $dos->run();

    }
}
