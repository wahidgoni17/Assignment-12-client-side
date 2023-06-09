import React from 'react';
import useClassCart from '../../../Hooks/useClassCart';

const SelectedClasses = () => {
    const [classCart] = useClassCart()
    return (
        <div>
            <h1 className='text-4xl font-bold'>My Selected Classes</h1>
            <h1>total class: {classCart.length}</h1>
        </div>
    );
};

export default SelectedClasses;