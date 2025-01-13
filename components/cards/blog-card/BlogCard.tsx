import BlogButton from "@/components/buttons/social-icons/blog-button/BlogButton";
import { BlogCardProps } from "@/data/blogs/data";
import { useMemo } from "react";
import { FaUserAlt } from "react-icons/fa";
import { FaComments } from "react-icons/fa6";

export default function BlogCard({ blogDesc, imgSrc, title }: BlogCardProps) {
    return (
        <div className="w-full min-h-[30vh] md:min-h-[50vh] rounded-2xl overflow-hidden border border-solid border-neutral-300 group">
            <div className="w-full overflow-hidden z-0">
                <img src={imgSrc} className="w-full h-72 group-hover:h-60 transition-all duration-300 object-cover object-center select-none" alt="" />
            </div>
            <div className="py-4 px-3 z-10">
                <div className="flex items-center gap-4 mb-2 text-xs text-neutral-500">
                    <div className="flex items-center gap-1">
                        <FaUserAlt />
                        <p>Posted By: <span className="font-semibold">Admin</span></p>
                    </div>
                    <div className="flex items-center gap-1">
                        <FaComments />
                        <p>Comments - 0</p>
                    </div>
                </div>
                <div className="space-y-4">
                    <h2 className="text-2xl font-semibold select-none">
                        {title}
                    </h2>
                    <p className="text-neutral-400 select-none line-clamp-5">{blogDesc ? blogDesc : ''}</p>
                    <BlogButton
                        content="Check Blog"
                        contentClassName="text-sm"
                    />
                </div>
            </div>
        </div>
    )
}
