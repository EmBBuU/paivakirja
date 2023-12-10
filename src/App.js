import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Teht12 from "./pages/teht1-2";
import Teht3 from "./pages/teht3";
import Teht4 from "./pages/teht4";
import Teht5 from "./pages/teht5";
import Teht6 from "./pages/teht6";
import Navbar from "./Navbar";
import Header from "./Header";

const App = () => {
  return (
    <div>
      <Header />
      <Navbar />

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="teht12" element={<Teht12 />} />
          <Route path="teht3" element={<Teht3 />} />
          <Route path="teht4" element={<Teht4 />} />
          <Route path="teht5" element={<Teht5 />} />
          <Route path="teht6" element={<Teht6 />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
