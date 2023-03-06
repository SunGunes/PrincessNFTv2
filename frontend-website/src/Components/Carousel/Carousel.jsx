import React from "react";
import "./Carousel.css";
import { animated, useSpring } from "react-spring";
import { useScroll } from "@use-gesture/react";

import degodsLogo from "../../assets/DegodsLogo.png";
import boredApeLogo from "../../assets/BoredApeLogo.png";
import Button from "react-bootstrap/esm/Button";

const data = [
  { name: "Degods", date: "2 days lefyt", whitelist: false, img: degodsLogo },
  {
    name: "BoredApe",
    date: "4 days left",
    whitelist: false,
    img: boredApeLogo,
  },
  { name: "Degods", date: "5 days left", whitelist: false, img: degodsLogo },
  {
    name: "BoredApe",
    date: "2 days left",
    whitelist: false,
    img: boredApeLogo,
  },
  { name: "Degods", date: "7 days left", whitelist: false, img: degodsLogo },
  {
    name: "BoredApe",
    date: "2 days left",
    whitelist: false,
    img: boredApeLogo,
  },
  {
    name: "BoredApe",
    date: "1 days left",
    whitelist: false,
    img: boredApeLogo,
  },
  { name: "Degods", date: "8 days left", whitelist: false, img: degodsLogo },
  {
    name: "jkdsfs",
    date: "1 days left",
    whitelist: false,
    img: boredApeLogo,
  },
  { name: "fsdfsdf", date: "20 days left", whitelist: true, img: degodsLogo },
];

const clamp = (value, clampAt = 30) => {
  if (value > 0) {
    return value > clampAt ? clampAt : value;
  } else {
    return value < -clampAt ? -clampAt : value;
  }
};

function Carousel({ chain }) {
  const [style, set] = useSpring(() => ({
    transform: "perspective(500px) rotateY(0deg)",
  }));

  const bind = useScroll((event) => {
    set({
      transform: `perspective(500px) rotateY(${
        event.scrolling ? clamp(event.delta[0]) : 0
      }deg)`,
    });
  });
  return (
    <div className="Carousel">
      <div className="Carouselcontainer" {...bind()}>
        {data.map((data) => (
          <animated.div key={data.name} className="card" style={style}>
            <img src={data.img} alt="" />
            <p>{data.name}</p>
            <p>{data.date}</p>
            <p>{data.whitelist}</p>
            <Button variant="dark">More</Button>
          </animated.div>
        ))}
      </div>
      <div className="moreChainBTN">
        <Button variant="info">More {chain}</Button>
      </div>
    </div>
  );
}

export default Carousel;
