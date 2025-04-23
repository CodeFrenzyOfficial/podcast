import BlogList from '@/components/blogs-list/BlogList';
import NavFooterWrapper from '@/wrappers/NavFooterWrapper';
import Link from 'next/link';

export default function page() {
  return (
    <NavFooterWrapper>
      <section className="blogs-hero-bg">
        <div className="min-h-[50vh] max-w-screen-lg mx-auto flex justify-center lg:justify-normal items-center">
          <div className="space-y-3 px-5 py-10 lg:pl-4 lg:pr-10 lg:py-10 backdrop-blur-lg rounded-2xl shadow-xl shadow-black/30">
            <h2 className="text-4xl font-bold text-white">Explore Blogs</h2>
            <div className="flex items-center gap-5">
              <Link href="/" className="text-xl font-medium text-white">Home</Link>
              <hr className="h-5 w-px bg-white" />
              <p className="text-xl font-medium text-blue-600 pointer-events-none">Blogs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Blogs Section */}
      <section className='space-y-10 py-10 px-10 lg:px-0 min-h-screen'>
        <div className='grid place-items-center space-y-2 text-center'>
          <p className='text-neutral-500'>All Blogs</p>
          <h2 className='text-4xl font-semibold'>Explore Latest Blogs on
            <span className="text-blue-500"> Go</span>
            <span className="text-yellow-400">Win</span>
            <span className="text-blue-500">Out</span>
          </h2>
        </div>

        <BlogList />

        {/* Pagination Controls */}
        {/* <div className='w-full flex justify-center items-center gap-2'>
          <div className='rounded-full w-10 h-10 grid place-items-center text-base shadow-lg shadow-black/50 cursor-pointer bg-black text-white opacity-50'>
            <FaArrowLeftLong />
          </div>
          <div className='rounded-full w-10 h-10 grid place-items-center text-base shadow-lg shadow-black/50 cursor-pointer bg-black text-white'>
            1
          </div>
          <div className='rounded-full w-10 h-10 grid place-items-center text-base shadow-lg shadow-black/50 cursor-pointer bg-black text-white'>
            2
          </div>
          <div className='rounded-full w-10 h-10 grid place-items-center text-base shadow-lg shadow-black/50 cursor-pointer bg-black text-white'>
            ...
          </div>
          <div className='rounded-full w-10 h-10 grid place-items-center text-base shadow-lg shadow-black/50 cursor-pointer bg-black text-white'>
            <FaArrowRightLong />
          </div>

        </div> */}
      </section>
    </NavFooterWrapper>
  )
}
