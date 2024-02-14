import "./footer.css";
import insta from "../../assets/instagram.png";

export default function Footer() {
    return (
        <div className="footer">
            <img src="./img/image21.png" />
            <div className="contact">
                <div className="images">
                    <img src="./img/image 8.png" />
                    <div className="links">
                        <a>
                            <img src="./img/linkedIn.png" />
                        </a>
                        <a>
                            <img src={insta} />
                        </a>
                        <a>
                            <img src="./img/youtube.png" />
                        </a>
                    </div>
                </div>
                <div>
                    <div></div>
                    EMAIL: XYZ@GMAIL.COM
                </div>
            </div>
            <div>STACS NSSCE © 2023</div>
        </div>
    );
}
