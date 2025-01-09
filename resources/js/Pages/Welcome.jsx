import { Head, Link } from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Santa from "../../assets/Santa.jpg";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <div className="w-full h-screen">
            {auth.user ? (
                <GuestLayout>
                    <main>
                        <Head title="Secret Santa" />

                        <section className="flex flex-col items-center">
                            <h1 className="mb-2 font-[36px] w-full flex justify-start">
                                Secret Santa is here to help!
                            </h1>

                            <section className="flex flex-col items-start w-full mb-12">
                                <section className="mb-8 flex flex-col items-start w-full">
                                    <p className="font-medium text-[rgba(12,10,9,.50)]">
                                        Holiday shopping too chaotic?
                                    </p>
                                    <p className="font-medium text-[rgba(12,10,9,.50)]">
                                        Never know what to buy for others?
                                    </p>
                                    <p className="font-medium text-[rgba(12,10,9,.50)]">
                                        From having organized Santa groups
                                    </p>
                                    <p className="font-medium text-[rgba(12,10,9,.50)]">
                                        To generating gift ideas using your
                                        hobbies
                                    </p>
                                </section>

                                <Link
                                    href="/login"
                                    className="font-[24px] font-semibold text-center w-full bg-primary text-white px-4 py-2 rounded sm:w-auto"
                                >
                                    Exchange Gifts Here!
                                </Link>
                            </section>

                            <img src={Santa} className="rounded-[16px]" />
                        </section>
                    </main>
                </GuestLayout>
            ) : (
                <AuthenticatedLayout>
                    <main>
                        <Head title="Secret Santa" />

                        <section className="flex flex-col items-center">
                            <h1 className="mb-2 font-[36px] w-full flex justify-start">
                                Secret Santa is here to help!
                            </h1>

                            <section className="flex flex-col items-start w-full mb-12">
                                <section className="mb-8 flex flex-col items-start w-full">
                                    <p className="font-medium text-[rgba(12,10,9,.50)]">
                                        Holiday shopping too chaotic?
                                    </p>
                                    <p className="font-medium text-[rgba(12,10,9,.50)]">
                                        Never know what to buy for others?
                                    </p>
                                    <p className="font-medium text-[rgba(12,10,9,.50)]">
                                        From having organized Santa groups
                                    </p>
                                    <p className="font-medium text-[rgba(12,10,9,.50)]">
                                        To generating gift ideas using your
                                        hobbies
                                    </p>
                                </section>

                                <Link
                                    href="/login"
                                    className="font-[24px] font-semibold text-center w-full bg-primary text-white px-4 py-2 rounded"
                                >
                                    Exchange Gifts Here!
                                </Link>
                            </section>

                            <img src={Santa} className="rounded-[16px]" />
                        </section>
                    </main>
                </AuthenticatedLayout>
            )}
        </div>
    );
}
