import React, { useEffect, useState } from "react";
import axios from "axios";
import fm from "front-matter";
import "./Awards.css";

const Awards = () => {
    const [awards, setAwards] = useState([]);

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
                            id: element.name,
                        };
                    })
                );
                setAwards(fetchedAwards);
            })
            .catch((error) => {
                console.error("Error fetching awards:", error);
            });
    }, []);

    return (
        <section className="award-wrapper">
            <h1 className="award-title">Achievements</h1>
            <div className="rows">
                {awards.map((award) => {
                    return (
                        <div key={award.id} className="row">
                            <a
                                href={`/awards-desc/${award.id}`}
                                className="award-link"
                            >
                                <img
                                    src={award.attribute.cover}
                                    alt="Award cover"
                                    className="award-image"
                                />
                                <div className="content">
                                    <h5>
                                        <b>{award.attribute.title}</b>
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

export default Awards;
