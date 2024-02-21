import React, { useEffect, useState } from "react";
import axios from "axios";
import frontMatter from "front-matter";
import "./Activities.css";

const ActivitiesPage = () => {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get(
                "https://api.github.com/repos/stacsnssce/webdata/contents/activities"
            );
            const data = response.data;
            const activitiesData = await Promise.all(
                data.map(async (element) => {
                    const res = await axios.get(element.download_url);
                    const mdf = frontMatter(res.data);
                    return {
                        attribute: mdf.attributes,
                        desc: element.sha,
                        body: mdf.body,
                        id: element.name,
                    };
                })
            );

            activitiesData.sort((a, b) => {
                const dateA = new Date(a.attribute.date);
                const dateB = new Date(b.attribute.date);
                return dateB - dateA;
            });

            setActivities(activitiesData);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    return (
        <section className="wrapper">
            <h1 className="title">Activities</h1>
            <div className="rows">
                {activities.map((activity) => (
                    <div key={activity.id} className="row">
                        <a
                            href={`/activities-desc/${activity.id}/`}
                            className="link"
                        >
                            <div className="image">
                                <img
                                    src={activity.attribute.cover}
                                    alt="Activity"
                                />
                            </div>
                            <div className="content">
                                <h5 className="content-title">
                                    <b>{activity.attribute.title}</b>
                                </h5>
                                <h6 className="content-date">
                                    {activity.attribute.date}
                                </h6>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ActivitiesPage;
