"use client";
import UploadPodcast from "@/components/@dashboard/admin/upload-podcast/UploadPodcast";
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
import { useState } from "react";
import { uploadBlogSchema } from "@/schemas/dashboard/user/upload/schema";
import useBlogStore from "@/store/blog";
import { useRouter } from "next/navigation";
import useAuthStore from "@/store/store";

interface UploadFormType {
  title: string;
  description: string;
  thumbnail: FileList;
}

export default function Page() {
  const { user } = useAuthStore();
  const router = useRouter();

  const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(null);
  const { create_admin_blog } = useBlogStore()

  const form = useForm<UploadFormType>({
    resolver: yupResolver(uploadBlogSchema),
    defaultValues: {
      title: "",
      description: "",
      thumbnail: undefined as unknown as FileList, // Cast to File
    },
  });

  const onSubmit = async (formData: UploadFormType) => {
    create_admin_blog(formData, user?.uid, router)
  };

  const handleThumbnailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      setThumbnailPreview(URL.createObjectURL(files[0]));
      form.setValue("thumbnail", files, { shouldValidate: true });
    }
  };

  return (
    <section className="px-5 md:px-10">
      <div className="grid place-items-center text-center pb-5 space-y-1">
        <h2 className="text-2xl md:text-3xl">Share Blogs</h2>
        <p className="text-neutral-500 text-sm">
          Upload your blogs effortlessly!
        </p>
      </div>
      <div className="max-w-screen-lg mx-auto min-h-[50vh] rounded-2xl shadow-lg shadow-neutral-400/30 bg-gradient-to-tl from-neutral-400/70 to-neutral-100/10 p-5">
        <UploadPodcast />
        <div className="flex flex-col-reverse lg:flex-row justify-around items-center gap-3">
          <div className="w-full lg:w-2/3 space-y-2 mt-5">
            <div className="grid place-items-start">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="lg:w-2/3 space-y-3"
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
                          <Input placeholder="Podcast Description" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button size="lg" type="submit">
                    Upload
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
            // Skeleton
            <div className="w-full h-full lg:w-1/2 mt-3 grid place-items-center p-5">
              <div className="w-72 h-72 bg-gradient-to-tl from-neutral-400/70 to-neutral-100/10 rounded-lg animate-pulse upload-podcast-skeleton relative overflow-hidden z-0 grid place-items-center">
                <h2 className="text-xl">Thumnail Preview</h2>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
