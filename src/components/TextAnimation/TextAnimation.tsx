'use client'

import React, { useEffect, useRef, useState } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import gsap from 'gsap'
import arrow from '@/assets/arrow-left.svg'
import { BlobBackground } from './BlobBackground'

import './animation.css'

gsap.registerPlugin(ScrollTrigger)

const LINE_LENGTH = 6

export const TextAnimation = () => {
    const [isScrollingDown, setIsScrollingDown] = useState(true)
    const scrollPos = useRef(0)
    const velocityRef = useRef(0)
    const tweenRef = useRef<GSAPTween | null>(null)

    useEffect(() => {
        const marquee = document.querySelector('.marquee_inner')

        if (!marquee) return

        gsap.set(marquee, { xPercent: -50 })

        tweenRef.current = gsap.to('.marquee_part', {
            xPercent: -100,
            repeat: -1,
            duration: 10,
            ease: 'none',
        })

        ScrollTrigger.create({
            trigger: marquee,
            start: 'top bottom',
            end: 'bottom top',
            onUpdate: (self) => {
                const newScroll = window.scrollY
                const scrollingDown = newScroll > scrollPos.current
                setIsScrollingDown(scrollingDown)

                const velocity = self.getVelocity() / 100

                velocityRef.current = Math.min(
                    2,
                    Math.max(0.75, Math.abs(velocity))
                )

                tweenRef.current?.timeScale(velocityRef.current)

                scrollPos.current = newScroll
            },
        })

        return () => {
            tweenRef.current?.kill()
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
        }
    }, [])

    const renderLines = () => {
        return Array.from({ length: LINE_LENGTH + 1 }).map((_, i) => (
            <div
                className="marquee_part flex items-center px-1 flex-shrink-0"
                key={i}
            >
                <span>#HonestyHub</span>
                <div className="arrow w-12 mx-4 flex items-center">
                    <Image
                        src={arrow}
                        alt="arrow"
                        width={50}
                        height={40}
                        className={`arrow border-none outline-none transform transition-all duration-1000 ease-[cubic-bezier(0.075,0.82,0.165,1)] ${
                            isScrollingDown ? 'rotate-0' : 'rotate-180'
                        }`}
                    />
                </div>
            </div>
        ))
    }

    return (
        <>
            <section className="marquee h-[100vh] relative bg-[#0f0f0f] flex items-center py-8 text-4xl uppercase overflow-hidden">
                <BlobBackground>
                    {/* mix-blend-color */}
                    <div className="marquee_inner border border-white z-10 flex flex-auto flex-row w-fit  text-white pointer-events-none translate-x-1/2">
                        {renderLines()}
                        {renderLines()}
                    </div>
                </BlobBackground>
            </section>
        </>
    )
}
