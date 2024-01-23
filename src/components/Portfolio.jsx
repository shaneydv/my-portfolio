import React from "react";
import blogApp from "../assets/portfolio/blogApp.png";
import readRover from "../assets/portfolio/readRover.png";
import cabConnect from "../assets/portfolio/cabConnect.png";
import taskApp from "../assets/portfolio/taskApp.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";
import banking from "../assets/portfolio/banking.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: blogApp,
      href: "https://github.com/shaneydv/Blog-App",
    },
    {
      id: 2,
      src: readRover,
      href: "https://github.com/shaneydv/react-library",
    },
    {
      id: 3,
      src: cabConnect,
      href: "https://github.com/shaneydv/Cab-Connect",
    },
    {
      id: 4,
      src: taskApp,
      href: "https://github.com/shaneydv/TypeTask-Manager",
    },
    {
      id: 5,
      src: reactWeather,
      href: "https://github.com/shaneydv/Weather-Lens",
    },
    {
      id: 6,
      src: banking,
      href: "https://github.com/shaneydv/Basic-Banking-Website",
    },
  ];

  const handleDemoClick = (href) => {
    window.location.href = href;
  };

  const handleCodeClick = (href) => {
    window.location.href = href;
  };

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, href }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  onClick={() => handleDemoClick(href)}
                >
                  Demo
                </button>
                <button
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  onClick={() => handleCodeClick(href)}
                >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
