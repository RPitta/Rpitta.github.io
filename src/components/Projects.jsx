import React from 'react'
import WorkImg from '../assets/workImg.jpeg'
import realEstate from '../assets/realestate.jpg'
import { FaGithub } from 'react-icons/fa'
import deverb from '../assets/deverbScreen.PNG';
import rules from '../assets/rules.jpg'
import site from '../assets/siteSample.PNG';


const Projects = () => {
    return (
        <div name='projects' className='w-full  text-[#525f7f] bg-[#eeeeee]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-14 flex justify-center '>
                    <p className='text-4xl font-bold inline border-b-4 text-[#525f7f] border-[#fea34f] '>Projects</p>

                </div>

                {/* container */}
                <div className='grid grid-cols-1 gap-11 justify-center'>

                    {/* grid card item */}
                    <div className='shadow-lg overflow-hidden grow shadow-[#040c16] h-96 bg-[#FFFFFF] rounded-md flex'>
                        {/* <div className='w-full mx-auto'> */}
                        <img className='hidden md:block w-1/2 h-full  object-cover' src={deverb} alt="deverb" />
                        {/* </div> */}
                        <div className=' flex  flex-wrap mx-auto px-8 justify-center md:justify-start'>
                            {/* project title */}
                            <div className='text-2xl mt-10 font-semibold '>
                                Deverb
                            </div>
                            {/* description */}
                            <div className='text-sm pt-3 text-center md:text-start '>
                                An audio plug-in built using the JUCE framework. My goal was to design a reverb algorithm similar to those found on old Alesis rack units. Along the way, I learned about the JUCE framework and fundamental DSP concepts.
                            </div>
                            {/* project skills */}
                            <div className='flex w-full mt-3 flex-wrap justify-center md:justify-start'>
                                <div className='border-[#67a3d4] rounded-md justify-start border-2 p-2 mr-2.5 mb-auto text-xs '>
                                    C++
                                </div>
                                <div className='border-[#67a3d4] rounded-md justify-start border-2 p-2 mr-2.5 mb-auto text-xs'>
                                    JUCE
                                </div>


                            </div>

                            {/* buttons */}
                            <div className=' text-center my-4 flex font-bold text-sm '>

                                <a href="https://github.com/RPitta/Deverb" target="_blank">
                                    <button
                                        className="project-link-source bg-[#f9a02c] text-white px-4 py-3 mr-2 shadow-lg rounded-lg flex ">

                                        <FaGithub size={18} />&nbsp; View Source
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* grid card item */}
                    <div className='shadow-lg overflow-hidden grow shadow-[#040c16] h-96 bg-[#FFFFFF] rounded-md flex'>
                        {/* <div className='w-full mx-auto'> */}
                        <img className='hidden md:block w-1/2 h-full  object-cover' src={rules} alt="Language rules" />
                        {/* </div> */}
                        <div className=' flex  flex-wrap mx-auto px-8 justify-center md:justify-start'>
                            {/* project title */}
                            <div className='text-2xl mt-10 font-semibold '>
                                Interpreter
                            </div>
                            {/* description */}
                            <div className='text-sm pt-3 text-center md:text-start '>
                                An interpreter for a made up language written in C++, assigned as part of a programming language concepts course. The lexical analyzer converts a sequence of characters into a sequence of tokens. The resulting tokens then get passed into the
                                parser which builds up the parse tree from the read tokens.
                            </div>
                            {/* project skills */}
                            <div className='flex w-full mt-3  flex-wrap justify-center md:justify-start'>
                                <div className='border-[#67a3d4] rounded-md justify-start border-2 p-2 mr-2.5 mb-auto text-xs '>
                                    C++
                                </div>
                            </div>

                            {/* buttons */}
                            <div className=' text-center my-4 flex font-bold text-sm '>
                                <a href="https://github.com/RPitta/Interpreter" target="_blank">
                                    <button
                                        className="project-link-source bg-[#f9a02c] text-white px-4 py-3 mr-2 shadow-lg rounded-lg flex ">

                                        <FaGithub size={18} />&nbsp; View Source
                                    </button>
                                </a>

                            </div>
                        </div>
                    </div>
                    {/* grid card item */}
                    <div className='shadow-lg overflow-hidden grow shadow-[#040c16] h-96 bg-[#FFFFFF] rounded-md flex'>
                        {/* <div className='w-full mx-auto'> */}
                        <img className='hidden md:block w-1/2 h-full  object-cover' src={site} alt="site" />
                        {/* </div> */}
                        <div className=' flex flex-wrap mx-auto px-8 justify-center md:justify-start'>
                            {/* project title */}
                            <div className='text-2xl w-full mt-10 font-semibold '>
                                Portfolio
                            </div>
                            {/* description */}
                            <div className='text-sm pt-3 text-center md:text-start '>
                                This page! Website built using reactJS.
                            </div>
                            {/* project skills */}
                            <div className='flex w-fullmt-3 flex-wrap justify-center md:justify-start'>
                                <div className='border-[#67a3d4] rounded-md justify-start border-2 p-2 mr-2.5 mb-auto text-xs '>
                                    HTML5
                                </div>
                                <div className='border-[#67a3d4] rounded-md justify-start border-2 p-2 mr-2.5 mb-auto text-xs'>
                                    CSS3
                                </div>
                                <div className='border-[#67a3d4] rounded-md justify-start border-2 p-2 mr-2.5 mb-auto text-xs'>
                                    JavaScript
                                </div>
                                <div className='border-[#67a3d4] rounded-md justify-start border-2 p-2 mr-2.5 mb-auto text-xs'>
                                    Tailwind CSS
                                </div>
                                <div className='border-[#67a3d4] rounded-md justify-start border-2 p-2 mr-2.5 mb-auto text-xs'>
                                    ReactJS
                                </div>

                            </div>

                            {/* buttons */}
                            <div className=' text-center my-4 flex font-bold text-sm '>
                                <a href="https://github.com/RPitta/portfolio" target="_blank">
                                    <button
                                        className="project-link-source bg-[#f9a02c] text-white px-4 py-3 mr-2 shadow-lg rounded-lg flex ">

                                        <FaGithub size={18} />&nbsp; View Source
                                    </button>
                                </a>
                                <a href="https://rpitta.github.io/portfolio/" target="_blank">
                                    <button
                                        className="text-[#67a3d4] project-link-demo px-4 py-3 ml-2 shadow-lg rounded-lg">
                                        Live Demo
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects