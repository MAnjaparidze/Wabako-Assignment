import React from 'react'
import PostItemCard from '../../PostItemCard/PostItemCard';

export default function PageBodyLeft(props) {

    return (
        <div className='col-md-8'>
          {
            (props.posts.length > 1) && props.posts.map(post => {
              return <PostItemCard key={post.id} data={post} handleSeeCommentClick={props.handleSeeCommentClick} activePost={props.activePost} setActivePost={props.setActivePost} />
            })
          }
        </div>
    )
}
