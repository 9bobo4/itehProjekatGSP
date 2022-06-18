<?php

namespace Database\Seeders;

use App\Models\Destinacija;
use Illuminate\Database\Seeder;

class DestinacijaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        
        $d1= new Destinacija();
        $d1->naziv="Zeleni venac";
        $d1->save();

        $d2= new Destinacija();
        $d2->naziv="Zemun stari grad";
        $d2->save();

        $d3= new Destinacija();
        $d3->naziv="Zemun Novi grad";
        $d3->save();

        $d4= new Destinacija();
        $d4->naziv="Altina";
        $d4->save();

        $d5= new Destinacija();
        $d5->naziv="Zemun polje";
        $d5->save();

        $d6= new Destinacija();
        $d6->naziv="Beograd na vodi";
        $d6->save();
        
    }
}
