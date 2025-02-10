import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const useUserStore = create(
    devtools(
        persist(
            (set, get) => ({
                loading: false,
                users: [],
                user: {},
                token: '',

                setLoading: (loading: boolean) => set({ loading: loading }),

                fetch_users: async () => {
                    try {
                        set({ loading: true });

                        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/`, {
                            method: "GET",
                            headers: {
                                "Content-Type": "application/json",
                            },
                        });

                        if (response.ok) {
                            const result = await response.json();
                            console.log(result);
                            
                            set({
                                users: result,
                            })
                        }
                    } catch (error) {
                        console.log(error);
                    } finally {
                        set({ loading: false });
                    }
                }
            }),
            {
                name: "useUserStore",
            }
        )
    )
);

export default useUserStore;
