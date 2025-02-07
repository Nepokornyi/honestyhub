'use client'

import React, { useEffect } from 'react'
import { gsap } from 'gsap'

export const Cursor = () => {
    useEffect(() => {
        const cursor = document.getElementById('custom-cursor')
        const links = document.querySelectorAll('a')
        const cursorText = document.querySelector('.cursor-text') as HTMLElement

        if (!cursor || !cursorText) return

        const onMouseMove = (e: MouseEvent) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1,
            })
        }

        const onMouseEnterLink = (event: MouseEvent) => {
            const link = event.target as HTMLAnchorElement
            if (link.classList.contains('view')) {
                gsap.to(cursor, { scale: 3 })
                cursorText.style.display = 'block'
            } else {
                gsap.to(cursor, { scale: 1 })
            }
        }

        const onMouseLeaveLink = () => {
            gsap.to(cursor, { scale: 1 })
            cursorText.style.display = 'none'
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
            className="fixed top-0 left-0 w-9 h-9 rounded-full pointer-events-none z-50 p-3 flex justify-center items-center bg-white"
        >
            <span className="cursor-text text-black text-xs uppercase hidden">
                View
            </span>
        </div>
    )
}
