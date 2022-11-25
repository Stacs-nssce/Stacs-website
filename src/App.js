import Home from "./Public/Home";
import About from "./Public/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="home" element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route
                        path="*"
                        element={<span> 404 Error not found</span>}
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
