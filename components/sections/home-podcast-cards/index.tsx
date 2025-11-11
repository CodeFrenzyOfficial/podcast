// import dynamic from "next/dynamic";

import ClientCards from "./ClientCards";

// 👇 Only import the Zustand-based component on client
// const ClientCards = dynamic(() => import("./ClientCards"), { ssr: false });

export default function HomePodcastCards() {
    return (
        <section className="overflow-hidden w-full py-10 px-7 md:px-16 lg:px-20 xl:px-40 min-h-screen space-y-10">
            <div className="w-full grid place-items-center space-y-2 text-center">
                <h2 className="text-4xl font-semibold">Browse Episodes</h2>
                <p className="text-neutral-500">View Episodes based on different roles in nightlife</p>
            </div>

            {/* ✅ Client component starts here */}
            <ClientCards />
        </section>
    );
}