import React from 'react'
import { TextAnimation } from '../TextAnimation/TextAnimation'

export const Footer = () => {
    return (
        <>
            <div className="marquee relative flex mx-6 lg:mx-12 py-8 text-2xl md:text-4xl uppercase overflow-hidden">
                <TextAnimation lineLength={5} renderArrow={false} />
            </div>

            <footer className="px-6 lg:px-12 py-6 flex justify-between">
                <span className="item">©2025 HonestyHub</span>
                <span>Design & Develop Studio</span>
            </footer>
        </>
    )
}
