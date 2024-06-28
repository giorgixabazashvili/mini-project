import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import Planets from "./Planets";
import People from "./People";
import Faqs from "./Faqs";
import About from "./About";
import PlanetsDetails from "./PlanetsDetails";
import PeopleDet from "./PeopleDet";
import Fasqsdeteals from "./Fasqsdeteals";

const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <header className="d-flex justify-content-center py-3">
          <ul className="nav nav-pills">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/planets" className="nav-link">
                planets
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/people" className="nav-link">
                people
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/FAQS" className="nav-link">
                Vehicles
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
          </ul>
        </header>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/planets" element={<Planets />} />
        <Route path="/people" element={<People />} />
        <Route path="/FAQs" element={<Faqs />} />
        <Route path="/about" element={<About />} />
        <Route path="/planets/:id" element={<PlanetsDetails />} />
        <Route path="/people/:id" element={<PeopleDet />} />
        <Route path="/FAQs/:id" element={<Fasqsdeteals />} />
      </Routes>

      <div className="container">
        <footer className="py-3 my-4">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item">
              <Link to="/" className="nav-link px-2 text-body-secondary">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/planets" className="nav-link px-2 text-body-secondary">
                planets
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/people" className="nav-link px-2 text-body-secondary">
                people
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/FAQs" className="nav-link px-2 text-body-secondary">
                Vehicles
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link px-2 text-body-secondary">
                About
              </Link>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">
                go Up
              </a>
            </li>
          </ul>
          <p className="text-center text-body-secondary">
            &copy; 2024 Company, Inc
          </p>
        </footer>
      </div>
    </BrowserRouter>
  );
};

export default App;
