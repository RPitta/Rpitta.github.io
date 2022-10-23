import React from 'react'
import Typewriter from './Typewriter';
import resume from '../static/RodrigoPittar_Resume.pdf'

const About = () => {
    return (

        <div name="about" className='flex sm:h-screen flex-col justify-center w-full mb-40 sm:m-auto bg-[#eeeeee] text-[#525f7f]'>
            {/*greeting */}
            <div className='mt-32 md:mt-0 hero flex flex-col items-center justify-between h-40'>
                {/* title */}
                <Typewriter className='hero-title  w-4/5 sm:w-auto  sm:h-auto md:text-7xl sm:text-center' text="Rodrigo Pittar" />
                {/* description */}
                <div className='w-4/5 lg:w-3/5 pt-4 sm:pt-16 text-sm md:text-lg sm:text-center font-extralight leading-7'>
                    A budding software developer. What I know is that there is much to know. Below are a few examples that have taught me that.
                </div>
            </div>
            <div className="flex flex-col mt-20 sm:mt-32 justify-center items-center w-full ">
                {/* terminal */}
                <br className='sm:hidden' />
                <br className='sm:hidden' />
                <div className='container max-w-[1000px] w-10/12 shadow-2xl'>
                    {/* terminal header */}
                    <div className=' flex h-7 align-baseline items-center bg-[#47504E] rounded-t-lg'>
                        <div className='w-3 h-3 rounded-full ml-2.5 bg-[#f96256] border-[#f65549] '></div>
                        <div className='w-3 h-3 rounded-full ml-2.5 bg-[#fdbc3d] border-[#ffb524]'></div>
                        <div className='w-3 h-3 rounded-full ml-2.5 bg-[#33c948] border-[#2dbb41]'></div>
                    </div>
                    {/* terminal window */}
                    <div className='grid grid-cols-1 place-items-center  bg-[#3F3F3F] rounded-b-lg'>
                        <div className='m-5 container'>
                            <div className='statement'>
                                <div className='input-statement text-[#f7f7f7]'>&gt; Rodrigo.currentLocation</div>
                                <div className='output-statement text-[#e7d184]'>"Kearny, NJ"</div>
                            </div>
                            <div className='statement'>
                                <div className='input-statement text-[#f7f7f7]'>&gt; Rodrigo.contactInfo</div>
                                <div className='output-statement text-[#e7d184]'>["<a className='text-cyan-300' target="_blank" rel='noopener' href="mailto:rodrigo.pittar@gmail.com">rodrigo.pittar@gmail</a>", "<a className='text-cyan-300' href="https://www.github.com/Rpitta">github</a>"]</div>
                            </div>
                            <div className='statement'>
                                <div className='input-statement text-[#f7f7f7]'>&gt; Rodrigo.resume</div>
                                <div className='output-statement text-[#e7d184]'>["<a className='text-cyan-300' href={resume} target="_blank">RodrigoPittar_Resume.pdf</a>"]</div>
                            </div>
                            <div className='statement'>
                                <div className='input-statement text-[#f7f7f7]'>&gt; Rodrigo.interests</div>
                                <div className='output-statement text-[#e7d184]'>["music", "skateboarding", "overwatch"]</div>
                            </div>
                            <div className='statement'>
                                <div className='input-statement text-[#f7f7f7]'>&gt; Rodrigo.education</div>
                                <div className='output-statement text-[#e7d184]'>"B.Sc Computer Science - New Jersey Institute of Technology"</div>
                            </div>
                            <div className='statement'>
                                <div className='input-statement text-[#f7f7f7]'>&gt; Rodrigo.skills</div>
                                <div className='output-statement text-[#e7d184]'>["JavaScript", "C++", "MongoDB", "Git", "Python", "SQL"]</div>
                            </div>
                            <div className='statement'>
                                <div className='input-statement text-[#f7f7f7]'>&gt; <span className='bg-[#f7f7f7] opacity-[.65] animate-pulse'>&nbsp;</span></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default About