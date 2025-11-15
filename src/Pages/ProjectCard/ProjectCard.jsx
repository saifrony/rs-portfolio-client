import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaGlobe, FaRegStickyNote } from 'react-icons/fa';
import './ProjectCard.css'

const ProjectCard = ({ project}) => {
     const { _id,title,  image,clientLink,liveLink } = project;
    return (
        <div data-aos="fade-up"
            data-aos-duration="3000">
            <div style={{ border: '1px solid #00AB78' }} className=' rounded-xl p-6 project-card-shadow '>
                <div className="relative overflow-hidden transition duration-300 transform rounded 
          shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl ">
                    <img
                        className="6 w-full h-56 md:h-64 xl:h-80   "
                        src={image}
                        alt="Person"
                    />
                    <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                        <p style={{ textShadow: "2px 2px white" }} className="mb-1 text-4xl font-extrabold text-emerald-400">
                            {title}</p>


                        {/* <p className="mb-6 text-xl  tracking-wide text-emerald-400 lg:flex sm:hidden">
                {details.slice(0, 60)}
              </p> */}
                        <div className="flex justify-around">

                            <a href={clientLink} target='_blank' className='bg-gray-200 rounded-md shadow-lg'><p type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md border border-emerald-400 hover:bg-emerald-400 text-emerald-400 hover:text-gray-100 hover:scale-110 ease-in-out duration-500" style={{ boxShadow: '2px 3px 5px gray' }}><FaGithub className='text-3xl' /></p></a>
                            <a href={liveLink} target="_blank" className='bg-gray-200 rounded-md shadow-lg '><p type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md border border-emerald-400 hover:bg-emerald-400 text-emerald-400 hover:text-gray-100 hover:scale-110 ease-in-out duration-500" style={{ boxShadow: '2px 3px 5px gray' }}><FaGlobe className='text-3xl hover:animate-spin hover:duration-75' />
                            </p></a>


                        </div>


                        <div className='pt-8'>
                            <Link to={`/projects/${_id}`} type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md border border-emerald-400 lg:bg-gray-200 hover:bg-emerald-400 text-emerald-400 uppercase hover:text-white hover:scale-110 ease-in-out duration-500" style={{ boxShadow: '2px 3px 5px gray' }}>details
                                <FaRegStickyNote className='ml-2' /></Link>
                        </div>
                    </div>
                </div>

                <h2 className='text-gray-400 text-2xl font-semibold text-center py-4 '>{title}</h2>



            </div>
        </div>
    );
};

export default ProjectCard;