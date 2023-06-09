import React from 'react';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useClassCart = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure()
    
};

export default useClassCart;