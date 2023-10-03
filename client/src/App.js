import React from "react";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import VendorForm from "./components/VendorForm";
import VendorList from "./components/VendorList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VendorEdit from "./components/VendorEdit";
import { Provider } from "react-redux";
import store from "./redux/store";
function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
