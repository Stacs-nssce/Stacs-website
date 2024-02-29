import "./Home.css";
import community from "../../assets/hero-img.svg";

export default function Home() {
    return (
        <div className="home">
            <div className="wrapper">
                <div className="text-holder">
                    <div className="info">
                        <h1>Student's Association Of Computer Science</h1>
                        <h5>Department of Computer Science</h5>
                        <div className="quote">
                            <h5>
                                "Collaboration is the fuel that allows common
                                people to attain uncommon results."
                            </h5>
                            <h5 className="quoter">- Andrew Carnegie</h5>
                        </div>
                    </div>
                </div>
                <img src={community} alt="community" />
            </div>
        </div>
    );
}
