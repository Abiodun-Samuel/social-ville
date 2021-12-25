import Post from "./Post/Post";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getPosts } from "../../Actions/posts";
import { useDispatch } from "react-redux";
// import ModalComponent from "../ModalComponent";

const Posts = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);
  const posts = useSelector((state) => state.posts);
  return !posts.length ? (
    "...loading"
  ) : (
    <div className="container">
      <div className="row g-3 mt-4">
        {posts.map((post) => (
          <div className="col-lg-4 col-md-6" key={post._id}>
            <Post
              post={post}
              currentId={currentId}
              setCurrentId={setCurrentId}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
