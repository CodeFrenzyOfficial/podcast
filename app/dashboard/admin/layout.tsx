import React from "react";
import dynamic from "next/dynamic";
const NextProgress = dynamic(
    () => import("@/components/@dashboard/progress-bar/dashboard-progressbar"),
);

import { SidebarProvider } from "@/components/ui/sidebar";
import { AdminSidebar } from "@/components/@dashboard/admin/app-sidebar/AppSidebar";
import DashHeader from "@/components/@dashboard/dash-header/DashHeader";

export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <NextProgress />
            <AdminSidebar />
            <main className="w-full max-w-screen-xl mx-auto pb-10">
                <DashHeader />
                {children}
            </main>
        </SidebarProvider>
    )
}
