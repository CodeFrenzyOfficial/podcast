import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import useAuthStore from "./store";

const useBlogStore = create(
    devtools(
        persist(
            (set, get) => ({
                loading: false,
                blogs: [],

                setLoading: (loading: boolean) => set({ loading: loading }),

                fetch_blogs: async () => {
                    try {
                        set({ loading: true });
                        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog/`, {
                            method: "GET",
                        });

                        const result = await response.json();
                        console.log(result);

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

                fetch_user_blogs: async (user_id: any) => {
                    try {
                        set({ loading: true });
                        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog/${user_id}/`, {
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

                create_blog: async (payload: any, user_id: any, router: any) => {
                    console.log(payload, user_id);
                    
                    try {
                        set({ loading: true });

                        const form_data = new FormData()
                        form_data.append('title', payload.title);
                        form_data.append('desc', payload.description);

                        Array.from(payload?.thumbnail)?.map((img: any, index: any) => {
                            form_data.append(`image[${index}]`, img);
                        })

                        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog/${user_id}/`, {
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

                create_admin_blog: async (payload: any, user_id: any, router: any) => {
                    console.log(payload, user_id);
                    
                    try {
                        set({ loading: true });

                        const form_data = new FormData()
                        form_data.append('title', payload.title);
                        form_data.append('desc', payload.description);

                        Array.from(payload?.thumbnail)?.map((img: any, index: any) => {
                            form_data.append(`image[${index}]`, img);
                        })

                        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog/${user_id}/`, {
                            method: "POST",
                            body: form_data,
                        });

                        const result = await response.json();

                        if (response.ok) {
                            console.log("Blog created successfully:", result);
                            router.push("/dashboard/admin");
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
