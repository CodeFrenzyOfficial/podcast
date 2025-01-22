import { create } from "zustand";
import { persist } from "zustand/middleware";

const store = create(
    persist(
        (set) => ({
            loading: false,

            setLoading: (loading: boolean) => set({ loading: loading }),
        }),
        {
            name: "generic-store",
        }
    )
);

export default store;
