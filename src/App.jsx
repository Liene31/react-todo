import { useState } from "react";
import { Header } from "./layout/components/Header.jsx";
import { Footer } from "./layout/components/Footer.jsx";
import { Outlet } from "react-router";

function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
