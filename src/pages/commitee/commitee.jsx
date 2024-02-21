import React from "react";
import "./Commitee.css";

export default function Committee() {
    // Sample data representing team members
    const teamMembers = [
        {
            id: 1,
            name: "John Doe",
            role: "FrontEnd Developer",
            socials: {
                platform: "link",
                platform2: "link",
            },
        },
        {
            id: 2,
            name: "John Doe",
            role: "Backend Developer",
            socials: {
                platform: "link",
                platform2: "link",
            },
        },
        {
            id: 3,
            name: "John Doe",
            role: "Full-Stack Developer",
            socials: {
                platform: "link",
                platform2: "link",
            },
        },
        {
            id: 4,
            name: "John Doe",
            role: "Developer",
            socials: {
                platform: "link",
                platform2: "link",
            },
        },
        {
            id: 5,
            name: "John Doe",
            role: "Not a Developer",
            socials: {
                platform: "link",
                platform2: "link",
            },
        },
        {
            id: 6,
            name: "John Doe",
            role: "Maybe a not a still can be a Developer",
            socials: {
                platform: "link",
                platform2: "link",
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
                                src="./assets/demo-image.png"
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
                                        <img
                                            src={`./assets/${social}.svg`}
                                            alt={social}
                                        />
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
