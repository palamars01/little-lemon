import { Home, Header, Booking, Footer, Contact } from "./components";
import { Routes, Route } from "react-router";

import "./App.css";

function App() {
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        overflowX: "hidden",
      }}
    >
      <Header />
      <main style={{ backgroundColor: "#485e57" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
