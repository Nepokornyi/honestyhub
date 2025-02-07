import React from 'react'

export const Header = () => {
    return (
        <header className="px-6 lg:px-12 py-6 flex justify-between items-center">
            <span>Honesty Hub</span>
            <ul className="flex gap-4">
                <li>about</li>
                <li>portfolio</li>
                <li>contact us</li>
            </ul>
        </header>
    )
}
