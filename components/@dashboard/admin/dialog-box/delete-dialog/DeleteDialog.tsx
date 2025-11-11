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
import { useToast } from "@/hooks/use-toast";

export default function DeleteDialog({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) {
  const { toast } = useToast()
  const { user } = useAuthStore();
  const { delete_podcast, fetch_podcasts } = usePodcastStore();
  const [open, setOpen] = React.useState(false);

  const remove_podcast = async () => {
    await delete_podcast(user.uid, id, toast);
    fetch_podcasts();
    setOpen(false); // Close the dialog after deleting
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <span onClick={() => setOpen(true)}>{children}</span>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            selected podcast and remove your data from our servers.
          </DialogDescription>
          <Button className="bg-red-500 text-white" onClick={remove_podcast}>
            Delete
          </Button>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
