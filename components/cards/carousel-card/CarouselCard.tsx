import EpisodeButton from "@/components/buttons/social-icons/episode-cards-button/EpisodeButton";
import { CarouselDataType } from "@/data/carousel/data";

export default function CarouselCard({ episodeDetail, imgSrc, title }: CarouselDataType) {
    return (
        <div className="flex min-h-[30vh] md:min-h-[50vh] rounded-2xl overflow-hidden">
            <div className="w-1/3 md:w-1/2 py-2 px-4 grid place-items-center bg-white">
                <div className="space-y-4">
                    <h2 className="text-2xl font-semibold select-none">
                       {title}
                    </h2>
                    <p className="text-neutral-400 select-none">{episodeDetail}</p>
                    <EpisodeButton content="Check Episode" link="/" contentClassName="text-sm" />
                </div>
            </div>

            <div className="w-2/3 md:w-1/2">
                <img src={imgSrc} className="object-cover w-full h-auto md:w-full select-none" alt="" />
            </div>
        </div>
    )
}
