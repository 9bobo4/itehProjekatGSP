<?php

namespace Database\Seeders;

use App\Models\Stanica;
use Illuminate\Database\Seeder;

class StanicaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $s1= new Stanica();
        $s1->nazivStanice= 'OS Gavrilo Princip';
        $s1->save();

        $s2= new Stanica();
        $s2->nazivStanice= 'OS Petar Kocic';
        $s2->save();

        $s3= new Stanica();
        $s3->nazivStanice= 'Prilaz';
        $s3->save();

        $s4= new Stanica();
        $s4->nazivStanice= 'Bosanska';
        $s4->save();

        $s5= new Stanica();
        $s5->nazivStanice= 'Zlatiborska';
        $s5->save();

        $s6= new Stanica();
        $s6->nazivStanice= 'Posta';
        $s6->save();
    }
}
