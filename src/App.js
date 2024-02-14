import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Home from "./pages/home/Home";
import Faculties from "./pages/faculties/faculties";
import Activities from "./pages/Activity/activities";
import Awards from "./pages/awards/Awards";
import Newsletter from "./pages/newsletter/newsletter";
import Gallery from "./pages/gallery/gallery";
import Blog from "./pages/blog/Blog";
import Commitee from "./pages/commitee/commitee";
import AwardDetails from "./pages/awarddetails/awarddetails";
import ActivityDetails from "./pages/ActivityDetails/ActivityDetails";

function App() {
    return (
        <>
            <Navbar />
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
                <Route path="/Commitee" element={<Commitee />}></Route>
            </Routes>
            <Footer />
        </>
    );
}

export default App;
