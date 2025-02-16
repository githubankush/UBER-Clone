import axios from 'axios';
import React, { useEffect, useState, useContext} from 'react'
import {UserDataContext} from '../context/UserContext'
import { useNavigate } from 'react-router-dom';

const UserProtectWrapper = ({
    children
}) => {
    const { user, setUser } = useContext(UserDataContext)
    const token = localStorage.getItem('token')
    const [isLoading, setIsLoading] = useState(true)
    const Navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            Navigate('/login');
        }
        axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response) => {
            if (response.status === 200) {
                setUser(response.data.user)
                setIsLoading(false)
            }
        }).catch((error) => {
            console.log(error);
            localStorage.removeItem('token');
            Navigate('/login');
        })
        
    },[token])
  return (
    <>
        {children}
    </>
  )
}

export default UserProtectWrapper