import React from "react";
// import Button from "react-bootstrap/esm/Button";
import { Modal } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { updatePost } from "../Actions/posts";

function ModalComponent(props) {
  const handleClose = () => props.setShow(false);
  const post = useSelector((state) =>
    props.currentId ? state.posts.find((p) => p._id === props.currentId) : null
  );
  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updatePost(props.currentId, postData));
    props.setCurrentId(null);
    clear();
    handleClose();
  };
  const clear = () => {
    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };
  return (
    <Modal show={props.show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Post</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* <div className="col-lg-8 my-4"> */}
        <Form className="shadow-sm p-3" onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              name="title"
              value={postData.title}
              onChange={(e) =>
                setPostData({ ...postData, title: e.target.value })
              }
              placeholder="Title"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Creator"
              name="creator"
              value={postData.creator}
              onChange={(e) =>
                setPostData({ ...postData, creator: e.target.value })
              }
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Add Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              name="message"
              value={postData.message}
              onChange={(e) =>
                setPostData({ ...postData, message: e.target.value })
              }
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Tags"
              name="tags"
              value={postData.tags}
              onChange={(e) =>
                setPostData({ ...postData, tags: e.target.value })
              }
            />
          </Form.Group>

          <div className="my-3">
            <FileBase
              type="file"
              multiple={false}
              name="selectedFile"
              onDone={({ base64 }) =>
                setPostData({ ...postData, selectedFile: base64 })
              }
            />
          </div>
          <Button variant="primary" type="submit" className="">
            Submit
          </Button>
          <Button variant="primary" className="mx-3 btn-danger" onClick={clear}>
            Clear
          </Button>
        </Form>
        {/* </div> */}
      </Modal.Body>
      {/* <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer> */}
    </Modal>
  );
}

export default ModalComponent;
