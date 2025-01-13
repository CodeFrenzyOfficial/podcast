import React from "react";
import dynamic from "next/dynamic";
const NextProgress = dynamic(
    () => import("@/components/dashboard/progress-bar/dashboard-progressbar"),
);

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar/AppSidebar";
import DashDropdown from "@/components/dashboard/dropdown/dash-dropdown";
import { FaUserLock } from "react-icons/fa";
export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <NextProgress />
            <AppSidebar />
            <main className="w-full max-w-screen-xl mx-auto">
                <SidebarTrigger className="md:hidden text-lg shadow-lg shadow-neutral-200 rounded-full" />
                <header className="w-full flex items-center justify-between py-5 pl-2 pr-8">
                    <div className="flex items-center overflow-hidden">
                        <img src="/assets/dashboard/user.gif" className="h-16 w-16 object-contain" alt="" />
                        <h2 className="text-xl font-medium">Welcome Back!</h2>
                    </div>

                    <DashDropdown>
                        <div className="p-4 text-xl rounded-full bg-neutral-100 hover:bg-neutral-200 cursor-pointer">
                            <FaUserLock />
                        </div>
                    </DashDropdown>
                </header>
                {children}
            </main>
        </SidebarProvider>
    )
}
