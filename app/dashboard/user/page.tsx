import PodcastCard from "@/components/@dashboard/admin/cards/podcast-card/PodcastCard";
import UserDashBlogCard from "@/components/@dashboard/user/cards/blog-card/BlogCard";
import { podcastData } from "@/data/podcasts/data";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

export default function Page() {
  return (
    <section className="px-10">
      <div
        className="max-w-screen-xl mx-auto min-h-[50vh] rounded-2xl shadow-lg shadow-neutral-400/30 bg-gradient-to-tl from-neutral-300/70 to-neutral-100/10 grid place-items-center py-5 lg:py-10 px-2 md:px-5"
      >
        <div className="grid place-items-center text-center pb-5 space-y-1">
          <h2 className="text-2xl md:text-3xl">Manage Your Blogs</h2>
          <p className="text-neutral-500 text-sm">Explore all your uploaded blogs in one place! </p>
        </div>

        {/* Blog Grid Data Mapping */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 lg:gap-4">
          {
            podcastData.slice(0, 6).map((podcastData, index) => (
              <div key={index}>
                <UserDashBlogCard {...podcastData} />
              </div>
            ))
          }
        </div>

        {/* Pagination Controls */}
        <div className='w-full flex justify-center items-center gap-2 pt-10'>
          <div className='rounded-lg w-8 h-8 grid place-items-center text-base shadow-lg shadow-neutral-300 cursor-pointer bg-white transition-all duration-200 hover:opacity-50 text-black opacity-50'>
            <FaArrowLeftLong />
          </div>
          <div className='rounded-lg w-8 h-8 grid place-items-center text-base shadow-lg shadow-neutral-300 cursor-pointer bg-white transition-all duration-200 hover:opacity-50 text-black'>
            1
          </div>
          <div className='rounded-lg w-8 h-8 grid place-items-center text-base shadow-lg shadow-neutral-300 cursor-pointer bg-white transition-all duration-200 hover:opacity-50 text-black'>
            2
          </div>
          <div className='rounded-lg w-8 h-8 grid place-items-center text-base shadow-lg shadow-neutral-300 cursor-pointer bg-white transition-all duration-200 hover:opacity-50 text-black'>
            ...
          </div>
          <div className='rounded-lg w-8 h-8 grid place-items-center text-base shadow-lg shadow-neutral-300 cursor-pointer bg-white transition-all duration-200 hover:opacity-50 text-black'>
            <FaArrowRightLong />
          </div>
        </div>
      </div>
    </section>
  )
}