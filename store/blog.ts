import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import useAuthStore from "./store";

const useBlogStore = create(
    devtools(
        persist(
            (set, get) => ({
                loading: false,
                // user: useAuthStore().user,
                blogs: [],

                setLoading: (loading: boolean) => set({ loading: loading }),

                fetch_blogs: async () => {
                    try {
                        set({ loading: true });
                        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog/${get().user?.uid}`, {
                            method: "GET",
                        });

                        const result = await response.json();
                        if (response.ok) {
                            set({ blogs: result })
                        } else {
                            console.error("Error :", result);
                        }

                    } catch (error) {
                        console.log(error);
                    } finally {
                        set({ loading: false });
                    }
                },

                create_blog: async (payload: any, router: any) => {
                    try {
                        set({ loading: true });

                        const form_data = new FormData()
                        form_data.append('title', payload.title);
                        form_data.append('desc', payload.description);
                        form_data.append('image', payload.thumbnail);

                        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog/${get().user?.uid}`, {
                            method: "POST",
                            body: form_data,
                        });

                        const result = await response.json();

                        if (response.ok) {
                            console.log("Blog created successfully:", result);
                            router.push("/dashboard/user");
                        } else {
                            console.error("Error during registration:", result);
                        }

                    } catch (error) {
                        console.log(error);
                    } finally {
                        set({ loading: false });
                    }
                },
            }),
            {
                name: "useBlogStore",
            }
        )
    )
);

export default useBlogStore;
