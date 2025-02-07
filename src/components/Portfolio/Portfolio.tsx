'use client'

import React, { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import { Column } from './Column'
import { useScroll, useTransform } from 'framer-motion'
import { useDimensions } from '@/app/hooks/useDimensions'
import rubin from '@/assets/cases/rubinCase.png'
import scooty from '@/assets/cases/scotyCase.png'
import tale from '@/assets/cases/taleCase.png'

const Images = [rubin, scooty, tale, tale, rubin, scooty, scooty, tale, rubin]

export const Portfolio = () => {
    const container = useRef(null)
    const { height } = useDimensions()
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end start'],
    })

    const y = useTransform(scrollYProgress, [0, 1], [0, height * 0.3])
    const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 0.6])
    const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 0.8])

    useEffect(() => {
        const lenis = new Lenis({
            autoRaf: true,
        })

        function raf(time: number) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)

        return () => {
            lenis.destroy()
        }
    }, [])

    return (
        <main className="main">
            <div className="gallery h-[150vh] w-full flex flex-row gap- md:gap-6 border-box overflow-hidden">
                <Column images={[Images[0], Images[1], Images[2]]} y={y} />
                <Column images={[Images[3], Images[4], Images[5]]} y={y2} />
                <Column images={[Images[6], Images[7], Images[8]]} y={y3} />
            </div>
        </main>
    )
}

export default Portfolio
