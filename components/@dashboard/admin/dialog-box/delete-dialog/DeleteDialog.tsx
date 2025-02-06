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
import usePodcastStore from "@/store/podcast";
import useAuthStore from "@/store/store";

export default function DeleteDialog({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) {

  const { user } = useAuthStore()
  const { delete_podcast, fetch_podcasts } = usePodcastStore();

  const remove_podcast = async() => {
    await delete_podcast(user.uid, id)
    fetch_podcasts(user.uid);
  }
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
          <Button className="bg-red-500 text-white" onClick={() => remove_podcast()}>Delete</Button>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
