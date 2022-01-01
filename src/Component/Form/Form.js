import { useState } from "react";
import { useDispatch } from "react-redux";
import FileBase from "react-file-base64";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { createPost } from "../../Actions/posts";

const FormCreate = () => {
  document.title = "Create a Post";
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
    dispatch(createPost(postData));
    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };
  const clear = () => {};
  return (
    <div className="container">
      <h3 className="font-weight-bold my-3 text-primary text-center">
        Create Post
      </h3>
      <div className="row d-flex justify-content-center">
        <div className="col-lg-8 my-4">
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

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
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
                  setPostData({ ...postData, tags: e.target.value.split(",") })
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
            <Button
              variant="primary"
              className="mx-3 btn-danger"
              onClick={clear}
            >
              Clear
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default FormCreate;
