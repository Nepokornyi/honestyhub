import { Header } from '@/components/Header/Header'
import { Portfolio } from '@/components/Portfolio/Portfolio'
import { TextAnimation } from '@/components/TextAnimation/TextAnimation'

export default function Home() {
    return (
        <div className="relative flex flex-col justify-center w-full overflow-hidden">
            <Header />
            <TextAnimation />
            <Portfolio />
            <div className="h-screen"></div>
            <footer>Footer</footer>
        </div>
    )
}
