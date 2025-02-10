import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Cursor } from '@/components/Cursor'
import './globals.css'

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
})

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: 'HonestyHub',
    description:
        'Empowering developers with innovative solutions and cutting-edge technology to build the future of software.',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <Cursor />
                {children}
            </body>
        </html>
    )
}
