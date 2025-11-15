import React from 'react';
import useTitle from '../../hooks/useTitle';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CircleLoader } from 'react-spinners';
import { useQuery } from '@tanstack/react-query';
import ProjectCard from '../ProjectCard/ProjectCard';
const Projects = () => {
    useTitle('Projects')
     const { data: projects = [], refetch, isLoading } = useQuery({
    queryKey: ['projects'],
    queryFn: async () => {
      const res = await fetch('https://portfolio-server-kappa-ten.vercel.app/projects')
      const data = await res.json()
      return data;
    }
  })
  // console.log(projects)

  // // ....... pagination  ......
  const [firstPage, setFirstPage] = useState(0);
  const [lastPage, setLastPage] = useState(6);
  const pages = [];
  const pTitle = useLocation();
  const navigate = useNavigate();

  const numOfPage = Math.ceil(projects?.length / 6);
  for (let i = 0; i < numOfPage; i++) {
    pages?.push({ num: i + 1 })
  }
  refetch()
  if (isLoading) {
    return (
      <div className="flex justify-center mt-4">
        <CircleLoader
        color={"#00AB78"}
        size={50}
        />
      </div>
    )
  }
    return (
        <div className='pt-24 pb-20'>

            <div className='text-center text-gray-400'>
                <h2 className='lg:text-4xl text-2xl font-bold pb-5 '>M<span className='p-text '>yProjec</span>ts</h2>
                <p className='text-lg pt-5 pb-14'>An accomplished individual with a powerful background in <span>React, JavaScript, HTML and CSS, Express JS, Node JS, Tailwind CSS, and MongoDB,</span> I feel within the power of the web and have an intense want to be told the way to improve the web' absolute  core practicality and to even be concerned in its future development. He conjointly incorporates a superb
                    understanding of the terribly latest Programming tricks.</p>

            </div>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 '>
                {/* {
          projects?.map(project => <ProjectCards
            key={project?._id}
            project={project}
          ></ProjectCards>)
        } */}

                {
                    pTitle?.pathname === '/' ?
                        <>
                            {
                                projects?.slice(0, 3)?.map(project => <ProjectCard
                                    key={project?._id}
                                    project={project}
                                />)
                            }
                        </> : <>
                            {
                                projects?.slice(firstPage, lastPage)?.map(project => <ProjectCard
                                    key={project?._id} s
                                    project={project}
                                />)
                            }
                        </>
                }
            </div>

            {/* ....... pagination start ......*/}

            <div className={`${pTitle?.pathname === '/' ? 'hidden' : 'flex justify-center pt-12 pb-10'}`}>
                <div className="flex gap-1">
                    {
                        pages?.map(({ num }) =>
                            <button
                                onClick={() => {
                                    setFirstPage(num * 6 - 6)
                                    setLastPage(6 * num)
                                }}
                                key={num}
                                className={`${firstPage / 6 + 1 === num ?
                                    'bg-emerald-500 text-gray-600 '
                                    :
                                    'border border-emerald-600'} rounded-md border-2 text-gray-400 py-1 px-3`}
                            >{num}</button>
                        )
                    }
                </div>
            </div>
            {/* .......pagination end ..... */}

            {
                pTitle?.pathname === '/' &&
                <div className="flex justify-center ">
                    <button
                        style={{ border: '1px solid #00AB78' }}
                        onClick={() => navigate('/projects')}
                        className=" py-2 md:px-20 px-10 mt-12 rounded-md font-semibold text-gray-400 contactShadow"

                    >View More</button>
                </div>
            }

        </div>
    );
};

export default Projects;