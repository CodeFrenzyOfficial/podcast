'use client'
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

    const onSubmit = (formData: UploadFormType) => {
        console.log("Form Data Submitted:", formData);
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
                <h2 className="text-2xl md:text-3xl">Upload Podcasts</h2>
                <p className="text-neutral-500 text-sm">
                    Upload your latest podcast episodes effortlessly!
                </p>
            </div>
            <div
                className="max-w-screen-lg mx-auto min-h-[50vh] rounded-2xl shadow-lg shadow-neutral-400/30 bg-gradient-to-tr from-neutral-400/70 to-neutral-100/70 grid place-items-center p-5"
            >
                <div className="w-[95%] md:w-[85%] space-y-2">
                    <UploadPodcast />
                    {thumbnailPreview && (
                        <div className=" mt-3">
                            <img
                                src={thumbnailPreview}
                                alt="Thumbnail Preview"
                                className="w-full h-40 object-cover rounded-lg opacity-80"
                            />
                        </div>
                    )}
                    <div className="grid place-items-center">
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="lg:w-2/3 space-y-3">
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
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Podcast File</FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="file"
                                                    accept="audio/*,video/*"
                                                    placeholder="Select Podcast File"
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
            </div>
        </section>
    );
}
