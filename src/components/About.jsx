import React from 'react'
import Typewriter from './Typewriter';

const About = () => {
    return (

        <div name="about" className='flex flex-col justify-center w-full h-screen bg-[#eeeeee] text-[#525f7f]'>
            {/*greeting */}
            <div className='mt-32 md:mt-0 hero flex flex-col items-center justify-between h-40'>
                {/* title */}
                <Typewriter className=' hero-title text-xs md:text-7xl text-center' text="Rodrigo Pittar" />
                {/* description */}
                <div className='w-4/5 lg:w-3/5 pt-16 text-sm md:text-lg text-center font-extralight leading-7'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae voluptatibus explicabo excepturi a, culpa unde, optio incidunt similique qui aspernatur velit laborum iusto? Cupiditate eum porro nobis alias? Culpa, voluptate.
                </div>
            </div>
            <div className="flex flex-col mt-32 justify-center items-center w-full ">
                {/* terminal */}
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
                                <div className='output-statement text-[#e7d184]'>["<a className='text-cyan-300' href="">rodrigo.pittar@gmail</a>", "<a className='text-cyan-300' href="https://www.github.com/Rpitta">github</a>"]</div>
                            </div>
                            <div className='statement'>
                                <div className='input-statement text-[#f7f7f7]'>&gt; Rodrigo.resume</div>
                                <div className='output-statement text-[#e7d184]'>["<a className='text-cyan-300' href="">RodrigoPittar_Resume.pdf</a>"]</div>
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

                {/* 
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-[#fea34f]'>About</p>
                    </div>
                </div>
                <div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>
                            Hi, I'm Rodrigo, nice to meet you. Please take a look around.
                        </p>
                    </div>
                    <div>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam dicta ea aut autem,
                            harum molestiae voluptates, excepturi odio nihil quibusdam nulla, eius quo ex
                            tempora sed ab. Nobis, eius quasi?</p>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default About