<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use App\Models\User;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run() : void
    {
        $this->call([
            AdminUserSeeder::class,
        ]);
        // Create admin role if it doesn't exist
        $role = Role::firstOrCreate(['name' => 'admin']);

        // Create admin user if not exists
        $user = User::firstOrCreate(
            ['email' => 'admin@example.com'],
            [
                'name' => 'Admin User',
                'password' => bcrypt('password'), // use a strong password in production
            ]
        );

        // Assign admin role
        $user->assignRole($role);

    }
}
