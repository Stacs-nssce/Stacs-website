import { Link } from "react-router-dom";
import "./Newsletter.css";

export default function Newsletter() {
    return (
        <div className="newsletter">
            <div className="title">
                <span>NEWSLETTER</span>
                <div className="side-boreder"></div>
            </div>
            <div className="content">
                <Link to="/Newsletter/A"></Link>
                <Link to="/Newsletter/B"></Link>
                <Link to="/Newsletter/C"></Link>
                <Link to="/Newsletter/D"></Link>
                <Link to="/Newsletter/E"></Link>
                <Link to="/Newsletter/F"></Link>
            </div>
        </div>
    );
}
