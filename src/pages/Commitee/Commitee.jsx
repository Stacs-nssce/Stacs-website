import React from "react";
import "./Commitee.css";
import DrSruthy from "./assets/DrSruthy.jpg";
import Harikrishnan from "./assets/Harikrishnan.jpg";
import Sandra from "./assets/Sandra.jpg";
import Ayush from "./assets/Ayush.jpg";
import Abijith from "./assets/Abijith.jpg";
import Nidhin from "./assets/Nidhin.jpg";
import { FaLinkedin } from "react-icons/fa";

export default function Committee() {
    const teamMembers = [
        {
            id: 1,
            name: "Dr.Sruthy Manmadhan",
            role: "Faculty In-Charge",
            image: DrSruthy,
            socials: {
                platform: "https://www.linkedin.com/in/dr-sruthy-manmadhan-385122254/",
            },
        },
        {
            id: 2,
            name: "Harikrishnan A",
            role: "Chariperson",
            image: Harikrishnan,
            socials: {
                platform: "https://www.linkedin.com/in/harikrishnan-a-hk224/",
            },
        },
        {
            id: 3,
            name: "Sandra Suresh Panicker",
            role: "Secretary",
            image: Sandra,
            socials: {
                platform: "https://www.linkedin.com/in/sandra-suresh-585592300/",
            },
        },
        {
            id: 4,
            name: "Ayush R Kumar",
            role: "Joint Secretary",
            image: Ayush,
            socials: {
                platform: "https://www.linkedin.com/in/ayush-r-kumar-055478329/",
            },
        },
        {
            id: 5,
            name: "Abijith V S",
            role: "Treasurer",
            image: Abijith,
            socials: {
                platform: "https://www.linkedin.com/in/abijith-v-s/",
            },
        },
        {
            id: 6,
            name: "Nidhin Shan",
            role: "Join Treasurer",
            image: Nidhin,
            socials: {
                platform: "https://www.linkedin.com/in/nidhin-shan-0102a7322/",
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
