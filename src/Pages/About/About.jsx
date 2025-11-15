import React from 'react';
import './About.css'
import useTitle from '../../hooks/useTitle';

const About = () => {
    useTitle('About')
    return (
        <div className='pt-24 pb-20  text-gray-400'>
            <h2 className='lg:text-4xl text-2xl font-bold pt-5 pb-8 text-center'>A<span className='p-text'>bout</span>Us</h2>

            {/* AboutUs section */}

            <div className='md:flex gap-10 text-lg'>
                <div className='flex-1'>
                    <p className='text-gray-400 flex text-justify'>
                        Developing software for the world of intent is something I'm passionate about and I'm dedicated to making the world of intent easy and affordable for everyone. Developing software for the world of intent is something I'm passionate about and I'm dedicated to making the world of intent easy and affordable for everyone.
                    </p>
                </div>

                <div className=' border-r-4 border-gray-400'></div>

                <div className='text-emerald-500 '>
                    <p>I am a Web developer who cares about <br /> the code and the people.</p>

                </div>
            </div>

            {/* PERSONAL INFORMATION section */}

            <div className='pt-8 '>

                <div className='personal-info-grid '>
                    {/* personal-left-side */}
                    <div className='personal-left-side '>
                        <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-6 '>
                            <div data-aos="fade-up"
                                data-aos-duration="3000" className='personal-shadow md:w-72  rounded-lg py-8  text-center '>
                                <h2>
                                    <span className='text-xl'>15+</span>
                                </h2>
                                <h2 className='text-xl'> Completed Projects </h2>
                            </div>

                            <div data-aos="fade-up"
                                data-aos-duration="3000" className='personal-shadow md:w-72 sm:w-52 rounded-lg py-8  text-center'>
                                <h2>
                                    <span className='text-xl'>3+</span>
                                </h2>
                                <h2 className='text-xl'> years of experience</h2>
                            </div>
                        </div>
                    </div>
                    {/* personal-right-side */}
                    <div className=''>
                        <h2 className='lg:text-2xl  font-bold sm:text-xl  pb-3'>PERSONAL INFORMATION</h2>
                        <div className='personal-right-side md:flex justify-between '>
                            <div className=" font-semibold">
                                <span className="text-gray-300 font-semibold ">Name: </span> Saiful Islam Rony <br />
                                <span className="text-gray-300 ">Address: </span> Narayanganj, Bangladesh <br />
                                <span className="text-gray-300 ">Email:</span> <span className='lowercase'>isaif326@gmail.com </span>
                            </div>
                            <div className=" font-semibold">
                                <span className="text-gray-300">Phone:</span> (+88) 01918182108<br />
                                <span className="text-gray-300">Github:</span> <a href="https://github.com/saifrony">saifrony</a> <br />
                                <span className="text-gray-300">Language:</span> Bangla, English
                            </div>
                        </div>

                    </div>


                </div>
            </div>

        </div>
    );
};

export default About;