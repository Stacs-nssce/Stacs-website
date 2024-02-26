import React from "react";
import "./Commitee.css";
import Riya from "./assets/RiyaS.jpg";
import Achuth from "./assets/Achuth R Kumar.jpg";
import Sreejith from "./assets/Sreejith M Varma.jpg";
import Karthik from "./assets/Karthik Krishna S.jpg";
import Ashish from "./assets/Ashish B.jpg";
import DrSruthy from "./assets/Dr.Sruthy Manmadhan.jpg";
import { FaLinkedin } from "react-icons/fa";

export default function Committee() {
    // Sample data representing team members
    const teamMembers = [
        {
            id: 1,
            name: "Dr.Sruthy Manmadhan",
            role: "Faculty In-Charge",
            image: DrSruthy,
            socials: {
                platform: "link",
            },
        },
        {
            id: 2,
            name: "Achuth R Kumar",
            role: "Chariman",
            image: Achuth,
            socials: {
                platform: "link",
            },
        },
        {
            id: 3,
            name: "Riya S",
            role: "Secretary",
            image: Riya,
            socials: {
                platform: "link",
            },
        },
        {
            id: 4,
            name: "Sreejith M Varma",
            role: "Joint Secretary",
            image: Sreejith,
            socials: {
                platform: "link",
            },
        },
        {
            id: 5,
            name: "Karthik Krishna S",
            role: "Treasurer",
            image: Karthik,
            socials: {
                platform: "link",
            },
        },
        {
            id: 6,
            name: "Ashish B",
            role: "Join Treasurer",
            image: Ashish,
            socials: {
                platform: "link",
            },
        },

        // Add more team members as needed
    ];

    return (
        <div className="container">
            <header>
                <div className="nav">
                    <div className="nav-content">
                        <h3>Committee</h3>
                    </div>
                </div>
            </header>

            <section className="section">
                {teamMembers.map((member) => (
                    <div key={member.id} className="card">
                        <div>
                            <img
                                className="img"
                                src={member.image}
                                alt={member.name}
                            />
                        </div>
                        <div className="info">
                            <h2>{member.name}</h2>
                            <p>{member.role}</p>
                        </div>
                        <div className="social">
                            {Object.keys(member.socials).map((social) => {
                                return (
                                    <a href={member.socials[social]}>
                                        <FaLinkedin size={40} />
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
}
