import React from 'react'
import SearchCard from './../../Search/SearchCard';
import UserCommentModal from './../../Comments/UserComment/UserCommentModal';
import CommentsSections from './../../Comments/CommentsSections';

export default function PageBodyRight() {
    return (
        <div className='col-md-4'>
        <div className='my-4'>
          <SearchCard />
          <UserCommentModal />
          <CommentsSections />
        </div>
      </div>
    )
}
