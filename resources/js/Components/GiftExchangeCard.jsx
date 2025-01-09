import Card from "@/Components/Card";
import SecondaryButton from "@/Components/SecondaryButton";
import { useState } from "react";

export default function GiftExchangeCard({
    recipient,
    item,
    price,
    image,
    disabled = false,
}) {
    const [imageError, setImageError] = useState(false);

    const handleImageError = () => {
        setImageError(true);
    };

    return (
        <Card className="grid grid-cols-3 gap-2">
            <div className="col-span-2 leading-none flex flex-col justify-between">
                <div>
                    <span className="text-xs uppercase text-muted-foreground">
                        {recipient}
                    </span>
                    <p className="font-bold text-foreground">{item}</p>
                    <span className="text-sm text-muted-foreground">
                        ${price}
                    </span>
                </div>
                <div className="w-fit">
                    <SecondaryButton
                        className="uppercase mt-4"
                        disabled={disabled}
                    >
                        buy
                    </SecondaryButton>
                </div>
            </div>
            {image && !imageError ? (
                <div>
                    <img
                        src={image}
                        alt="gift"
                        className="rounded-md w-full h-auto object-cover object-center aspect-square"
                        onError={handleImageError}
                    />
                </div>
            ) : (
                <div className="rounded-md w-full h-auto bg-gradient-to-br from-primary/100 to-secondary/100 aspect-square" />
            )}
        </Card>
    );
}
