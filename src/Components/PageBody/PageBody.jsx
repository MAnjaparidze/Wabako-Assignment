import React from 'react'

export default function PageBody(props) {
    return (
        <div class="container">
            <h3 class="my-4">Place for exchanging your visions</h3>
            <div className="row">
                {props.children}
            </div>
        </div>
    )
}
