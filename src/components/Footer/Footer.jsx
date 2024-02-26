import "./Footer.css";
import insta from "../../assets/instagram.png";
import yt from "../../assets/youtube.png";
import lnkdin from "../../assets/linkedIn.png";
import img21 from "../../assets/image21.png";
import img8 from "../../assets/image 8.png";

export default function Footer() {
    return (
        <div className="footer">
            <img src={img21} alt="img-21" />
            <div className="contact">
                <div className="images">
                    <img src={img8} alt="img-8" />
                    <div className="links">
                        <a href="linkedin.com">
                            <img src={lnkdin} alt="linkedin-icon" />
                        </a>
                        <a href="instagram.com">
                            <img src={insta} alt="insta-icon" />
                        </a>
                        <a href="youtube.com/">
                            <img src={yt} alt="YT-icon" />
                        </a>
                    </div>
                </div>
                <div>
                    <div>
                        <a href="mailto:stacs@nssce.ac.in">MAIL US</a>
                    </div>
                </div>
            </div>
            <div>STACS NSSCE © 2023</div>
        </div>
    );
}
