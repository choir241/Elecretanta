import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import DeleteUserForm from "./Partials/DeleteUserForm";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm";
import UpdateProfileInformationForm from "./Partials/UpdateProfileInformationForm";

export default function Edit({ mustVerifyEmail, status }) {
    return (
        <AuthenticatedLayout
            header={<h1 className="md:text-5xl">Your Settings</h1>}
        >
            <Head title="Profile" />

            <div className="py-12 max-w-[45rem]">
                <UpdateProfileInformationForm
                    mustVerifyEmail={mustVerifyEmail}
                    status={status}
                    className="pb-4 md:pb-12"
                />

                <div className="pt-12 pb-4 md:pb-12">
                    <UpdatePasswordForm />
                </div>

                <DeleteUserForm className="py-12" />
            </div>
        </AuthenticatedLayout>
    );
}