import React from 'react'
import PostItemCard from '../../PostItemCard/PostItemCard';

export default function PageBodyLeft(props) {
  console.log(props);
    return (
        <div className='col-md-8'>
          {/* {props.posts && props.posts.map(item => {
            return <PostItemCard key={item.id} post={item} />
          })} */}
          <PostItemCard />
        </div>
    )
}
