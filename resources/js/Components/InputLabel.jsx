export default function InputLabel({
    value,
    className = "",
    children,
    ...props
}) {
    return (
        <label
            {...props}
            className={`block font-medium font-baskerville text-accent-foreground ${className || 'text-sm'}`}
        >
            {value ? value : children}
        </label>
    );
}