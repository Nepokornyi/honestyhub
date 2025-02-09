'use client'

import React, { useEffect } from 'react'
import { gsap } from 'gsap'

export const Cursor = () => {
    useEffect(() => {
        const cursor = document.getElementById('custom-cursor')
        const spans = cursor?.querySelectorAll('span') || []
        const links = document.querySelectorAll('.item')
        if (!cursor) return

        const onMouseMove = (e: MouseEvent) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1,
            })
        }

        const onMouseEnterLink = () => {
            gsap.to(cursor, {
                scale: 3,
                duration: 0.3,
                ease: 'power2.out',
            })

            spans.forEach((span) => {
                span.classList.add('bg-white')
            })
        }

        const onMouseLeaveLink = () => {
            gsap.to(cursor, { scale: 1, duration: 0.3, ease: 'power2.out' })

            spans.forEach((span) => {
                span.classList.remove('bg-white')
            })
        }

        document.addEventListener('mousemove', onMouseMove)
        links.forEach((link) => {
            link.addEventListener('mouseenter', onMouseEnterLink)
            link.addEventListener('mouseleave', onMouseLeaveLink)
        })

        return () => {
            document.removeEventListener('mousemove', onMouseMove)
            links.forEach((link) => {
                link.removeEventListener('mouseenter', onMouseEnterLink)
                link.removeEventListener('mouseleave', onMouseLeaveLink)
            })
        }
    }, [])

    return (
        <div
            id="custom-cursor"
            className="fixed -top-2 -left-2 w-5 h-5 pointer-events-none z-50 p-3 flex justify-center items-center mix-blend-difference"
        >
            <span className="absolute border border-white w-5 h-5 top-0 left-0 transition-all duration-500 animate-square-blob rounded-[32%_58%_69%_43%/_48%_32%_59%_55%]" />

            <span className="absolute border border-white w-5 h-5 top-0 left-0 transition-all duration-500 animate-square-blob rounded-[38%_62%_63%_37%/_41%_44%_56%_59%]" />

            <span className="absolute border border-white w-5 h-5 top-0 left-0 transition-all duration-500 animate-square-blob-alternative rounded-[31%_45%_74%_35%/_38%_56%_51%_87%]" />
            {/* <span className="cursor-text text-black text-xs uppercase hidden" /> */}
        </div>
    )
}
