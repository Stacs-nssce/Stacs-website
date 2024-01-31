// BlogCard.js

import React from "react";
import { Link } from "react-router-dom";
import "./BlogCard.css"; // Import the CSS file

function BlogCard({ post }) {
    return (
        <Link to={`/blog/${post.id}`} className="card-link">
            {" "}
            {/* Wrap the card with Link */}
            <div className="card">
                <div className="card__header">
                    <img
                        src={`https://source.unsplash.com/600x400/?${post.title}`}
                        alt="card__image"
                        className="card__image"
                        width="600"
                    />
                </div>
                <div className="card__body">
                    <span className={`tag tag-${post.tagColor}`}>
                        {post.tag}
                    </span>
                    <h4>{post.title}</h4>
                    <p>{post.excerpt}</p>
                </div>
                <div className="card__footer">
                    <div className="user">
                        <img
                            src={`https://i.pravatar.cc/40?img=${post.id}`}
                            alt="user__image"
                            className="user__image"
                        />
                        <div className="user__info">
                            <h5>{post.author}</h5>
                            <small>{post.date}</small>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default BlogCard;
