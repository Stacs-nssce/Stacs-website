import React, { useEffect, useState } from "react";
import axios from "axios";
import fm from "front-matter";
import "./BlogCard.css";

const Blog = () => {
    const [blog, setBlog] = useState([]);

    useEffect(() => {
        axios
            .get(
                "https://api.github.com/repos/stacsnssce/webdata/contents/posts"
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
        <section className="award-wrapper container">
            <h1 className="award-title center-align">Achievements</h1>
            <div className="container award-card">
                <div className="row">
                    {blog.map((blog) => (
                        <div key={blog.id} className="col l4 m6 s12">
                            <a
                                href={`/blogs-desc/${blog.id}`}
                                className="award-link"
                            >
                                <div className="card small">
                                    <img
                                        src={blog.attribute.image}
                                        alt="Award cover"
                                        className="award-image center-align"
                                    />
                                    <div className="card-content">
                                        <h5>
                                            <b>{blog.attribute.title}</b>
                                        </h5>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
