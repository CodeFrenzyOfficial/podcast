import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface UserStore {
  loading: boolean;
  users: any[];
  user: any;
  token: string;
  fetch_users: () => Promise<void>;
  update_user: (payload: any, user_id: any) => Promise<void>;
}

const useUserStore = create<UserStore>()(
  devtools(
    persist(
      (set, get) => ({
        loading: false,
        users: [],
        user: {},
        token: "",

        setLoading: (loading: boolean) => set({ loading: loading }),

        fetch_users: async () => {
          try {
            set({ loading: true });

            const response = await fetch(
              `${process.env.NEXT_PUBLIC_API_URL}/users/`,
              {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                },
              }
            );

            if (response.ok) {
              const result = await response.json();
              // console.log(result);

              set({
                users: result,
              });
            }
          } catch (error) {
            // console.log(error);
          } finally {
            set({ loading: false });
          }
        },

        update_user: async (payload: any, user_id: any) => {
          // console.log(payload);

          try {
            set({ loading: true });
            const response = await fetch(
              `${process.env.NEXT_PUBLIC_API_URL}/users/${user_id}/`,
              {
                method: "PUT",
                headers: {
                  "Content-Type": "application/json", // ✅ Ensure JSON format
                },
                body: JSON.stringify(payload),
              }
            );

            if (response.ok) {
              await response.json();
            }
          } catch (error) {
            // console.log(error);
          } finally {
            set({ loading: false });
          }
        },
      }),
      {
        name: "useUserStore",
      }
    )
  )
);

export default useUserStore;
