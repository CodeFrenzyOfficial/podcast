import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <main className="flex">
            {/* sidebar */}
            <aside className="w-1/4">Aside</aside>

            {/* children */}
            <div className="w-full">
                {children}
            </div>
        </main>
    )
}
