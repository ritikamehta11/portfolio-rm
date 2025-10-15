import React from "react";

export const Profile = () => {
  return (
    <div className="profileData">
      <div className="profileImgDiv">
        <img src="/public/profileImg.jpg"></img>
      </div>
      <h2>Ritika Mehta</h2>
      <div className="infoPara">
        I’m a passionate Web Developer with experience in building responsive
        and user-friendly applications using modern technologies like React,
        Node.js, Express, and MongoDB. With a strong eye for design and detail,
        I enjoy creating intuitive interfaces and solving problems through clean
        and efficient code.
      </div>

      <div className="buttons">
        <button >Download Resume</button>
        <button >Contact Me</button>
      </div>
    </div>
  );
};
