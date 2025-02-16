import React from 'react'

const ConfirmRide = (props) => {
  return (
    <div>
    <h5 className="w-full flex items-center justify-center">
      <i onClick={() => {
          props.setVehiclePanel(false);
        }}
        className="ri-arrow-down-wide-line"></i>
    </h5>
    <h3 className="text-2xl font-semibold mb-4">Confirm Your Ride</h3>

    <div className='flex gap-5 items-center justify-between flex-col'> 
    <img className='h-20' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1712027307/assets/42/eb85c3-e2dc-4e95-a70d-22ee4f08015f/original/Screenshot-2024-04-01-at-9.08.07p.m..png" alt="" />
      <div className='w-full flex flex-col gap-3 mt-5'>
          <div className='flex items-center justify-start gap-3 p-2 border-b-2 '>
          <i class="ri-map-pin-2-fill"></i>
          <div>
            <h4 className='font-medium'>69/2 Vijayvargiya Nagar Banganga, Indore</h4>
            <p className='text-gray-500'>Indore, Madhya Pradesh</p>
          </div>
          </div>
          <div className='flex items-center justify-start gap-3 p-2 border-b-2 '>
          <i className="ri-map-pin-fill"></i>
          <div>
            <h4 className='font-medium'>Bhanwarkua, Indore</h4>
            <p className='text-gray-500'>Indore, Madhya Pradesh</p>
          </div>
          </div>
          <div className='flex items-center justify-start gap-3 p-2 '>
            <i className="ri-money-rupee-circle-line"></i>
            <div>
            <h3 className='font-semibold'>₹238</h3>
            <p className='text-gray-500 text-sm'>Cash Cash</p>
            </div>

          </div>
      </div>
      <button onClick={()=>{
        props.setVehicleFound(true)
        props.setConfirmRidePanel(false)
      }} className='w-full mt-5 bg-green-500 py-2 rounded-lg text-white font-semibold active:scale-95'>Confirm</button>
    </div>
    </div>
  )
}

export default ConfirmRide