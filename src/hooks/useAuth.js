import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getLoggedInUser } from '../features/auth/authApiSlice';

const useAuth = () => {
  
    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(getLoggedInUser());
    }, [dispatch]);

}

export default useAuth
