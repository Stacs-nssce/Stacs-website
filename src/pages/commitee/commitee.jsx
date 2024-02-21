import React from "react";
import "./Commitee.css";

export default function Committee() {
    // Sample data representing team members
    const teamMembers = [
        { id: 1, name: "John Doe", role: "Frontend Developer" },
        { id: 2, name: "John Doe", role: "Frontend Developer" },
        { id: 3, name: "John Doe", role: "Frontend Developer" },
        { id: 4, name: "John Doe", role: "Frontend Developer" },
        { id: 4, name: "John Doe", role: "Frontend Developer" },
        { id: 4, name: "John Doe", role: "Frontend Developer" },

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
                                src={require("./assets/demo-image.png")}
                                alt=""
                            />
                        </div>
                        <div className="info">
                            <h2>{member.name}</h2>
                            <p>{member.role}</p>
                        </div>
                        <div className="social">
                            <a href="#">
                                <img
                                    src={require("./assets/external-link.svg")}
                                    alt=""
                                />
                            </a>
                            <a href="#">
                                <img
                                    src={require("./assets/github-logo.svg")}
                                    alt=""
                                />
                            </a>
                            <a href="#">
                                <img
                                    src={require("./assets/behance-logo.svg")}
                                    alt=""
                                />
                            </a>
                            <a href="#">
                                <img
                                    src={require("./assets/dribble-logo.svg")}
                                    alt=""
                                />
                            </a>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
}
