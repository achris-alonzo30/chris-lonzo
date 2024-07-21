import "./App.css";

import { 
  Route,
  Routes,
  BrowserRouter,
  Link,   
} from "react-router-dom";

import logo from "/logo.svg";
import { Footer } from "./components/Homepage/Footer";

import { Awards } from "./pages/Awards";
import { AboutMe } from "./pages/AboutMe";
import { Homepage } from "./pages/Homepage";
import { NotFound } from "./pages/NotFound";
import { Projects } from "./pages/Projects";
import { Resume } from "./pages/Resume";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-900 px-4 py-12 text-zinc-50">
        <Link to="/"><img src={logo} alt="Christopher Alonzo Initialials Logo" className="h-14 w-14 text-center mb-4" /> </Link>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<NotFound /> } />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
