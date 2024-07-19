import React, { useEffect } from "react";
import "./home.css";
import myImage from "/images/bg-5.jpg";

const Home = () => {
  useEffect(() => {
    const handleScroll = () => {
      const homeBgScale = 1 + window.scrollY * 0.0005;
      document.querySelector(
        ".home-bg"
      ).style.transform = `scale(${homeBgScale})`;

      const image3TranslateY = window.scrollY * 0.5;
      document.querySelector(
        ".img3"
      ).style.transform = `translateY(${image3TranslateY}px)`;

      const image4TranslateY = window.scrollY * 0.3;
      document.querySelector(
        ".img4"
      ).style.transform = `translateY(${image4TranslateY}px)`;

      const cloud = document.querySelector(".cloud");
      cloud &&
        (cloud.style.transform = `translateY(${Math.max(
          20 - window.scrollY * 0.2,
          -100
        )}px)`);

      const title = 1 + window.scrollY * 0.001;
      document.querySelector(".title").style.transform = `scale(${title})`;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="home">
      <img className="home-bg" src={myImage} alt="#" />
      <img className="trees img3" src="/images/3.png" alt="#" />
      <img className="trees img4" src="/images/4.png" alt="#" />
      <img className="tree3 " src="/images/5.png" alt="#" />
      <img className="cloud " src="/images/cloud.png" alt="#" />
      <img className="title " src="/images/title.png" alt="#" />
    </div>
  );
};

export default Home;
