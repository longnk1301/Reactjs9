import Slider from "./components/Slider";
import { useState } from "react";
import "./App.css";
import { Content } from "./components/Content";
import BreadCrumb from "./components/BreadCrumb/BreadCrumb";

function App() {
  const [sliders] = useState(["Slider1", "Slider2", "Slider3", "Slider4"]);

  return (
    <div className="App">
      <Slider sliders={sliders} />
      <Content />
      <BreadCrumb />
    </div>
  );
}

export default App;
