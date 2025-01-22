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

import CarouselCard from "@/components/cards/carousel-card/CarouselCard";
import { carouselData } from "@/data/carousel/data";

export default function HomeCarousel() {
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
        <div className="overflow-hidden">
            <Carousel plugins={[
                Autoplay({
                    delay: 2000,
                }),
            ]} className="w-full" setApi={setEmblaApi}>

                <CarouselContent className="!ml-3 md:ml-[3px] !space-x-8">
                    {carouselData?.map((episode, index) => (
                        <CarouselItem className="md:shadow-xl p-0 basis-[90%] md:basis-1/2 xl:basis-1/3 rounded-3xl !mt-0 md:mt-5 !mb-0 md:!mb-10 grid place-items-center" key={index}>
                            <CarouselCard {...episode} />
                        </CarouselItem>
                    ))}
                </CarouselContent>

                <CarouselPrevious variant={"default"} className="hidden lg:inline-flex bg-white disabled:bg-white/20" />
                <CarouselNext variant={"default"} className="hidden lg:inline-flex bg-white disabled:bg-white/20" />
            </Carousel>
        </div>
    );
}