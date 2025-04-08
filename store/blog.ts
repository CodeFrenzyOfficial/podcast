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
    router: any
  ) => Promise<void>;
  delete_blog: (user_id: any, id: any) => Promise<void>;
}

const useBlogStore = create<BlogStore>()(
  devtools(
    persist(
      (set, get) => ({
        loading: true,
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
          // console.log(payload, user_id);

          try {
            set({ loading: true });

            const form_data = new FormData();
            form_data.append("title", payload.title);
            form_data.append("desc", payload.description);

            Array.from(payload?.thumbnail)?.map((img: any, index: any) => {
              form_data.append(`image`, img);
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
              // console.log("Blog created successfully:", result);
              router.push("/dashboard/user");
            } else {
              console.error("Error during registration:", result);
            }
          } catch (error) {
            // console.log(error);
          } finally {
            set({ loading: false });
          }
        },

        create_admin_blog: async (payload: any, user_id: any, router: any) => {
          try {
            set({ loading: true });

            const form_data = new FormData();
            form_data.append("title", payload.title);
            form_data.append("desc", payload.description);

            Array.from(payload?.thumbnail)?.map((img: any, index: any) => {
              form_data.append(`image`, img);
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
              // console.log("Blog created successfully:", result);
              router.push("/dashboard/admin");
            } else {
              console.error("Error during registration:", result);
            }
          } catch (error) {
            // console.log(error);
          } finally {
            set({ loading: false });
          }
        },

        update_blog: async (
          payload: any,
          user_id: any,
          blog_id: any,
          router: any
        ) => {
          try {
            set({ loading: true });

            const form_data = new FormData();
            form_data.append("title", payload.title);
            form_data.append("desc", payload.description);

            Array.from(payload?.thumbnail)?.map((img: any, index: any) => {
              form_data.append(`image`, img);
            });

            await fetch(
              `${process.env.NEXT_PUBLIC_API_URL}/blog/${user_id}/${blog_id}/`,
              {
                method: "PUT",
                body: form_data,
              }
            );
            set({ mutate: get().mutate + 1 });
          } catch (error) {
            console.log(error);
          } finally {
            set({ loading: false });
          }
        },

        delete_blog: async (user_uid: any, id: any) => {
          await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/blog/${user_uid}/${id}/`,
            {
              method: "DELETE",
            }
          );
        },
      }),
      {
        name: "useBlogStore",
      }
    )
  )
);

export default useBlogStore;
