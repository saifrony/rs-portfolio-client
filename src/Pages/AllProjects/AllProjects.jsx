import React from 'react';
import AllProjectCards from '../AllProjectCards/AllProjectCards';
import useTitle from '../../hooks/useTitle';

const AllProjects = () => {
    useTitle('AllProjects')
    const allProjects = [
    {
        "id": "1",
        "title": "Fashion House",
        "image": "https://i.ibb.co/4gqDZ35/screencapture-timely-melba-4eb98e-netlify-app-2023-03-01-20-06-33.png",
        "details": "Fashion House is a multi-page website. If you click see all in the category, there are details in the",
        "liveLink": "https://timely-melba-4eb98e.netlify.app"
    },
    {
        "id": "2",
        "title": "ST Booking.Com",
        "image": "https://i.ibb.co/3yDsPQY/screencapture-localhost-3000-2023-01-13-23-35-24.png",
        "details": "User books hotel(backend useing) In here user add reviews.Here use React router.",
        "liveLink": "https://regal-dusk-aee0fb.netlify.app/"
    },
    {
        "id": "3",
        "title": "GlassDoor",
        "image": "https://i.ibb.co/2MV3PXd/screencapture-jovial-churros-b9b99f-netlify-app-2023-03-01-21-42-05.png",
        "details": "Authentication system.Admin manage everything!In here user add reviews.",
        "liveLink": ""
    },
    {
        "id": "4",
        "title": "Choose Your Favourite Five Players",
        "image": "https://i.ibb.co/16vyV2c/screencapture-guileless-malabi-0f245c-netlify-app-2023-03-01-20-17-29.png",
        "details": "HTML,CSS,JAVASCRIPT is used in this project. You can't select more then five players. And you can ca",
        "liveLink": "https://guileless-malabi-0f245c.netlify.app"
    },
    {
        "id": "5",
        "title": "ExerciseFor Kids",
        "image": "https://i.ibb.co/mTTJJRn/screenshot-16-02-2024-21-10-08.png",
        "details": "",
        "liveLink": "https://gleeful-paprenjak-4c1c25.netlify.app"
    },
    {
        "id": "6",
        "title": "Online Quiz Games",
        "image": "https://i.ibb.co/Ky8YPx7/screenshot-16-02-2024-21-10-21.png",
        "details": "",
        "liveLink": "https://subtle-sorbet-ee7826.netlify.app"
    }


]


    return (
        <div className='py-24 px-10 text-gray-400 '>
            <h2 className='text-gray-400 font-bold text-2xl text-center pt-6 pb-10'>allProjects</h2>

            <div className="allProjectCards grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10">
                {
                    allProjects?.map(allProject => <AllProjectCards
                        key={allProject?.id}
                        allProject={allProject}
                    ></AllProjectCards>)
                }
            </div>
        </div>
    
    );
};

export default AllProjects;