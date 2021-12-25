import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getPost } from "../Actions/posts";
import { useDispatch, useSelector } from "react-redux";

function PostDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const post = useSelector((state) => state.posts);
  console.log(post);

  useEffect(() => {
    dispatch(getPost(id));
  }, [id]);

  return post.length === 0 ? (
    <>
      <h3 className="text-danger">...LOADING</h3>
    </>
  ) : (
    <>
      <div className="container mt-5">
        <Link to="/" className="text-success">
          Homepage
        </Link>
        <div className="row mt-3">
          <div className="col-lg-6 my-2">
            <img
              src={post.selectedFile}
              alt={post.title}
              className="img-thumbnail"
            />
          </div>
          <div className="col-lg-6 my-2">
            <h4 className="text-primary">{post.title} </h4>
            <p className="text-dark"> {post.message}</p>

            {/* <p>{post.tags.map((tag) => `#${tag}`)}</p> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default PostDetails;
