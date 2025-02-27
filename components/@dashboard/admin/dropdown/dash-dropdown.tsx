import React from "react";
import Link from "next/link";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import useAuthStore from "@/store/store";

export default function DashDropdown({ children }: { children: React.ReactNode }) {
    const { logout } = useAuthStore();
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="outline-none ring-0">{children}</DropdownMenuTrigger>
            <DropdownMenuContent className="mr-4">
                <DropdownMenuLabel>Admin Settings</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Inbox</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                    <Link onClick={() => logout()} href={''}>
                        Log out
                    </Link>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
