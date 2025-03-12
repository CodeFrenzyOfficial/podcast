import { AiFillInstagram } from "react-icons/ai";
import {
  FaArrowRight,
  FaFacebook,
  FaLocationDot,
  FaSquareXTwitter,
} from "react-icons/fa6";
import Logo from "../svgs/Logo";
import { IoIosTime, IoMdMail } from "react-icons/io";
import { MdLocalPhone } from "react-icons/md";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-black">
      <footer className=" w-full min-h-[60vh] px-10 py-10">
        <div className="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* card 1 */}
          <div className="space-y-5">
            <Logo width={100} height={100} />
            <p className="text-white text-sm">
              To follow news and events in nightlife local to your area follow our social media accounts
            </p>
            {/* social icons */}
            <div className="flex items-center gap-4">
              <Link
                href="https://www.facebook.com/gowinout.podcast/"
                className="bg-white p-3 rounded-full"
              >
                <FaFacebook className="text-xl" />
              </Link>
              <Link
                href="https://www.instagram.com/thegowinoutpodcast?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                className="bg-white p-3 rounded-full"
              >
                <AiFillInstagram className="text-xl" />
              </Link>
              <Link
                href="https://x.com/_djtycoon"
                className="bg-white p-3 rounded-full"
              >
                <FaSquareXTwitter className="text-xl" />
              </Link>
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
                <Link href={"/about"}>About</Link>
              </div>
              <div className="flex items-center gap-2">
                <FaArrowRight />
                <Link href={"/podcasts"}>All Podcasts</Link>
              </div>
              <div className="flex items-center gap-2">
                <FaArrowRight />
                <Link href={"/blogs"}>Blogs</Link>
              </div>
              <div className="flex items-center gap-2">
                <FaArrowRight />
                <Link href={"/contact"}>Contact Us</Link>
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
              {/* <div className="flex items-center gap-2">
              <FaLocationDot />
              <h2>
                2563 Broklyn Golden Street, New York United States of America
              </h2>
            </div> */}
              <div className="flex items-center gap-2">
                <MdLocalPhone />
                <h2>+1 973 856 4404</h2>
              </div>
              {/* <div className="flex items-center gap-2">
              <IoIosTime />
              <h2>Mon - Sun: 8AM - 8PM</h2>
            </div> */}
              <div className="flex items-center gap-2">
                <IoMdMail />
                <h2> info@gowinout.com</h2>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="w-full text-center border-t border-solid border-white/30 py-4 grid place-items-center">
        <div className="flex items-center text-white gap-1">
          <h2>Powered By</h2>
          <a target="_blank" href="https://codefrenzy.co">&#169; Code Frenzy</a>
        </div>
      </div>
    </div>

  );
}
