import Image, { StaticImageData } from 'next/image'
import React from 'react'
import { motion, type MotionValue } from 'framer-motion'

export const Column = ({
    images,
    y,
}: {
    images: StaticImageData[]
    y?: MotionValue<number>
}) => {
    return (
        <motion.div
            style={{ y }}
            className="column relative w-[33.33%] h-full flex flex-col gap-3 md:gap-6 min-w-[250px] [&:nth-child(1)]:top-[-15%] [&:nth-child(2)]:top-[-20%] [&:nth-child(3)]:top-[-25%]"
        >
            {images.map((src, index) => (
                <div
                    key={index}
                    className="imageContainer w-full h-full relative overflow-hidden"
                >
                    <a
                        className="view cursor-none"
                        href={`/portfolio/${index + 1}`}
                    >
                        <Image
                            src={src}
                            fill
                            alt="image"
                            className="object-cover hover:scale-110 transition-all duration-300 saturate-50 grayscale brightness-75"
                        />
                    </a>
                </div>
            ))}
        </motion.div>
    )
}
