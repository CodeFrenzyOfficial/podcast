import { PodcastDataType } from "@/data/podcasts/data";
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
  setLoading: (loading: boolean) => void;
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

const usePodcastStore = create<PodcastStore>()(
  devtools(
    persist(
      (set, get) => ({
        loading: false,
        dj_loading: false,
        other_loading: false,
        podcasts: [],
        dj_podcasts: {},
        other_podcasts: {},
        podcast: {},

        setLoading: (loading: boolean) => set({ loading: loading }),

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

        create_podcast: async (payload: any, router: any, user: any, toast: any) => {
          try {
            set({ loading: true });
            toast({
              title: "Uploading thumbnail",
              description: "Please wait, your thumbnail is being uploaded.",
              duration: 5000
            })
            const form_data = new FormData();
            form_data.append("title", payload.title);
            form_data.append("desc", payload.description);
            form_data.append("category", payload.category);
            form_data.append("image", payload.thumbnail);
            form_data.append("video", payload.file);

            const response = await fetch(
              `${process.env.NEXT_PUBLIC_API_URL}/podcast/${user?.uid}/`,
              {
                method: "POST",
                body: form_data,
              }
            );

            const result = await response.json();

            if (response.ok) {
              if (user.role == "admin") {
                router.push("/dashboard/admin");
              } else {
                router.push("/dashboard/user");
              }
            } else {
              console.error("Error during registration:", result);
            }
          } catch (error) {
            console.log(error);
          } finally {
            set({ loading: false });
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

            form_data.append("image", payload.thumbnail);
            form_data.append("video", payload.file);

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

        delete_podcast: async (user_uid: any, id: any) => {
          await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/podcast/${user_uid}/${id}/`,
            {
              method: "DELETE",
            }
          );
        },
      }),
      {
        name: "usePodcastStore",
      }
    )
  )
);

export default usePodcastStore;
