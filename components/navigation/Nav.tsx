import { AiFillInstagram } from "react-icons/ai";
import { FaClock, FaFacebook, FaSquareXTwitter } from "react-icons/fa6";
import { IoMdMailOpen } from "react-icons/io";
import Logo from "../svgs/Logo";
import { CiMenuFries, CiSearch } from "react-icons/ci";

export default function Nav() {
  return (

    <>
      {/* Topbar */}
      <div className="w-full bg-[#4052d6] text-white flex justify-center md:justify-between items-center py-4 px-8">
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
      <nav className="flex justify-between items-center py-2 px-8">
        {/* Large screen logo */}
        <div className="block">
          <Logo width={120} height={120} />
        </div>

        {/* Routing List */}
        <ul className="hidden md:flex items-center gap-6">
          <li>Home</li>
          <li>About Us</li>
          <li>
            Podcasts
          </li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>

        {/* Search icons etc */}
        <div className="flex items-center gap-4">
          <CiSearch className="text-2xl md:text-3xl" />
          
          <CiMenuFries className="text-2xl md:text-3xl" />
        </div>
      </nav>
    </>
  )
}
