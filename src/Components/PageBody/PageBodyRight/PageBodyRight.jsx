import React from 'react'
import SearchCard from './../../Search/SearchCard';
import CommentsSections from './../../Comments/CommentsSections';

export default function PageBodyRight(props) {

    return (
        <div className='col-md-4'>
        <div>
          <SearchCard />
          {props.comments.length > 1 && <CommentsSections comments={props.comments} />}
        </div>
      </div>
    )
}
