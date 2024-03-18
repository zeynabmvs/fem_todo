import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import Footer from "./components/Footer";

function App() {
  return (
    <section className="app">
      <Header />
      <Tasks />
      <Footer />
      <p className="tip">Drag and drop to reorder list</p>
    </section>
  );
}

export default App;
