import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { HiDocumentText } from 'react-icons/hi';
import { FaFacebook, FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { AiTwotoneMail } from "react-icons/ai";
//import bannerImg from '../../assets/images/profile2.png';
import { FaDiscord } from "react-icons/fa6";

const HomeBanner = () => {
    return (
        <div className="md:flex lg:pt-10 lg:pb-6">
    <div data-aos="fade-right" data-aos-duration="1500" className="px-20">
        <div className="avatar ">
            {/* <div className="imgAnim animate-pulse ease-in-out  w-full md:w-96 rounded-full ">
                <PhotoProvider>
                    <PhotoView src={bannerImg}>
                        <img className="" src={bannerImg} alt='' />
                    </PhotoView>
                </PhotoProvider>

            </div> */}
        </div>
    </div>
    <div data-aos="fade-left" data-aos-duration="1500" className="flex-1 text-gray-400 px-5 md:px-0">
        <h2 className="lg:text-4xl text-2xl uppercase font-bold"> <span>Hi !<br /> I am

            <span className='text-emerald-500 lg:text-4xl text-2xl'>

                <span className=''> Saiful Islam  </span>

                <span className='nameAnim-1'>R</span>
                <span className='nameAnim-2'>o</span>
                <span className='nameAnim-3'>n</span>
                <span className='nameAnim-4'>y</span>
                

            </span>

        </span> <br /><span className="lg:text-4xl text-2xl">web developer</span></h2>
        <p className="my-5 text-lg">
            I am a passionate full stack Web Developer. I have already created many Project with 2+ years <br /> of experience with modern technologies like React, Tailwind CSS, Node js, Mongo DB, Express JS, Bootstrap etc...

        </p>
        {/* <a href={resume} download={resume}> */}
        <a target="_blank" rel="noreferrer" href="https://docs.google.com/document/d/1WxsbGatZU1cx1w44sRXBNvbKGZn9AOtc/edit?usp=sharing&ouid=115623270994558019812&rtpof=true&sd=true">
            <button className='home-btn-anim  btn  bg-emerald-500 hover:bg-emerald-900  hover:btn-outline mt-3 rounded-r-full w-84 md:w-44 capitalize gap-x-1 hover:text-gray-400'><HiDocumentText className="mr-2 text-2xl"></HiDocumentText><span >view Resume</span> </button>
        </a>


        <div className='flex text-2xl text-gray-400 mt-7 justify-between md:justify-start'>
            <a className='btnHover p-2 lg:mx-1 rounded-full hover:text-emerald-500' target='blank' href="https://github.com/saifrony"> <FaGithub ></FaGithub> </a>
            <a className='btnHover p-2 lg:mx-1 rounded-full hover:text-emerald-500' target='blank' href="https://www.facebook.com/saifulislam.rony.714/"> <FaFacebook ></FaFacebook> </a>
            <a className='btnHover p-2 lg:mx-1 rounded-full hover:text-emerald-500' target='blank' href="https://www.linkedin.com/in/mohammad-saiful-islam-rony-0a0132157/"> <FaLinkedin ></FaLinkedin> </a>
            <a className='btnHover p-2 lg:mx-1 rounded-full hover:text-emerald-500' target='blank' href="tel:+8801918182108"> <FaPhoneAlt ></FaPhoneAlt> </a>
            <a className='btnHover p-2 lg:mx-1 rounded-full hover:text-emerald-500' target='blank' href="mailto:isaif326@gmail.com"> <AiTwotoneMail ></AiTwotoneMail> </a>
            <a className='btnHover p-2 lg:mx-1 rounded-full hover:text-emerald-500' target='blank' href="https://discord.com/users/"> <FaDiscord /></a>

        </div>
    </div>

</div>
    );
};

export default HomeBanner;