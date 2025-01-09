import { Link } from "@inertiajs/react";
import { useState } from "react";
import { usePage } from "@inertiajs/react";

export default function NavBar() {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    const user = usePage().props.auth.user;

    return (
        <nav className="bg-muted rounded flex justify-between items-center p-4 relative mb-12">
            <p className="text-5xl">
                <Link href="/">🎄</Link>
            </p>
            <h1>Secret Santa</h1>

            {/* Desktop Navigation */}
            <div className="hidden sm:flex gap-4 items-center">
                <Link href="/">Home</Link>

                {user ? (
                    <>
                        <Link href="/dashboard">Dashboard</Link>

                        <Link
                            className="bg-secondary text-white px-4 py-2 rounded"
                            method="post"
                            href={route("logout")}
                            as="button"
                        >
                            Log Out
                        </Link>
                    </>
                ) : (
                    <Link
                        href="/login"
                        className="bg-secondary text-white px-4 py-2 rounded"
                    >
                        Login
                    </Link>
                )}
            </div>

            {/* Mobile Navigation Button */}
            <div className="sm:hidden">
                <button
                    onClick={() =>
                        setShowingNavigationDropdown(
                            (previousState) => !previousState
                        )
                    }
                    className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:bg-muted-foreground/10 transition duration-150 ease-in-out"
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

            {/* Mobile Navigation Menu */}
            <div
                className={`fixed top-0 right-0 bottom-0 w-64 bg-muted shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
                    showingNavigationDropdown
                        ? "translate-x-0"
                        : "translate-x-full"
                } sm:hidden`}
            >
                <div className="px-4 py-6">
                    {/* Close Button */}
                    <button
                        onClick={() => setShowingNavigationDropdown(false)}
                        className="absolute top-4 right-4 p-2 rounded hover:bg-muted-foreground/10 transition-colors"
                        aria-label="Close menu"
                    >
                        <svg
                            className="h-6 w-6"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>

                    {/* Menu Items */}
                    <div className="space-y-4 mt-12 grid">
                        <Link
                            href="/"
                            className="block py-4 text-foreground hover:bg-muted-foreground/10 rounded-md"
                        >
                            Home
                        </Link>

                        {user ? (
                            <>
                                <Link href="/dashboard" className="py-4">
                                    Dashboard
                                </Link>

                                <Link
                                    className="bg-secondary text-white px-4 py-2 rounded"
                                    method="post"
                                    href={route("logout")}
                                    as="button"
                                >
                                    Log Out
                                </Link>
                            </>
                        ) : (
                            <Link
                                href="/login"
                                className="bg-secondary text-white px-4 py-2 rounded"
                            >
                                Login
                            </Link>
                        )}
                    </div>
                </div>
            </div>

            {/* Overlay */}
            {showingNavigationDropdown && (
                <div
                    className="fixed inset-0 bg-black/20 sm:hidden z-40"
                    onClick={() => setShowingNavigationDropdown(false)}
                />
            )}
        </nav>
    );
}
