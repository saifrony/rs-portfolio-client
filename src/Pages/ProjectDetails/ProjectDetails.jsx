import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { FaGithub, FaGlobe, FaServer } from 'react-icons/fa';
import useTitle from '../../hooks/useTitle';
import './projectDetails.css'

const ProjectDetails = () => {
        useTitle('projectDetails')
     const projectInfo = useLoaderData()
    // console.log(projectInfo)
    const { title, image, image2, image3, image4, image5, fea1, fea2, fea3, fea4, fea5, fea6, tool1, tool2, tool3, tool4, tool5, clientLink, serverLink, liveLink } = projectInfo;


    return (
        <div className="projectDetailsContainer py-24">
            <div className="projectDetails mx-auto  sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <h2 className='text-4xl text-center text-gray-400 font-bold sm:text-3xl pt-8 pb-20'>pro<span className='p-text '>jectDeta</span>ils</h2>
            </div>
            <div className="secondContainer text-gray-400">
                {/* projectDetails-left-side  */}
                <div data-aos="fade-up"
                    data-aos-duration="3000" className="projectDetailsLeftSide ">
                    <div className="mainImgPart">
                        {/* mainImgPart */}
                        <div className='main-img '>
                            <div style={{ border: '1px solid #00AB78' }} className=' rounded-xl p-3 project-card-shadow'>
                                <div className="relative  overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">

                                    <PhotoProvider>
                                        <PhotoView src={image} >
                                            <img
                                                className=" w-full h-56 md:h-64 xl:h-80"
                                                src={image}
                                                alt="Person"
                                            />
                                        </PhotoView>
                                    </PhotoProvider>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* gridImgPart */}
                    <div className="gridImgPart grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 pt-10">

                        <div className='img1'>
                            <div style={{ border: '1px solid #00AB78' }} className=' rounded-xl p-3 project-card-shadow'>
                                <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                                    <img
                                        className=" w-full h-56 md:h-64 xl:h-80"
                                        src={image3}
                                        alt="Person"
                                    />

                                </div>
                            </div>
                        </div>
                        <div className='img2'>
                            <div style={{ border: '1px solid #00AB78' }} className=' rounded-xl p-3 project-card-shadow'>
                                <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                                    <img
                                        className="object-cover w-full h-56 md:h-64 xl:h-80"
                                        src={image4}
                                        alt="Person"
                                    />

                                </div>
                            </div>
                        </div>
                        <div className='img3'>
                            <div style={{ border: '1px solid #00AB78' }} className=' rounded-xl p-3 project-card-shadow'>
                                <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                                    <img
                                        className="object-cover w-full h-56 md:h-64 xl:h-80"
                                        src={image5}
                                        alt="Person"
                                    />

                                </div>
                            </div>
                        </div>

                    </div>

                </div>



                {/* projectDetails-right-side  */}
                <div data-aos="fade-up"
                    data-aos-duration="3000" className="projectDetailsRightSide">
                    <div className="title">
                        <h2 className='lg:text-4xl text-emerald-400 font-bold sm:text-xl pb-5 '>{title}</h2>
                    </div>

                    <div className="sourceSection">
                        <h2 className='lg:text-2xl text-start font-semibold sm:text-xl pb-2 pt-4'>Source Code : </h2>
                        <div className="sourceSectionPart lg:flex gap-6  ">

                            <a href={liveLink} target="_blank" className='rounded-xl shadow-xl '><p type="button" className="flex items-center justify-center w-full px-6 py-2  font-semibold tracking-wide rounded-xl  hover:bg-emerald-400 border border-emerald-400 text-emerald-400 hover:text-gray-100 hover:scale-110 ease-in-out duration-500" style={{ boxShadow: '2px 3px 5px gray' }}><FaGlobe className='text-xl hover:animate-spin hover:duration-75' /><span className='text-lg pl-2'>Live </span> </p></a>

                            <a href={clientLink} target="_blank" className=' rounded-xl shadow-xl '><p type="button" className="flex items-center justify-center w-full px-6 py-2 font-semibold tracking-wide rounded-xl  hover:bg-emerald-400 border border-emerald-400 text-emerald-400 hover:text-gray-100 hover:scale-110 ease-in-out duration-500" style={{ boxShadow: '2px 3px 5px gray' }}><FaGithub className='text-xl hover:animate-spin hover:duration-75' /><span className='text-lg pl-2'>Client</span> </p></a>

                            <a href={serverLink} target='_blank' className='rounded-xl shadow-xl'><p type="button" className="flex items-center justify-center w-full px-6 py-2 font-semibold tracking-wide rounded-xl hover:bg-emerald-400 border border-emerald-400 text-emerald-400 hover:text-gray-100 hover:scale-110 ease-in-out duration-500" style={{ boxShadow: '2px 3px 5px gray' }}><FaServer className='text-xl' /><span className='text-lg pl-2'>Server</span></p></a>
                        </div>
                    </div>

                    <div className="detailsContainer">
                        <h2 className='lg:text-2xl text-start font-semibold sm:text-xl pb-4 pt-6 '>Details : </h2>

                        <ul>
                            <li><span className=' text-emerald-500'>*</span> {fea1}</li>
                            <li><span className=' text-emerald-500'>*</span> {fea2}</li>
                            <li><span className=' text-emerald-500'>*</span> {fea3}</li>
                            <li><span className=' text-emerald-500'>*</span> {fea4}</li>
                            <li><span className=' text-emerald-500'>*</span> {fea5}</li>
                            <li><span className=' text-emerald-500'>*</span> {fea6}</li>
                        </ul>
                        {/* <div className="details ">
                            <p className='text-start '>{details}</p>
                        </div> */}
                    </div>



                    <div className="toolsContainer">
                        <h2 className='lg:text-2xl text-start font-semibold sm:text-xl pb-4 pt-3 '>Technology : </h2>

                        <div className="tools flex flex-wrap gap-3">

                            <button className='rounded-xl shadow-xl'> <p className="flex items-center justify-center w-full px-6 py-2 font-semibold tracking-wide rounded-md  text-emerald-500 hover:text-gray-100 hover:scale-110 ease-in-out duration-500" style={{ boxShadow: '2px 3px 5px gray' }}>{tool1}</p></button>

                            <button className='rounded-xl shadow-xl'> <p className="flex items-center justify-center w-full px-6 py-2 font-semibold tracking-wide rounded-md  text-emerald-500 hover:text-gray-100 hover:scale-110 ease-in-out duration-500" style={{ boxShadow: '2px 3px 5px gray' }}>{tool2}</p></button>

                            <button className='rounded-xl shadow-xl'> <p className="flex items-center justify-center w-full px-6 py-2 font-semibold tracking-wide rounded-md  text-emerald-500 hover:text-gray-100 hover:scale-110 ease-in-out duration-500" style={{ boxShadow: '2px 3px 5px gray' }}>{tool3}</p></button>

                            <button className='rounded-xl shadow-xl'> <p className="flex items-center justify-center w-full px-6 py-2 font-semibold tracking-wide rounded-md  text-emerald-500 hover:text-gray-100 hover:scale-110 ease-in-out duration-500" style={{ boxShadow: '2px 3px 5px gray' }}>{tool4}</p></button>
                            <button className='rounded-xl shadow-xl'> <p className="flex items-center justify-center w-full px-6 py-2 font-semibold tracking-wide rounded-md  text-emerald-500 hover:text-gray-100 hover:scale-110 ease-in-out duration-500" style={{ boxShadow: '2px 3px 5px gray' }}>{tool5}</p></button>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;