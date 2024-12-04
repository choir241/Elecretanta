import { Head } from "@inertiajs/react";
import { cn } from "../../lib/utils";

export default function UserDashboard() {
    return (
        <main>
            {/* <Head title="Dashboard" />
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            You're logged in!
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <h1
                        className={cn(
                            "p-6 text-center text-[64px] font-heading font-bold"
                        )}
                    >
                        Welcome, (insert username)
                    </h1>
                </div>
            </div>
        </main>
    );
}
