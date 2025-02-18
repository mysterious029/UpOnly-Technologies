import { BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Main from "./components/Main";


function App() {
  return (
    <Router>
      <Navbar />
      <Main />
      <Routes>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
