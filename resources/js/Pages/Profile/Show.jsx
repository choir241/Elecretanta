import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { Link, useForm, usePage } from '@inertiajs/react';

export default function Show() {
    const user = usePage().props.auth.user;

    const { data, setData, patch, errors, processing, recentlySuccessful } =
        useForm({
            name: user.name,
            email: user.email,
            likes: user.likes,
            interests: user.interests,
            hobbies: user.hobbies
        });

    return (
        <AuthenticatedLayout
            header={
                <h2 className="capitalize text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    {data.name}'s Profile
                </h2>
            }
        >
            <Head title="Profile" />
            <section className="flex flex-col items-start p-10">
            <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">Email: {data.email}</h2>
            <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">Likes: {data.likes}</h2>
            <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">Hobbies: {data.hobbies}</h2>
            <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">Interests: {data.interests}</h2>
            </section>



        </AuthenticatedLayout>
    );
}
