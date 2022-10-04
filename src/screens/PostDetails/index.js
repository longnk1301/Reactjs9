import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../context";

export const PostDetails = () => {
  const [postDetails, setPostDetails] = useState();
  const { postId } = useParams();

  useEffect(() => {
    if (postId) {
      //fetch data ve
      //khi co post details data ve thi set state
      const postData = {
        id: "1",
        content: "post content",
      };
      setPostDetails(postData);
    }
  }, [postId]);

  return (
    <AppContext.Consumer>
      {(context) => (
        <div>
          post details {postId} - {postDetails?.content}
          user information: {JSON.stringify(context)}
        </div>
      )}
    </AppContext.Consumer>
  );
};
