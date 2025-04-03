import { PodcastDataType } from "@/data/podcasts/data";
import { error } from "console";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface PodcastStore {
  loading: boolean;
  dj_loading: boolean;
  other_loading: boolean;
  podcasts: PodcastDataType[];
  dj_podcasts: any;
  other_podcasts: any;
  podcast: any;
  uploadProgress: number;
  setLoading: (loading: boolean) => void;
  setUploadProgress: (progress: number) => void;
  fetch_podcasts: () => Promise<void>;
  fetch_user_podcasts: (payload: any) => Promise<void>;
  fetch_user_podcasts_by_category: (
    category: any,
    order: any,
    page: any
  ) => Promise<void>;
  create_podcast: (payload: any, user_id: any, router: any, toast: any) => Promise<void>;
  update_podcast: (
    payload: any,
    user_id: any,
    blog_id: any,
    router: any
  ) => Promise<void>;
  delete_podcast: (user_id: any, id: any) => Promise<void>;
}

const CHUNK_SIZE = 10 * 1024 * 1024; // 10MB chunks

const usePodcastStore = create<PodcastStore>()(
  devtools(
    (set, get) => ({
      loading: false,
      dj_loading: false,
      other_loading: false,
      podcasts: [],
      dj_podcasts: {},
      other_podcasts: {},
      podcast: {},
      uploadProgress: 0,

      setLoading: (loading: boolean) => set({ loading: loading }),
      setUploadProgress: (progress: number) => set({ uploadProgress: progress }),

      fetch_podcasts: async () => {
        try {
          set({ loading: true });
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/podcast/`,
            {
              method: "GET",
            }
          );

          const result = await response.json();
          if (response.ok) {
            set({ podcasts: result });
          } else {
            console.error("Error :", result);
          }
        } catch (error) {
          console.log(error);
        } finally {
          set({ loading: false });
        }
      },

      fetch_user_podcasts: async (uid: any) => {
        try {
          set({ loading: true });
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/podcast/${uid}/`,
            {
              method: "GET",
            }
          );

          const result = await response.json();
          if (response.ok) {
            set({ podcasts: result });
          } else {
            console.error("Error :", result);
          }
        } catch (error) {
          console.log(error);
        } finally {
          set({ loading: false });
        }
      },

      fetch_user_podcasts_by_category: async (
        category: any,
        order: any,
        page: any
      ) => {
        try {
          if (category == "dj") {
            set({ dj_loading: true });
          } else {
            set({ other_loading: true });
          }
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/podcast/category/${category}/?order=${order}&page=${page}`,
            {
              method: "GET",
            }
          );

          const result = await response.json();
          const { results } = result;

          if (response.ok) {
            results.category == "dj"
              ? set({ dj_podcasts: result })
              : set({ other_podcasts: result });
          } else {
            console.error("Error :", result);
          }
        } catch (error) {
          console.log(error);
        } finally {
          set({
            dj_loading: false,
          });

          set({
            other_loading: false,
          });
        }
      },

      create_podcast: async (payload, router, user, toast) => {
        try {
          set({ loading: true, uploadProgress: 0 });

          const form_data = new FormData();
          form_data.append("title", payload.title);
          form_data.append("desc", payload.description);
          form_data.append("category", payload.category);
          form_data.append("image", payload.thumbnail);
          form_data.append("video", payload.file);

          const xhr = new XMLHttpRequest();

          xhr.upload.onprogress = function (event) {
            if (event.lengthComputable) {
              const progress = (event.loaded / event.total) * 100;
              set({ uploadProgress: progress });
            }
          };

          xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status < 300) {
              toast({
                title: "Success",
                description: "Podcast uploaded successfully!",
              });

              setTimeout(() => {
                set({ uploadProgress: 0 });
              }, 1000);

              router.push("/dashboard/admin/podcasts");
            } else {
              const response = JSON.parse(xhr.responseText);
              toast({
                title: "Upload Failed",
                description: response.error || "Something went wrong.",
                variant: "destructive",
              });
              set({ uploadProgress: 0 });
            }
            set({ loading: false });
          };

          xhr.onerror = function () {
            toast({
              title: "Upload Failed",
              description: "A network error occurred.",
              variant: "destructive",
            });
            set({ loading: false, uploadProgress: 0 });
          };

          const url = `${process.env.NEXT_PUBLIC_API_URL}/podcast/${payload.user_id}/`;
          xhr.open("POST", url);
          xhr.send(form_data);
        } catch (error: any) {
          console.error("Upload error:", error);
          toast({
            title: "Upload Failed",
            description: error.message || "Something went wrong",
            variant: "destructive",
          });
          set({ loading: false, uploadProgress: 0 });
        }
      },



      update_podcast: async (
        uid: any,
        user_uid: any,
        payload: any,
        router: any
      ) => {
        try {
          set({ loading: true });
          const form_data = new FormData();

          form_data.append("title", payload.title);
          form_data.append("desc", payload.description);

          if (payload.thumbnail) {
            form_data.append("image", payload.thumbnail);
          }
          if (payload.file) {
            form_data.append("video", payload.file);
          }

          await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/podcast/${user_uid}/${uid}/`,
            {
              method: "PUT",
              body: form_data,
            }
          );
        } catch (error) {
          console.log(error);
        } finally {
          set({ loading: false });
        }
      },

      delete_podcast: async (user_id: any, id: any) => {
        try {
          set({ loading: true });
          await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/podcast/${user_id}/${id}/`,
            {
              method: "DELETE",
            }
          );
        } catch (error) {
          console.log(error);
        } finally {
          set({ loading: false });
        }
      },
    })
  )
);

export default usePodcastStore;
