import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import fm from "front-matter";
import ReactMarkdown from "react-markdown";
const AwardDetails = () => {
    const { awardId } = useParams();
    const [awardContent, setAwardContent] = useState("");
    const [awardTitle, setAwardTitle] = useState("");
    const [awardCover, setAwardCover] = useState("");

    useEffect(() => {
        axios
            .get(
                `https://raw.githubusercontent.com/Stacs-nssce/webdata/master/awards/${awardId}`
            )
            .then((response) => {
                const mdf = fm(response.data);
                setAwardContent(mdf.body);
                setAwardTitle(mdf.attributes.title);
                // setAwardCover(mdf.attributes.cover);
            })
            .catch((error) => {
                console.error("Error fetching award content:", error);
            });
    }, [awardId]);

    return (
        <div className="Blog-Container">
            <ReactMarkdown className="Title">{awardTitle}</ReactMarkdown>
            <ReactMarkdown className="Desc">{awardContent}</ReactMarkdown>
        </div>
    );
};

export default AwardDetails;
