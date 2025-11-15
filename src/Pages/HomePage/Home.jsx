import React from 'react';
import './Home.css'
import useTitle from '../../hooks/useTitle';
import HomeBanner from '../HomeBanner/HomeBanner';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import About from '../About/About';
import Contact from '../Contact/Contact';

const Home = () => {
    useTitle('Home')
    return (
        <div className='py-20'>
            <HomeBanner/>
            <Projects/>
            <Skills/>
            <About/>
            <Contact/>

        </div>
    );
};

export default Home;