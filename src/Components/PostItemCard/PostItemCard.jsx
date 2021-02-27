import React, { useEffect, useState } from 'react'
import { getPostAuthor } from '../../actions/rootActions';

export default function PostItemCard(props) {
    const [author, setAuthor] = useState(null);

    useEffect(() => {
        handleGetAuthor();
    }, [])

    const handleGetAuthor = async () => {
        let data = await getPostAuthor(props.data.userId)
        setAuthor(data);
    }

    return (
        <div className="card mb-4">
            <div className="card-body">
                <h2 className="card-title">{props.data.title.charAt(0).toUpperCase() + props.data.title.slice(1)}</h2> {/* Just cherry on top to make first letter of the header uppercase */}
                <p className="card-text">{props.data.body}</p>
                <button onClick={() => props.handleSeeCommentClick(props.data.id)} className="btn btn-primary">See Comments</button>
            </div>
            <div className="card-footer text-muted">
                <span>{`Posted on January ${Math.round(Math.random() * Math.floor(31))} by ${author && author.username}`}</span>
            </div>
        </div>
    )
}
