import React from 'react';

const Title = ({title, subtitle}) => {
    return (
        <div className='text-center w-1/2 mx-auto my-10 border-x-2 border-slate-800'>
            <h1 className='text-5xl font-bold uppercase'>{title}</h1>
            <h3 className='text-xl mb-5 text-slate-600'>{subtitle}</h3>
        </div>
    );
};

export default Title;