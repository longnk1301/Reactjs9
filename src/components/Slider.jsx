import { useState } from "react";
import useFetchTodos from "../helper/helper";

const Slider = ({ sliders }) => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });
  // eslint-disable-next-line no-unused-vars
  const [data] = useFetchTodos();

  const handleClick = (type, value) => {
    if (type === undefined) {
      // handle logic default
    }
    if (type === "slider") {
      //set state and improve high light SLIDER
    }
  };

  const handleInput = (event) => {
    if (event.target.name === "username") {
      setUserData({ ...userData, username: event.target.value });
    }
    if (event.target.name === "password") {
      setUserData({ ...userData, password: event.target.value });
    }
  };

  return (
    <div className="flex">
      {sliders.map((slider) => (
        <div className="slider">
          <button
            onClick={() => {
              handleClick("slider", slider);
            }}
          >
            <span className="slider-item">{slider}</span>
          </button>
        </div>
      ))}
      <button onClick={handleClick}>
        <span className="slider-item">Default</span>
      </button>
      <input name="username" onChange={handleInput} />
      <input name="password" onChange={handleInput} />
    </div>
  );
};

export default Slider;
