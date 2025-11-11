import * as yup from "yup";

const ACCEPTED_FILE_FORMATS = ["audio/mpeg", "audio/mp3", "video/mp4"];
const ACCEPTED_IMAGE_FORMATS = ["image/jpeg", "image/png"];

export const editBlogSchema = yup.object().shape({
    title: yup
        .string()
        .optional()

        .min(5, "Title must be at least 5 characters")
        .max(100, "Title must not exceed 100 characters"),

    description: yup
        .string()
        .optional()

        .min(20, "Description must be at least 20 characters")
        .max(5000, "Description must not exceed 5000 characters"),

    thumbnail: yup
        .mixed()
        .required("Thumbnail is required")

        // .test("fileType", "Invalid file format for thumbnail", (value: File | undefined) => {
        //     return value && ACCEPTED_IMAGE_FORMATS.includes(value.type);
        // }),
});
