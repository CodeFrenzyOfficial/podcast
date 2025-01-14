'use client'
import { Home, Inbox, Podcast } from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import Logo from "../../svgs/Logo"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import EpisodeButton from "../../buttons/social-icons/episode-cards-button/EpisodeButton"

// Menu items.
const items = [
    {
        title: "Home",
        url: "/dashboard/admin",
        icon: Home,
    },
    {
        title: "Podcasts",
        url: "/dashboard/admin/upload-podcast",
        icon: Podcast,
    },
    {
        title: "Inbox",
        url: "/dashboard/admin/inbox",
        icon: Inbox,
    }
]

export function AppSidebar() {
    const pathname = usePathname()
    return (
        <Sidebar className="rounded-r-3xl shadow-lg">
            <SidebarContent>
                <div className="grid place-items-center">
                    <Logo width={110} height={110} />
                </div>
                <SidebarGroup className="relative h-[70%] overflow-hidden">
                    <SidebarGroupLabel>Explore</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title} className={cn('rounded-lg transition-all duration-200',
                                    pathname === item.url && 'bg-black/90 text-white pointer-events-none border-none outline-none ring-0',
                                )}>
                                    <SidebarMenuButton asChild className="border-none outline-none ring-0">
                                        <Link href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                    <div className="absolute bottom-10 left-3 w-full h-px bg-gradient-to-tr from-white via-white/50 to-transparent">
                        <EpisodeButton className="w-2/3 bg-black/90 text-sm" link="/" content="Logout" />
                    </div>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}