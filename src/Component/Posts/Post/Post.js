import { FaThumbsUp } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import moment from "moment";
import ModalComponent from "../../ModalComponent";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deletePost, likePost } from "../../../Actions/posts";

const Post = ({ post, currentId, setCurrentId }) => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  return (
    <>
      {/* modal  */}
      <ModalComponent
        show={show}
        setShow={setShow}
        currentId={currentId}
        setCurrentId={setCurrentId}
      />
      <div
        className="card shadow"
        style={{ borderRadius: "10px", border: "none" }}
      >
        <div
          style={{
            position: "absolute",
            top: "8px",
            left: "5px",
            zIndex: "1000",
            fontSize: "0.8rem",
            color: "#ffffff",
          }}
        >
          <h5 className="text-light">{post.creator}</h5>
          <span>{moment(post.createdAt).fromNow()}</span>
        </div>
        <button
          onClick={() => {
            setShow(true);
            setCurrentId(post._id);
          }}
          className="border-0 text-light font-weight-bolder"
          style={{
            position: "absolute",
            top: "5px",
            right: "5px",
            zIndex: "1000",
            fontSize: "1rem",
            backgroundColor: "#242424",
            borderRadius: "9px",
          }}
        >
          <span color="text-light">
            <BsThreeDots />
          </span>
        </button>
        <img
          src={post.selectedFile}
          className=""
          style={{
            height: "200px",
            borderTopRightRadius: "10px",
            borderTopLeftRadius: "10px",
            filter: "brightness(50%)",
          }}
          alt={post.title}
        />
        <div className="card-body">
          <h5 className="text-primary">
            {/* {post.title.substring(0, 40) + " ..."} */}
            {post.title.length > 40
              ? post.title.substring(0, 40) + " ..."
              : post.title}
          </h5>
          <p className="card-text">
            {post.message.substring(0, 60) + " ..."}
            <Link to={"/" + post._id}> Read More</Link>
          </p>
          <p className="my-1" style={{ color: "#757575" }}>
            {post.tags.map((tag) => ` #${tag} `)}
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <button
              className="btn btn-primary p-1"
              onClick={() => dispatch(likePost(post._id))}
            >
              <span>
                <FaThumbsUp /> {post.likeCount}
              </span>
            </button>
            <button
              className="btn btn-danger py-0 px-1"
              onClick={() => dispatch(deletePost(post._id))}
            >
              <span>
                <AiFillDelete />
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
