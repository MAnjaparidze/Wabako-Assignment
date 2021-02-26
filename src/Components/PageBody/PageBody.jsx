import React from 'react'
import PageBodyLeft from './PageBodyLeft/PageBodyLeft';
import PageBodyRight from './PageBodyRight/PageBodyRight';

export default function PageBody() {
    return (
        <div class="container">
            <h3 class="my-4">Place for exchanging your visions</h3>
            <div className="row">
                <PageBodyLeft />
                <PageBodyRight />
            </div>
        </div>
    )
}
