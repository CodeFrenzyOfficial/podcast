"use client";

import React, { useEffect, useState } from "react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";
import { editPodcastSchema } from "@/schemas/dashboard/admin/edit-podcast/schema";
import usePodcastStore from "@/store/podcast";
import { FaSpinner } from "react-icons/fa6";
import useAuthStore from "@/store/store";
import { useRouter } from "next/navigation";

interface EditFormType {
  title: string;
  description: string;
  thumbnail: File | any;
  file: File | any;
}

export default function PodcastEditSheet({
  children,
  podcast,
}: {
  children: React.ReactNode;
  podcast: any;
}) {
  const router = useRouter();
  const { user } = useAuthStore();
  const { fetch_podcasts, update_podcast, loading } = usePodcastStore();

  const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(null);
  const [video_preview, __video_preview] = useState<string | null>(null);

  const form = useForm<EditFormType>({
    // resolver: yupResolver(editPodcastSchema),
    defaultValues: {
      title: "",
      description: "",
      thumbnail: null,
      file: null,
    },
  });

  const onSubmit = async (formData: EditFormType) => {
    await update_podcast(podcast?.id, user?.uid, formData, router);
    fetch_podcasts(user?.uid);
  };

  const handleThumbnailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setThumbnailPreview(URL.createObjectURL(file));
      form.setValue("thumbnail", file, { shouldValidate: true });
    }
  };

  useEffect(() => {
    if (podcast) {
      form.setValue("title", podcast?.title);
      form.setValue("description", podcast?.desc);

      setThumbnailPreview(podcast?.imgSrc)
      __video_preview(podcast?.videoSrc)
    }
  }, [podcast])

  return (
    <Sheet>
      <SheetTrigger>{children}</SheetTrigger>
      <SheetContent>
        <SheetHeader className="w-full h-full space-y-10">
          <SheetTitle>Edit Podcast Video</SheetTitle>
          {/* Inputs */}
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full space-y-3"
            >
              <FormField
                control={form.control}
                name="thumbnail"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Thumbnail</FormLabel>
                    <FormControl>
                      <Input
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                          handleThumbnailChange(e);
                          field.onChange(e.target.files?.[0] || null);
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input placeholder="Podcast Title" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Input placeholder="Podcast Description" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="file"
                render={({ field: { onChange, value, ...field } }) => (
                  <FormItem>
                    <FormLabel>Podcast File</FormLabel>
                    <FormControl>
                      <Input
                        type="file"
                        accept="audio/*,video/*"
                        placeholder="Select Podcast File"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            onChange(file);
                          }
                        }}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {thumbnailPreview ? (
                <img
                  src={thumbnailPreview}
                  alt="Thumbnail Preview"
                  className="w-40 h-40 object-cover rounded-lg opacity-80"
                />
              ) : (
                // Skeleton
                <div className="grid place-items-start py-5">
                  <div className="w-40 h-40 bg-gradient-to-tl from-neutral-400/70 to-neutral-100/10 rounded-lg animate-pulse upload-podcast-skeleton relative overflow-hidden z-0 grid place-items-center">
                    <h2 className="text-sm">Thumnail Preview</h2>
                  </div>
                </div>
              )}

              {video_preview ? (
                <video className="w-40 h-40 object-fit rounded-lg opacity-80" controls>
                  <source src={video_preview} type="video/mp4" />
                  <source src={video_preview} type="video/ogg" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                // Skeleton
                <div className="grid place-items-start py-5">
                  <div className="w-40 h-40 bg-gradient-to-tl from-neutral-400/70 to-neutral-100/10 rounded-lg animate-pulse upload-podcast-skeleton relative overflow-hidden z-0 grid place-items-center">
                    <h2 className="text-sm">Video Preview</h2>
                  </div>
                </div>
              )}

              <Button disabled={loading}>{loading ? <FaSpinner /> : 'Save'}</Button>
            </form>
          </Form>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
