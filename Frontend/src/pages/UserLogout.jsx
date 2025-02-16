import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const UserLogout = () => {
    const navigate = useNavigate()
    const token = localStorage.getItem('token')
    axios.get(`${import.meta.env.VITE_API_URL}/user/logout`,{
        headers:{
            Authorization: `Bearer ${token}`
        }
    }).then((res)=>{
        if(res.status === 200){
            localStorage.removeItem('token')
            navigate('/login')
        }
    })


  return (
    <div>UserLogout</div>
  )
}

export default UserLogout