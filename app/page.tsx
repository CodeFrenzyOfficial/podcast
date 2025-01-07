import SocialIcon from '@/components/buttons/social-icons/SocialIcon'
import NavFooterWrapper from '@/wrappers/nav-footer-wrapper/NavFooterWrapper'
import { FaSoundcloud, FaSpotify } from 'react-icons/fa'

export default function page() {
  return (
    <NavFooterWrapper>
      {/* hero section */}
      <section className='w-full min-h-[80vh] md:min-h-screen main-hero-section flex flex-col-reverse md:flex-row items-center justify-center gap-8 px-20 md:py-0 lg:px-28 xl:pl-40 xl:pr-20'>
        <div className='w-full md:w-1/2 text-center md:!text-left space-y-4 text-white rounded-2xl backdrop-blur-lg p-4 shadow-xl'>

          <p className='tracking-widest text-2xl'>Let’s Start Now</p>

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
          <div className='flex justify-center items-center md:justify-start gap-3 lg:relative -top-20'>
            <SocialIcon title='Soundcloud' icon={<FaSoundcloud className='text-xl' />} link='https://soundcloud.com' />
            <SocialIcon title='Spotify' icon={<FaSpotify className='text-xl' />} link='https://soundcloud.com' />

          </div>
        </div>

        {/* Headphone image */}
        <div className='md:w-1/2 grid place-items-center'>
          <img src="/assets/elements/headphones.png" className='drop-shadow-2xl drop-shadow-black  w-1/2 md:w-[90%] mx-auto rotate-[25deg]' alt="" />
        </div>
      </section>

      {/* Episodes Card grid Section */}
      <section className='w-full grid grid-cols-1 md:grid-cols-2 place-items-center px-20 md:px-28 lg:px-40 gap-5 min-h-screen'>
        {/* Card 1 */}
        <div className=''>

        </div>

        {/* Card 2 */}
        <div></div>
      </section>
    </NavFooterWrapper>
  )
}
