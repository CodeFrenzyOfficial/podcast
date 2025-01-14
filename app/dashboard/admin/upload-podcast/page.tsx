import UploadPodcast from "@/components/@dashboard/admin/upload-podcast/UploadPodcast";

export default function Page() {
    return (
        <section className="px-5 md:px-10">
            <div className="grid place-items-center text-center pb-5 space-y-1">
                <h2 className="text-2xl md:text-3xl">Upload Podcasts</h2>
                <p className="text-neutral-500 text-sm">Upload your latest podcast episodes effortlessly! </p>
            </div>
            <div
                className="max-w-screen-lg mx-auto min-h-[50vh] rounded-2xl shadow-lg shadow-neutral-400/30 bg-gradient-to-tr from-neutral-400/70 to-neutral-100/70 grid place-items-center p-5"
            >
                <div className="w-[95%] md:w-[85%]">
                    <UploadPodcast />
                </div>
            </div>
        </section>
    )
}