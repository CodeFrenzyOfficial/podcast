import * as yup from "yup";

const ACCEPTED_FILE_FORMATS = ["audio/mpeg", "audio/mp3", "video/mp4"];
const ACCEPTED_IMAGE_FORMATS = ["image/jpeg", "image/png"];

export const uploadPodcastSchema = yup.object().shape({
  title: yup
    .string()
    .required("Title is required")
    .min(5, "Title must be at least 5 characters")
    .max(500, "Title must not exceed 100 characters"),

  category: yup.string().required("Podcast category is required"),

  description: yup
    .string()
    .required("Description is required")
    .min(20, "Description must be at least 20 characters")
    .max(5000, "Description must not exceed 5000 characters"),

  thumbnail: yup.mixed().required("Thumbnail is required"),
  //
  file: yup.mixed().required("Podcast file is required"),
  // .test(
  //   "fileType",
  //   "Invalid file format for podcast",
  //   (value: File | undefined) => {
  //     return value instanceof File && ACCEPTED_FILE_FORMATS.includes(value.type);
  //   }
  // ),
});
