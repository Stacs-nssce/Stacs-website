import React from "react";
import "./Commitee.css";
import Riya from "./assets/RiyaS.jpg";
import Keerthana from "./assets/Keerthana.jpeg";
import Advay from "./assets/advay.jpeg";
import Abhijith from "./assets/abhijith.jpeg";
import Nandana from "./assets/nandana.jpeg";
import DrSruthy from "./assets/Dr.Sruthy Manmadhan.jpg";
import { FaLinkedin } from "react-icons/fa";

export default function Committee() {
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
            name: "Riya S",
            role: "Chariman",
            image: Riya,
            socials: {
                platform: "link",
            },
        },
        {
            id: 3,
            name: "Advay P Kishore",
            role: "Secretary",
            image: Advay,
            socials: {
                platform: "link",
            },
        },
        {
            id: 4,
            name: "Abhijith V S",
            role: "Joint Secretary",
            image: Abhijith,
            socials: {
                platform: "link",
            },
        },
        {
            id: 5,
            name: "Keerthana S",
            role: "Treasurer",
            image: Keerthana,
            socials: {
                platform: "link",
            },
        },
        {
            id: 6,
            name: "Nandana Krishnadas",
            role: "Join Treasurer",
            image: Nandana,
            socials: {
                platform: "link",
            },
        },
    ];

    return (
        <section className="Commitee">
            <div className="title">
                <span> COMMITEE</span>
            </div>
            <div className="rows">
                {teamMembers.map((member) => (
                    <div key={member.id} className="row2">
                        <div className="image">
                            <img src={member.image} alt={member.name} />
                        </div>
                        <div className="info">
                            <h2>{member.name}</h2>
                            <p>{member.role}</p>
                        </div>
                        <div className="social">
                            {Object.keys(member.socials).map((social) => {
                                return (
                                    <a href={member.socials[social]}>
                                        <FaLinkedin size={20} />
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
