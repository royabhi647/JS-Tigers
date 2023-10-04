import React from "react";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import VendorForm from "./components/VendorForm";
import VendorList from "./components/VendorList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VendorEdit from "./components/VendorEdit";
import { Provider } from "react-redux";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Toaster />
        <Routes>
          <Route path="/" element={<VendorList />} />
          <Route path="/form" element={<VendorForm />} />
          <Route path="/update/:id" element={<VendorEdit />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
