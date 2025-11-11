import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
}

interface ContactStoreType {
  loading: boolean;
  contacts: Contact[];
  token: string;
  setLoading: (loading: boolean) => void;
  fetch_contacts: () => Promise<void>;
  create_contact: (payload: Omit<Contact, "id">) => Promise<void>;
}

const useContactStore = create<ContactStoreType>()(
  devtools(
    persist(
      (set, get) => ({
        loading: false,
        contacts: [],
        token: "",

        setLoading: (loading: boolean) => set({ loading }),

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

            if (!response.ok) throw new Error("Failed to fetch contacts");

            const result: Contact[] = await response.json();

            set({ contacts: result });
          } catch (error) {
            console.error(error);
          } finally {
            set({ loading: false });
          }
        },

        create_contact: async (payload) => {
          try {
            set({ loading: true });

            const response = await fetch(
              `${process.env.NEXT_PUBLIC_API_URL}/contacts/`,
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
              }
            );

            if (!response.ok) throw new Error("Failed to create contact");

            const res: { message: string } = await response.json();
            alert(res.message);
          } catch (error) {
            console.error(error);
          } finally {
            set({ loading: false });
          }
        },
      }),
      {
        name: "contactStore",
        partialize: (state) => ({ token: state.token }), // Persist only token
      }
    )
  )
);

export default useContactStore;
