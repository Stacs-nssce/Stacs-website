import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import fm from "front-matter";
import axios from "axios";
const NewsletterPage = () => {
    const { id } = useParams();
    const [markdownContent, setMarkdownContent] = useState("");

    useEffect(() => {
        axios
            .get(
                `https://raw.githubusercontent.com/Stacs-nssce/webdata/master/newsletter/${id}`
            )
            .then((response) => {
                const mdf = fm(response.data);
                setMarkdownContent(mdf.body);
            })
            .catch((error) => {
                console.error("Error fetching Blog content:", error);
            });
    }, [id]);

    return (
        <div className="newsletter-container">
            <ReactMarkdown className="Desc">{markdownContent}</ReactMarkdown>
        </div>
    );
};

export default NewsletterPage;
