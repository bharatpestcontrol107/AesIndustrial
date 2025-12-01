import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Industries from "@/components/Industries";
import Brands from "@/components/Brands";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Products />
      <Industries />
      <Brands />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
}
