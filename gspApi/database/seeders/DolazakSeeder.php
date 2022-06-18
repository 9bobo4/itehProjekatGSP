<?php

namespace Database\Seeders;

use App\Models\Dolazak;
use App\Models\Stanica;
use Illuminate\Database\Seeder;

class DolazakSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
       
        Dolazak::factory(3)->create();
        
    }
}
