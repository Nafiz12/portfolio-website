<?php

namespace App\Providers;

// use Illuminate\Support\Facades\Gate;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Laravel\Passport\Passport;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The model to policy mappings for the application.
     *
     * @var array<class-string, class-string>
     */
    protected $policies = [
        // 'App\Models\Model' => 'App\Policies\ModelPolicy',
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        // You can REMOVE this if you're using Laravel 10+
        // Passport::routes(); ❌

        // Optional (if you want to define scopes)
        Passport::tokensCan([
            'admin' => 'Admin access',
        ]);

        Passport::setDefaultScope([
            'admin',
        ]);

        //
    }
}
