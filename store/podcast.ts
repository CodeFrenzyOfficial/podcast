import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const usePodcastStore = create(
    devtools(
        persist(
            (set, get) => ({
                loading: false,
                podcasts: [],
                podcast: {},

                setLoading: (loading: boolean) => set({ loading: loading }),

                fetch_podcasts: async (uid: any) => {
                    try {
                        set({ loading: true });
                        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/podcast/${uid}/`, {
                            method: "GET",
                        });

                        const result = await response.json();
                        if (response.ok) {
                            set({ podcasts: result })
                        } else {
                            console.error("Error :", result);
                        }

                    } catch (error) {
                        console.log(error);
                    } finally {
                        set({ loading: false });
                    }
                },

                create_podcast: async (payload: any, router: any, uid: any) => {
                    try {
                        set({ loading: true });

                        const form_data = new FormData();
                        form_data.append("title", payload.title);
                        form_data.append("desc", payload.description);
                        form_data.append("image", payload.thumbnail);
                        form_data.append("video", payload.file);

                        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/podcast/${uid}/`, {
                            method: "POST",
                            body: form_data,
                        });

                        const result = await response.json();

                        if (response.ok) {
                            console.log("Podcast created successfully:", result);
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

                update_podcast: async (uid: any, user_uid: any, payload: any, router: any) => {
                    try {
                        set({ loading: true });
                        const form_data = new FormData();

                        form_data.append("title", payload.title);
                        form_data.append("desc", payload.description);

                        form_data.append("image", payload.thumbnail);
                        form_data.append("video", payload.file);

                        await fetch(`${process.env.NEXT_PUBLIC_API_URL}/podcast/${user_uid}/${uid}/`, {
                            method: "PUT",
                            body: form_data,
                        });

                    } catch (error) {
                        console.log(error);
                    } finally {
                        set({ loading: false });
                    }
                },

                delete_podcast: async (user_uid: any, id: any) => {
                    console.log({
                        user_uid,
                        id
                    });
                    
                    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/podcast/${user_uid}/${id}/`, {
                        method: "DELETE",
                    })
                }
            }),
            {
                name: "usePodcastStore",
            }
        )
    )
);

export default usePodcastStore;
