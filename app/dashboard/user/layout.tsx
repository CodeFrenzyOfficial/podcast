import React from "react";
import dynamic from "next/dynamic";
const NextProgress = dynamic(
    () => import("@/components/@dashboard/progress-bar/dashboard-progressbar"),
);

import { SidebarProvider } from "@/components/ui/sidebar";
import DashHeader from "@/components/@dashboard/admin/dash-header/DashHeader";
import { UserSidebar } from "@/components/@dashboard/user/app-sidebar/AppSidebar";

export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <NextProgress />
            <UserSidebar />
            <main className="w-full max-w-screen-xl mx-auto pb-10">
                <DashHeader type="user" />
                {children}
            </main>
        </SidebarProvider>
    )
}
