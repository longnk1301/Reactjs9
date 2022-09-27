import Slider from "./components/Slider";
import { useState } from "react";
import "./App.css";
import { Content } from "./components/Content";
import BreadCrumb from "./components/BreadCrumb/BreadCrumb";

function App() {
  const [sliders] = useState({
    slider1: "Slider1",
    slider2: "Slider2",
    slider3: "Slider3",
    slider4: "Slider4",
  });

  return (
    <div className="App">
      <Slider sliders={sliders} />
      <Content />
      <BreadCrumb />
    </div>
  );
}

export default App;
