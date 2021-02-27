import React from 'react'
import reportWebVitals from './../../../reportWebVitals';

export default function UserCommentModal() {
    return (
        <div className="card my-4">
          <h5 className="card-header">Leave a Comment:</h5>
          <div className="card-body">
            <form>
              <div className="form-group">
                <textarea className="form-control" rows="3" style={{resize: "none", height: "100px"}}></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
    )
}
