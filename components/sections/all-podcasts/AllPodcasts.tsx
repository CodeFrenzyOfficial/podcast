import EpisodeButton from "@/components/buttons/social-icons/episode-cards-button/EpisodeButton";
import VideoPlayerDialog from "@/components/video-player/VideoPlayer";
import { episodesData } from "@/data/episodes/data";
import { FaPlay } from "react-icons/fa6";

export default function AllPodcasts() {
    return (
        <section className='max-w-screen-xl mx-auto space-y-10 py-10 min-h-screen px-10'>
            <div className='px-5 lg:px-0 grid place-items-center space-y-2 text-center'>
                <p className='text-neutral-500'>List of episodes</p>
                <h2 className='text-3xl lg:text-4xl font-semibold'>Watch Feature episodes</h2>
            </div>

            {/* Episode Data mapping */}
            <div className='flex flex-col gap-8'>
                {
                    episodesData.map((episodesData, index) => (
                        <div key={index}>
                            <VideoPlayerDialog>
                                <div className='w-full rounded-2xl flex flex-col items-start gap-5 lg:gap-0 lg:flex-row lg:items-center justify-between p-0 lg:py-5 lg:px-5 bg-gray-500/10 shadow-lg shadow-black/10 transition-all duration-200 hover:shadow-black/20 hover:-translate-y-2 cursor-pointer relative group/episode-card overflow-hidden lg:overflow-visible'>
                                    {/* Mobile Image container */}
                                    <div className="lg:hidden w-full">
                                        <img src={episodesData.imgSrc} className="w-full h-60 object-cover" alt="" />
                                    </div>
                                    {/* icon & Content*/}
                                    <div className='px-4 py-2 flex items-center gap-5'>
                                        <div className='rounded-full bg-yellow-500 text-white p-3 shadow-xl'>
                                            <FaPlay className='text-2xl' />
                                        </div>
                                        <h2 className='leading-tight text-lg font-medium'>{episodesData.episodeTitle}</h2>
                                    </div>

                                    <div className='w-full lg:w-auto px-4 py-2 flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-20'>
                                        <div className="w-full lg:w-auto flex items-center justify-between gap-5">
                                            <h2>{episodesData.hostname}</h2>
                                            <h2>{episodesData.episodeDetail}</h2>
                                        </div>
                                        {/* Static button */}
                                        <div className={('w-fit py-2 px-8 flex justify-center items-center gap-2 rounded-full bg-blue-700 text-white relative overflow-hidden group/card-btn transition-all duration-300 text-center md:text-left z-0')}>

                                            <h2 className={("text-sm md:text-base z-10")}>{'Watch Episode'}</h2>

                                            {/* before container on hover */}
                                            <div className="absolute top-0 left-0 w-full h-0 bg-black group-hover/card-btn:h-full transition-all duration-300 z-0" />

                                        </div>
                                    </div>

                                    {/* Hover image */}
                                    <div className="hidden lg:block absolute right-40 -bottom-10 opacity-0 transition-all duration-200 group-hover/episode-card:opacity-100 pointer-events-none z-20">
                                        <img src={episodesData.imgSrc} className="-rotate-6 rounded-2xl" alt="" />
                                    </div>
                                </div>
                            </VideoPlayerDialog>
                        </div>

                    ))
                }
            </div>
        </section>
    )
}
