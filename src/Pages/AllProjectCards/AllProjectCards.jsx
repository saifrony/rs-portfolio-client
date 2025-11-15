import React from 'react';
import './allProjectCards.css'
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { FaGlobe } from 'react-icons/fa';

const AllProjectCards = ({allProject}) => {
     const { title, details, image, tool1, tool2, tool3, tool4, tool5, liveLink } = allProject;
    return (
        <div data-aos="fade-up"
        data-aos-duration="3000">
        <div className='all-project-card-shadow py-3 border-y-4 border-emerald-500 rounded-xl'>
          <div className="overflow-hidden transition-shadow duration-300 shadow-2xl rounded-xl">
            <div >
  
              <PhotoProvider>
                <PhotoView src={image} >
                  <img
                    src={image}
                    className=" w-full h-64 rounded-xl"
                    alt=""
                  />
                </PhotoView>
              </PhotoProvider>
  
            </div>
            <div className="py-5 pl-4">
  
              <div
                className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                <p className="text-2xl pt-4 text-emerald-500 font-bold leading-5">{title}</p>
              </div>
  
              <div className="py-2 w-32">
                <a href={liveLink} target="_blank" className='rounded-xl shadow-xl '><p type="button" className="flex items-center justify-center w-full px-4 py-2  font-semibold tracking-wide rounded-xl  hover:bg-emerald-400 border border-emerald-400 text-emerald-400 hover:text-gray-100 hover:scale-110 ease-in-out duration-500" style={{ boxShadow: '2px 3px 5px gray' }}><FaGlobe className='text-xl hover:animate-spin hover:duration-75' /><span className='text-lg pl-2'>Live </span> </p></a>
              </div>
  
              <div className="my-2 ">
                <h2 className="lg:text-xl text-start font-semibold text-gray-400"> Details:</h2>
                <p className="pt-2 text-starttext-gray-400">{details.slice(0,98)}...</p>
              </div>
  
  
            </div>
  
            <div className="toolsContainer px-4 pb-4">
              <h2 className='lg:text-xl text-start font-semibold  pb-4  '>Technology : </h2>
  
              <div className="tools flex flex-wrap gap-3">
  
                <button className='rounded-xl shadow-xl'> <p className="flex items-center justify-center w-full px-6 py-2 font-semibold tracking-wide rounded-md  text-emerald-400 " style={{ boxShadow: '2px 3px 5px gray' }}>{tool1}</p></button>
  
                <button className='rounded-xl shadow-xl'> <p className="flex items-center justify-center w-full px-6 py-2 font-semibold tracking-wide rounded-md  text-emerald-400 " style={{ boxShadow: '2px 3px 5px gray' }}>{tool2}</p></button>
  
                <button className='rounded-xl shadow-xl'> <p className="flex items-center justify-center w-full px-6 py-2 font-semibold tracking-wide rounded-md  text-emerald-400 " style={{ boxShadow: '2px 3px 5px gray' }}>{tool3}</p></button>
  
                <button className='rounded-xl shadow-xl'> <p className="flex items-center justify-center w-full px-6 py-2 font-semibold tracking-wide rounded-md  text-emerald-400 " style={{ boxShadow: '2px 3px 5px gray' }}>{tool4}</p></button>
                <button className='rounded-xl shadow-xl'> <p className="flex items-center justify-center w-full px-6 py-2 font-semibold tracking-wide rounded-md  text-emerald-400 " style={{ boxShadow: '2px 3px 5px gray' }}>{tool5}</p></button>
  
              </div>
            </div>
  
          </div>
        </div>
      </div>
    );
};

export default AllProjectCards;