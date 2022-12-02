import React from "react";

const Hero = () => {
  return (
    <div className="items-center w-full h-full bg-black/95 px-4 py-8">
      <div>
        <h1 className="text-white text-center text-4xl font-bold uppercase">
          See Our Coffee
        </h1>
      </div>
      <div className="py-2"></div>
      <div className="flex flex-row justify-around gap-5 ">
        <img
          src="https://images.pexels.com/photos/851555/pexels-photo-851555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="hidden h-[15rem] object-cover rounded-lg flex-auto md:flex flex-wrap"
        ></img>
        <img
          src="https://images.pexels.com/photos/414630/pexels-photo-414630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="h-[15rem] object-cover rounded-lg flex-auto flex-wrap"
        ></img>
        <img
          src="https://images.pexels.com/photos/317377/pexels-photo-317377.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          id="product"
          className="hidden h-[15rem] object-cover rounded-lg flex-auto flex-wrap lg:flex"
        ></img>
      </div>
      <div className="py-2"></div>
      <div className="flex flex-row justify-around gap-5 ">
        <img
          src="https://images.pexels.com/photos/414628/pexels-photo-414628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="hidden h-[15rem] object-cover rounded-lg flex-auto md:flex flex-wrap"
        ></img>
        <img
          src="https://images.pexels.com/photos/1727123/pexels-photo-1727123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="h-[15rem] object-cover rounded-lg flex-auto flex-wrap"
        ></img>
        <img
          src="https://images.pexels.com/photos/2836945/pexels-photo-2836945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="hidden h-[15rem] object-cover rounded-lg flex-auto flex-wrap lg:flex"
        ></img>
      </div>
      <div className="py-2"></div>
      <div className="flex flex-row justify-around gap-5">
        <img
          src="https://images.pexels.com/photos/2312369/pexels-photo-2312369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="hidden h-[15rem] object-cover rounded-lg flex-auto md:flex flex-wrap"
        ></img>
        <img
          src="https://images.pexels.com/photos/585752/pexels-photo-585752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="h-[15rem] object-cover rounded-lg flex-auto flex-wrap"
        ></img>
        <img
          src="https://images.pexels.com/photos/1422286/pexels-photo-1422286.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="hidden h-[15rem] object-cover rounded-lg flex-auto flex-wrap lg:flex"
        ></img>
      </div>
    </div>
  );
};

export default Hero;
