import { Footer } from '@/components/Footer/Footer'
import { Header } from '@/components/Header/Header'
import { Portfolio } from '@/components/Portfolio/Portfolio'
import { BlobText } from '@/components/TextAnimation/BlobText'

export default function Home() {
    return (
        <div className="relative flex flex-col justify-center w-full overflow-hidden">
            <Header />
            <BlobText />
            <Portfolio />
            <Footer />
        </div>
    )
}
