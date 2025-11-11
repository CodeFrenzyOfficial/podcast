"use client";
import { Button } from "@/components/ui/button";
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
import { useState, useCallback } from "react";
import { uploadBlogSchema } from "@/schemas/dashboard/user/upload/schema";
import useBlogStore from "@/store/blog";
import { useRouter } from "next/navigation";
import useAuthStore from "@/store/store";
import { useStore } from "zustand";
import { FaCircleNotch } from "react-icons/fa6";
import { getAuth } from "firebase/auth";
import { useToast } from "@/hooks/use-toast";
import RichTextEditor from "@/components/@dashboard/admin/upload-podcast/RichTextEditor";

interface UploadFormType {
  title: string;
  description: string;
  thumbnail: FileList | any;
}

export default function Page() {
  const { user } = useStore(useAuthStore);
  const { create_admin_blog, loading } = useStore(useBlogStore);
  const { toast } = useToast();

  const router = useRouter();
  const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(null);
  const [contentImages, setContentImages] = useState<File[]>([]);

  // Get Firebase UID directly from Firebase Auth
  const firebaseUid = getAuth().currentUser?.uid;

  const form = useForm<UploadFormType>({
    resolver: yupResolver(uploadBlogSchema),
    defaultValues: {
      title: "",
      description: "",
      thumbnail: undefined as unknown as FileList,
    },
  });

  const onSubmit = async (formData: UploadFormType) => {
    // Validate user is authenticated
    if (!firebaseUid) {
      toast({
        title: "Authentication Error",
        description: "Please log in to upload blogs",
        variant: "destructive",
      });
      return;
    }

    // Add content images to the payload
    const payload = {
      ...formData,
      content_images: contentImages,
    };

    create_admin_blog(payload, firebaseUid, router);
  };

  const handleThumbnailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      setThumbnailPreview(URL.createObjectURL(files[0]));
      form.setValue("thumbnail", files, { shouldValidate: true });
    }
  };

  const handleImagesChange = useCallback((images: File[]) => {
    setContentImages(images);
  }, []);

  return (
    <section className="px-5 md:px-10">
      <div className="grid place-items-center text-center pb-5 space-y-1">
        <h2 className="text-2xl md:text-3xl">Share Blogs</h2>
        <p className="text-neutral-500 text-sm">
          Upload your blogs effortlessly!
        </p>
      </div>
      <div className="max-w-screen-lg mx-auto min-h-[50vh] rounded-2xl shadow-lg shadow-neutral-400/30 bg-gradient-to-tl from-neutral-400/70 to-neutral-100/10 p-5">
        <div className="flex flex-col-reverse lg:flex-row justify-around items-center gap-3">
          <div className="w-full lg:w-2/3 space-y-2 mt-5">
            <div className="grid place-items-start">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="lg:w-full space-y-3"
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
                          <Input placeholder="Blog Title" {...field} />
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
                          <div className="relative">

                            <RichTextEditor
                              value={field.value || ""}
                              onChange={(html) => field.onChange(html)}
                              onImagesChange={handleImagesChange}
                            />
                          </div>

                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button size="lg" type="submit" disabled={loading}>
                    {loading ? (
                      <div className="flex items-center gap-2">
                        <FaCircleNotch className="animate-spin" />
                        <span>Uploading...</span>
                      </div>
                    ) : (
                      "Upload Blog"
                    )}
                  </Button>
                </form>
              </Form>
            </div>
          </div>

          {thumbnailPreview ? (
            <div className="w-full lg:w-1/3 mt-3 h-full grid place-items-center p-5 bg-white">
              <img
                src={thumbnailPreview}
                alt="Thumbnail Preview"
                className="w-full h-full object-cover rounded-lg opacity-80"
              />
            </div>
          ) : (
            <div className="w-full h-full lg:w-1/2 mt-3 grid place-items-center p-5">
              <div className="w-72 h-72 bg-gradient-to-tl from-neutral-400/70 to-neutral-100/10 rounded-lg animate-pulse upload-podcast-skeleton relative overflow-hidden z-0 grid place-items-center">
                <h2 className="text-xl">Thumbnail Preview</h2>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
