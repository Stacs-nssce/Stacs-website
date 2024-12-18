import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import fm from "front-matter";
import ReactMarkdown from "react-markdown";
import "./BlogDetails.css";
import { CgProfile } from "react-icons/cg";
import { BsFillCalendar2DateFill } from "react-icons/bs";
const BlogDetails = () => {
    const { postId } = useParams();
    const [blogContent, setBlogContent] = useState("");
    const [blogTitle, setBlogTitle] = useState("");
    const [blogDesc, setBlogDesc] = useState("");
    const [blogName, setBlogName] = useState("");
    const [blogDate, setBlogDate] = useState("");
    // const [activityTitle, setActivityTitle] = useState("");
    // const [activityCover, setActivityCover] = useState("");

    useEffect(() => {
        axios
            .get(
                `https://raw.githubusercontent.com/Stacs-nssce/webdata/master/posts/${postId}`
            )
            .then((response) => {
                const mdf = fm(response.data);
                setBlogContent(mdf.body);
                setBlogTitle(mdf.attributes.title);
                setBlogDesc(mdf.attributes.desc);
                setBlogName(mdf.attributes.name);
                setBlogDate(mdf.attributes.date);
            })
            .catch((error) => {
                console.error("Error fetching Blog content:", error);
            });
    }, [postId]);

    return (
        <div className="Blog-Container">
            <ReactMarkdown className="Title">{blogTitle}</ReactMarkdown>
            <ReactMarkdown className="Desc">{blogDesc}</ReactMarkdown>
            <div className="author-box">
                <div className="icon-containter"></div>

                <div className="author-date">
                    <div className="name">
                        <CgProfile size={20} />
                        <ReactMarkdown className="Name">
                            {blogName}
                        </ReactMarkdown>
                    </div>
                    <div className="date">
                        <BsFillCalendar2DateFill size={20} />
                        <ReactMarkdown className="Date">
                            {blogDate}
                        </ReactMarkdown>
                    </div>
                </div>
            </div>
            <ReactMarkdown className="content">{blogContent}</ReactMarkdown>
        </div>
    );
};

export default BlogDetails;
