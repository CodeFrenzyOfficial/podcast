import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const useContactStore = create(
  devtools(
    persist(
      (set, get) => ({
        loading: false,
        contacts: [],
        token: "",

        setLoading: (loading: boolean) => set({ loading: loading }),

        fetch_contacts: async () => {
          try {
            set({ loading: true });

            const response = await fetch(
              `${process.env.NEXT_PUBLIC_API_URL}/contacts/`,
              {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                },
              }
            );

            if (response.ok) {
              const result = await response.json();
              console.log(result);

              set({
                contacts: result,
              });
            }
          } catch (error) {
            console.log(error);
          } finally {
            set({ loading: false });
          }
        },

        create_contact: async (payload: any) => {

          try {
            set({ loading: true });
            const response = await fetch(
              `${process.env.NEXT_PUBLIC_API_URL}/contacts/`,
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json", // ✅ Ensure JSON format
                },
                body: JSON.stringify(payload),
              }
            );

            if (response.ok) {
              const res = await response.json();
              alert(res?.message)
              
            }
          } catch (error) {
            console.log(error);
          } finally {
            set({ loading: false });
          }
        },
      }),
      {
        name: "useContactStore",
      }
    )
  )
);

export default useContactStore;
