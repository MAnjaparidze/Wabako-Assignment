import React, { useState, useEffect } from 'react'

export default function UserCommentModal(props) {
  const [userComment, setUserComment] = useState({
    postId: null,
    id: null,
    name: "",
    email: "",
    body: ""
  });

  const handleInputChange = (input) => {
    setUserComment(prevState => ({
      ...prevState,
      [input.name]: input.value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    let commentObj = { ...userComment };

    commentObj.postId = props.parentPost;
    commentObj.id = props.comments[props.comments.length - 1].id + 1; // Dynamically "try" to assign id to the comment object because JSONPlaceHolder does not do this
    commentObj.email = props.user.email;

    props.addComment(commentObj);
  }

  return (
    <div className="card my-4" style={{ position: "sticky", top: 0, left: 0, zIndex: 1020, width: "100%" }}>
      <h5 className="card-header">Leave a Comment:</h5>
      <div className="card-body">
        <form onSubmit={e => handleSubmit(e)}>
          <div className="form-group">
            <textarea className="form-control" rows="3" name="body" onChange={(e) => handleInputChange(e.target)} style={{ resize: "none", height: "80px" }}></textarea>
          </div>
          <button type="submit" className="btn btn-primary button-small">Submit</button>
        </form>
      </div>
    </div>
  )
}
