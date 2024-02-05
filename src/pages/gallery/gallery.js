import React, { useEffect, useState } from "react";
import axios from "axios";
import "./gallery.css";

const GalleryPage = () => {
    const [gallery, setGallery] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get(
                "https://raw.githubusercontent.com/stacsnssce/webdata/master/gallery.json"
            );
            const sortedGallery = response.data.gallery.sort((a, b) =>
                b.title.localeCompare(a.title)
            ); // Sort gallery array in descending order by event title
            setGallery(sortedGallery);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    return (
        <div className="container">
            <h1 className="heading">Gallery</h1>
            {gallery.map((ga, index) => (
                <section key={index} className="event">
                    <h2 className="event-title">{ga.title}</h2>
                    <div className="images">
                        {ga.images.map((im, imgIndex) => (
                            <img
                                key={imgIndex}
                                src={im}
                                alt={ga.title}
                                className="img"
                            />
                        ))}
                    </div>
                </section>
            ))}
        </div>
    );
};

export default GalleryPage;
