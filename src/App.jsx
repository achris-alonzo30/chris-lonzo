import "./App.css";

import { 
  Route,
  Routes,
  BrowserRouter,   
} from "react-router-dom";

import logo from "/logo.svg";
import { Footer } from "./components/Footer";
import { Homepage } from "./pages/Homepage";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-900 px-4 py-12 text-zinc-50">
        <img src={logo} alt="Christopher Alonzo Initialials Logo" className="h-14 w-14 text-center mb-4" />
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
