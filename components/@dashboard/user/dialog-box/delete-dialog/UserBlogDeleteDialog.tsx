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

export default function UserBlogDeleteDialog({
  children,
  delete_function,
  id,
}: {
  children: React.ReactNode;
  delete_function: (id: string) => void;
  id: string;
}) {
  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently this blog from
            your account and remove your data from our servers.
          </DialogDescription>
          <Button
            onClick={() => delete_function(id)}
            className="bg-red-500 text-white"
          >
            Delete
          </Button>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
