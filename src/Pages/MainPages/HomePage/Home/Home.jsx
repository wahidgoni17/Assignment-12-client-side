import React from 'react';
import Banner from '../Banner/Banner';
import PopularClasses from '../PopularClasses/PopularClasses';
import PopularInstructors from '../PopularInstructors/PopularInstructors';
import CountSection from '../CountSection/CountSection';

const Home = () => {
    return (
        <>
           <Banner></Banner>
           <PopularClasses/>
           <PopularInstructors/>
           <CountSection/>
        </>
    );
};

export default Home;