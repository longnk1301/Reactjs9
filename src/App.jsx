import Slider from "./components/Slider";
import { useState, useEffect } from "react";
import "./App.css";
import { Content } from "./components/Content";
import BreadCrumb from "./components/BreadCrumb/BreadCrumb";

//React lifecycle
//1. Initialization: init state, prepare props
//2. Mounting: prepare render component
//3. Updating: update component
//4. Unmounting: component unmount

//ClassComponent:
//1. componentWillMount (Mounting)
//2. componentDidMount (Mounting)
//3. shouldComponentUpdate (Updating)
//4. componentWillUpdate (Updating)
//5. componentDidUpdate (Updating)
//6. componentWillUnMount (Unmounting)

//Function component:
//useEffect()
//

//useMemo, useCallback

function App() {
  const [sliders] = useState(["Slider1", "Slider2", "Slider3", "Slider4"]);
  const [isChangeState, setIsChangeState] = useState(false);

  useEffect(() => {
    //Initialization, Mounting, Unmounting

    alert("123");

    //isChangeState thay doi, va no la 1 dependencies thi se co them lifecycle Updating

    // return () => {
    //   alert("unmount");
    // };
  }, [isChangeState]);

  return (
    <div className="App">
      <button onClick={() => setIsChangeState(!isChangeState)}>Click</button>
      <Slider sliders={sliders} />
      <Content />
      <BreadCrumb />
    </div>
  );
}

export default App;
