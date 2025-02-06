"use client";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function DeleteDialog({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) {
  const delete_podcast = async (id: any) => {
    try {
      const response = await fetch(`http://localhost:8000/podcast/${id}/`, {
        method: "DELETE",
      });

      const result = await response.json();

      if (response.ok) {
        console.log("Podcast deleted successfully:", result);
        window.location.href = "/dashboard/admin";
      } else {
        console.error("Error during registration:", result);
      }
    } catch (error) {
      console.error("Error during API request:", error);
    } finally {
    }
  };
  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            selected podcast and remove your data from our servers.
          </DialogDescription>
          <Button className="bg-red-500 text-white" onClick={() => delete_podcast(id)}>Delete</Button>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
