import React from "react";
function InboxCard({
    fullName,
    subject,
}: {
    fullName: string,
    subject: string
}) {
    return (
        <div
            className="w-full min-h-40 rounded-2xl shadow-lg shadow-neutral-400/30 bg-gradient-to-tr from-neutral-300/70 to-neutral-100/70 grid place-items-center p-4"
        >
            <div className="text-center space-y-1">
                <h2 className="text-2xl font-medium">{fullName}</h2>
                <p className="text-neutral-500 text-sm">{subject}</p>
            </div>

            <div className="flex justify-end">
                <div className="bg-black rounded-md text-white px-4 py-2 text-sm">Click to view</div>
            </div>
        </div>
    )
}

export default React.memo(InboxCard)
