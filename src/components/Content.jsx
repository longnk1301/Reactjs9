import React from "react";
import "../style/Content.css";
import img1 from "../img/img1.png";
import img2 from "../img/img2.png";
import img3 from "../img/img3.png";

const posts = [
  {
    id: 1,
    thumbnail: img1,
    time: "August 15, 2022",
    title: "Firefly Festival 2022 Collection",
    desc: "This blog provides information on the drop schedule for the Firefly Festival 2022 Collection.",
  },
  {
    id: 1,
    thumbnail: img2,
    time: "August 15, 2022",
    title: "Firefly Festival 2022 Collection 2",
    desc: "This blog provides information on the drop schedule for the Firefly Festival 2022 Collection.",
  },
  {
    id: 1,
    thumbnail: img3,
    time: "August 15, 2022",
    title: "Firefly Festival 2022 Collection 3",
    desc: "This blog provides information on the drop schedule for the Firefly Festival 2022 Collection.",
  },
];

export const Content = () => {
  const renderPosts = () => {
    return (
      <>
        {posts?.map((post) => (
          <div className="article">
            <img src={post.thumbnail} alt={post.title} />
            <span>{post.time}</span>
            <div className="title-article">{post.title}</div>
            <div className="intro-article">{post.desc}</div>
            <a href="#">Read more</a>
          </div>
        ))}
      </>
    );
  };

  return (
    <div className="content">
      <h1>Featured</h1>
      <div className="articles">
        {renderPosts()}
        <a href="#" className="see-all">
          See All
        </a>
      </div>
    </div>
  );
};

export default Content;
