import React from 'react';
import CommentCard from './CommentCard/CommentCard';

export default function CommentsSections() {
    return (
        <div className='card my-4 overflow-auto' style={{padding: "20px 10px 0px 10px", maxHeight: "300px"}}>
            <CommentCard />
            <CommentCard />
            <CommentCard />
            <CommentCard />
        </div>
    )
}
