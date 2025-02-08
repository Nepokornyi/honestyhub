'use client'
import React from 'react'
import { Link } from 'react-scroll'

export const Header = () => {
    return (
        <header className="px-6 lg:px-12 py-6 flex justify-between items-center">
            <span>
                <Link to="/" smooth>
                    Honesty Hub
                </Link>
            </span>
            <ul className="flex gap-4">
                <li>
                    <Link to="About" smooth>
                        About
                    </Link>
                </li>
                <li>
                    <a href="mailto:help@honestyhub.net" className="">
                        {"Let's talk"}
                    </a>
                </li>
            </ul>
        </header>
    )
}
