import React from 'react'
import figma from '../../../assets/Images/figma-1-logo 1.png'
import kronos from '../../../assets/Images/kronos-logo-1-1 1.png'
import { SiNike } from "react-icons/si";

const Latest_News = () => {
  return (
    <div className="flex flex-col items-center px-4 py-10">
                    <h1 className="mb-8 text-2xl font-bold">LATEST NEWS</h1>
                    <div className="flex flex-col justify-center space-y-8 md:flex-row md:space-y-0 md:space-x-8">
                        <div className="flex flex-col items-center max-w-xs text-center">
                            <SiNike  className="w-24 h-16 mb-4 " />
                            <p className="text-sm text-gray-500">01 Jan, 2015</p>
                            <h2 className="text-lg font-bold">Fashion Industry</h2>
                            <p className="text-sm text-gray-500">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                        <div className="flex flex-col items-center max-w-xs text-center">
                            <img src={figma} alt="Figma logo" className="w-16 mb-4 " />
                            <p className="text-sm text-gray-500">01 Jan, 2015</p>
                            <h2 className="text-lg font-bold">Best Design Tools</h2>
                            <p className="text-sm text-gray-500">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                        <div className="flex flex-col items-center max-w-xs text-center">
                            <img src={kronos} alt="Kronos logo" className="w-16 mb-4 " />
                            <p className="text-sm text-gray-500">01 Jan, 2015</p>
                            <h2 className="text-lg font-bold">HR Community</h2>
                            <p className="text-sm text-gray-500">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                    </div>
                </div>
  )
}

export default Latest_News