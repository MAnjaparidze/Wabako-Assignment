import React from 'react'

export default function PostItemCard() {
    return (

        <div class="card mb-4">
            {/* <img class="card-img-top" src="http://placehold.it/750x300" alt="Card image cap" /> */}
            <div class="card-body">
                <h2 class="card-title">Post Title</h2>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!</p>
                <a href="#" class="btn btn-primary">See Comments</a>
            </div>
            <div class="card-footer text-muted">
                <span>{`Posted on January ${Math.round(Math.random() * Math.floor(31))} by `}</span>
            </div>
        </div>
    )
}
