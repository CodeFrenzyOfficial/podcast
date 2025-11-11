'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa6";
import { useStore } from "zustand";
import usePodcastStore from "@/store/podcast";
import EpisodeButton from "@/components/buttons/social-icons/episode-cards-button/EpisodeButton";

export default function ClientCards() {
    const [djOrder, setDjOrder] = useState("");
    const [djPage, setDjPage] = useState(1);

    const [otherOrder, setOtherOrder] = useState("");
    const [otherPage, setOtherPage] = useState(1);

    const {
        fetch_user_podcasts_by_category,
        dj_podcasts,
        other_podcasts,
        dj_loading,
        other_loading,
    } = useStore(usePodcastStore);

    useEffect(() => {
        fetch_user_podcasts_by_category("dj", djOrder, djPage);
    }, [djOrder, djPage]);

    useEffect(() => {
        fetch_user_podcasts_by_category("other", otherOrder, otherPage);
    }, [otherOrder, otherPage]);


    const renderPodcasts = (podcasts: any, loading: boolean, isDj: boolean) => {
        const page = isDj ? djPage : otherPage;
        const orderSetter = isDj ? setDjOrder : setOtherOrder;
        const pageSetter = isDj ? setDjPage : setOtherPage;
        const count = podcasts?.count || 0;
        return (
            <div className="p-4 rounded-2xl shadow-xl space-y-4 group/card w-full h-full">
                <div className="overflow-hidden rounded-2xl">
                    <img
                        src={isDj
                            ? "/assets/hero-sections-bg/episodes-card-1.jpg"
                            : "/assets/hero-sections-bg/episodes-card-2.jpg"}
                        className="group-hover/card:scale-125 group-hover/card:rotate-12 transition-all duration-300 group-hover/card:blur-md"
                        alt=""
                    />
                </div>

                <div className="md:w-[90%] space-y-4">
                    <h2 className="capitalize text-lg leading-tight lg:text-2xl font-medium mb-4">
                        {isDj
                            ? "Explore the world of DJing in nightclubs and other venues:"
                            : "Hear from different members working in the industry from all types of roles, from bartending to venue ownership:"}
                    </h2>

                   { podcasts.count > 0 && <div className="flex justify-end ml-auto bg-gray-100 p-1 rounded-md mb-4 w-fit text-sm mb-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
                            />
                        </svg>

                        <select
                            onChange={(e) => orderSetter(e.target.value)}
                            className="outline-none cursor-pointer bg-transparent"
                            defaultValue=""
                        >
                            <option value=""></option>
                            <option value="asc">Newest</option>
                            <option value="desc">Oldest</option>
                        </select>
                    </div>
}
                    {!loading ? (
                        podcasts?.results?.podcasts?.map((podcast: any, index: number) => (
                            <Link key={index} href={podcast.videoSrc}>
                                <div className="flex items-start gap-3 mb-3 p-2 rounded-md hover:bg-gray-100">
                                    <div className="rounded-full bg-blue-600 text-white p-3">
                                        <FaPlay className="text-2xl" />
                                    </div>
                                    <div>
                                        <p className="text-sm md:text-base text-neutral-500">
                                            Episode #{index + 1}
                                        </p>
                                        <h2 className="text-base md:text-xl font-semibold">
                                            {podcast.title}
                                        </h2>
                                    </div>
                                </div>
                            </Link>
                        ))
                    ) : (
                        [1, 2, 3].map((i) => (
                            <div key={i} className="flex items-start gap-3 animate-pulse">
                                <div className="rounded-full bg-blue-600 text-white p-3">
                                    <FaPlay className="text-2xl" />
                                </div>
                                <div className="grid gap-2">
                                    <p className="h-4 rounded-full w-24 bg-gray-200"></p>
                                    <h2 className="h-4 rounded-full w-60 bg-gray-200"></h2>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                <div
                    className={`flex items-center pt-2 ${count > 3 ? "justify-between" : "justify-center"
                        }`}
                >
                    {count > 3 && (
                        <>
                            <button
                                disabled={page === 1}
                                onClick={() => pageSetter((prev) => prev - 1)}
                                className="disabled:text-gray-300 disabled:cursor-not-allowed"
                            >
                                Prev
                            </button>
                        </>
                    )}
                    {podcasts.count !== 0 ? <EpisodeButton link="#all-episodes" content="View All Episodes" /> : <div className="min-h-40 grid place-items-center"> <h2 className="text-xl font-semibold"> Djs Episodes are Coming Soon </h2></div>}
                    {count > 3 && (
                        <>
                            <button
                                onClick={() => pageSetter((prev) => prev + 1)}
                                disabled={!podcasts?.next}
                                className="disabled:text-gray-300 disabled:cursor-not-allowed"
                            >
                                Next
                            </button>
                        </>
                    )}
                </div>
            </div>
        );
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-5 w-full h-full">
            {renderPodcasts(dj_podcasts, dj_loading, true)}
            {renderPodcasts(other_podcasts, other_loading, false)}
        </div>
    );
}
