'use client'

import React from 'react'
import Link from 'next/link'
import { RiBuildingFill, RiHome9Fill } from "react-icons/ri";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import EpisodeButton from '../buttons/social-icons/episode-cards-button/EpisodeButton';
import { BiSolidVideos } from 'react-icons/bi';
import { FaWpforms } from 'react-icons/fa6';
import { IoIosChatboxes } from 'react-icons/io';

export default function HomeSidebar({ children, user }: { children: React.ReactNode, user: any }) {
    const pathname = usePathname()

    const menuLinks = [
        {
            name: "Home",
            href: "/",
            icon: <RiHome9Fill className='text-xl' />
        },
        {
            name: "About",
            href: "/about",
            icon: <RiBuildingFill className='text-xl' />

        },
        {
            name: "Podcasts",
            href: "/podcasts",
            icon: <BiSolidVideos className='text-xl' />

        },
        {
            name: "Blogs",
            href: "/blogs",
            icon: <IoIosChatboxes className='text-xl' />

        },
        {
            name: "Contact us",
            href: "/contact",
            icon: <FaWpforms className='text-xl' />

        }
    ]

    return (
        <Sheet>
            <SheetTrigger>{children}</SheetTrigger>
            <SheetContent>
                <SheetHeader className='w-full h-full space-y-10'>
                    <SheetTitle>Explore</SheetTitle>
                    <div className='h-full flex flex-col justify-between items-start'>
                        {/* Menu Links */}
                        <div className='space-y-5'>
                            {
                                menuLinks.map((link, index) => (
                                    <div className={cn('flex items-center gap-2',
                                        pathname === link.href ? 'text-blue-600' : 'text-black',
                                    )} key={index}>
                                        {link.icon}
                                        <Link href={link.href} className={'text-2xl font-medium'}>
                                            {link.name}
                                        </Link>
                                    </div>
                                ))
                            }
                        </div>

                        {/* Login Signup Button */}
                        {
                            user === null && <div className='w-full flex items-center justify-between'>
                                <EpisodeButton content="Login" link="/login" />
                                <EpisodeButton content="Signup" link="/signup" />
                            </div>
                        }
                    </div>

                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}

