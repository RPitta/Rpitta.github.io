import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Home = () => {
    return (
        <div name="home" className='w-full h-screen bg-[#0a192f]'>

            {/* container */}
            <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
                <p className='text-[#fea34f]'>Hi, my name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Rodrigo Pittar</h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a noob developer.</h2>
                <p className='text-[#8892b0] py-4 max-w-[700px]' >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sunt atque modi quis ipsam porro quae, sit alias rerum labore totam reprehenderit? Corporis consequatur, optio perspiciatis ad natus ipsum quod corrupti?
                </p>
                <div>
                    <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#fea34f] hover:border-[#fea34f]' >View Work
                        <span className='group-hover:rotate-90 duration-300' >
                            <HiArrowNarrowRight className='ml-3' />
                        </span>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Home