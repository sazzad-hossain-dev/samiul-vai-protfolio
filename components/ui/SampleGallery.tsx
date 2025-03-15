import { getNineRandomPreviewImages } from "@/utils";
import Image from "next/image";
import React from "react";

const SampleGallery = () => {
    const images = getNineRandomPreviewImages(9);

    return (
        <div className="bg-light-card dark:bg-dark-card mt-10 pt-8">
            <div className="container mx-auto ">
                <h2 className="seconderyHeading text-center py-8">
                    My Gallery
                </h2>
                <div className="columns-3 ">
                    {images.map((image, index) => (
                        // <Image
                        //     key={index}
                        //     src={image}
                        //     alt="image"
                        //     height={350}
                        //     width={500}
                        //     className="w-full rounded-md object-contain mb-4"
                        // />
                        <div
                            key={index}
                            className="relative group overflow-hidden rounded-md"
                        >
                            {/* Image */}
                            <Image
                                src={image}
                                alt="image"
                                height={350}
                                width={500}
                                className="w-full rounded-md object-cover transition-transform duration-300 group-hover:scale-105"
                            />

                            {/* View More Button - Bottom Pop-up */}
                            <div className="absolute bottom-0 left-0 w-full bg-black/60 text-center py-2 opacity-0 translate-y-full group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                <button className="text-white text-sm font-semibold">
                                    View More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SampleGallery;
