import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div>
        <div className='bg-cover bg-[url(https://images.unsplash.com/photo-1557404763-69708cd8b9ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dHJhZmZpYyUyMGxpZ2h0fGVufDB8fDB8fHww)] h-screen w-full pt-8 flex flex-col justify-between '>
            <img className='w-20 ml-18' src="https://www.logo.wine/a/logo/Uber/Uber-Logo.wine.svg"/>
            <div className='bg-white px-4 py-4 pb-7'>
                <h2 className='text-3xl font-bold'>Get started with Uber</h2>
                <Link to="/login" className='flex items-center justify-center w-full bg-black text-white rounded py-3 mt-5'>Continue</Link>
            </div>
        </div>
    </div>
  )
}

export default Start