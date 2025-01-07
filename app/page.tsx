import SocialIcon from '@/components/buttons/social-icons/SocialIcon'
import NavFooterWrapper from '@/wrappers/nav-footer-wrapper/NavFooterWrapper'
import { FaSoundcloud, FaSpotify } from 'react-icons/fa'

export default function page() {
  return (
    <NavFooterWrapper>
      {/* hero section */}
      <section className='w-full min-h-[80vh] md:min-h-screen main-hero-section flex flex-col-reverse md:flex-row items-center justify-center gap-8 px-20 md:py-0 lg:px-28 xl:px-40'>
        <div className='w-full md:w-1/2 text-center md:!text-left space-y-4 text-white'>

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
        <div className='md:w-1/2 grid place-items-center md:block'>
          <img src="/assets/svgs/2.svg" className='w-1/2 md:w-2/3' alt="" />
        </div>
      </section>
    </NavFooterWrapper>
  )
}
