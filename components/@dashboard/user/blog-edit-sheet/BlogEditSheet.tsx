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
import { editBlogSchema } from "@/schemas/dashboard/user/edit-blog/schema";
import useAuthStore from "@/store/store";
import useBlogStore from "@/store/blog";
import { useStore } from "zustand";
import { useRouter } from "next/navigation";
import { Textarea } from "@/components/ui/textarea";
import { FaCircleNotch } from "react-icons/fa";
import { useToast } from "@/hooks/use-toast";

interface EditFormType {
  title: string;
  description: string;
  thumbnail: File;
}

export default function PodcastEditSheet({
  children,
  blog,
}: {
  children: React.ReactNode;
  blog: any;
}) {
  const { toast } = useToast()
  const router = useRouter();
  const { user } = useStore(useAuthStore);
  const { update_blog, fetch_blogs, fetch_user_blogs, loading } = useStore(useBlogStore);

  const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(null);
  const form = useForm<EditFormType>({
    resolver: yupResolver(editBlogSchema),
    defaultValues: {
      title: "",
      description: "",
      thumbnail: undefined as unknown as File, // Cast to File
    },
  });

  const onSubmit = async (formData: EditFormType) => {
    update_blog(formData, user?.uid, blog.id, router, toast);
    fetch_blogs();
    fetch_user_blogs(user?.uid);
  };

  const handleThumbnailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setThumbnailPreview(URL.createObjectURL(file));
      form.setValue("thumbnail", file, { shouldValidate: true });
    }
  };

  useEffect(() => {
    // console.log(blog);

    if (blog) {
      form.setValue("title", blog?.title);
      form.setValue("description", blog?.desc);
      setThumbnailPreview(blog?.imgSrc[0])
    }
  }, [blog])

  return (
    <Sheet>
      <SheetTrigger>{children}</SheetTrigger>
      <SheetContent>
        <SheetHeader className="w-full h-full space-y-10">
          <SheetTitle>Edit Blog</SheetTitle>
          {/* Inputs */}
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full space-y-3 overflow-auto"
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
                          field.onChange(e.target.files || null);
                        }}
                        multiple={true}
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
                      {/* <Input placeholder="Podcast Description" {...field} /> */}
                      <Textarea
                        maxLength={5000}
                        rows={8}
                        cols={8}
                        placeholder="Description of the blog"
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

              <Button>{loading ? <FaCircleNotch className="animate-spin" /> : "Save"}</Button>
            </form>
          </Form>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
