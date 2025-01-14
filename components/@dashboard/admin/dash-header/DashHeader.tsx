import DashDropdown from "@/components/@dashboard/dropdown/dash-dropdown";
import { FaUserLock } from "react-icons/fa";
import { SidebarTrigger } from "@/components/ui/sidebar";

export default function DashHeader() {
    return (
        <header className="w-full flex items-center justify-between pt-2 pb-5 md:py-5 pl-2 pr-8">
            <SidebarTrigger className="md:hidden text-lg shadow-lg shadow-neutral-200 rounded-full !ml-4" />
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
    )
}
