import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import fm from "front-matter";

const AwardDetails = () => {
    const { awardId } = useParams();
    const [awardContent, setAwardContent] = useState("");

    useEffect(() => {
        axios
            .get(
                `https://raw.githubusercontent.com/stacsnssce/webdata/master/awards/${awardId}`
            )
            .then((response) => {
                const mdf = fm(response.data);
                setAwardContent(mdf.body);
            })
            .catch((error) => {
                console.error("Error fetching award content:", error);
            });
    }, [awardId]);

    return (
        <div>
            <h1>Award Details</h1>
            <div>{awardContent}</div>
        </div>
    );
};

export default AwardDetails;
