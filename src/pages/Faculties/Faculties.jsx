import React from "react";
import "./Faculties.css";

export default function Faculties() {
    // Sample data representing faculty members
    const facultyMembers = [
        {
            id: 1,
            name: "Dr. Maya Mohan",
            position: "Head of the Department",
            image: "https://nssce.etlab.in/uploads/images/staff/U-430864-GmseC.jpg",
            profile: "https://www.nssce.ac.in/staff-profile.php?id=31",
        },
        {
            id: 2,
            name: "Dr. Sindhu S",
            position: "Professor",
            image: "https://nssce.etlab.in/uploads/images/staff/U-430858-X7Tyf.jpg",
            profile: "https://www.nssce.ac.in/staff-profile.php?id=32",
        },
        {
            id: 3,
            name: "Prof. Usha K",
            position: "Associate Professor",
            image: "https://nssce.etlab.in/uploads/images/staff/U-430860-iDkIv.jpg",
            profile: "https://www.nssce.ac.in/staff-profile.php?id=33",
        },
        {
            id: 4,
            name: "Prof. Viji Rajendran V",
            position: "Associate Professor",
            image: "https://nssce.etlab.in/uploads/images/staff/U-431060-THUsu.jpg",
            profile: "https://www.nssce.ac.in/staff-profile.php?id=30",
        },
        {
            id: 5,
            name: "Prof. Anuraj Mohan",
            position: "Assistant Professor",
            image: "https://nssce.etlab.in/uploads/images/staff/U-659604-EfPO5.jpg",
            profile: "https://www.nssce.ac.in/staff-profile.php?id=29",
        },
        {
            id: 6,
            name: "Prof. Sruthy Manmadhan",
            position: "Assistant Professor",
            image: "https://nssce.etlab.in/uploads/images/staff/727687-HvP8E.jpg",
            profile: "https://www.nssce.ac.in/staff-profile.php?id=26",
        },
        {
            id: 7,
            name: "Prof. Kiran V K",
            position: "Assistant Professor",
            image: "https://nssce.etlab.in/uploads/images/staff/759641-CW9Bo.jpg",
            profile: "https://www.nssce.ac.in/staff-profile.php?id=25",
        },
        {
            id: 8,
            name: "Prof. Balagopal N",
            position: "Assistant Professor",
            image: "https://nssce.etlab.in/uploads/images/staff/U-789722-9XKCh.JPG",
            profile: "https://www.nssce.ac.in/staff-profile.php?id=27",
        },
        {
            id: 9,
            name: "Prof. Syam Sankar",
            position: "Assistant Professor",
            image: "https://nssce.etlab.in/uploads/images/staff/U-KTU-F27261-kaOu3.JPG",
            profile: "https://www.nssce.ac.in/staff-profile.php?id=125",
        },
        {
            id: 10,
            name: "Prof. Chitra S Nair",
            position: "Assistant Professor",
            image: "https://nssce.etlab.in/uploads/images/staff/KTU-F28887-QYeTa.jpg",
            profile: "https://www.nssce.ac.in/staff-profile.php?id=124",
        },
        {
            id: 11,
            name: "Prof. Remya G",
            position: "Assistant Professor",
            image: "https://nssce.etlab.in/uploads/images/staff/U-KTU-F21401-8A2er.jpg",
            profile: "https://www.nssce.ac.in/staff-profile.php?id=127",
        },
        {
            id: 12,
            name: "Prof. Maanasa A S",
            position: "Assistant Professor Adhoc",
            image: "https://raw.githubusercontent.com/stacsnssce/webassets/master/gallery/manasa.jpg",
            profile: "https://www.nssce.ac.in/staff-profile.php?id=314",
        },
        {
            id: 13,
            name: "Prof. Pavithra T P",
            position: "Assistant Professor Adhoc",
            image: "https://raw.githubusercontent.com/stacsnssce/webassets/master/gallery/pavithra.jpg",
            profile: "https://www.nssce.ac.in/staff-profile.php?id=315",
        },
        {
            id: 14,
            name: "Prof. Syama Krishna S",
            position: "Assistant Professor Adhoc",
            image: "https://raw.githubusercontent.com/stacsnssce/webassets/master/gallery/syamakrishna.jpg",
            profile: "https://www.nssce.ac.in/staff-profile.php?id=378",
        },
    ];

    return (
        <div className="faculties">
            <div className="faculty-title-container">
                <span className="faculty-title">FACULTIES</span>
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
                            <img src={member.image} alt={member.name} />
                        </div>
                        <p className="mem-name">{member.name}</p>
                        <div className="mem-position">{member.position}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
