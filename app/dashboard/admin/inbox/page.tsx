'use client'

import InboxCard from "@/components/@dashboard/admin/cards/inbox-card/InboxCard";
import InboxDialog from "@/components/@dashboard/admin/dialog-box/inbox-dialog/InboxDialog";
import { inboxData } from "@/data/inbox/data";
import useContactStore from "@/store/contact";
import { useEffect } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { useStore } from "zustand";

export default function Page() {
  const { fetch_contacts, contacts } = useStore(useContactStore);

  useEffect(() => {
    fetch_contacts();
  }, []);

  return (
    <section className="px-10">
      <div className="grid place-items-center text-center pb-5 space-y-1">
        <h2 className="text-2xl md:text-3xl">Inbox Hub</h2>
        <p className="text-neutral-500 text-sm">
          Manage all your client inquiries effortlessly in one place.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {contacts && contacts.length > 0 && contacts.map((data: any, index: any) => (
          <div key={index}>
            <InboxDialog {...data}>
              <InboxCard fullName={data.name} subject={data.subject} />
            </InboxDialog>
          </div>
        ))}

        {
          !contacts || contacts.length === 0 &&
          <p>Inbox is empty</p>
        }
      </div>

      {/* Pagination Controls */}
      {/* <div className="w-full flex justify-center items-center gap-2 pt-10">
        <div className="rounded-lg w-8 h-8 grid place-items-center text-base shadow-lg shadow-neutral-300 cursor-pointer bg-white transition-all duration-200 hover:opacity-50 text-black opacity-50">
          <FaArrowLeftLong />
        </div>
        <div className="rounded-lg w-8 h-8 grid place-items-center text-base shadow-lg shadow-neutral-300 cursor-pointer bg-white transition-all duration-200 hover:opacity-50 text-black">
          1
        </div>
        <div className="rounded-lg w-8 h-8 grid place-items-center text-base shadow-lg shadow-neutral-300 cursor-pointer bg-white transition-all duration-200 hover:opacity-50 text-black">
          2
        </div>
        <div className="rounded-lg w-8 h-8 grid place-items-center text-base shadow-lg shadow-neutral-300 cursor-pointer bg-white transition-all duration-200 hover:opacity-50 text-black">
          ...
        </div>
        <div className="rounded-lg w-8 h-8 grid place-items-center text-base shadow-lg shadow-neutral-300 cursor-pointer bg-white transition-all duration-200 hover:opacity-50 text-black">
          <FaArrowRightLong />
        </div>
      </div> */}
    </section>
  );
}
