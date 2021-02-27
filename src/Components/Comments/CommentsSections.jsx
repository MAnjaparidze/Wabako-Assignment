import React from 'react';
import CommentCard from './CommentCard/CommentCard';
import UserCommentModal from '../Comments/UserComment/UserCommentModal';

export default function CommentsSections(props) {
    console.log("[PAGE RIGHT ", props);
    return (
        <div className='card my-4 overflow-auto' style={{ padding: "0px 10px 0px 10px", maxHeight: "400px" }}>
            <UserCommentModal />
            {props.comments.map(comment => {
                return <CommentCard key={comment.id} comment={comment} />
            })}
        </div>
    )
}
