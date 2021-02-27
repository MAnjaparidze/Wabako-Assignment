import React from 'react'

export default function CommentCard() {
    return (
        <div className="media mb-4 card" style={{padding: "10px"}}>
          <img className="d-flex mr-3 rounded-circle" src="http://placehold.it/50x50" alt="" />
          <div className="media-body">
            <h5 className="mt-0">Commenter Name</h5>
            <p style={{fontSize: "14px"}}>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            </p>
          </div>
        </div>
    )
}
