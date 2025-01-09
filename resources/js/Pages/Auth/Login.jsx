import Checkbox from "@/Components/Checkbox";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("login"), {
            onFinish: () => reset("password"),
        });
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            {status && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    {status}
                </div>
            )}

            <div className="w-11/12 md:w-1/2 mx-auto">
                <h1 className="font-baskerville text-4xl mb-8">Login</h1>
            </div>

            <form onSubmit={submit}>
                <div className="mt-2 space-y-2">
                    <InputLabel
                        htmlFor="email"
                        value="Your Email"
                        className="text-center text-4xl block w-full font-baskerville"
                    />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-11/12 md:w-1/2 mx-auto bg-[#F2E8CF] text-center font-bold"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData("email", e.target.value)}
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4 space-y-2">
                    <InputLabel
                        htmlFor="password"
                        value="Your Password"
                        className="text-4xl text-center block w-full font-baskerville"
                    />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-11/12 md:w-1/2 mx-auto bg-[#F2E8CF] text-center font-bold"
                        autoComplete="current-password"
                        onChange={(e) => setData("password", e.target.value)}
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="w-11/12 md:w-1/2 mx-auto mt-20">
                    <div className="w-full md:w-full mx-auto">
                        <div className="flex justify-center md:justify-start">
                            <PrimaryButton
                                className="font-baskerville normal-case text-xl tracking-normal w-full md:w-1/4 flex justify-center items-center"
                                disabled={processing}
                            >
                                Login
                            </PrimaryButton>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center w-full mt-6">
                    {canResetPassword && (
                        <Link
                            href={route("register")}
                            className="text-xl md:text-2xl text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Don't have an account?{" "}
                            <span className="underline">Sign up here.</span>
                        </Link>
                    )}
                </div>
            </form>
        </GuestLayout>
    );
}