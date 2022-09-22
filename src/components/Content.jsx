import React, { useState } from "react";


export const Content = ({ userData }) => {

  const banh_cuon = "https://kathynle.files.wordpress.com/2012/12/photo.jpg";
  const bun_cha = "https://cpb-us-w2.wpmucdn.com/blogs.chatham.edu/dist/e/5/files/2017/02/47157_og_1-23a0tw1.jpeg";
  const [img, setImg] = useState(bun_cha);

  const handleImgChange = () => {
        setImg(banh_cuon);
  };

  return (
    <div className="App-content">
        <p>Xa nhà đã lâu nên đăng cái này lên cho an tâm</p>
        <img src={img} className="Mon-an" alt='do-an-viet'/>
        <button onClick={handleImgChange}>Click để hiện món khác</button>
    </div>
  );
};

export default Content;
