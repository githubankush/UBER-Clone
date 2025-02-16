import React from "react";

const VehiclePanel = (props) => {
  return (
    <div>
      <h5 className="w-full flex items-center justify-center">
        <i
          onClick={() => {
            props.setVehiclePanel(false);
          }}
          className="ri-arrow-down-wide-line"
        ></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-4">Choose a Vehicle</h3>
      <div onClick={()=>{
        props.setConfirmRidePanel(true)
      }} className="flex w-full p-2 border-2 active:border-black rounded-lg items-center justify-between ">
        <img className="h-12" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1712027307/assets/42/eb85c3-e2dc-4e95-a70d-22ee4f08015f/original/Screenshot-2024-04-01-at-9.08.07p.m..png"
          alt="" />
        <div className="ml-3 w-1/2">
          <h4 className="font-medium text-sm">
            UberGo{" "}
            <span>
              <i className="ri-user-line"></i>4
            </span>
          </h4>
          <h5 className="font-medium text-sm">5 mins away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable, compact rides
          </p>
        </div>
        <h2 className="text-xl font-semibold">₹238.40</h2>
      </div>
      <div onClick={()=>{
        props.setConfirmRidePanel(true)
      }} className="flex w-full p-2 border-2 active:border-black rounded-lg items-center justify-between ">
        <img className="h-12" src="https://tse4.mm.bing.net/th?id=OIP.znY96OhfmQ9RecEw45FS_AHaE7&pid=Api&P=0&h=180"
          alt="" />
        <div className="ml-3 w-1/2">
          <h4 className="font-medium text-sm">
            Moto Bike{" "}
            <span>
              <i className="ri-user-line"></i>1
            </span>
          </h4>
          <h5 className="font-medium text-sm">2 mins away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable, motorcyle rides
          </p>
        </div>
        <h2 className="text-xl font-semibold">₹67.50</h2>
      </div>
      <div onClick={()=>{
        props.setConfirmRidePanel(true)
      }} className="flex w-full p-2 border-2 active:border-black rounded-lg items-center justify-between ">
        <img className="h-12" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
          alt="" />
        <div className="ml-3 w-1/2">
          <h4 className="font-medium text-sm">
            UberAuto{" "}
            <span>
              <i className="ri-user-line"></i>3
            </span>
          </h4>
          <h5 className="font-medium text-sm">4 mins away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable, Auto rides
          </p>
        </div>
        <h2 className="text-xl font-semibold">₹170.20</h2>
      </div>
      
    </div>
  );
};

export default VehiclePanel;
