# Elecretanta

-   [Setup Application](#setup-application)
-   [Add page to frontend UI](#add-page-to-frontend-ui)

# Setup application

## Install PHP, Composer, and Laravel

If you don't already have PHP, Composer, and Laravel, use one of the following commands:

## MacOS

```sh
/bin/bash -c "$(curl -fsSL https://php.new/install/mac/8.3)"
```

## Windows

```sh
# Run as administrator...
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://php.new/install/windows/8.3'))
```

## Linux

```sh
/bin/bash -c "$(curl -fsSL https://php.new/install/linux/8.3)"
```

## Install PHP packages and npm dependencies

1.

```sh
composer i
```

2.

```sh
npm i
```

3. ## Update your .env
    Copy the values from .env.example and update the appropriate values

```sh
DB_CONNECTION=
DB_HOST=
DB_PORT=
DB_DATABASE=
DB_USERNAME=
DB_PASSWORD=
```

## If your OS is Windows specific

C: > Users > yourUsernameHere > .config -> herd-lite -> bin -> php.ini, set the value for `variables_order` to `GPCS`

## Run the following commands:

4. In another terminal:

```sh
npm run dev
```

5.

```sh
php artisan migrate
```

## Run the app locally

6.

```sh
php artisan serve
```

# Add page to frontend UI

In `resources/js/Pages`, create your `jsx` page. Make sure to contain it in the `Authenticated` or `Guest` layout component.

```
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Show() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    User
                </h2>
            }
        >
            <Head title="Show" />
        </AuthenticatedLayout>
    );
}
```

In `routes/web.php`, add the endpoint for your route along with the other logic. If your file is located in a sub-folder inside of `resources/js/Pages`, make sure to include that sub-folder.

```
Route::get('/profile', function () {
    return Inertia::render('Profile/Show');
})->middleware(['auth', 'verified'])->name('profile');
```

To add the link to the Layout, you'll need to have the correct link for the route.

```
<Dropdown.Link
  href={route('profile.show')}
>
  Profile
</Dropdown.Link>
```

But in order for the Laravel app see your added route, you'll need to update your `web.php` file.

```
Route::get('/profile', function () {
    return Inertia::render('Profile/Show');
})->middleware(['auth', 'verified'])->name('profile.show');
```

To see the changes in your frontend, you need to update the build.

```
npm run build
```
