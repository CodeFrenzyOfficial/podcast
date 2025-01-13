import HomeCarousel from "@/components/carousels/home-carousel/HomeCarousel";
import AllPodcasts from "@/components/sections/all-podcasts/AllPodcasts";
import NavFooterWrapper from "@/wrappers/nav-footer-wrapper/NavFooterWrapper";
import Link from "next/link";

export default function page() {
  return (
    <NavFooterWrapper>
      <section className="podcast-hero-bg">
        <div className="min-h-[50vh] max-w-screen-lg mx-auto flex justify-center lg:justify-normal items-center">
          <div className="space-y-3 px-5 py-10 lg:pl-4 lg:pr-10 lg:py-10 backdrop-blur-lg rounded-2xl shadow-xl shadow-black/30">
            <h2 className="text-4xl font-bold text-white">Browse Podcasts</h2>
            <div className="flex items-center gap-5">
              <Link href="/" className="text-xl font-medium text-white">Home</Link>

              <hr className="h-5 w-px bg-white" />

              <p className="text-xl font-medium text-blue-600 pointer-events-none">Podcasts</p>
            </div>
          </div>
        </div>
      </section>

      {/* Carousel */}
      <section className="space-y-5 py-10">
        <div className='grid place-items-center space-y-2 text-center'>
          <p className='text-neutral-500'>List of episodes</p>
          <h2 className='text-4xl font-semibold'>Watch Feature episodes</h2>
        </div>
        <HomeCarousel />
      </section>

      {/* Podcasts List */}
      <AllPodcasts />
    </NavFooterWrapper>
  )
}
// 