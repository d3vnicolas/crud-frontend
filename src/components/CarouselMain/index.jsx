"use client"

import { useRef } from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function CarouselPlugin() {
  const plugin = useRef(Autoplay({ delay: 10000, stopOnInteraction: true }))

  return (
    <Carousel
      plugins={[plugin.current]}
      className="fixed left-0 top-0 -z-10 h-screen w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="h-screen">
        {Array.from({ length: 6 }).map((_, index) => (
          <CarouselItem key={index}>
            <Card>
              <CardContent className="flex aspect-square h-screen w-full items-center justify-center p-0">
                <img
                  className="h-full w-full object-cover"
                  src={`/images/bg-${index + 1}.jpg`}
                />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
