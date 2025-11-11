import * as yup from "yup";

const ACCEPTED_FILE_FORMATS = ["audio/mpeg", "audio/mp3", "video/mp4"];
const ACCEPTED_IMAGE_FORMATS = ["image/jpeg", "image/png"];

export const uploadBlogSchema = yup.object({
    title: yup
        .string()
        .required("Title is required")
        .min(5, "Title must be at least 5 characters")
        .max(500, "Title must not exceed 100 characters"),

    description: yup
        .string()
        .required("Description is required")
        .min(20, "Description must be at least 20 characters")
        .max(5000, "Description must not exceed 5000 characters"),

    thumbnail: yup
        .mixed<FileList>()
        .required("Thumbnail is required")
        .test("fileType", "Thumbnail is required", (value) => {
            return value instanceof FileList && value.length > 0;
        }),
}) as yup.ObjectSchema<{
    title: string;
    description: string;
    thumbnail: FileList;
}>;
