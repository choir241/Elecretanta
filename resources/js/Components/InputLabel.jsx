export default function InputLabel({
    value,
    className = "",
    children,
    ...props
}) {
    return (
        <label
            {...props}
            className={
                `block text-sm font-medium font-baskerville text-accent-foreground ` +
                className
            }
        >
            {value ? value : children}
        </label>
    );
}