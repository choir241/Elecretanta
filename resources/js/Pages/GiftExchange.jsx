import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage } from "@inertiajs/react";
import GiftExchangeCard from "@/Components/GiftExchangeCard";
import giftExchangeData from "../data/giftExchangeData.json";
import PrimaryButton from "@/Components/PrimaryButton";
export default function GiftExchange() {
    const user = usePage().props.auth.user;

    return (
        <AuthenticatedLayout header={<h2>{user.name}'s Gift Exchanges</h2>}>
            <Head title="Gift Exchange" />

            {giftExchangeData.giftExchanges.map((exchange) => (
                <div
                    key={exchange.id}
                    className="my-12 p-4 md:p-8 outline outline-muted-border rounded-lg"
                >
                    <div className="mb-4 leading-none">
                        <h3 className="text-xl font-bold">{exchange.name}</h3>
                        <p>Budget: ${exchange.totalBudget}</p>
                    </div>
                    <section
                        id="gift-exchange-content"
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
                    >
                        {exchange.gifts.map((gift) => (
                            <GiftExchangeCard
                                key={gift.id}
                                recipient={gift.recipient}
                                item={gift.item}
                                price={gift.price}
                                image={gift.image}
                                disabled={exchange.totalBudget <= 0}
                            />
                        ))}
                    </section>
                    <PrimaryButton href="#" className="mt-8">
                        See More
                    </PrimaryButton>
                </div>
            ))}
        </AuthenticatedLayout>
    );
}
