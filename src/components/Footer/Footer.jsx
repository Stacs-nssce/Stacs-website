import "./Footer.css";
import insta from "../../assets/instagram.png";
import yt from "../../assets/youtube.png";
import lnkdin from "../../assets/linkedIn.png";
// import img21 from "../../assets/image21.png";
import img8 from "../../assets/image 8.png";
import mailIcon from "../../assets/mail.png";

export default function Footer() {
    return (
        <div className="footer">
            {/* <img src={img21} alt="img-21" /> */}
            <div className="contact">
                <div className="images">
                    <img src={img8} alt="img-8" />
                    <div className="links">
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={lnkdin} alt="linkedin-icon" />
                        </a>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={insta} alt="insta-icon" />
                        </a>
                        <a
                            href="https://youtube.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={yt} alt="YT-icon" />
                        </a>
                    </div>
                </div>
                <div className="mail-container">
                    <div className="mailbox">
                        <img
                            src={mailIcon}
                            alt="mail-icon"
                            className="mail-icon"
                        />
                        <a
                            className="contactmail"
                            href="mailto:stacs@nssce.ac.in"
                        >
                            MAIL US
                        </a>
                    </div>
                </div>
            </div>
            <div className="copyright">STACS NSSCE © 2025</div>
        </div>
    );
}
