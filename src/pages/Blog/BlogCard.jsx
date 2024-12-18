import React, { useEffect, useState } from "react";
import axios from "axios";
import fm from "front-matter";
import "./BlogCard.css";

const Blog = () => {
    const [blog, setBlog] = useState([]);

    useEffect(() => {
        axios
            .get(
                "https://api.github.com/repos/Stacs-nssce/webdata/contents/posts"
            )
            .then(async (response) => {
                const data = response.data;
                const fetchedBlogs = await Promise.all(
                    data.map(async (element) => {
                        const res = await axios.get(element.download_url);
                        const mdf = fm(res.data);
                        return {
                            attribute: mdf.attributes,
                            desc: element.sha,
                            body: mdf.body,
                            id: element.name,
                        };
                    })
                );
                setBlog(fetchedBlogs);
            })
            .catch((error) => {
                console.error("Error fetching Blogs:", error);
            });
    }, []);

    return (
        <section className="Blog">
            <div className="title">
                <span> BLOG</span>
            </div>
            <div className="rows">
                {blog.map((blog) => {
                    return (
                        <div key={blog.id} className="row2">
                            <a
                                href={`/blogs-desc/${blog.id}`}
                                className="award-link"
                            >
                                <img
                                    src={blog.attribute.image}
                                    alt="Award Cover"
                                    className="award-image"
                                />
                                <div className="content">
                                    <h5>
                                        <b>{blog.attribute.title}</b>
                                    </h5>
                                </div>
                            </a>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Blog;
