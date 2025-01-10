import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            colors: {
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                    border: "hsl(var(--muted-border))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            fontFamily: {
                sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
                baskerville: ["Libre Baskerville", "serif"],
            },
            animation: {
                dots: "dots 2s steps(3, end) infinite",
            },
            keyframes: {
                dots: {
                    "0%, 20%": {
                        color: "rgba(0,0,0,0)",
                        textShadow:
                            "0.25em 0 0 rgba(0,0,0,0), 0.5em 0 0 rgba(0,0,0,0)",
                    },
                    "40%": {
                        color: "black",
                        textShadow:
                            "0.25em 0 0 rgba(0,0,0,0), 0.5em 0 0 rgba(0,0,0,0)",
                    },
                    "60%": {
                        textShadow: "0.25em 0 0 black, 0.5em 0 0 rgba(0,0,0,0)",
                    },
                    "80%, 100%": {
                        textShadow: "0.25em 0 0 black, 0.5em 0 0 black",
                    },
                },
            },
        },
    },

    plugins: [forms],
};
