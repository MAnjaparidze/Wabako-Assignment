import React from 'react'

export default function UserCommentModal() {
    return (
        <div className="card my-4" style={{position: "sticky", top: 0, left: 0, zIndex: 1020, width: "100%"}}>
          <h5 className="card-header">Leave a Comment:</h5>
          <div className="card-body">
            <form>
              <div className="form-group">
                <textarea className="form-control" rows="3" style={{resize: "none", height: "80px"}}></textarea>
              </div>
              <button type="submit" className="btn btn-primary button-small">Submit</button>
            </form>
          </div>
        </div>
    )
}
