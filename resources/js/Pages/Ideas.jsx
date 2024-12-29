import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { usePage } from "@inertiajs/react";
import { useState } from "react";
import placeholder from "../../assets/idea-placeholder-img.png";
import { BsCart4 } from "react-icons/bs";

export default function Ideas() {
    const user = usePage().props.auth.user;
    const [visibleItems, setVisibleItems] = useState(6);
    const handleShowMore = () => {
        setVisibleItems((prevVisibleItems) => prevVisibleItems + 6);
    };
    const giftIdeas = [
        {
            image: placeholder,
            itemName: "Apple AirPods Max",
            price: "12.99",
            link: "/",
        },
        {
            image: placeholder,
            itemName: "Apple AirPods Max",
            price: "12.99",
            link: "/",
        },
        {
            image: placeholder,
            itemName: "Apple AirPods Max",
            price: "12.99",
            link: "/",
        },
        {
            image: placeholder,
            itemName: "Apple AirPods Max",
            price: "12.99",
            link: "/",
        },
        {
            image: placeholder,
            itemName: "Apple AirPods Max",
            price: "12.99",
            link: "/",
        },
        {
            image: placeholder,
            itemName: "Apple AirPods Max",
            price: "12.99",
            link: "/",
        },
        {
            image: placeholder,
            itemName: "Apple AirPods Max",
            price: "12.99",
            link: "/",
        },
        {
            image: placeholder,
            itemName: "Apple AirPods Max",
            price: "12.99",
            link: "/",
        },
        {
            image: placeholder,
            itemName: "Apple AirPods Max",
            price: "12.99",
            link: "/",
        },
    ];
    return (
        <AuthenticatedLayout>
            <Head title="Ideas" />
            <h1 className="sr-only">Ideas</h1>
            <div className="lg:mx-auto w-full">
                <h2 className="leading-tight text-black font-bold text-3xl md:text-5xl tracking-[-.005em] font-baskerville">
                    Gifts for {user.name}
                </h2>
                <ul className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 pt-12 pb-16">
                    {giftIdeas.slice(0, visibleItems).map((item) => {
                        const { image, itemName, link, price } = item;
                        return (
                            <li
                                key={itemName}
                                className="border border-solid border-[#B88914] rounded-2xl flex-1  pt-8 flex flex-col justify-center items-center relative transition duration-200 md:min-h-[20rem] overflow-hidden"
                            >
                                <div className="flex flex-col justify-center items-center w-full h-full">
                                    <div className="pb-4 px-[5%] w-full">
                                        <img
                                            src={image}
                                            alt=""
                                            className="mx-auto h-[3.75rem] w-[3.75rem] md:h-24 md:w-24"
                                        />
                                    </div>
                                    <h2 className="font-sans capitalize font-bold text-xl md:text-2xl text-center leading-[1.1] tracking-[-.06em] px-[5%]">
                                        {itemName}
                                    </h2>
                                    <p className="pb-6 font-sans md:text-xl font-semibold text-muted-foreground">
                                        ${price}
                                    </p>
                                </div>
                                <a
                                    href={link}
                                    className="flex justify-center items-center gap-[0.875rem] capitalize w-full py-4 md:py-6 md:text-xl mt-auto border-t border-[#B9B09D] group text-secondary font-semibold transition duration-200 hover:bg-secondary hover:text-primary-foreground"
                                >
                                    <span>
                                        <BsCart4
                                            aria-hidden="true"
                                            className="text-xl md:text-2xl fill-secondary group-hover:fill-primary-foreground"
                                        />
                                    </span>
                                    shop now
                                </a>
                            </li>
                        );
                    })}
                </ul>
                {visibleItems < giftIdeas.length && (
                    <div className="text-center pb-16">
                        <button
                            onClick={handleShowMore}
                            className="font-baskerville underline underline-offset-4 decoration-solid font-bold text-xl md:text-2xl tracking-tight transition duration-200 hover:decoration-transparent"
                        >
                            Show More
                        </button>
                    </div>
                )}
            </div>
        </AuthenticatedLayout>
    );
}
