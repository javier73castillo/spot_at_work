import "./App.css";
import { ContactUs } from "./Components/footer/Footer";
import Faq from "./Pages/faq/Faq";
import Navbar from "./Components/navbar/Navbar";
import SupportChat from "./Components/SupportChat/SupportChat";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { JwtContext } from "./shared/Context/JwtContext";
import { LoginPage } from "./Pages/login/LoginPage";
import { RegisterPage } from "./Pages/resgisterPage/RegisterPage";
import { Locations } from "./Pages/Locations/Locations";
import { Fares } from "./Pages/Fares/Fares";
import { About } from "./Pages/About/About";
import LocationsDetails from "./Pages/Locations/LocationsDetails/LocationsDetails";
import Home from "./Pages/Home/Home";
import  FaresDetails  from "./Pages/Fares/Details/FaresDetails";
import { RequireAuth } from "./shared/Components/RequiereAuth/RequireAuth";

function App() {
  const [jwt, setJwt] = useState(localStorage.getItem("token"));

  return (
    <JwtContext.Provider value={{ jwt, setJwt }}>
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/locations" element={<RequireAuth><Locations /></RequireAuth>} />
            <Route path="/locations/:id" element={<RequireAuth><LocationsDetails /></RequireAuth>} />
            <Route path="/fares" element={<RequireAuth><Fares /></RequireAuth>} />
            <Route path="/fares/:id" element={<RequireAuth><FaresDetails/></RequireAuth>} />
            <Route path="/about" element={<About />} />
          </Routes>
          {jwt && <SupportChat />}
          <ContactUs />
        </Router>
      </div>
    </JwtContext.Provider>
  );
}

export default App;
