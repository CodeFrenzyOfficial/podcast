'use client'
import * as React from 'react'

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import ReactPlayer from 'react-player/lazy'
export default function VideoPlayerDialog({ children }: { children: React.ReactNode }) {
    return (
        <Dialog>
            <DialogTrigger className='w-full'>{children}</DialogTrigger>
            <DialogContent className='bg-white max-w-screen-lg mx-auto'>
                <DialogHeader>
                    <DialogTitle>Episode #10</DialogTitle>
                </DialogHeader>
                <div className='w-full h-full lg:min-h-[70vh]'>
                    <ReactPlayer url={'/assets/video/1.mp4'} controls={true} width={'100%'} height={'100%'} playing muted={true} />
                </div>
            </DialogContent>
        </Dialog>
    )
}

// {/* <div className="grid gap-2">
//                     <div className="rounded-xl overflow-hidden">
//                         <video className="w-full aspect-video" controls>
//                             <source src="/assets/video/1.mp4" type="video/mp4" />
//                             Your browser does not support the video tag.
//                         </video>
//                     </div>
//                 </div> */}