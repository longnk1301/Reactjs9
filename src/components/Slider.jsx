const Slider = ({ sliders }) => {
    return (
        <div className="slider">
            <span className="slider-item">{sliders.slider1}</span>
            <span className="slider-item">{sliders.slider2}</span>
            <span className="slider-item">{sliders.slider3}</span>
            <span className="slider-item">{sliders.slider4}</span>
        </div>
    );
};

export default Slider;
