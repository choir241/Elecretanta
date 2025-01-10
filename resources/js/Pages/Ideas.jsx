import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";
import GiftSuggestionCard from "@/Components/GiftSuggestionCard";
import amazon from "../../assets/amazon.png";
import walmart from "../../assets/walmart.png";
import target from "../../assets/target.png";
import placeholder from "../../assets/placeholder.jpg";

export default function Ideas(props) {
    const user = usePage().props.auth.user;
    const [giftIdeas, setGiftIdeas] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const hobbies = props["hobbies"];
    console.log("HOBBIES", hobbies);

    const storeImages = {
        walmart: walmart,
        amazon: amazon,
        target: target,
        default: placeholder,
    };

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await fetch("/api/generateGiftIdeas", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ hobbies }),
                });
                const jsonData = await response.json();
                console.log(jsonData);
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

    console.log(giftIdeas);

    return (
        <AuthenticatedLayout>
            <Head title="Ideas" />
            <div className="lg:mx-auto w-full">
                <h1 className="leading-tight text-black font-bold text-3xl md:text-5xl tracking-[-.005em] font-baskerville">
                    Gifts for {user.name}
                </h1>
                {isLoading ? (
                    <h2 className="flex items-center justify-center text-center min-h-[55vh]">
                        Loading<span className="animate-dots">.</span>
                    </h2>
                ) : (
                    <ul className="grid grid-cols-[repeat(auto-fill,_minmax(240px,_1fr))] gap-4 md:gap-6 pt-12 pb-16">
                        {giftIdeas.map((item, index) => {
                            let imageUrl = item.imageUrl || item.image;

                            if (item.hasOwnProperty("store")) {
                                const storeName = item.store.toLowerCase();
                                imageUrl =
                                    storeImages[storeName] ||
                                    storeImages.default;
                            }

                            return (
                                <GiftSuggestionCard
                                    key={index}
                                    itemName={item.itemName || item.item}
                                    imageUrl={imageUrl}
                                    linkToItem={item.link || item.searchUrl}
                                />
                            );
                        })}
                    </ul>
                )}
            </div>
        </AuthenticatedLayout>
    );
}
