import { twMerge } from "tailwind-merge";
import { clsx, ClassValue } from "clsx";

export function cn(...inputs) {
    return twMerge(clsx(inputs));
}
