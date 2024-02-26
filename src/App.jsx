import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Faculties from "./pages/Faculties/Faculties";
import Activities from "./pages/Activity/Activities";
import Awards from "./pages/Awards/Awards";
import Newsletter from "./pages/Newsletter/Newsletter";
import Gallery from "./pages/Gallery/Gallery";
import Blog from "./pages/Blog/BlogCard";
import Commitee from "./pages/Commitee/Commitee";
import AwardDetails from "./pages/AwardDetails/AwardDetails";
import ActivityDetails from "./pages/ActivityDetails/ActivityDetails";
import BlogDetails from "./pages/BlogDetails/BlogDetails";
import Loading from "./components/Loading/Loading";

function App() {
    return (
        <>
            <Navbar />
            <div className="RouteContainer">
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/Faculties" element={<Faculties />}></Route>
                    <Route path="/Activities" element={<Activities />}></Route>
                    <Route
                        path="/activities-desc/:activityId"
                        element={<ActivityDetails />}
                    ></Route>
                    <Route path="/Awards" element={<Awards />}></Route>
                    <Route
                        path="/awards-desc/:awardId"
                        element={<AwardDetails />}
                    />
                    <Route path="/Newsletter" element={<Newsletter />}></Route>
                    <Route path="/Gallery" element={<Gallery />}></Route>
                    <Route path="/Blog" element={<Blog />}></Route>
                    <Route
                        path="/blogs-desc/:postId"
                        element={<BlogDetails />}
                    ></Route>
                    <Route path="/Commitee" element={<Commitee />}></Route>
                </Routes>
            </div>
            <Footer />
        </>
    );
}

export default App;
