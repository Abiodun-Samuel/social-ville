import Post from "./Post/Post";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getPosts } from "../../Actions/posts";
import { useDispatch } from "react-redux";
import img from "../../image/loading.svg";

const Posts = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
    document.title = "Posts";
  }, [currentId, dispatch]);

  const posts = useSelector((state) => state.posts);

  return !posts.length ? (
    <div className="container fade show">
      <div className="row d-flex justify-content-center mt-5">
        <div className="col-lg-10 d-flex justify-content-center mt-5">
          <img className="img-fluid mt-5 p-2 shadow" src={img} alt="loading" />
        </div>
      </div>
    </div>
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
