import React from 'react';
import useClasses from '../../../Hooks/useClasses';
import PageBg from '../../Shared/PageBg/PageBg';
import bgImg from '../../../assets/pexels-monstera-6238020.jpg'
import Items from '../../Shared/Items/Items';
import Title from '../../../Component/Title';

const AllClasses = () => {
    const [classes] = useClasses()
    return (
        <>
            <PageBg img={bgImg} 
            title={"Classes"}
            subtitle={"explore our exclusive courses and fulfill your dream of learning foreign languaga"}></PageBg>
            <Title title={'own your class'} subtitle={"select your favourite language class and learn a foriegn language"}></Title>
            <div className='grid grid-cols-1 lg:grid-cols-3 mx-10 my-5 gap-6'>
            {
                classes.map(course=> <Items key={course._id} item={course}></Items>)
            }
            </div>
        </>
    );
};

export default AllClasses;