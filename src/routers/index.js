import { Routes, Route, Link, Outlet } from "react-router-dom";
import { LandingPage } from "../screens/LandingPage";
import { Posts } from "../screens/Posts";
import { PostDetails } from "../screens/PostDetails";
import { ErrorPage } from "../screens/ErrorPage";

const Layout = () => {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav>
        <ul>
          <li>
            <Link to="/">Landing Page</Link>
          </li>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
        </ul>
      </nav>

      <hr />
      <Outlet />
    </div>
  );
};

const CustomRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
      </Route>
      <Route path="/posts" element={<Layout />}>
        <Route index element={<Posts />} />
      </Route>
      <Route path="/posts/:postId" element={<PostDetails />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default CustomRouter;
