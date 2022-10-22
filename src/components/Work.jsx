import React from 'react'
import WorkImg from '../assets/workImg.jpeg'
import realEstate from '../assets/realestate.jpg'
import { FaGithub } from 'react-icons/fa'
import deverb from '../assets/deverbScreen.PNG';
import rules from '../assets/rules.jpg'


const Work = () => {
    return (
        <div name='work' className='w-full  text-[#525f7f] bg-[#eeeeee]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-14 flex justify-center '>
                    <p className='text-4xl font-bold inline border-b-4 text-[#525f7f] border-[#fea34f] '>Work</p>

                </div>

                {/* container */}
                <div className='grid grid-cols-1 gap-11 justify-center'>

                    {/* grid card item
                        add a flexbox div above this and have div next to this for the img 
                        hide img if sm or smaller
                        */}
                    <div className='shadow-lg overflow-hidden grow shadow-[#040c16] h-96 bg-[#FFFFFF] rounded-md flex'>
                        {/* <div className='w-full mx-auto'> */}
                        <img className='hidden md:block w-1/2 h-full  object-cover' src={deverb} alt="deverb" />
                        {/* </div> */}
                        <div className=' flex  flex-wrap mx-auto px-8 justify-center md:justify-start'>
                            {/* project title */}
                            <div className='text-2xl mt-10 font-semibold '>
                                Project title
                            </div>
                            {/* description */}
                            <div className='text-sm pt-3 text-center md:text-start '>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ducimus quas quam eos ratione, temporibus alias porro ipsam repellat aut excepturi nesciunt quis nobis ab neque, magnam expedita quasi vitae.
                            </div>
                            {/* project skills */}
                            <div className='flex mt-3 flex-wrap justify-center md:justify-start'>
                                <div className='border-[#67a3d4] rounded-md justify-start border-2 p-2 mr-2.5 mb-auto text-xs '>
                                    Javascript
                                </div>
                                <div className='border-[#67a3d4] rounded-md justify-start border-2 p-2 mr-2.5 mb-auto text-xs'>
                                    Javascript
                                </div>
                                <div className='border-[#67a3d4] rounded-md justify-start border-2 p-2 mr-2.5 mb-auto text-xs'>
                                    Javascript
                                </div>
                                <div className='border-[#67a3d4] rounded-md justify-start border-2 p-2 mr-2.5 mb-auto text-xs'>
                                    Javascript
                                </div>
                                <div className='border-[#67a3d4] rounded-md justify-start border-2 p-2 mr-2.5 mb-auto text-xs'>
                                    Javascript
                                </div>

                            </div>

                            {/* buttons */}
                            <div className=' text-center my-4 flex font-bold text-sm '>
                                <a href="/" target="_blank">
                                    <button
                                        className="project-link bg-[#f9a02c] text-white px-4 py-3 mr-2 shadow-lg rounded-lg flex ">

                                        <FaGithub size={18} />&nbsp; View Source
                                    </button>
                                </a>
                                <a href="/" target="_blank">
                                    <button
                                        className="bg-white px-4 py-3 ml-2 shadow-lg rounded-lg">
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* grid card item
                        add a flexbox div above this and have div next to this for the img 
                        hide img if sm or smaller
                        */}
                    <div className='shadow-lg overflow-hidden grow shadow-[#040c16] h-96 bg-[#FFFFFF] rounded-md flex'>
                        {/* <div className='w-full mx-auto'> */}
                        <img className='hidden md:block w-1/2 h-full  object-cover' src={rules} alt="deverb" />
                        {/* </div> */}
                        <div className=' flex  flex-wrap mx-auto px-8 justify-center md:justify-start'>
                            {/* project title */}
                            <div className='text-2xl mt-10 font-semibold '>
                                Project title
                            </div>
                            {/* description */}
                            <div className='text-sm pt-3 text-center md:text-start '>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ducimus quas quam eos ratione, temporibus alias porro ipsam repellat aut excepturi nesciunt quis nobis ab neque, magnam expedita quasi vitae.
                            </div>
                            {/* project skills */}
                            <div className='flex mt-3 flex-wrap justify-center md:justify-start'>
                                <div className='border-[#67a3d4] rounded-md justify-start border-2 p-2 mr-2.5 mb-auto text-xs '>
                                    Javascript
                                </div>
                                <div className='border-[#67a3d4] rounded-md justify-start border-2 p-2 mr-2.5 mb-auto text-xs'>
                                    Javascript
                                </div>
                                <div className='border-[#67a3d4] rounded-md justify-start border-2 p-2 mr-2.5 mb-auto text-xs'>
                                    Javascript
                                </div>
                                <div className='border-[#67a3d4] rounded-md justify-start border-2 p-2 mr-2.5 mb-auto text-xs'>
                                    Javascript
                                </div>
                                <div className='border-[#67a3d4] rounded-md justify-start border-2 p-2 mr-2.5 mb-auto text-xs'>
                                    Javascript
                                </div>

                            </div>

                            {/* buttons */}
                            <div className=' text-center my-4 flex font-bold text-sm '>
                                <a href="/" target="_blank">
                                    <button
                                        className="bg-[#f9a02c] text-white px-4 py-3 mr-2 shadow-lg rounded-lg flex ">

                                        <FaGithub size={18} />&nbsp; View Source
                                    </button>
                                </a>
                                <a href="/" target="_blank">
                                    <button
                                        className="bg-white px-4 py-3 ml-2 shadow-lg rounded-lg">
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* grid card item
                        add a flexbox div above this and have div next to this for the img 
                        hide img if sm or smaller
                        */}
                    <div className='shadow-lg overflow-hidden grow shadow-[#040c16] h-96 bg-[#FFFFFF] rounded-md flex'>
                        {/* <div className='w-full mx-auto'> */}
                        <img className='hidden md:block w-1/2 h-full  object-cover' src={deverb} alt="deverb" />
                        {/* </div> */}
                        <div className=' flex  flex-wrap mx-auto px-8 justify-center md:justify-start'>
                            {/* project title */}
                            <div className='text-2xl mt-10 font-semibold '>
                                Project title
                            </div>
                            {/* description */}
                            <div className='text-sm pt-3 text-center md:text-start '>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ducimus quas quam eos ratione, temporibus alias porro ipsam repellat aut excepturi nesciunt quis nobis ab neque, magnam expedita quasi vitae.
                            </div>
                            {/* project skills */}
                            <div className='flex mt-3 flex-wrap justify-center md:justify-start'>
                                <div className='border-[#67a3d4] rounded-md justify-start border-2 p-2 mr-2.5 mb-auto text-xs '>
                                    Javascript
                                </div>
                                <div className='border-[#67a3d4] rounded-md justify-start border-2 p-2 mr-2.5 mb-auto text-xs'>
                                    Javascript
                                </div>
                                <div className='border-[#67a3d4] rounded-md justify-start border-2 p-2 mr-2.5 mb-auto text-xs'>
                                    Javascript
                                </div>
                                <div className='border-[#67a3d4] rounded-md justify-start border-2 p-2 mr-2.5 mb-auto text-xs'>
                                    Javascript
                                </div>
                                <div className='border-[#67a3d4] rounded-md justify-start border-2 p-2 mr-2.5 mb-auto text-xs'>
                                    Javascript
                                </div>

                            </div>

                            {/* buttons */}
                            <div className=' text-center my-4 flex font-bold text-sm '>
                                <a href="/" target="_blank">
                                    <button
                                        className="bg-[#f9a02c] text-white px-4 py-3 mr-2 shadow-lg rounded-lg flex ">

                                        <FaGithub size={18} />&nbsp; View Source
                                    </button>
                                </a>
                                <a href="/" target="_blank">
                                    <button
                                        className="bg-white px-4 py-3 ml-2 shadow-lg rounded-lg">
                                        Code
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

export default Work