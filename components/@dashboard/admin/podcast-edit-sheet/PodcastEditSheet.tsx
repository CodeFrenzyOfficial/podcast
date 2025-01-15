'use client'

import React, { useState } from "react"

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
} from "@/components/ui/sheet"

import { Button } from "@/components/ui/button"
import { editPodcastSchema } from "@/schemas/dashboard/admin/edit-podcast/schema";

interface EditFormType {
    title: string;
    description: string;
    thumbnail: File;
}

export default function PodcastEditSheet({ children }: { children: React.ReactNode }) {
    const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(null);

    const form = useForm<EditFormType>({
        resolver: yupResolver(editPodcastSchema),
        defaultValues: {
            title: "",
            description: "",
            thumbnail: undefined as unknown as File, // Cast to File
        },
    });

    const onSubmit = (formData: EditFormType) => {
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
        <Sheet>
            <SheetTrigger>{children}</SheetTrigger>
            <SheetContent>
                <SheetHeader className='w-full h-full space-y-10'>
                    <SheetTitle>Edit Podcast Video</SheetTitle>
                    {/* Inputs */}
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-3">

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

                            <Button>Save</Button>
                        </form>
                    </Form>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}