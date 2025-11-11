'use client'
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
import { useStore } from "zustand";
import { useRouter } from "next/navigation";

export default function UserHomeDropdown({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { logout } = useStore(useAuthStore);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none ring-0">
        {children}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mr-4">
        <DropdownMenuLabel>Profile Settings</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer">
          <Link onClick={() => logout(router)} href={''}>
            Log out
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
