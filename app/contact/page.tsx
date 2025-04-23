import ContactForm from '@/components/forms/contact-form/contact-form'
import Location from '@/components/location-iframe/Location'
import NavFooterWrapper from '@/wrappers/NavFooterWrapper'
import Link from 'next/link'

export default function Page() {
  return (
    <NavFooterWrapper>
      {/* About Hero */}
      <section className="contact-hero-bg">
        <div className="min-h-[50vh] max-w-screen-lg mx-auto flex justify-center lg:justify-normal items-center">
          <div className="space-y-3 px-5 py-10 lg:pl-4 lg:pr-10 lg:py-10 backdrop-blur-lg rounded-2xl shadow-xl shadow-black/30">
            <h2 className="text-4xl font-bold text-white">Contact Us</h2>
            <div className="flex items-center gap-5">
              <Link href="/" className="text-xl font-medium text-white">Home</Link>

              <hr className="h-5 w-px bg-white" />

              <p className="text-xl font-medium text-blue-600 pointer-events-none">Contact</p>
            </div>
          </div>
        </div>
      </section>

      {/* Form with Map */}
      <section className='w-full min-h-screen flex flex-col md:flex-row'>
        <div className='w-1/2 hidden lg:block'>
          {/* <Location /> */}
          <img src="/assets/hero-sections-bg/contact-us.jpg" className='w-full h-full object-cover opacity-80 object-right' alt="" />
        </div>
        <div className='w-full lg:w-1/2 border-l border-px border-solid border-neutral-300'>
          <ContactForm />
        </div>
      </section>
    </NavFooterWrapper>
  )
}
