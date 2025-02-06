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
import { uploadPodcastSchema } from "@/schemas/dashboard/admin/upload/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useState } from "react";

interface UploadFormType {
  title: string;
  description: string;
  thumbnail: File;
  file: File;
}

export default function Page() {
  const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(null);

  const form = useForm<UploadFormType>({
    resolver: yupResolver(uploadPodcastSchema),
    defaultValues: {
      title: "",
      description: "",
      thumbnail: undefined as unknown as File, // Cast to File
      file: undefined as unknown as File, // Cast to File
    },
  });

  const onSubmit = async (formData: UploadFormType) => {
    console.log("Form Data Submitted:", formData);
    try {
      const form_data = new FormData();
      form_data.append("title", formData.title);
      form_data.append("desc", formData.description);
      form_data.append("image", formData.thumbnail);
      form_data.append("video", formData.file);

      const response = await fetch("http://localhost:8000/podcast/", {
        method: "POST",
        body: form_data,
      });

      const result = await response.json();

      if (response.ok) {
        console.log("Podcast created successfully:", result);
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

  return (
    <section className="px-5 md:px-10">
      <div className="grid place-items-center text-center pb-5 space-y-1">
        <h2 className="text-2xl md:text-3xl">Share Your Latest Podcasts</h2>
        <p className="text-neutral-500 text-sm">
          Upload your latest podcast episodes effortlessly!
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
