import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getLoggedInUser } from '../features/auth/authApiSlice';

const useAuth = () => {
  
    const dispatch = useDispatch()

    const {user} = useSelector((state) => state.donorAuth);

    useEffect(() =>{
        dispatch(getLoggedInUser())
    }, [dispatch]);

    return {user}



}

export default useAuth
