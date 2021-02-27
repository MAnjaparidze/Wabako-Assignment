import React from 'react'
import PageBodyLeftContainer from '../../Containers/PageBodyLeft/PageBodyLeftContainer';
import PageBodyRight from './PageBodyRight/PageBodyRight';

export default function PageBody() {
    return (
        <div className="container">
            <h3 className="my-4">Place for exchanging your visions</h3>
            <div className="row">
                <PageBodyLeftContainer />
                <PageBodyRight />
            </div>
        </div>
    )
}
