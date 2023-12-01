import "./Home.css";

export default function Home() {
    return (
        <>
            <section id="hero">
                <div className="wrapper">
                    <div className="hero-wrap">
                        <div className="hero-description">
                            <div className="hero-title">
                                <h1>
                                    Student's Association Of Computer Science
                                </h1>
                            </div>
                            <div className="department">
                                <h5>Department Of Computer Science</h5>
                            </div>
                            <div className="hero-quote">
                                <div className="caption">
                                    <h5>
                                        "Collaboration is the fuel that allows
                                        common people to attain uncommon
                                        results."
                                    </h5>
                                </div>
                                <div className="author">
                                    <h5>-Andrew Carnegie</h5>
                                </div>
                            </div>
                        </div>
                        <div className="hero-image">
                            <img
                                src="./img/hero-img.svg"
                                alt="hero section image"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
