import { twMerge } from "tailwind-merge";

export default function SecondaryButton({
    type = "button",
    className = "",
    disabled,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            type={type}
            className={twMerge(
                `flex items-center rounded bg-secondary px-2 py-1 text-sm font-medium text-secondary-foreground sm:w-full ${
                    disabled && "opacity-25"
                } ${className}`
            )}
            disabled={disabled}
        >
            {children}
        </button>
    );
}