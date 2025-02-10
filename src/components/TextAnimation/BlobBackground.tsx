import React, { ReactNode } from 'react'
import './animation.css'

type BlobBackgroundProps = {
    children: ReactNode
}

export const BlobBackground = ({ children }: BlobBackgroundProps) => {
    return (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[500px] h-[400px] md:h-[500px] flex justify-center items-center clip-blob">
            {children}

            <div className="item absolute group w-[300px] md:w-[400px] h-[300px] md:h-[400px]">
                <span className="absolute border-2 border-white w-full h-full top-0 left-0 transition-all duration-500 rounded-[32%_58%_69%_43%/_48%_32%_59%_55%]" />

                <span className="absolute border-2 border-white w-full h-full top-0 left-0 transition-all duration-500 animate-square-blob rounded-[38%_62%_63%_37%/_41%_44%_56%_59%]" />

                <span className="absolute border-2 border-white w-full h-full top-0 left-0 transition-all duration-500 animate-square-blob-alternative rounded-[31%_45%_74%_35%/_38%_56%_51%_87%]" />
            </div>
        </div>
    )
}
