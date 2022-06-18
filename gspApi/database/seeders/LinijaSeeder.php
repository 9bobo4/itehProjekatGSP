<?php

namespace Database\Seeders;

use App\Models\Linija;
use Illuminate\Database\Seeder;

class LinijaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Linija::factory(10)->create();
    }
}
