import { BiPodcast } from "react-icons/bi";

export default function Newsletter() {
  return (
      <section className='newsletter-bg min-h-[60vh] px-10 py-10 grid place-items-center'>
          <div className='max-w-screen-lg mx-auto  text-center space-y-4 text-white'>
              <div className='grid place-items-center'>
                  <BiPodcast className='text-4xl' />
                  <div className='flex items-center gap-1'>
                      <p className='font-light'>Get early access to the new episodes.</p>
                  </div>
                  <h2 className='text-4xl font-semibold'>Subscribe to newsletter!</h2>
              </div>
              <input type="text" placeholder='Enter your email' className='w-[90%] outline-none border-none rounded-full py-2 px-4 text-black' />
          </div>
      </section>
  )
}
