import React from "react";
import "./faculties.css";

export default function Faculties() {
    // Sample data representing faculty members
    const facultyMembers = [
        {
            id: 1,
            name: "John Doe",
            position: "Professor",
            image: "john-doe.jpg",
        },
        {
            id: 2,
            name: "John Doe",
            position: "Professor",
            image: "john-doe.jpg",
        },
        {
            id: 3,
            name: "John Doe",
            position: "Professor",
            image: "john-doe.jpg",
        },
        {
            id: 4,
            name: "John Doe",
            position: "Professor",
            image: "john-doe.jpg",
        },
    ];

    return (
        <div className="faculties">
            <div className="faculty-title-container">
                <span className="faculty-title">FACULTIES</span>
                <div className="side-border"></div>
            </div>
            <div className="faculty-mem">
                {facultyMembers.map((member) => (
                    <div
                        key={member.id}
                        className={
                            member.id % 2 === 0 ? "container-b" : "container-y"
                        }
                    >
                        <div className="mem-img">
                            <img
                                src={require(`./images/${member.image}`)}
                                alt={member.name}
                            />
                        </div>
                        <span className="mem-name">{member.name}</span>
                        <span className="mem-position">{member.position}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
