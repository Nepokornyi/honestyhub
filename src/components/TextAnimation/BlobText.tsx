import React from 'react'
import { BlobBackground } from './BlobBackground'
import { TextAnimation } from './TextAnimation'

export const BlobText = () => {
    return (
        <section className="marquee__inner h-screen relative flex items-center py-8 text-2xl md:text-4xl uppercase">
            <BlobBackground>
                <div className="marquee_inner z-10 flex flex-row pointer-events-none w-[295px] md:w-[395px] overflow-hidden">
                    <TextAnimation />
                </div>
            </BlobBackground>
        </section>
    )
}
