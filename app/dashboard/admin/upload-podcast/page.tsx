"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { uploadPodcastSchema } from "@/schemas/dashboard/admin/upload/schema";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import useAuthStore from "@/store/store";
import usePodcastStore from "@/store/podcast";
import { useStore } from "zustand";
import { useToast } from "@/hooks/use-toast";
import { FaCircleNotch } from "react-icons/fa6";
import { getAuth } from "firebase/auth";
import RichTextEditor from "@/components/@dashboard/admin/upload-podcast/RichTextEditor";

interface UploadFormType {
  title: string;
  description: string;
  category: string;
  thumbnail: File;
  file: File;
}

export default function UploadPodcastPage() {
  const router = useRouter();
  const { toast } = useToast();
  const { user } = useStore(useAuthStore);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [retryData, setRetryData] = useState<UploadFormType | null>(null);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const { loading, uploadProgress, create_podcast } = useStore(usePodcastStore);

  const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(null);

  const firebaseUid = getAuth().currentUser?.uid;
  const form = useForm<UploadFormType>({
    resolver: yupResolver(uploadPodcastSchema),
    defaultValues: {
      title: "",
      description: "",
      category: "",
      thumbnail: undefined as unknown as File,
      file: undefined as unknown as File,
    },
  });

  // const onSubmit = async (formData: UploadFormType) => {
  //   if (!user?.uid) {
  //     toast({
  //       title: "Authentication Error",
  //       description: "Please log in to upload podcasts",
  //       variant: "destructive",
  //     });
  //     return;
  //   }

  //   const payload = {
  //     ...formData,
  //     user_id: user.uid,
  //   };

  //   setUploadError(null);
  //   setRetryData(payload); // Save for retry

  //   try {
  //     await create_podcast(payload, router, user, toast);
  //     form.reset();
  //     setThumbnailPreview(null);
  //     setRetryData(null);
  //   } catch (error: any) {
  //     setUploadError("Upload failed. Please try again.");
  //   }
  // };

  const onSubmit = async (formData: UploadFormType) => {
    if (!firebaseUid) {
      toast({
        title: "Authentication Error",
        description: "Please log in to upload podcasts",
        variant: "destructive",
      });
      return;
    }

    const payload = {
      ...formData,
      user_id: user.uid,
    };

    setUploadError(null);
    setRetryData(payload);

    try {
      await create_podcast(payload, router, user, toast, firebaseUid);
      form.reset();
      setThumbnailPreview(null);
      setRetryData(null);
    } catch (error) {
      setUploadError("Upload failed. Please try again.");
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
        <div className="flex flex-col-reverse lg:flex-row justify-around items-center gap-3">
          <div className="w-full lg:w-2/3 space-y-2 mt-5">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="lg:w-full space-y-3"
              >
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter podcast title" {...field} />
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
                        <RichTextEditor
                          value={field.value}
                          onChange={field.onChange}
                          placeholder="Enter description"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Category</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="dj">DJ</SelectItem>
                          <SelectItem value="prmoter/host">
                            Promoter/Host
                          </SelectItem>
                          <SelectItem value="service worker">
                            Service Worker
                          </SelectItem>
                          <SelectItem value="venue owner">
                            Venue Owner
                          </SelectItem>
                          <SelectItem value="regular patron">
                            Regular Patron (Party Goer)
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

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
                      {thumbnailPreview && (
                        <img
                          src={thumbnailPreview}
                          alt="Thumbnail Preview"
                          className="w-32 h-32 object-cover rounded-lg mt-2"
                        />
                      )}
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="file"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Podcast File</FormLabel>
                      <FormControl>
                        <Input
                          type="file"
                          accept="video/*"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                              field.onChange(file);
                            }
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Submit or Retry Button */}
                {!uploadError ? (
                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? (
                      <div className="flex items-center gap-2">
                        <FaCircleNotch className="animate-spin" />
                        <span>Uploading...</span>
                      </div>
                    ) : (
                      "Upload Podcast"
                    )}
                  </Button>
                ) : (
                  <div className="w-full space-y-2">
                    <p className="text-red-500 text-sm text-center">
                      {uploadError}
                    </p>
                    <Button
                      type="button"
                      variant="outline"
                      className="w-full"
                      onClick={async () => {
                        if (retryData && user?.uid) {
                          try {
                            await create_podcast(
                              retryData,
                              router,
                              user,
                              toast
                            );
                            form.reset();
                            setThumbnailPreview(null);
                            setUploadError(null);
                            setRetryData(null);
                          } catch (error) {
                            setUploadError("Retry failed. Please try again.");
                          }
                        }
                      }}
                    >
                      Retry Upload
                    </Button>
                  </div>
                )}

                {/* Progress Bar */}
                {loading && (
                  <div className="mt-4 w-full">
                    <div className="w-full bg-neutral-200 rounded-full h-3 overflow-hidden">
                      <div
                        className="bg-blue-600 h-full transition-all duration-300"
                        style={{ width: `${Math.round(uploadProgress)}%` }}
                      ></div>
                    </div>
                    <p className="text-sm text-neutral-600 mt-1 text-right">
                      Uploading: {Math.round(uploadProgress)}%
                    </p>
                  </div>
                )}
              </form>
            </Form>
          </div>

          {/* Thumbnail Preview Side */}
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
              <div className="w-72 h-72 bg-gradient-to-tl from-neutral-400/70 to-neutral-100/10 rounded-lg animate-pulse relative overflow-hidden grid place-items-center">
                <h2 className="text-xl">Thumbnail Preview</h2>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
