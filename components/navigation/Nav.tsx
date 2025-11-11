"use client";

import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook, FaSquareXTwitter } from "react-icons/fa6";
import { IoMdMailOpen } from "react-icons/io";
import Logo from "../svgs/Logo";
import { CiMenuFries } from "react-icons/ci";
import Link from "next/link";
import HomeSidebar from "../home-sidebar/HomeSidebar";
import EpisodeButton from "../buttons/social-icons/episode-cards-button/EpisodeButton";
import useAuthStore from "@/store/store";
import { useStore } from "zustand";
import AdminHomeDropdown from "../dropdown/admin/AdminHomeDropdown";
import UserHomeDropdown from "../dropdown/user/UserHomeDropdown";

export default function Nav() {
  const { user } = useStore(useAuthStore);
  return (
    <>
      {/* Topbar */}
      <div className="w-full bg-[#4052d6] text-white flex justify-center md:justify-between items-center py-3 px-8">
        <div className="flex items-center gap-4">
          {/* <div className="flex gap-2 items-center">
            <FaClock className="text-base" />
            <p className="text-xs">Mon - Sun: 8AM</p>
          </div> */}
          <div className="flex gap-2 items-center">
            <IoMdMailOpen className="text-lg" />
            <a href="mailto:info@gowinout.com" className="cursor-pointer text-xs">info@gowinout.com</a>
          </div>
        </div>

        {/* social Icons */}
        <div className="hidden md:flex items-center gap-4">
          <Link href={"https://www.facebook.com/gowinout.podcast/"}>
            <FaFacebook />
          </Link>
          <Link
            href={
              "https://www.instagram.com/thegowinoutpodcast?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            }
          >
            <AiFillInstagram className="text-lg" />
          </Link>
          <Link href={"https://x.com/_djtycoon"}>
            <FaSquareXTwitter />
          </Link>
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
          <Link href="/podcasts">Podcasts</Link>
          <Link href="/blogs">Blogs</Link>
          <Link href="/contact">Contact</Link>
        </ul>

        {/* Profile Settings after login */}
        <div className="flex items-center gap-4">
          {user?.uid ? (
            <Link
              href={
                user?.role === "admin" ? "/dashboard/admin" : ""
              }
            >
              {
                user?.role === 'admin' ? (
                  // admin profile
                  <AdminHomeDropdown>
                    <div className="flex items-center gap-2">
                      <span>{`${user.f_name}`}</span>
                      <span className="text-base p-2 w-10 h-10 rounded-full grid place-items-center bg-blue-700 text-white font-semibold">
                        {`
                          ${String(user.f_name).charAt(0).toUpperCase() +
                          String(user.l_name).charAt(0).toUpperCase()}
                            `}
                      </span>
                    </div>
                  </AdminHomeDropdown>
                )
                  // user profile
                  :
                  <UserHomeDropdown>
                    <div className="flex items-center gap-2">
                      <span>{`${user.f_name}`}</span>
                      <span className="text-base p-2 w-10 h-10 rounded-full grid place-items-center bg-blue-700 text-white font-semibold">
                        {`
                       ${String(user.f_name).charAt(0).toUpperCase() +
                          String(user.l_name).charAt(0).toUpperCase()}
                      `}
                      </span>
                    </div>
                  </UserHomeDropdown>
              }
            </Link>
          ) : (
            <EpisodeButton content="Login" link="/login" />
          )}

          <div className="md:hidden">
            <HomeSidebar user={user}>
              <div className="cursor-pointer p-2 transition-all duration-200 hover:bg-black hover:text-white rounded-full">
                <CiMenuFries className="text-2xl md:text-2xl" />
              </div>
            </HomeSidebar>
          </div>
        </div>
      </nav>
    </>
  );
}
