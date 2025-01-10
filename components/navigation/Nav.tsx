import { AiFillInstagram } from "react-icons/ai";
import { FaClock, FaFacebook, FaSquareXTwitter } from "react-icons/fa6";
import { IoMdMailOpen } from "react-icons/io";
import Logo from "../svgs/Logo";
import { CiMenuFries, CiSearch } from "react-icons/ci";
import Link from "next/link";
import HomeSidebar from "../home-sidebar/HomeSidebar";
import EpisodeButton from "../buttons/social-icons/episode-cards-button/EpisodeButton";

export default function Nav() {
  return (
    <>
      {/* Topbar */}
      <div className="w-full bg-[#4052d6] text-white flex justify-center md:justify-between items-center py-3 px-8">
        <div className="flex items-center gap-4">
          <div className="flex gap-2 items-center">
            <FaClock className="text-base" />
            <p className="text-xs">Mon - Sun: 8AM</p>
          </div>
          <div className="flex gap-2 items-center">
            <IoMdMailOpen className="text-lg" />
            <p className="text-xs">8PMinfo@example.com</p>
          </div>
        </div>

        {/* social Icons */}
        <div className="hidden md:flex items-center gap-4">
          <FaFacebook />
          <AiFillInstagram className="text-lg" />
          <FaSquareXTwitter />
        </div>

      </div>

      {/* navigation */}
      <nav className="flex justify-between items-center py-1 px-8 z-[100] bg-white">
        {/* Large screen logo */}
        <Link href="/" className="block">
          <Logo width={110} height={110} />
        </Link>

        {/* Routing List */}
        <ul className="hidden md:flex items-center gap-6">
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/podcasts">
            Podcasts
          </Link>
          <Link href="/blogs">Blog</Link>
          <Link href="/contact">Contact</Link>
        </ul>

        {/* Search icons etc */}
        <div className="flex items-center gap-4">
          <EpisodeButton content="Login" link="/login" />

          <div className="md:hidden">
            <HomeSidebar>
              <div className="cursor-pointer p-2 transition-all duration-200 hover:bg-black hover:text-white rounded-full">
                <CiMenuFries className="text-2xl md:text-2xl" />
              </div>
            </HomeSidebar>
          </div>

        </div>
      </nav>
    </>
  )
}
