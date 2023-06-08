import React from 'react';
import PageBg from '../../Shared/PageBg/PageBg';
import bgImg from '../../../assets/pexels-fauxels-3184328.jpg';
import Title from '../../../Component/Title';
import useInstuctors from '../../../Hooks/useInstructors';
import Instructor from './Instructor';

const AllInstructors = () => {
    const [instructors] = useInstuctors()
    return (
        <>
          <PageBg img={bgImg} 
          title={"Instructors"}
          subtitle={"Experience World-Class Instruction with Our Language Experts"}></PageBg>
          <Title title={'Our instructors'} subtitle={"Unleash Your Language Potential with Our Experienced Teachers"}></Title>
          <div className='grid grid-cols-1 lg:grid-cols-3 mx-10 my-5 gap-6'>
            {
                instructors.map(instructor=> <Instructor key={instructor} instructor={instructor}></Instructor>)
            }
            </div>
        </>
    );
};

export default AllInstructors;