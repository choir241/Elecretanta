import NavBar from "@/Components/NavBar";

export default function AuthenticatedLayout({ header, children }) {
    return (
        <div className="bg-background bg-cover w-full min-h-screen">
            <div className="container mx-auto max-w-screen-lg py-8 px-4">
                <NavBar />
                {header && <header>{header}</header>}
                <main>{children}</main>
            </div>
        </div>
    );
}
