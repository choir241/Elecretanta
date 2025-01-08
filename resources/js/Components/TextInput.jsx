import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";

export default forwardRef(function TextInput(
    { type = "text", className = "", isFocused = false, ...props },
    ref
) {
    const localRef = useRef(null);

    useImperativeHandle(ref, () => ({
        focus: () => localRef.current?.focus(),
    }));

    useEffect(() => {
        if (isFocused) {
            localRef.current?.focus();
        }
    }, [isFocused]);

    return (
        <input
            {...props}
            type={type}
            className={
                "text-gray-600 font-bold rounded-2xl bg-background border-muted-border border-solid shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3 md:text-xl " +
                className
            }
            ref={localRef}
        />
    );
});