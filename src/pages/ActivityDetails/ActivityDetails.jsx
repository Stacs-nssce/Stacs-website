import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import fm from "front-matter";
import ReactMarkdown from "react-markdown";

const ActivityDetails = () => {
    const { activityId } = useParams();
    const [activityContent, setActivityContent] = useState("");
    const [activityTitle, setActivityTitle] = useState("");
    const [activityCover, setActivityCover] = useState("");
    console.log(activityId);

    useEffect(() => {
        axios
            .get(
                `https://raw.githubusercontent.com/stacsnssce/webdata/master/activities/${activityId}`
            )
            .then((response) => {
                const mdf = fm(response.data);
                setActivityContent(mdf.body);
                setActivityTitle(mdf.attributes.title);
                setActivityCover(mdf.attributes.cover);
            })
            .catch((error) => {
                console.error("Error fetching award content:", error);
            });
    }, [activityId]);

    return (
        <div className="Blog-Container">
            <ReactMarkdown className="Desc">{activityContent}</ReactMarkdown>
        </div>
    );
};

export default ActivityDetails;
