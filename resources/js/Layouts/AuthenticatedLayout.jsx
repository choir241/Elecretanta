import ApplicationLogo from "@/Components/ApplicationLogo";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link } from "@inertiajs/react";
import { useState } from "react";
import SecondaryButton from "@/Components/SecondaryButton";

export default function AuthenticatedLayout({ header, children }) {

    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <div className="bg-[#F2E8CF] w-full min-h-screen flex flex-col items-center px-4">
            <nav className="w-full bg-[rgb(255,255,255,.65)] rounded-full border-b border-gray-100 dark:border-gray-700 my-8">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 justify-between items-center relative">
                        {/* Logo on left */}
                        <div className="flex">
                            <div className="flex shrink-0 items-center">
                                <Link href="/">
                                    <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800 dark:text-gray-200" />
                                </Link>
                            </div>
                        </div>

                        {/* Centered Title */}
                        <div className="absolute left-1/2 transform -translate-x-1/2">
                            <h1 className="text-[2rem] lg:text-[3rem] font-baskerville tracking-[-.25px] whitespace-nowrap">
                                Secret Santa
                            </h1>
                        </div>

                        {/* Navigation on right */}
                        <div className="hidden sm:flex sm:items-center">
                            <div className="flex items-center gap-2">
                                <NavLink
                                    className="font-extrabold font-baskerville"
                                    href="/"
                                >
                                    Home
                                </NavLink>
                                <NavLink
                                    className="font-extrabold font-baskerville"
                                    href=""
                                    method="post"
                                    as="button"
                                >
                                    About
                                </NavLink>
                                <SecondaryButton
                                    className="text-xl font-bold font-baskerville"
                                    method="post"
                                    href={route("logout")}
                                    as="button"
                                >
                                    Log Out
                                </SecondaryButton>
                            </div>
                        </div>
                        {/* Hamburger menu */}
                        <div className="-me-2 flex items-center sm:hidden">
                            <button
                                onClick={() =>
                                    setShowingNavigationDropdown(
                                        (previousState) => !previousState
                                    )
                                }
                                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500 focus:outline-none dark:text-gray-500 dark:hover:bg-gray-900 dark:hover:text-gray-400 dark:focus:bg-gray-900 dark:focus:text-gray-400"
                            >
                                <svg
                                    className="h-6 w-6"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        className={
                                            !showingNavigationDropdown
                                                ? "inline-flex"
                                                : "hidden"
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={
                                            showingNavigationDropdown
                                                ? "inline-flex"
                                                : "hidden"
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div
                    className={
                        (showingNavigationDropdown ? "block" : "hidden") +
                        " sm:hidden"
                    }
                >
                    <div className="space-y-1 pb-3 pt-2">
                        <ResponsiveNavLink
                            href={route("dashboard")}
                            active={route().current("dashboard")}
                        >
                            Dashboard
                        </ResponsiveNavLink>
                    </div>

                    <div className="border-t border-gray-200 pb-1 pt-4 dark:border-gray-600">
                        <div className="mt-3 space-y-1">
                            <ResponsiveNavLink href="/">Home</ResponsiveNavLink>
                            <ResponsiveNavLink
                                href=""
                                as="button"
                            >
                                About
                            </ResponsiveNavLink>
                            <SecondaryButton
                                method="post"
                                href={route("logout")}
                                as="button"
                            >
                                Log Out
                            </SecondaryButton>
                        </div>
                    </div>
                </div>
            </nav>

            {header && (
                <header className="bg-white shadow dark:bg-gray-800">
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                        {header}
                    </div>
                </header>
            )}

            <main className="mx-auto w-[90%] max-w-[87.5rem] pt-14 pb-20 flex flex-1 flex-col">
                {children}
            </main>
        </div>
    );
}
