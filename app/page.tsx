import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Products from "./components/Products";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Products />
      <CTA />
      <Footer />
    </main>
  );
}
