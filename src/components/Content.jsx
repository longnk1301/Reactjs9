import React from "react";
import "../style/Content.css";
import img1 from "../img/img1.png";
import img2 from "../img/img2.png";
import img3 from "../img/img3.png";

export const Content = () => {



  return (
    <div className="content">
      <h1>Featured</h1>
      <div className="articles">
        <div className="article">
          <img src={img1} alt="" />
          <span>August 15, 2022</span>
          <div className="title-article">
            Firefly Festival 2022 Collection
          </div>
          <div className="intro-article">
            This blog provides information on the drop schedule for the Firefly Festival 2022 Collection.
          </div>
          <a href="#">Read more</a>
        </div>
        <div className="article">
          <img src={img1} alt="" />
          <span>August 15, 2022</span>
          <div className="title-article">
            Firefly Festival 2022 Collection
          </div>
          <div className="intro-article">
            This blog provides information on the drop schedule for the Firefly Festival 2022 Collection.
          </div>
          <a href="#">Read more</a>
        </div>
        <div className="article">
          <img src={img1} alt="" />
          <span>August 15, 2022</span>
          <div className="title-article">
            Firefly Festival 2022 Collection
          </div>
          <div className="intro-article">
            This blog provides information on the drop schedule for the Firefly Festival 2022 Collection.
          </div>
          <a href="#">Read more</a>
        </div>
        <a href="#" className="see-all">See All</a>
      </div>

    </div>
  );
};

export default Content;
