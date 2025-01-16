import EpisodeButton from '@/components/buttons/social-icons/episode-cards-button/EpisodeButton'
import SocialIcon from '@/components/buttons/social-icons/SocialIcon'
import HomeCarousel from '@/components/carousels/home-carousel/HomeCarousel'
import HostCarousel from '@/components/carousels/hosts-carousel/HostCarousel'
import AllPodcasts from '@/components/sections/all-podcasts/AllPodcasts'
import Newsletter from '@/components/sections/newsletter/Newsletter'
import { episodesData } from '@/data/episodes/data'
import NavFooterWrapper from '@/wrappers/nav-footer-wrapper/NavFooterWrapper'
import { BiPodcast } from 'react-icons/bi'
import { FaSoundcloud, FaSpotify } from 'react-icons/fa'
import { FaComments, FaPlay, FaUser } from 'react-icons/fa6'
import { GiMoebiusStar } from 'react-icons/gi'
import { ImPodcast } from 'react-icons/im'

export default function page() {
  return (
    <NavFooterWrapper>
      {/* hero section */}
      <section className='w-full min-h-[80vh] md:min-h-screen main-hero-section flex flex-col-reverse md:flex-row items-center justify-center gap-8 px-7 md:py-0 lg:px-28 xl:pl-40 xl:pr-20 overflow-hidden'>
        <div className='w-full md:w-1/2 text-center md:!text-left space-y-4 text-white rounded-2xl backdrop-blur-lg p-4 shadow-xl'>

          <p className='tracking-widest text-2xl lg:pt-10'>Let’s Start Now</p>

          <h2 className='w-full text-4xl md:text-5xl lg:text-6xl font-bold'>
            Taking Podcast to the Next Level
          </h2>

          <div className='w-full flex justify-center items-center md:justify-between md:items-start'>
            <p>
              Available on Apple Soundcast and spotify
            </p>

            <img src="/assets/svgs/1.svg" alt="" className='hidden lg:block' />
          </div>
          {/* buttons */}
          <div className='lg:relative -top-20 space-y-4'>

            <hr className='w-full lg:w-2/3 h-px bg-neutral-300' />
            <div className='flex justify-center items-center md:justify-start gap-3 '>
              <SocialIcon title='Soundcloud' icon={<FaSoundcloud className='text-xl' />} link='https://soundcloud.com' />
              <SocialIcon title='Spotify' icon={<FaSpotify className='text-xl' />} link='https://soundcloud.com' />

            </div>
          </div>

        </div>

        {/* Headphone image */}
        <div className='md:w-1/2 grid place-items-center'>
          <img src="/assets/elements/headphones.png" className='drop-shadow-2xl drop-shadow-black w-1/2 md:w-[90%] mx-auto rotate-[25deg]' alt="" />
        </div>
      </section>

      {/* Episodes Card grid Section */}
      <section className='overflow-hidden w-full py-10 px-7 md:px-16 lg:px-20 xl:px-40 min-h-screen space-y-10'>

        <div className='w-full grid place-items-center space-y-2 text-center'>
          <h2 className='text-4xl font-semibold'>Enjoy New Shows</h2>
          <p className='text-neutral-500'>Explore All Episodes</p>
        </div>

        {/* Grid Container */}
        <div className='grid grid-cols-1 md:grid-cols-2 place-items-center gap-5'>
          {/* Card 1 */}
          <div className='p-4 rounded-2xl shadow-xl space-y-4 group/card'>
            <div className='overflow-hidden rounded-2xl'>
              <img src="/assets/hero-sections-bg/episodes-card-1.jpg" className='group-hover/card:scale-125 group-hover/card:rotate-12 transition-all duration-300  group-hover/card:blur-md' alt="" />
            </div>

            <div className='md:w-[90%] space-y-4'>
              <h2 className='capitalize text-lg leading-tight lg:text-2xl font-medium'>
                The World Of technology that connect us
              </h2>

              {/* episodes details #1 */}
              <div className='flex items-start gap-3'>
                {/* play icon */}
                <div className='rounded-full bg-blue-600 text-white p-3'>
                  <FaPlay className='text-2xl' />
                </div>

                <div className=''>
                  <p className='text-sm md:text-base text-neutral-500'>Episode #8 - Classic</p>
                  <h2 className='text-base md:text-xl font-semibold'>The most remarkable style plans for you</h2>
                </div>
              </div>

              {/* episodes details #2 */}
              <div className='flex items-start gap-3'>
                {/* play icon */}
                <div className='rounded-full bg-blue-600 text-white p-3'>
                  <FaPlay className='text-2xl' />
                </div>

                <div className=''>
                  <p className='text-sm md:text-base text-neutral-500'>Episode #8 - Classic</p>
                  <h2 className='text-base md:text-xl font-semibold'>The most remarkable style plans for you</h2>
                </div>
              </div>

              {/* episodes details #3 */}
              <div className='flex items-start gap-3'>
                {/* play icon */}
                <div className='rounded-full bg-blue-600 text-white p-3'>
                  <FaPlay className='text-2xl' />
                </div>

                <div className=''>
                  <p className='text-sm md:text-base text-neutral-500'>Episode #8 - Classic</p>
                  <h2 className='text-base md:text-xl font-semibold'>The most remarkable style plans for you</h2>
                </div>
              </div>

            </div>

            {/* Button */}
            <div className='grid place-items-center pt-5'>
              <EpisodeButton link='/' content='View All Episodes' />
            </div>
          </div>

          {/* Card 2 */}
          <div className='p-4 rounded-2xl shadow-xl space-y-4 group'>
            <div className='overflow-hidden rounded-2xl'>
              <img src="/assets/hero-sections-bg/episodes-card-2.jpg" className='group-hover:scale-125 group-hover:rotate-12 transition-all duration-300  group-hover:blur-md' alt="" />
            </div>

            <div className='w-[90%] space-y-4'>
              <h2 className='capitalize text-lg leading-tight lg:text-2xl font-medium'>
                The World Of technology that connect us
              </h2>

              {/* episodes details #1 */}
              <div className='flex items-start gap-3'>
                {/* play icon */}
                <div className='rounded-full bg-blue-600 text-white p-3'>
                  <FaPlay className='text-2xl' />
                </div>

                <div className=''>
                  <p className='text-sm md:text-base text-neutral-500'>Episode #8 - Classic</p>
                  <h2 className='text-base md:text-xl font-semibold'>The most remarkable style plans for you</h2>
                </div>
              </div>

              {/* episodes details #2 */}
              <div className='flex items-start gap-3'>
                {/* play icon */}
                <div className='rounded-full bg-blue-600 text-white p-3'>
                  <FaPlay className='text-2xl' />
                </div>

                <div className=''>
                  <p className='text-sm md:text-base text-neutral-500'>Episode #8 - Classic</p>
                  <h2 className='text-base md:text-xl font-semibold'>The most remarkable style plans for you</h2>
                </div>
              </div>

              {/* episodes details #3 */}
              
              <div className='flex items-start gap-3'>
                {/* play icon */}
                <div className='rounded-full bg-blue-600 text-white p-3'>
                  <FaPlay className='text-2xl' />
                </div>

                <div className=''>
                  <p className='text-sm md:text-base text-neutral-500'>Episode #8 - Classic</p>
                  <h2 className='text-base md:text-xl font-semibold'>The most remarkable style plans for you</h2>
                </div>
              </div>

            </div>
            <div className='grid place-items-center pt-5'>
              <EpisodeButton link='/' content='View All Episodes' />
            </div>
          </div>
        </div>
      </section>

      {/* Slider Section */}
      <section className='slider-section-bg lg:min-h-[90vh] w-full overflow-x-hidden  py-10'>
        <div className='w-full grid place-items-center space-y-2 mb-10'>
          <h2 className='text-4xl font-semibold'>Enjoy New Shows</h2>
          <p className='text-neutral-500'>Explore All Episodes</p>
        </div>
        <HomeCarousel />
      </section>

      <section className='w-full min-h-[70vh] streaming-section-bg grid place-items-center '>
        <div className='w-2/3 lg:w-1/2 text-center space-y-5 text-white grid place-items-center'>
          <div className='flex items-center gap-2'>
            <ImPodcast className='text-xl' />
            <p>
              Streaming Applications
            </p>
          </div>
          <h2 className='text-2xl md:text-3xl font-semibold'>
            Support and stand by listening to our most recent show on apple Podcast
          </h2>
          <EpisodeButton link='/' content='View All Episodes' />
        </div>
      </section>

      {/* View all episodes Section */}
      <AllPodcasts />

      {/* overlapping "learn" section */}
      <section className='overflow-hidden py-10'>
        <div className='w-full p-10 bg-blue-600' />

        <div className='relative -top-16 md:-top-20 flex justify-between items-center space-y-5 bg-white -rotate-3 shadow-lg shadow-black/10 py-8'>

          {/* learn card */}
          <div className='text-yellow-500 text-4xl'><GiMoebiusStar /></div>
          <div className='flex items-center space-y-4'>
            <h2 className='text-4xl font-semibold'>LEARN</h2>
          </div>
          {/* learn card */}
          <div className='text-yellow-500 text-4xl'><GiMoebiusStar /></div>
          <div className='flex items-center space-y-4'>
            <h2 className='text-4xl font-semibold'>LEARN</h2>
          </div>
          {/* learn card */}
          <div className='text-yellow-500 text-4xl'><GiMoebiusStar /></div>
          <div className='flex items-center space-y-4'>
            <h2 className='text-4xl font-semibold'>LEARN</h2>
          </div>
          {/* learn card */}
          <div className='text-yellow-500 text-4xl'><GiMoebiusStar /></div>
          <div className='flex items-center space-y-4'>
            <h2 className='text-4xl font-semibold'>LEARN</h2>
          </div>
          {/* learn card */}
          <div className='text-yellow-500 text-4xl'><GiMoebiusStar /></div>
          <div className='flex items-center space-y-4'>
            <h2 className='text-4xl font-semibold'>LEARN</h2>
          </div>
          {/* learn card */}
          <div className='text-yellow-500 text-4xl'><GiMoebiusStar /></div>
          <div className='flex items-center space-y-4'>
            <h2 className='text-4xl font-semibold'>LEARN</h2>
          </div>
          {/* learn card */}
          <div className='text-yellow-500 text-4xl'><GiMoebiusStar /></div>
          <div className='flex items-center space-y-4'>
            <h2 className='text-4xl font-semibold'>LEARN</h2>
          </div>
        </div>
      </section>

      {/* Hosts Carousel */}
      <section className='py-10 w-full min-h-[60vh] lg:min-h-[90vh] host-bg space-y-5'>
        <div className='grid place-items-center space-y-2 text-center'>
          <p className='text-neutral-500'>Expert People</p>
          <h2 className='text-3xl lg:text-4xl font-semibold'>Meet our Podcast Hosts</h2>
        </div>
        <div className='max-w-screen-lg mx-auto'>
          <HostCarousel />
        </div>
      </section>

      {/*  */}
      <section className='py-10 w-full min-h-screen space-y-10 px-10'>
        <div className='grid place-items-center space-y-2 text-center'>
          <p className='text-neutral-500'>Streaming Application</p>
          <h2 className='text-4xl font-semibold'>Direct from the best Blog Posts
          </h2>
        </div>

        <div className='max-w-screen-lg mx-auto flex flex-col gap-5'>
          {/* Card 1 */}
          <div className='flex flex-col lg:flex-row rounded-2xl overflow-hidden lg:max-h-[50vh] border border-px border-neutral-300'>

            <div className='lg:w-1/2'>
              <img src="/assets/hero-sections-bg/microphone.jpg" className='object-cover' alt="" />
            </div>

            <div className='lg:w-1/2 px-5 py-5 lg:py-0 gap-6  flex flex-col items-start justify-center lg:gap-3'>

              <div className='flex items-center gap-3'>
                <div className='flex items-center gap-1'>
                  <FaUser />
                  <p className='text-neutral-500 text-xs'>Jhon Doe</p>
                </div>
                <div className='flex items-center gap-1'>
                  <FaComments />
                  <p className='text-neutral-500 text-xs'>3 comments</p>
                </div>
                <div className='flex items-center gap-1'>
                  <FaComments />
                  <p className='text-neutral-500 text-xs'>3 March 2024</p>
                </div>
              </div>

              <h2 className='text-2xl lg:text-3xl font-semibold'>
                10 Must-Listen Podcasts For Comedy Fans
              </h2>

              <EpisodeButton content="Check Episode" link="/" contentClassName="text-sm" />
            </div>
          </div>

          {/* Card 2 */}
          <div className='flex flex-col lg:flex-row rounded-2xl overflow-hidden lg:max-h-[50vh] border border-px border-neutral-300'>
            <div className='lg:w-1/2 px-5 py-5 lg:py-0 gap-6  flex flex-col items-start justify-center lg:gap-'>

              <div className='flex items-center gap-3'>
                <div className='flex items-center gap-1'>
                  <FaUser />
                  <p className='text-neutral-500 text-xs'>Jhon Doe</p>
                </div>
                <div className='flex items-center gap-1'>
                  <FaComments />
                  <p className='text-neutral-500 text-xs'>3 comments</p>
                </div>
                <div className='flex items-center gap-1'>
                  <FaComments />
                  <p className='text-neutral-500 text-xs'>3 March 2024</p>
                </div>
              </div>

              <h2 className='text-2xl lg:text-3xl font-semibold'>
                Clever ways to get your podcast heard
              </h2>

              <EpisodeButton content="Check Episode" link="/" contentClassName="text-sm" />
            </div>

            <div className='lg:w-1/2'>
              <img src="/assets/slider-imgs/5.jpg" className='object-cover' alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* NewsLetter Section */}
      <Newsletter />

    </NavFooterWrapper>
  )
}
