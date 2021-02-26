import React from 'react'
import reportWebVitals from './../../../reportWebVitals';

export default function UserCommentModal() {
    return (
        <div class="card my-4">
          <h5 class="card-header">Leave a Comment:</h5>
          <div class="card-body">
            <form>
              <div class="form-group">
                <textarea class="form-control" rows="3" style={{resize: "none", height: "100px"}}></textarea>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
    )
}
