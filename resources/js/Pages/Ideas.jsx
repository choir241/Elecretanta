import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { BsCart4 } from "react-icons/bs";

export default function Ideas(props) {
    const user = usePage().props.auth.user;
    const [giftIdeas, setGiftIdeas] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const hobbies = props["hobbies"]
    console.log("HOBBIES", hobbies);
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await fetch("/api/generateGiftIdeas", 
                    {    method: 'POST',
                        headers: {
                        'Content-Type': 'application/json'
                },       body: JSON.stringify({hobbies})// Specify the content type
            })
                const jsonData = await response.json();
                if (jsonData && typeof jsonData === "object") {
                    const giftIdeasArray = Object.values(jsonData.data);

                    setGiftIdeas(giftIdeasArray);
                } else {
                    console.error("Unexpected data structure");
                    setGiftIdeas([]);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
                setGiftIdeas([]);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    console.log(`Result:`, Object.values(giftIdeas));
    if (isLoading) return <div>Loading...</div>;

    return (
        <AuthenticatedLayout>
            <Head title="Ideas" />
            <h1 className="sr-only">Ideas</h1>
            <div className="lg:mx-auto w-full">
                <h2 className="leading-tight text-black font-bold text-3xl md:text-5xl tracking-[-.005em] font-baskerville">
                    Gifts for {user.name}
                </h2>
                <ul className="grid grid-cols-[repeat(auto-fill,_minmax(240px,_1fr))] gap-4 md:gap-6 pt-12 pb-16">
                    {giftIdeas.map((item, index) => {
                        const { itemName, imageUrl, link } = item;
                        return (
                            <li
                                key={index}
                                className="border border-solid border-[#B88914] rounded-2xl flex-1  pt-8 flex flex-col justify-center items-center relative transition duration-200 md:min-h-[20rem] overflow-hidden"
                            >
                                <div className="flex flex-col justify-center items-center w-full h-full pb-4">
                                    <div className="pb-4 px-[5%] w-full">
                                        <img
                                            src={imageUrl}
                                            alt=""
                                            className="rounded-full mx-auto h-[4.75rem] w-[4.75rem] md:h-24 md:w-24 object-cover"
                                        />
                                    </div>
                                    <h2 className="font-sans capitalize font-bold text-xl md:text-2xl text-center leading-[1.1] tracking-[-.06em] px-[5%] flex-1">
                                        {itemName}
                                    </h2>
                                </div>
                                <a
                                    href={link}
                                    className="flex justify-center items-center gap-[0.875rem] capitalize w-full py-4 md:py-6 md:text-xl mt-auto border-t border-[#B9B09D] group text-secondary font-semibold transition duration-200 hover:bg-secondary hover:text-primary-foreground"
                                    target="_blank"
                                >
                                    <span>
                                        <BsCart4
                                            aria-hidden="true"
                                            className="text-xl md:text-2xl fill-secondary transition duration-200 group-hover:fill-primary-foreground"
                                        />
                                    </span>
                                    shop now
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </AuthenticatedLayout>
    );
}