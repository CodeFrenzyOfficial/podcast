'use client'
import * as React from "react";
import { useState, useEffect } from "react";
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"

import { HostData } from "@/data/hosts/data";
import HostCard from "@/components/cards/host-card/HostCard";

export default function HostCarousel() {
    // const [activeIndex, setActiveIndex] = useState<number>(0);
    const [emblaApi, setEmblaApi] = useState<CarouselApi | null>(null);
    // const numSlides: number = 3;

    // const handleDotClick = (index: number) => {
    //     setActiveIndex(index);
    //     if (emblaApi) {
    //         emblaApi.scrollTo(index);
    //     }
    // };

    useEffect(() => {
        if (emblaApi) {
            const onSelect = () => {
                // setActiveIndex(emblaApi.selectedScrollSnap());
            };
            emblaApi.on("select", onSelect);
            onSelect();
            return () => {
                emblaApi.off("select", onSelect);
            };
        }
    }, [emblaApi]);

    return (
        <>
            <Carousel plugins={[
                Autoplay({
                    delay: 2000,
                }),
            ]} className="w-full" setApi={setEmblaApi}>

                <CarouselContent className="ml-5 !space-x-8">
                    {HostData?.map((episode, index) => (
                        <CarouselItem className="p-0 basis-2/3 md:basis-1/2 xl:basis-1/3 rounded-3xl !mt-5 !mb-10" key={index}>
                            <HostCard {...episode} />
                        </CarouselItem>
                    ))}
                </CarouselContent>

                <CarouselPrevious variant={"default"} className="hidden lg:inline-flex bg-white disabled:bg-white/20 text-black" />
                <CarouselNext variant={"default"} className="hidden lg:inline-flex bg-white disabled:bg-white/20 text-black" />
            </Carousel>
        </>
    );
}