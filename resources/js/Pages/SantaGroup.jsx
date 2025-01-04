import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from "@inertiajs/react";
export default function SantaGroup({}) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Santa Group
                </h2>
            }
        >
            <Head title="Santa Group" />
        </AuthenticatedLayout>
    );
}
