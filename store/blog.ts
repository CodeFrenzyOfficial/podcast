import { BlogCardProps } from "./../data/blogs/data";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import useAuthStore from "./store";

interface BlogStore {
  loading: boolean;
  blogs: BlogCardProps[];
  mutate: number;
  setLoading: (loading: boolean) => void;
  fetch_blogs: () => Promise<void>;
  fetch_user_blogs: (payload: any) => Promise<void>;
  create_blog: (payload: any, user_id: any, router: any) => Promise<void>;
  create_admin_blog: (payload: any, user_id: any, router: any) => Promise<void>;
  update_blog: (
    payload: any,
    user_id: any,
    blog_id: any,
    router: any,
    toast: any
  ) => Promise<void>;
  delete_blog: (user_id: any, id: any, toast: any) => Promise<void>;
}

// Helper function to extract base64 images from HTML and convert to Files
const extractImagesFromHTML = (html: string): File[] => {
  const files: File[] = [];
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  const images = doc.querySelectorAll('img[src^="data:image"]');

  images.forEach((img, index) => {
    const src = img.getAttribute('src');
    if (!src) return;

    try {
      // Extract base64 data
      const matches = src.match(/^data:image\/(\w+);base64,(.+)$/);
      if (!matches) return;

      const [, mimeType, base64Data] = matches;
      const byteCharacters = atob(base64Data);
      const byteNumbers = new Array(byteCharacters.length);

      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], { type: `image/${mimeType}` });

      // Create File from Blob
      const fileExtension = mimeType === 'png' ? 'png' : mimeType === 'jpeg' ? 'jpg' : 'png';
      const fileName = `content-image-${Date.now()}-${index}.${fileExtension}`;
      const file = new File([blob], fileName, { type: `image/${mimeType}` });

      files.push(file);
    } catch (error) {
      console.error('Error extracting image:', error);
    }
  });

  return files;
};

// Helper function to replace base64 images with placeholders
const replaceBase64ImagesWithPlaceholders = (html: string): string => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  const images = doc.querySelectorAll('img[src^="data:image"]');

  images.forEach((img, index) => {
    img.setAttribute('src', `[IMAGE_PLACEHOLDER_${index}]`);
  });

  return doc.documentElement.innerHTML;
};

const useBlogStore = create<BlogStore>()(
  devtools(
    persist(
      (set, get) => ({
        loading: false, // Changed from true to false
        blogs: [],
        mutate: 0,

        setLoading: (loading: boolean) => set({ loading: loading }),

        fetch_blogs: async () => {
          try {
            set({ loading: true });
            const response = await fetch(
              `${process.env.NEXT_PUBLIC_API_URL}/blog/`,
              {
                method: "GET",
              }
            );

            const result = await response.json();
            // console.log(result);

            if (response.ok) {
              set({ blogs: result });
            } else {
              console.error("Error :", result);
            }
          } catch (error) {
            // console.log(error);
          } finally {
            set({ loading: false });
          }
        },

        fetch_user_blogs: async (user_id: any) => {
          try {
            set({ loading: true });
            const response = await fetch(
              `${process.env.NEXT_PUBLIC_API_URL}/blog/${user_id}/`,
              {
                method: "GET",
              }
            );

            const result = await response.json();
            if (response.ok) {
              set({ blogs: result });
            } else {
              console.error("Error :", result);
            }
          } catch (error) {
            console.log(error);
          } finally {
            set({ loading: false });
          }
        },

        create_blog: async (payload: any, user_id: any, router: any) => {
          try {
            set({ loading: true });

            const form_data = new FormData();
            form_data.append("title", payload.title);

            // Extract images from description HTML
            const contentImages = extractImagesFromHTML(payload.description);
            const descriptionWithPlaceholders = replaceBase64ImagesWithPlaceholders(payload.description);

            form_data.append("desc", descriptionWithPlaceholders);

            // Add thumbnail images
            Array.from(payload?.thumbnail || [])?.forEach((img: any) => {
              form_data.append(`image`, img);
            });

            // Add content images
            contentImages.forEach((img) => {
              form_data.append(`content_images`, img);
            });

            const response = await fetch(
              `${process.env.NEXT_PUBLIC_API_URL}/blog/${user_id}/`,
              {
                method: "POST",
                body: form_data,
              }
            );

            const result = await response.json();

            if (response.ok) {
              router.push("/dashboard/user");
            } else {
              console.error("Error during registration:", result);
            }
          } catch (error) {
            console.error("Error creating blog:", error);
          } finally {
            set({ loading: false });
          }
        },

        create_admin_blog: async (payload: any, user_id: string, router: any) => {
          try {
            if (!user_id) {
              alert("User ID missing. Please log in again.");
              return;
            }

            set({ loading: true });

            const apiUrl = process.env.NEXT_PUBLIC_API_URL;
            const form_data = new FormData();

            // Required fields
            form_data.append("title", payload.title);
            form_data.append("desc", payload.description);

            // Thumbnail
            if (payload.thumbnail) {
              form_data.append("thumbnail", payload.thumbnail); // single file
            }

            // Content images
            payload.content_images?.forEach((file: File) => {
              form_data.append("content_files", file); // multiple files
            });
            console.log("payload", payload);
            console.log("FormDta", FormData)
            const response = await fetch(`${apiUrl}/blog/${user_id}/`, {
              method: "POST",
              body: form_data,
            });

            const result = await response.json();
            if (response.ok) {
              router.push("/dashboard/admin");
            } else {
              alert(`Error: ${result.error || "Failed to create blog"}`);
            }
          } catch (err) {
            console.error("Upload error:", err);
            alert("Error uploading blog");
          } finally {
            set({ loading: false });
          }
        },


        update_blog: async (payload, user_id, blog_id, router, toast) => {
          try {
            set({ loading: true });

            const form_data = new FormData();
            form_data.append("title", payload.title);
            form_data.append("desc", payload.description);

            if (payload.thumbnail) {
              form_data.append("thumbnail", payload.thumbnail); // single
            }

            payload.content_images?.forEach((file: File) => {
              form_data.append("content_files", file);
            });

            const response = await fetch(
              `${process.env.NEXT_PUBLIC_API_URL}/blog/${user_id}/${blog_id}/`,
              {
                method: "POST", // use POST since backend handles create/update
                body: form_data,
              }
            );

            const result = await response.json();
            if (response.ok) {
              toast({
                title: "Blog updated successfully",
              });
              set({ mutate: get().mutate + 1 });
            } else {
              toast({ title: result.error || "Failed to update blog" });
            }
          } catch (error) {
            console.log(error);
          } finally {
            set({ loading: false });
          }
        },


        delete_blog: async (user_uid: any, id: any, toast: any) => {
          try {
            await fetch(
              `${process.env.NEXT_PUBLIC_API_URL}/blog/${user_uid}/${id}/`,
              {
                method: "DELETE",
              }
            );
            toast({
              title: "Blog deleted successfully",
            })
          } catch (error) {
            console.log(error)
            toast({
              title: "Something went wrong"
            })
          }
        },
      }),
      {
        name: "useBlogStore",
        partialize: (state) => ({
          // Only persist blogs and mutate, NOT loading
          blogs: state.blogs,
          mutate: state.mutate,
        }),
      }
    )
  )
);

export default useBlogStore;
