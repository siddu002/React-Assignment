import React from "react";
import alce from "./images/alce.png";

const ProjectTesstimonal = () => {
  return (
    <div className="max-w-[1280px] mx-auto">
      <div className="Section text-center">
        <div className="flex items-center justify-center">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-1 mr-2">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </div>
          <h1 className="text-center lg:text-2xl font-bold">Sisyphus</h1>
        </div>

        <h1 className="text-center lg:text-3xl font-bold text-xl text-center p-2">
          We’ve been using Untitled to kick start every new <br />
          project and can’t imagine working without it.
        </h1>
        <img
          src={alce}
          className="w-10 h-10 rounded-full mx-auto mb-2"
          alt="user-avatar"
        />
        <p className="font-bold">Candice Wu</p>
        <p className="mb-[50px]">Product Manager, Sisyphus</p>
      </div>
    </div>
  );
};

export default ProjectTesstimonal;
