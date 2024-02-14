// Blog.js
import React from "react";
import BlogCard from "./BlogCard";

const posts = [
    {
        id: 1,
        title: "First Blog Post",
        excerpt: "Lorem ipsum dolor sit amet...",
        tag: "Technology",
        tagColor: "blue",
        author: "Jane Doe",
        date: "2h ago",
    },
    {
        id: 2,
        title: "Second Blog Post",
        excerpt: "Lorem ipsum dolor sit amet...",
        tag: "Food",
        tagColor: "brown",
        author: "Jony Doe",
        date: "Yesterday",
    },
    {
        id: 3,
        title: "Third Blog Post",
        excerpt: "Lorem ipsum dolor sit amet...",
        tag: "Automobile",
        tagColor: "red",
        author: "John Doe",
        date: "2d ago",
    },
    {
        id: 3,
        title: "Third Blog Post",
        excerpt: "Lorem ipsum dolor sit amet...",
        tag: "Automobile",
        tagColor: "red",
        author: "John Doe",
        date: "2d ago",
    },
    {
        id: 3,
        title: "Third Blog Post",
        excerpt: "Lorem ipsum dolor sit amet...",
        tag: "Automobile",
        tagColor: "red",
        author: "John Doe",
        date: "2d ago",
    },
    // Add more blog posts...
];

function Blog() {
    return (
        <div className="container">
            {posts.map((post) => (
                <BlogCard key={post.id} post={post} />
            ))}
        </div>
    );
}

export default Blog;
