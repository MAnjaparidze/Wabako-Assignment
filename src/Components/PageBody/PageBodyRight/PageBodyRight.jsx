import React from 'react'
import SearchCard from './../../Search/SearchCard';
import CommentsSections from './../../Comments/CommentsSections';

export default function PageBodyRight(props) {

  return (
    <div className='col-md-4'>
      <div style={{position: "sticky", top: "60px", left: 0, zIndex: 1020, width: "100%"}}>
        <SearchCard filterPosts={props.filterPosts} />
        {props.comments.length > 1 && <CommentsSections comments={props.comments} addComment={props.addComment} user={props.user} />}
      </div>
    </div>
  )
}
