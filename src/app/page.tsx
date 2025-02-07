import { Portfolio } from '@/components/Portfolio/Portfolio'
import { TextAnimation } from '@/components/TextAnimation/TextAnimation'

export default function Home() {
    return (
        <div className="relative flex flex-col justify-center min-h-screen w-full">
            <header>Header</header>
            <TextAnimation />
            <Portfolio />
            <div className="h-screen"></div>
            <footer>Footer</footer>
        </div>
    )
}
