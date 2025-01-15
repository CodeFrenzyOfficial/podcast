import { FaUserLock } from "react-icons/fa";
import { SidebarTrigger } from "@/components/ui/sidebar";
import DashDropdown from "../admin/dropdown/dash-dropdown";
import UserDashDropdown from "../user/user-dash-dropdown/UserDashDropdown";
import { IoMdSettings } from "react-icons/io";

export default function DashHeader({ type = "admin" }: { type?: string }) {
    return (
        <header className="w-full flex items-center justify-between pt-2 pb-5 md:py-5 pl-2 pr-8">
            <SidebarTrigger className="md:hidden text-lg shadow-lg shadow-neutral-200 rounded-full !ml-4" />
            <div className="flex items-center overflow-hidden">
                {type === "admin" && <img src="/assets/dashboard/user.gif" className="h-16 w-16 object-contain" alt="" />}
                {type === "user" && <img src="/assets/dashboard/user-2.png" className="h-16 w-16 object-contain mx-4" alt="" />}
                <h2 className="text-xl font-medium">Welcome Back!</h2>
            </div>

            <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-2 mt-5 md:m-0">
                {/* User Name */}
                <h2 className="bg-black text-white py-1 px-3 rounded-lg">
                    {type === "admin" ? "Admin" : "User"}
                </h2>
                {
                    type === "admin" ? (
                        <DashDropdown>
                            <div className="p-2 md:p-4 text-xl rounded-full bg-neutral-100 hover:bg-neutral-200 cursor-pointer">
                                <FaUserLock />
                            </div>
                        </DashDropdown>
                    ) : (
                        <UserDashDropdown>
                            <div className="p-2 md:p-4 text-xl rounded-full bg-neutral-100 hover:bg-neutral-200 cursor-pointer">
                                <IoMdSettings className="custom-animate-spin" />
                            </div>
                        </UserDashDropdown>
                    )
                }
            </div>

        </header>
    )
}
