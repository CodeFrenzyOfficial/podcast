import { PodcastDataType } from "@/data/podcasts/data";
import { IoIosArrowRoundForward } from "react-icons/io";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import PodcastEditSheet from "../../podcast-edit-sheet/PodcastEditSheet";

export default function PodcastCard({ title, desc, imgSrc, upload_date }: PodcastDataType) {
    return (
        <div className="w-full max-h-[26rem] h-full rounded-lg bg-neutral-100 shadow-xl space-y-4 group">
            {/* podcast thumbnail */}
            <img src={imgSrc} className="w-full h-52 object-cover rounded-lg" alt="" />

            {/* content */}
            <div className="px-4 pb-4 space-y-4 flex flex-col justify-between">
                <div className="text-center grid place-items-center space-y-2">
                    <h2 className="text-xl font-medium">{title}</h2>
                    <p className="text-neutral-500 text-sm">{desc}</p>
                </div>

                <div className="w-full flex items-center justify-between">
                    {/* Date Posted */}
                    <div className="flex items-center gap-1">
                        <MdOutlineAccessTimeFilled />
                        <p className="text-sm text-neutral-500">{upload_date}</p>
                    </div>

                    {/* button */}
                    <PodcastEditSheet>
                        <div className="flex items-center">
                            <div className="flex items-center relative transition-all duration-300">
                                <p className="transition-all duration-300 z-20 relative left-0 group-hover:-left-5">
                                    Edit
                                </p>
                                <div className="text-xl transition-all duration-300 opacity-0 group-hover:opacity-100 absolute right-0 top-[10%] z-0">
                                    <IoIosArrowRoundForward />
                                </div>
                            </div>
                        </div>
                    </PodcastEditSheet>
                </div>
            </div>

        </div>
    )
}
