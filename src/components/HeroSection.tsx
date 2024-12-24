'use client'
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"





 export default function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000})
  )
 
  return (
    <Carousel
      plugins={[plugin.current]}
      className="container mx-auto"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                  <CardContent className="flex  items-center justify-center">
                  {/* <img src="/Shadcn-thumbnail.jpg" alt="Shadcn UI"/> */}
                  {/* <span>Hello {index}</span> */}
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
