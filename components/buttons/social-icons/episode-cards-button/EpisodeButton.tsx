import { cn } from "@/lib/utils";
import Link from "next/link";

export default function EpisodeButton({
    link = '/',
    content = "Button",
    contentClassName,
    className }: {
        link: string,
        content: string,
        contentClassName?: string,
        className?: string
    }) {
    return (
        <Link href={link} className={cn('w-fit py-2 px-8 flex justify-center items-center gap-2 rounded-full bg-blue-700 text-white relative overflow-hidden group/card-btn transition-all duration-300 text-center md:text-left', className)}>

            <h2 className={cn("text-sm md:text-base z-10", contentClassName)}>{content}</h2>

            {/* before container on hover */}
            <div className="absolute top-0 left-0 w-full h-0 bg-black group-hover/card-btn:h-full transition-all duration-300 z-0" />

        </Link>
    )
}