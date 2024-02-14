import React, { useEffect, useState } from "react";
import axios from "axios";
import frontMatter from "front-matter"; // Assuming you have this library installed
import "./activities.css"; // Import the CSS file

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

            // Sort activities by date in descending order (latest first)
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
        <section className="activities-page">
            <h1 className="page-title">Activities</h1>
            <div className="container activities-wrapper">
                {activities.map((activity) => (
                    <div key={activity.id} className="activity-card">
                        <a
                            href={`/activities-desc/${activity.id}/`}
                            className="nuxt-link"
                        >
                            <div className="card-image">
                                <img
                                    src={activity.attribute.cover}
                                    alt="Activity"
                                />
                            </div>
                            <div className="card-content">
                                <h5 className="act-card-title">
                                    <b>{activity.attribute.title}</b>
                                </h5>
                                <h6 className="act-card-date">
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
