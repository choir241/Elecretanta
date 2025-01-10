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

    const storeImages = { walmart, amazon, target, default: placeholder };

    useEffect(() => {
        fetchGiftIdeas();
    }, []);

    const fetchGiftIdeas = async () => {
        try {
            const response = await fetch("/api/generateGiftIdeas", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ hobbies }),
            });
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Failed to fetch gift ideas");
            }

            setGiftIdeas(Object.values(data.data));
        } catch (error) {
            console.error("Error fetching gift ideas:", error);
            setGiftIdeas([]);
        } finally {
            setIsLoading(false);
        }
    };

    const getImageUrl = (item) => {
        if (item.store) {
            const storeName = item.store.toLowerCase();
            return storeImages[storeName] || storeImages.default;
        }
        return item.imageUrl || item.image || storeImages.default;
    };

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
                        {giftIdeas.map((item, index) => (
                            <GiftSuggestionCard
                                key={index}
                                itemName={item.itemName || item.item}
                                imageUrl={getImageUrl(item)}
                                linkToItem={item.link || item.searchUrl}
                            />
                        ))}
                    </ul>
                )}
            </div>
        </AuthenticatedLayout>
    );
}
