export default function Card({ children, className = "" }) {
    return (
        <div
            className={`bg-card outline outline-outline text-card-foreground overflow-hidden rounded-lg p-4 ${className}`}
        >
            {children}
        </div>
    );
}
