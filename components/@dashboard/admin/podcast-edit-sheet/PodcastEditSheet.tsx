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

interface EditFormType {
  title: string;
  description: string;
  thumbnail: File | any;
  file: File | any;
}

export default function PodcastEditSheet({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) {
  const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(null);
  const [video_preview, __video_preview] = useState<string | null>(null);

  const form = useForm<EditFormType>({
    resolver: yupResolver(editPodcastSchema),
    defaultValues: {
      title: "",
      description: "",
      thumbnail: null,
      file: null,
    },
  });

  const onSubmit = async (formData: EditFormType) => {
    console.log("Form Data Submitted:", formData);
    try {
      const form_data = new FormData();
      form_data.append("title", formData.title);
      form_data.append("desc", formData.description);
      form_data.append("image", formData.thumbnail);
      form_data.append("video", formData.file);

      const response = await fetch(`http://localhost:8000/podcast/${id}/`, {
        method: "PUT",
        body: form_data,
      });

      const result = await response.json();

      if (response.ok) {
        console.log("Blog created successfully:", result);
        window.location.href = "/dashboard/admin";
      } else {
        console.error("Error during registration:", result);
      }
    } catch (error) {
      console.error("Error during API request:", error);
    }
  };

  const handleThumbnailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setThumbnailPreview(URL.createObjectURL(file));
      form.setValue("thumbnail", file, { shouldValidate: true });
    }
  };

  const get_podcast_data = async () => {
    try {
      const response = await fetch(`http://localhost:8000/podcast/${id}/`, {
        method: "GET",
      });

      const result = await response.json();

      if (response.ok) {
        form.setValue("title", result.title);
        form.setValue("description", result.desc);

        setThumbnailPreview(result.imgSrc);
        __video_preview(result.videoSrc);
      } else {
        console.error("Error during registration:", result);
      }
    } catch (error) {
      console.error("Error during API request:", error);
    } finally {
    }
  };

  useEffect(() => {
    get_podcast_data();
  }, []);
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
                <div className="grid place-items-start p-5">
                  <div className="w-40 h-40 bg-gradient-to-tl from-neutral-400/70 to-neutral-100/10 rounded-lg animate-pulse upload-podcast-skeleton relative overflow-hidden z-0 grid place-items-center">
                    <h2 className="text-sm">Thumnail Preview</h2>
                  </div>
                </div>
              )}

              {video_preview ? (
                <video
                  src={video_preview}
                  className="w-40 h-40 object-cover rounded-lg opacity-80"
                />
              ) : (
                // Skeleton
                <div className="grid place-items-start py-5">
                  <div className="w-40 h-40 bg-gradient-to-tl from-neutral-400/70 to-neutral-100/10 rounded-lg animate-pulse upload-podcast-skeleton relative overflow-hidden z-0 grid place-items-center">
                    <h2 className="text-sm">Video Preview</h2>
                  </div>
                </div>
              )}

              <Button>Save</Button>
            </form>
          </Form>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
