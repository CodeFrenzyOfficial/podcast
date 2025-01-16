import EpisodeButton from "@/components/buttons/social-icons/episode-cards-button/EpisodeButton";
import { CarouselDataType } from "@/data/carousel/data";

export default function CarouselCard({ episodeDetail, imgSrc, title }: CarouselDataType) {
    return (
        <div className="flex min-h-[30vh] md:min-h-[50vh] rounded-2xl overflow-hidden">
            <div className="w-1/2 md:w-1/2 py-2 px-4 grid place-items-center bg-white">
                <div className="space-y-2 md:space-y-4">
                    <h2 className="text-lg leading-tight md:text-xl lg:text-2xl font-semibold select-none">
                       {title}
                    </h2>
                    <p className="text-neutral-400 select-none">{episodeDetail}</p>
                    <EpisodeButton content="Check Episode" link="/" contentClassName="text-xs md:text-base" className="px-2 md:px-5" />
                </div>
            </div>

            <div className="w-1/2 md:w-1/2">
                <img src={imgSrc} className="object-cover w-full h-full md:w-full md:h-full  select-none" alt="" />
            </div>
        </div>
    )
}
