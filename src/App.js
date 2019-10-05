import React from "react";
import logo from "./logo.svg";

import HeaderSection from "./components/HeaderSection";
import FeaturesSection from "./components/FeaturesSection";
import Nav from "./components/Nav";
import PlansSection from "./components/PlansSection";
import UsersSection from "./components/UsersSection";
import MapSection from "./components/MapSection";
import BusinessSection from "./components/BusinessSection";
import ChatSection from "./components/ChatsSection";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <HeaderSection />
      <FeaturesSection />
      <PlansSection />
      <UsersSection />
      <ChatSection />
      <MapSection />
      <BusinessSection />
      <Footer />
    </div>
  );
}

export default App;
