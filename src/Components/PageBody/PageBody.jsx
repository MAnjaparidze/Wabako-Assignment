import React, { useEffect } from 'react'
import PageBodyRight from './PageBodyRight/PageBodyRight';
import PageBodyLeft from './PageBodyLeft/PageBodyLeft';

export default function PageBody(props) {

    return (
        <div className="container">
            <h3 className="my-4">Place for exchanging your visions</h3>
            <div className="row">
                <PageBodyLeft posts={props.posts} handleSeeCommentClick={props.handleSeeCommentClick} />
                <PageBodyRight />
            </div>
        </div>
    )
}
