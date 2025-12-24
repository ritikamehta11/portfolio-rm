import React from "react";
import photo from "../../assets/profileImg.jpg";

export const Profile = () => {
  return (
    <div className="profileData">
      {/* <div className="profileImgDiv">
        <img src={photo}></img>
      </div> */}
      <h2 className="profileName">Ritika Mehta</h2>
      <div className="infoPara">
        I’m a passionate Web Developer with experience in building responsive
        and user-friendly applications using modern technologies like React,
        Node.js, Express, and MongoDB. With a strong eye for design and detail,
        I enjoy creating intuitive interfaces and solving problems through clean
        and efficient code.
      </div>

      <div className="buttons">
        <button ><a href="/RitikaMehtaResume.pdf" download="RitikaMehtaResume.pdf" aria-label="Download my resume"> Download Resume</a></button>
        <button >Contact Me</button>
      </div>
    </div>
  );
}; 
