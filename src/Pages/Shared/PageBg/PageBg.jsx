import React from "react";

const PageBg = ({ img, title, subtitle }) => {
  return (
    <>
      <div
        className="hero min-h-screen lg:h-[650px]"
        style={{
          backgroundImage: `url(${img})`,
        }}
      >
        <div className="hero-overlay bg-opacity-20"></div>
        <div className="hero-content px-20 py-10 bg-slate-900 bg-opacity-30 text-center text-white">
          <div className="max-w-md">
            <h1 className="mb-5 text-7xl font-bold">{title}</h1>
            <p className="mb-5 text-xl">{subtitle}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageBg;
