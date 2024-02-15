import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import fm from "front-matter";
import ReactMarkdown from "react-markdown";

const BlogDetails = () => {
    const { postId } = useParams();
    const [blogContent, setBlogContent] = useState("");
    // const [activityTitle, setActivityTitle] = useState("");
    // const [activityCover, setActivityCover] = useState("");

    useEffect(() => {
        axios
            .get(
                `https://raw.githubusercontent.com/stacsnssce/webdata/master/posts/${postId}`
            )
            .then((response) => {
                const mdf = fm(response.data);
                setBlogContent(mdf.body);
            })
            .catch((error) => {
                console.error("Error fetching Blog content:", error);
            });
    }, [postId]);

    return (
        <div>
            <ReactMarkdown>{blogContent}</ReactMarkdown>
        </div>
    );
};

export default BlogDetails;
