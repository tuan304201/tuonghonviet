import { Routes, Route } from "react-router-dom";
import Contact from "./Page/Contact";
import Home from "./Page/Home";
import Intro from "./Page/Intro";
import NewsHome from "./Page/NewsHome";
import ProgramHome from "./Page/ProgramHome";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/intro" element={<Intro />} />
                <Route path="/programs" element={<ProgramHome />} />
                <Route path="/news" element={<NewsHome />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </div>
    );
}

export default App;
