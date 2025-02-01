"use client";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { Star } from "lucide-react";

export default function SuccessStories() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000 }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  const datas = {
    stories: [
      {
        id: 1,
        image: "/kazi/program1.jpg",
        rating: 5,
        title: "সফলতার গল্প - ১",
        description:
          " আলহামদুলিল্লাহ, আমরা নিকাহবাংলা এর মাধ্যমে একে অপরের সাথে একত্রিত হতে পেরেছি। প্ল্যাটফর্মটির ইসলামিক মূল্যবোধ এবং বাংলা সংস্কৃতির উপর ভিত্তি করে কাজ করায় সহজেই সঙ্গী খুজে পাওয়া যায়। আমরা এখন দুই বছর ধরে সুখি সংসার করছি।",
        name: "ফাতিমা ও আহমেদ",
        location: "ঢাকা",
      },
      {
        id: 2,
        image: "/kazi/program2.jpg",
        rating: 5,
        title: "সফলতার গল্প - ২",
        description:
          " নিকাহবাংলার মাধ্যমে আমরা খুব সহজেই আমরা একে অপরকে খুজে পেয়েছি। আমরা এখন একসাথে সুখী সংসার করছি।",
        name: "আলভী ও আলিফা",
        location: " ঢাকা",
      },
    ],
  };

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto relative">
      <div className="embla overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex">
          {datas.stories.map((data, i) => (
            <div className="embla__slide min-w-full" key={i}>
              <Card className="p-8 md:p-12 mx-4">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="w-full md:w-1/2 relative h-[300px]">
                    <Image
                      src={data.image}
                      alt={data.name}
                      fill
                      className="rounded-lg object-cover"
                      priority
                    />
                  </div>
                  <div className="w-full md:w-1/2">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) =>
                        i + 1 <= data.rating ? (
                          <Star
                            key={i}
                            className="w-5 h-5 fill-current text-yellow-400"
                          />
                        ) : (
                          <Star
                            key={i}
                            className="w-5 h-5 fill-current text-gray-300"
                          />
                        )
                      )}
                    </div>
                    <CardTitle className="mb-4">{data.title}</CardTitle>
                    <CardDescription className="text-base mb-6">
                      {data.description}
                    </CardDescription>
                    <p className="font-semibold">
                      - {data.name}, {data.location}
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="embla__dots flex justify-center mt-8 gap-2">
        {[1, 2, 3].map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`embla__dot w-3 h-3 rounded-full ${
              index === selectedIndex ? "bg-primary" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="embla__buttons absolute top-1/2 -translate-y-1/2 w-full px-4 flex justify-between">
        <button
          onClick={() => emblaApi?.scrollPrev()}
          className="embla__prev bg-white/80 p-2 rounded-full shadow-lg hover:bg-white"
        >
          ←
        </button>
        <button
          onClick={() => emblaApi?.scrollNext()}
          className="embla__next bg-white/80 p-2 rounded-full shadow-lg hover:bg-white"
        >
          →
        </button>
      </div>
    </section>
  );
}
