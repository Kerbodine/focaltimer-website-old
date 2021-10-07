import React from "react";
import {
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiElectron,
  SiFirebase,
} from "react-icons/si";

export default function Product() {
  return (
    <div className="">
      <div className="mx-auto container p-8 flex flex-col-reverse lg:flex-row">
        <div className="z-20 mt-8 lg:my-auto">
          <div className="w-full lg:w-[380px] xl:w-[460px]">
            <h1 className="my-4 text-5xl xl:text-6xl font-bold tracking-tight leading-[3.25rem]">
              Your <span>all in one</span> productivity suite
            </h1>
            <h3 className="text-xl text-gray-500">
              A reminders and notes workspace app built with React and Tailwind.
            </h3>
          </div>
          <div className="flex text-4xl mt-4 gap-2 text-gray-600">
            <SiJavascript />
            <SiReact />
            <SiTailwindcss />
            <SiElectron />
            <SiFirebase />
          </div>
          <div className="flex mt-8 gap-4">
            <button className="px-4 py-2 rounded-md bg-gray-600 text-white cursor-pointer hover:bg-black">
              Get started →
            </button>
            <button className=" px-4 py-2 border-2 border-gray-600 rounded-md hover:bg-black hover:border-black hover:text-white cursor-pointer">
              Learn more
            </button>
          </div>
        </div>
        <img
          src="focaltimer-banner.png"
          alt="FocalTimer Banner"
          className="md:flex-auto lg:w-1/2 xl:flex-auto lg:ml-4 -mr-4"
        />
      </div>
      <div className="mx-auto container px-8"></div>
    </div>
  );
}
