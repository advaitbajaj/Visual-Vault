import React from "react";
import { FaHeart } from "react-icons/fa";

const Photo = ({
  alt_description,
  urls: { regular },
  likes,
  user: {
    name,
    portfolio_url,
    profile_image: { medium },
  },
  links: { download },
}) => {
  return (
    <div className="bg-[#48CAE4] h-[45vh] relative shadow-[#48CAE4] shadow-md hover:scale-105 transition ease-out">
      <a href={download} target="blnank">
        <img
          src={regular}
          className="w-full h-full object-cover"
          alt={alt_description}
        />
      </a>
      <div class="absolute h-[25%] bottom-0 left-0 right-0 flex flex-col justify-end opacity-0 hover:opacity-100 transition duration-300 ease-in-out bg-slate-600 bg-opacity-50 text-white py-2 px-3">
        <div className="flex justify-between items-center">
          <div className="flex flex-col items-start justify-end">
            <span>{name}</span>
            <div className="flex mt-1 justify-center items-center">
              <span>
                <FaHeart />
              </span>
              <span className="ml-2 text-lg">{likes}</span>
            </div>
          </div>
          <div>
            <a href={portfolio_url} target="blank">
              <img
                src={medium}
                height={2}
                width={40}
                className="rounded-full"
                alt="Photographer's profile"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photo;
