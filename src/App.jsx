import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Loader from "./components/common/Loader";
import ScrollToTop from "./components/common/ScrollToTop";
import ScrollTopButton from "./components/common/ScrollTopButton";
import FloatingActions from "./components/common/FloatingActions";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <Loader />;

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <FloatingActions />
      <ScrollTopButton />
    </>
  );
}

export default App;
