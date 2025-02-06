import { PodcastDataType } from "@/data/podcasts/data";
import { IoIosArrowRoundForward } from "react-icons/io";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import PodcastEditSheet from "../../podcast-edit-sheet/PodcastEditSheet";
import DeleteDialog from "../../dialog-box/delete-dialog/DeleteDialog";
import { Button } from "@/components/ui/button";

export default function PodcastCard({ id, title, desc, imgSrc, upload_date }: PodcastDataType) {
    return (
        <div className="w-full lg:max-h-[26rem] h-full rounded-lg bg-neutral-100 shadow-xl space-y-4">
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
                        <p className="text-sm text-neutral-500">{new Date(upload_date).toISOString().split("T")[0]}</p>
                    </div>

                    {/* Edit & delete Button */}
                    <div className="flex items-center gap-8">
                        <DeleteDialog id={id}>
                            <div className="bg-red-500 text-white px-2 py-1 rounded-md text-sm transition-all duration-200 hover:bg-red-600 cursor-pointer">Delete</div>
                        </DeleteDialog>

                        {/* button */}
                        <PodcastEditSheet id={id}>
                            <div className="flex items-center">
                                <div className="flex items-center relative transition-all duration-300 group">
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
        </div>
    )
}
