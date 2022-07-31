import React, { useEffect, useState } from "react";
// import {FaArrowCircleUp} from 'react-icons/fa';
import arrow from "../../assets/images/arrow/arrow.png";
import "./_ScrollButton.scss";

const ScrollButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showButton && (
        <button onClick={scrollToTop} className="button">
          <img src={arrow} alt="arrow" className="img"></img>
        </button>
      )}
    </>
  );
};

export default ScrollButton;
