import React, { useEffect, useState } from "react";
import axios from "axios";
import frontMatter from "front-matter";
import "./Activities.css";

const ActivitiesPage = () => {
    const [activities, setActivities] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        setIsLoading(true);
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
            setIsLoading(false);
        } catch (error) {
            console.error("Error fetching data:", error);
            setIsLoading(false);
        }
    };

    return (
        <section className="Activity">
            <div className="title">
                <span> ACTIVITES</span>
            </div>
            <div className="rows">
                {isLoading
                    ? new Array(8).fill(null).map((_, i) => (
                          <div key={i} className="row">
                              <div className="container-skeleton">
                                  <div className="image-skeleton"></div>
                                  <div className="content-skeleton">
                                      <div className="title-skeleton"></div>
                                      <div className="date-skeleton"></div>
                                  </div>
                              </div>
                          </div>
                      ))
                    : activities.map((activity) => (
                          <div key={activity.id} className="row2">
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
