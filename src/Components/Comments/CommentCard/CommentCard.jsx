import React from 'react'

export default function CommentCard(props) {
  return (
    <div className="media mb-4 card" style={{ padding: "10px" }}>
      <div className="media-body">
        <h5 className="mt-0">{props.comment.email}</h5>
        <h6 className='mt-0'>{props.comment.name.charAt(0).toUpperCase() + props.comment.name.slice(1)}</h6>
        <p style={{ fontSize: "14px" }}>
          {props.comment.body}
        </p>
      </div>
    </div>
  )
}
