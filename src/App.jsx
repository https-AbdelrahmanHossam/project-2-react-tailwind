import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About, ContactUs, Home, Questions, Services } from "./pages";
import { Navbar } from "./components";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="container">
          {/* Navbar */}
          <Navbar />
          {/* Routes */}
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/faq" element={<Questions />} />
              <Route path="/contact-us" element={<ContactUs />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
