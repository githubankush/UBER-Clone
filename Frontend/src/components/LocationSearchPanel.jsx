import React from 'react'

const LocationSearchPanel = (props) => {
  const locations = [
    "69/2 Vijayvargiya Nagar Banganga, Indore",
    "Vijayvargiya Nagar Banganga, Indore",
    "69/2 Vijayvargiya Nagar Banganga, Indore",
    "69/2 Vijayvargiya Nagar Banganga, Indore",
    "69/2 Vijayvargiya Nagar Banganga, Indore",
  ]
    
  return (
    <div>
      {
          locations.map(function(elem, index) {
            return <div onClick={()=>{
              props.setVehiclePanel(true)
              props.setPanelOpen(false)
            }} key={index} className='flex items-center my-4 border-2 p-2 rounded-lg active:border-black justify-start gap-3'>
            <h2 className='bg-[#eee] h-10 flex items-center justify-center rounded-full w-10'><i className="ri-map-pin-2-fill"></i></h2>
            <h4 className='font-medium'>{elem}</h4>
          </div>
          })
      }
      
    </div>
  )
}

export default LocationSearchPanel