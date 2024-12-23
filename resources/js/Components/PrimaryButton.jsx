import { twMerge } from "tailwind-merge";

export default function PrimaryButton({
    className = '',
    disabled,
    children, 
    href,
    ...props
}) {
    const Component = href ? "a" : "button";
    return (
        <Component
            {...props}
            href={href}
            className={twMerge(
                `inline-flex items-center rounded-[1000px] border border-transparent bg-[#bc4749] px-4 py-2 text-xs font-bold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:opacity-85 ${
                    disabled && "opacity-25"
                } ${className}`
            )}
            disabled={disabled}
        >
            {children}
        </Component>
    );
}
