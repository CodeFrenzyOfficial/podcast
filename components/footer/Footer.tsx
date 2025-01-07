import { AiFillInstagram } from "react-icons/ai";
import { FaArrowRight, FaFacebook, FaLocationDot, FaSquareXTwitter } from "react-icons/fa6";
import Logo from "../svgs/Logo";
import { IoIosTime, IoMdMail } from "react-icons/io";
import { MdLocalPhone } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-black w-full min-h-[60vh] px-10 py-10 border-t border-px border-solid border-white">
      <div className="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* card 1 */}
        <div className="space-y-5">
          <Logo width={100} height={100} />
          <p className="text-white text-sm">Our pick of the best podcasts on Spotify, Apple Podcasts and more covering all trends.</p>
          {/* social icons */}
          <div className="flex items-center gap-4">
            <div className="bg-white p-3 rounded-full">
              <FaFacebook className="text-xl" />
            </div>
            <div className="bg-white p-3 rounded-full">
              <AiFillInstagram className="text-xl" />
            </div>
            <div className="bg-white p-3 rounded-full">
              <FaSquareXTwitter className="text-xl" />
            </div>
          </div>
        </div>

        {/* Explore */}
        <div className="space-y-8 pt-4">
          <div className="relative">
            <h2 className="text-xl font-semibold text-white">Explore</h2>
            <div className="absolute bottom-0 left-0 w-1/3  h-px bg-gradient-to-tr from-white via-white/50 to-transparent" />
          </div>

          <div className="text-white space-y-3">
            <div className="flex items-center gap-2">
              <FaArrowRight />
              <h2>
                About
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <FaArrowRight />
              <h2>
                All Podcasts
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <FaArrowRight />
              <h2>
                Blogs
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <FaArrowRight />
              <h2>
                Contact Us
              </h2>
            </div>
          </div>
        </div>

        {/* Get in Touch */}
        <div className="space-y-8 pt-4">
          <div className="relative">
            <h2 className="text-xl font-semibold text-white">Get In Touch</h2>
            <div className="absolute bottom-0 left-0 w-1/3  h-px bg-gradient-to-tr from-white via-white/50 to-transparent" />
          </div>

          <div className="text-white space-y-3">
            <div className="flex items-center gap-2">
              <FaLocationDot />
              <h2>
                2563 Broklyn Golden Street, New York United States of America
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <MdLocalPhone />
              <h2>
                +44012345678
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <IoIosTime />
              <h2>
                Mon - Sun: 8AM - 8PM
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <IoMdMail />
              <h2>
                info@example.com
              </h2>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
