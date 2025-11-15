import React from 'react';
import './Skills.css';
import useTitle from '../../hooks/useTitle';


const Skills = () => {
     useTitle('Skills')
     const allSkills = [
        {
            id: 1,
            icon: "https://i.ibb.co/w0nnFJ1/html-5.png",
            title: "HTML",
        },
        {
            id: 2,
            icon: "https://i.ibb.co/nBsgZtL/css-3.png",
            title: "CSS",
        },
        {
            id: 3,
            icon: "https://i.ibb.co/QCgRmm4/kindpng-1636552.png",
            title: "BootStrap",
        },
        {
            id: 4,
            icon: "https://i.ibb.co/6cMQVCf/tailwind-css-icon.png",
            title: "TailwindCSS",
        },

        {
            id: 5,
            icon: "https://i.ibb.co/dpTdxmf/js.png",
            title: "JavaScript",
        },
        // {
        //     id: 6,
        //     icon: "https://i.ibb.co/Cb8hyCX/typescript.png",
        //     title: "TypeScript",
        // },
        {
            id: '6',
            icon: 'https://w7.pngwing.com/pngs/620/609/png-transparent-firebase-cloud-messaging-google-cloud-messaging-api-as-a-service-angle-rectangle-triangle-thumbnail.png',
            title: "Firebase"
        },
        {
            id: 7,
            icon: "https://i.ibb.co/Fqc5ymR/Daco-5903330.png",
            title: "ReactJS",

        },
         {
            id: 8,
            icon: "https://vitejs.dev/logo.svg",
            title: "Vite",
        },
        {
            id: 9,
            icon: "https://i.ibb.co/611STf5/pngwing-com-4.png",
            title: "NodeJS",

        },
        {
            id: 10,
            icon: "https://i.ibb.co/NFTYfwY/pngwing-com-5.png",
            title: "ExpressJS",

        },
        {
            id: 11,
            icon: "https://i.ibb.co/SVxwf9x/pngwing-com-6.png",
            title: "MongoDB",

        },
        {
            id: 12,
            icon: 'https://w7.pngwing.com/pngs/761/513/png-transparent-material-ui-logo.png',
            title: "Metarial UI"
        },
        {
            id: 13,
            icon: "https://i.ibb.co/dbCJ9G9/github-logo.png",
            title: "GitHub",

        },

        {
            id: '14',
            icon: 'https://w7.pngwing.com/pngs/436/888/png-transparent-vercel-hd-logo-thumbnail.png',
            title: "Vercel"
        }
    ]


    return (
        <div>
            <section className='text-gray-400 pt-24 pb-20'>
                <div>
                    <div className='text-center'>
                        <h2 className='lg:text-4xl text-2xl font-bold pb-5 '>M<span className='text p-text '>ySkil</span>ls</h2>
                        <p className='text-2xl pb-6'>Here is my skills to represent my Expertise</p>
                    </div>


                    <div className='grid lg:grid-cols-7 md:grid-cols-3 sm:grid-cols-1  gap-4 py-8'>
                        {
                            allSkills.map(allSkill => <div key={allSkill.id}>
                                <div data-aos="zoom-out-down" className="text-center text-gray-400
                             cardShadow">
                                    <div className="flex justify-center py-3">
                                        <img className='h-10 w-10 ' src={allSkill.icon} alt="" />
                                        <div>
                                            <h2 className="text-xl pl-2 mr-2">{allSkill.title} </h2>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Skills;