import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { usePage } from "@inertiajs/react";
import { Head } from "@inertiajs/react";
import gear from "../../assets/icons/gear.svg";
import gift from "../../assets/icons/gift.svg";
import heart from "../../assets/icons/heart.svg";
import lightbulb from "../../assets/icons/lightbulb.svg";
import PrimaryButton from "@/Components/PrimaryButton";

export default function Dashboard() {
    const user = usePage().props.auth.user;
    const dashboardItems = [
        {
            image: gift,
            title: "gift exchanges",
            link: "/gift-exchange",
        },
        {
            image: heart,
            title: "hobbies",
            link: "/hobbies",
        },
        {
            image: lightbulb,
            title: "ideas",
            link: "/ideas",
        },
        {
            image: gear,
            title: "settings",
            link: "/settings",
        },
    ];
    return (
        <AuthenticatedLayout>
            <Head title="Dashboard" />
            <h1 className="sr-only">Dashboard</h1>
            <h2 className="leading-tight text-black font-bold text-3xl md:text-5xl tracking-[-.005em] font-baskerville">
                Hello, {user.name}
            </h2>
            <ul className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 justify-between pt-12 pb-16">
                {dashboardItems.map((item) => {
                    const { image, title, link } = item;
                    return (
                        <li
                            key={title}
                            className="border border-solid border-[#B88914] rounded-2xl flex-1 bg-[#FAF7EE] px-[5%] py-8 flex flex-col justify-center relative transition duration-200 [&:has(a:hover)]:shadow-xl [&:has(a:hover)]:-translate-y-1 md:min-h-[20rem]"
                        >
                            <div className="pb-4">
                                <img
                                    src={image}
                                    alt=""
                                    className="mx-auto h-[3.75rem] w-[3.75rem] md:h-auto md:w-auto"
                                />
                            </div>
                            <h2 className="capitalize font-bold text-xl md:text-2xl text-center leading-[1.1]">
                                <a
                                    href={link}
                                    className="after:absolute after:left-0 after:top-0 after:w-full after:h-full"
                                >
                                    {title}
                                </a>
                            </h2>
                        </li>
                    );
                })}
            </ul>
            <PrimaryButton
                href="/"
                className="w-full font-baskerville justify-center py-4 text-lg md:text-2xl md:max-w-max px-10 font-bold tracking-[-0.01em] self-center capitalize"
            >
                Make your list
            </PrimaryButton>
        </AuthenticatedLayout>
    );
}
