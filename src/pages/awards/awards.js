import React, { useEffect, useState } from "react";
import axios from "axios";
import fm from "front-matter";
import "./awards.css"; // Import CSS file
import AwardDetails from "./AwardDetails"; // Import AwardDetails component

const Awards = () => {
    const [awards, setAwards] = useState([]);
    const [selectedAward, setSelectedAward] = useState(null);

    useEffect(() => {
        axios
            .get(
                "https://api.github.com/repos/stacsnssce/webdata/contents/awards"
            )
            .then(async (response) => {
                const data = response.data;
                const fetchedAwards = await Promise.all(
                    data.map(async (element) => {
                        const res = await axios.get(element.download_url);
                        const mdf = fm(res.data);
                        return {
                            attribute: mdf.attributes,
                            desc: element.sha,
                            body: mdf.body,
                            id: element.name, // Using name as id
                        };
                    })
                );
                setAwards(fetchedAwards);
            })
            .catch((error) => {
                console.error("Error fetching awards:", error);
            });
    }, []);

    const handleAwardClick = (awardId) => {
        setSelectedAward(awardId);
    };

    return (
        <section className="award-wrapper container">
            <h1 className="award-title center-align">Achievements</h1>
            <div className="container award-card">
                <div className="row">
                    {awards.map((award) => (
                        <div key={award.id} className="col l4 m6 s12">
                            <div
                                className="card small"
                                onClick={() => handleAwardClick(award.id)}
                            >
                                <a
                                    href={`/awards-desc/${award.id}`}
                                    className="award-link"
                                >
                                    <img
                                        src={award.attribute.cover}
                                        alt="Award cover"
                                        className="award-image center-align"
                                    />
                                </a>
                                <div className="card-content">
                                    <h5>
                                        <b>{award.attribute.title}</b>
                                    </h5>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {selectedAward && <AwardDetails awardId={selectedAward} />}
        </section>
    );
};

export default Awards;
