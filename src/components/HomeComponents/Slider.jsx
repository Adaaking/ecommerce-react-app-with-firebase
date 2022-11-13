import React,{ useEffect,useState } from "react";
import { sliders } from "../../utils/data/data";
import { Link } from "react-router-dom";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";


const Slider = () => {
  const [index, setIndex] = useState(0);

  const handleRight = () => {
    if (index < sliders.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };
  const handleLeft = () => {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(sliders.length - 1);
    }
  };
  useEffect(() => {
    let slider = setInterval(() => {
      if (index < sliders.length - 1) {
        setIndex(index + 1);
      } else {
        setIndex(0);
      }
    }, 7000);
    return () => clearInterval(slider);
  }, [index]);


  return (
    <div className="slider">
      <button className="prev">
        <FiChevronLeft className="icon" onClick={handleLeft}/>
      </button>
      {sliders.map((slider,indx) => {
        let position = "nextSlide";
        if (indx === index) {
          position = "active-anim";
        }
        if (
          indx === index - 1 ||
          (index === 0 && indx === sliders.length - 1)
        ) {
          position = "lastSlide";
        }
        return (
        <div className={`wrapper ${position}`} key={slider.id}>
            <Link>
              <img src={slider.image} alt=""/>
            </Link>
          </div>
        );
      })}
      <button className="next">
        <FiChevronRight className="icon" onClick={handleRight} />
      </button>
    </div>
  );
};

export default Slider;
