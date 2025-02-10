'use client'
import Image, { StaticImageData } from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

// Import images
import rubinCase from '@/assets/cases/rubinCase.png'
import scootyCase from '@/assets/cases/scotyCase.png'
import taleCase from '@/assets/cases/taleCase.png'
import awwwardsCase from '@/assets/cases/awwwardsCase.png'

// Map project IDs to their respective images
const projectsImages: Record<string, StaticImageData> = {
    p1: rubinCase,
    p2: scootyCase,
    p3: taleCase,
    p4: awwwardsCase,
}

const projectsList = [
    {
        id: 'header',
        client: 'Project',
        location: 'Location',
        service: 'Service',
        year: 'Year',
        styles: 'opacity-50',
    },
    {
        id: 'p1',
        client: 'Rubin',
        location: 'Prague',
        service: 'Development',
        year: '2025',
        link: 'https://www.rubinproduction.eu/',
        styles: 'item',
    },
    {
        id: 'p2',
        client: 'Scooty',
        location: 'Prague',
        service: 'Development',
        year: '2024',
        link: 'https://scooty.cz/',
        styles: 'item',
    },
    {
        id: 'p3',
        client: 'Tale',
        location: 'New York',
        service: 'Development',
        year: '2023',
        link: 'https://dungeon-parallax.vercel.app/',
        styles: 'item',
    },
    {
        id: 'p4',
        client: 'Awwwards',
        location: 'Prague',
        service: 'Development',
        year: '2022',
        link: 'https://awwwards-olive.vercel.app/',
        styles: 'item',
    },
]

export const Portfolio = () => {
    const containerRef = useRef<HTMLDivElement | null>(null)
    const previewRef = useRef<HTMLDivElement | null>(null)
    const previewImgRef = useRef<HTMLImageElement | null>(null)
    const [hoveredImage, setHoveredImage] = useState<StaticImageData | null>(
        null
    )

    useEffect(() => {
        const container = containerRef.current
        const preview = previewRef.current

        if (!container || !preview) return

        gsap.set(preview, { scale: 0 })

        const movePreview = (e: Event) => {
            if (!container || !preview) return
            const event = e as MouseEvent

            const containerRect = container.getBoundingClientRect()
            const offsetX = preview.clientWidth / 2
            const offsetY = preview.clientHeight / 2

            gsap.to(preview, {
                x: event.clientX - containerRect.left - offsetX,
                y: event.clientY - containerRect.top - offsetY,
                duration: 1.5,
                ease: 'power2.out',
            })
        }

        const showPreview = () => {
            gsap.to(preview, { scale: 1, duration: 0.3 })
        }

        const hidePreview = () => {
            gsap.to(preview, { scale: 0, duration: 0.3 })
            setHoveredImage(null)
        }

        const changePreviewImage = (projectId: string) => {
            if (projectsImages[projectId]) {
                setHoveredImage(projectsImages[projectId])
            }
        }

        container.querySelectorAll('.portfolio-project').forEach((project) => {
            const projectId = project.getAttribute('id')
            if (!projectId || projectId === 'header') return

            project.addEventListener('mousemove', movePreview as EventListener)
            project.addEventListener('mousemove', () =>
                changePreviewImage(projectId)
            )
            project.addEventListener('mouseenter', showPreview)
            project.addEventListener('mouseleave', hidePreview)
        })

        return () => {
            container
                .querySelectorAll('.portfolio-project')
                .forEach((project) => {
                    project.removeEventListener(
                        'mousemove',
                        movePreview as EventListener
                    )
                    project.removeEventListener('mousemove', () =>
                        changePreviewImage(project.getAttribute('id') || '')
                    )
                    project.removeEventListener('mouseenter', showPreview)
                    project.removeEventListener('mouseleave', hidePreview)
                })
        }
    }, [])

    return (
        <div ref={containerRef} id="About" className="relative">
            <div
                ref={previewRef}
                className="portfolio-preview item absolute w-[250px] h-[250px] overflow-hidden pointer-events-none origin-center z-10"
            >
                {hoveredImage && (
                    <Image
                        ref={previewImgRef}
                        src={hoveredImage}
                        alt="Portfolio Case Image"
                        className="preview-img w-full h-full object-cover bg-center pointer-events-none"
                    />
                )}
            </div>

            <div className="portfolio-container flex flex-col justify-center px-6 lg:px-12">
                {projectsList.map((project) => (
                    <a
                        href={project.link}
                        className={`portfolio-project flex py-10 px-4 uppercase border-b border-[rgba(255,255,255,0.5)] ${project.styles}`}
                        id={project.id}
                        key={project.id}
                    >
                        <div className="flex-[3]">{project.client}</div>
                        <div className="hidden md:block flex-[3]">
                            {project.location}
                        </div>
                        <div className="hidden md:block flex-[3]">
                            {project.service}
                        </div>
                        <div className="flex-1">{project.year}</div>
                    </a>
                ))}
            </div>
        </div>
    )
}
