import { PodcastDataType } from "@/data/podcasts/data";
import { IoIosArrowRoundForward } from "react-icons/io";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import UserBlogDeleteDialog from "../../dialog-box/delete-dialog/UserBlogDeleteDialog";
import BlogEditSheet from "../../blog-edit-sheet/BlogEditSheet";
import useBlogStore from "@/store/blog";
// import { useRouter } from "next/navigation"
import useAuthStore from "@/store/store";
import { useToast } from "@/hooks/use-toast";
import DescriptionPurifier from "@/components/html-renderer/DescriptionPurifier";

export default function UserDashBlogCard({
  id,
  title,
  desc,
  imgSrc,
  upload_date,
  updated_at,
}: PodcastDataType) {
  // const router = useRouter();
  const { toast } = useToast();
  const { user } = useAuthStore();
  const { delete_blog, fetch_user_blogs, fetch_blogs } = useBlogStore();
  const remove_blog = async () => {
    await delete_blog(user.uid, id, toast);
    fetch_user_blogs(user.uid);
    fetch_blogs();
  };

  return (
    <div className="w-full h-[26rem] rounded-lg bg-neutral-100 shadow-xl flex flex-col">
      {/* podcast thumbnail */}
      <img
        src={imgSrc[0]}
        className="w-full h-52 object-cover rounded-t-lg"
        alt=""
      />

      {/* content */}
      <div className="px-4 pb-4 pt-3 flex-1 flex flex-col justify-between">
        <div className="text-center grid place-items-center space-y-2">
          <h2 className="text-xl font-medium">{title}</h2>
          <DescriptionPurifier
            html={desc}
            className="text-neutral-500 text-center text-sm line-clamp-3 max-h-20 overflow-hidden !break-words w-[80%]"
            actualText={false}
          />
        </div>

        <div className="w-full flex items-center justify-between">
          {/* Date Posted */}
          <div className="flex items-center gap-1">
            <MdOutlineAccessTimeFilled />
            <p className="text-sm text-neutral-500">
              {new Date(upload_date).toISOString().split("T")[0]}
            </p>
          </div>

          {/* Edit & delete Button */}
          <div className="flex items-center gap-8">
            <UserBlogDeleteDialog id={id} delete_function={remove_blog}>
              <div className="bg-red-500 text-white px-2 py-1 rounded-md text-sm transition-all duration-200 hover:bg-red-600 cursor-pointer">
                Delete
              </div>
            </UserBlogDeleteDialog>

            {/* button */}
            <BlogEditSheet
              blog={{ id, title, desc, imgSrc, upload_date, updated_at }}
            >
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
            </BlogEditSheet>
          </div>
        </div>
      </div>
    </div>
  );
}
