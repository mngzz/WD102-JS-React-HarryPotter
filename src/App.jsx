import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Staff from "./components/staff/Staff";
import Spells from "./components/spells/Spells";
import Contacts from "./components/contacts/Contacts";

function App() {
  return (
    <div className="App">
      <Header />
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="staff">
        <Staff />
      </section>
      <section id="spells">
        <Spells />
      </section>
      <section id="contacts">
        <Contacts />
      </section>
    </div>
  );
}

export default App;
