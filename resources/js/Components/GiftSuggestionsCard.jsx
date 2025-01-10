import { BsCart4 } from "react-icons/bs";

export default function GiftSuggestionCard({ itemName, imageUrl, linkToItem }) {
    return (
        <li className="border border-solid border-[#B88914] rounded-2xl flex-1  pt-8 flex flex-col justify-center items-center relative transition duration-200 md:min-h-[20rem] overflow-hidden">
            <div className="flex flex-col justify-center items-center w-full h-full pb-4">
                <div className="pb-4 px-[5%] w-full">
                    <img
                        src={imageUrl}
                        alt=""
                        className="rounded-md mx-auto h-[4.75rem] w-[4.75rem] md:h-24 md:w-24 object-cover"
                    />
                </div>
                <h2 className="font-sans capitalize font-bold text-xl md:text-2xl text-center leading-[1.1] tracking-[-.06em] px-[5%] flex-1">
                    {itemName}
                </h2>
            </div>
            <a
                href={linkToItem}
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
}
