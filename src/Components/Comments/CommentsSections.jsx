import React from 'react';
import CommentCard from './CommentCard/CommentCard';
import UserCommentModal from '../Comments/UserComment/UserCommentModal';

export default function CommentsSections(props) {
    return (
        <div className='card my-4 overflow-auto' style={{ position: 'relative', padding: "0px 10px 0px 10px", maxHeight: "500px" }}>
            <UserCommentModal parentPost={props.comments[0].postId} comments={props.comments} addComment={props.addComment} user={props.user} />
            {props.comments.map(comment => {
                return <CommentCard key={comment.id} comment={comment} />
            })}
        </div>
    )
}
