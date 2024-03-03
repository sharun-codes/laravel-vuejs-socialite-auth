# Laravel - Vue.js Basic & Socialite Authentications

A basic web application in Laravel and Vue.js, with a focus on authentication and Single Sign On (SSO) functionality with Socialite.

**Note: _This app uses Laravel as API backend to Vuejs single-page application. The Vuejs frontend code is included with the Laravel setup in the "vue-auth" directory for ease of managing the repo._**

### Frameworks

- Laravel 10
- Vue.js 3
- Tailwindcss 

### Tools
#### Laravel
- Breeze
- Sanctum
- Socialite

#### Vue
- Vue-router
- Pinia
- Axios
- Flowbite

### Prerequisites

- PHP 8.1 or above
- Composer
- Node
- NPM 

### Dev Setup Instructions

Let's start the project setup by cloning the project repo from git. 

Navigate to project folder.

Run ``` composer install``` to install PHP dependencies.

```
git clone https://github.com/sharunsankar/laravel-vuejs-socialite-auth.git

cd laravel-vuejs-socialite-auth

composer install

```

Duplicate the `.env.example` file and rename it to `.env`.

Generate an application key.
```
php artisan key:generate

```

Set database connection details in .env file.
Run database migrations to create tables.
Seed the database. Now we have a test user with the email `test@example.com` and password `password`. You can login to the app with these credentials after the setup.

```
php artisan migrate
php artisan db:seed
```
Since we are using the `Laravel Sanctum` authentication mechanism for our SPA, we need to ensure that the below configuration settings are present in the `.env` file.

``` 
APP_URL=http://localhost:8000
FRONTEND_URL=http://localhost:3000
SANCTUM_STATEFUL_DOMAINS=localhost:3000
SESSION_DOMAIN=localhost
```

This app uses `mailtrap` for email testing as part of the reset password functionality.

Create a free Mailtrap account if you don’t have one already. You can sign up at https://mailtrap.io/ and create a new inbox. Once you have an inbox, Mailtrap provides SMTP credentials that you’ll need to use in our Laravel application.

```
MAIL_MAILER=smtp
MAIL_HOST=sandbox.smtp.mailtrap.io
MAIL_PORT=2525
MAIL_USERNAME=************
MAIL_PASSWORD=************
```
This app provides SSO authentication through `Github` and `Google` OAuth providers using Laravel `Socialite`. 

Before using Socialite, you need to add credentials for `Github` and `Google` to your Laravel `.env` file. These credentials are retrieved by creating a "developer application" within the dashboard of the providers.

```
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
```
Our API backend environment is now good to go.
Start the Laravel development server.
```
php artisan serve

```

Navigate to Vuejs spa codebase in "vue-auth".
Run `npm install` to install dependencies specified inside package.json

```
cd vue-auth
npm install
```

Run `npm run dev` to start Vuejs development server.

```
npm run dev
```