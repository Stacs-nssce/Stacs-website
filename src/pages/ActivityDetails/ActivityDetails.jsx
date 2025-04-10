import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import fm from "front-matter";
import ReactMarkdown from "react-markdown";

const ActivityDetails = () => {
    const { activityId } = useParams();
    const [activityContent, setActivityContent] = useState("");
    console.log(activityId);

    useEffect(() => {
        axios
            .get(
                `https://raw.githubusercontent.com/Stacs-nssce/webdata/master/activities/${activityId}`
            )
            .then((response) => {
                const mdf = fm(response.data);
                setActivityContent(mdf.body);
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
