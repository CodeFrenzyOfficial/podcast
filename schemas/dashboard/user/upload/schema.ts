import * as yup from "yup";

export const uploadBlogSchema = yup.object({
    title: yup
        .string()
        .required("Title is required")
        .min(5, "Title must be at least 5 characters")
        .max(500, "Title must not exceed 500 characters"),

    description: yup
        .string()
        .required("Description is required")
        .min(20, "Description must be at least 20 characters")
        .max(5000, "Description must not exceed 5000 characters"),

    thumbnail: yup
        .mixed<File>()
        .required("Thumbnail is required"),
}) as yup.ObjectSchema<{
    title: string;
    description: string;
    thumbnail: File | null;
}>;
