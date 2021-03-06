import React from 'react'

export default function SearchCard(props) {
    return (
        <div className="card">
            <h5 className="card-header">Search</h5>
            <div className="card-body">
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search for..." onChange={(e) => props.filterPosts(e.target.value)} />
                    <span className="input-group-append">
                        <button className="btn btn-secondary" type="button">Go!</button>
                    </span>
                </div>
            </div>
        </div>
    )
}
