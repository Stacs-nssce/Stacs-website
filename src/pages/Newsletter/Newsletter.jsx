import { Link } from "react-router-dom";
import "./Newsletter.css";

export default function Newsletter() {
    return (
        <div className="newsletter">
            <div className="title">
                <span>NEWSLETTER</span>
            </div>
            <div className="content">
                <Link to="/Newsletter/201718.md"></Link>
                <Link to="/Newsletter/201819.md"></Link>
                <Link to="/Newsletter/201920.md"></Link>
                <Link to="/Newsletter/202021.md"></Link>
                <Link to="/Newsletter/202122.md"></Link>
                <Link to="/Newsletter/202223.md"></Link>
                <Link to="/Newsletter/202324.md"></Link>
                <Link to="/Newsletter/"></Link>
            </div>
        </div>
    );
}
