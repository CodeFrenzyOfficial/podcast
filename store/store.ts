import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const useAuthStore = create(
    devtools(
        persist(
            (set, get) => ({
                loading: false,
                user: {},
                token: '',

                setLoading: (loading: boolean) => set({ loading: loading }),

                register: async (payload: any, router: any) => {
                    try {
                        set({ loading: true });

                        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/register/`, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify(payload),
                        });

                        if (response.ok) {
                            const res = await response.json();

                            set({
                                token: res?.token,
                                user: res?.user,
                            })

                            if (res?.user?.role === 'admin') {
                                router.push('/dashboard/admin')
                            } else {
                                router.push('/dashboard/user')
                            }
                        }
                    } catch (error) {
                        console.log(error);
                    } finally {
                        set({ loading: false });
                    }
                },

                login: async (payload: any, router: any) => {
                    try {
                        set({ loading: true });

                        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login/`, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify(payload),
                        });

                        if (response.ok) {
                            const res = await response.json();

                            set({
                                token: res?.token,
                                user: res?.user,
                            })

                            if (res?.user?.role === 'admin') {
                                router.push('/dashboard/admin')
                            } else {
                                router.push('/dashboard/user')
                            }
                        }
                    } catch (error) {
                        console.log(error);
                    } finally {
                        set({ loading: false });
                    }
                },

                logout: async (router: any) => {
                    try {
                        const payload = {
                            user_id: get().user?.uid,
                        }
                        set({ loading: true });

                        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/logout/`, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify(payload),
                        });

                        if (response.ok) {
                            const res = await response.json();

                            set({
                                token: '',
                                user: {},
                            })

                            localStorage.clear();
                            router.push('/')
                        }
                    } catch (error) {
                        console.log(error);
                    } finally {
                        set({ loading: false });
                    }
                }
            }),
            {
                name: "useAuthStore",
            }
        )
    )
);

export default useAuthStore;
