import {
  CustomerReviews,
  Hero,
  PopularProducts,
  Services,
  SpecialOffer,
  Footer,
  SuperQuality,
  Subscribe,
} from "./sections";
import Nav from "./components/Nav";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const cards = document.querySelectorAll(".card-animate");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-[-20px]");
            entry.target.classList.add("opacity-100", "translate-y-0");
            // Optional: Unobserve after animation
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    cards.forEach((card) => observer.observe(card));

    return () => {
      // Cleanup observer
      cards.forEach((card) => observer.unobserve(card));
    };
  }, []);
  return (
    <main>
      <Nav />
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className="bg-pale-blue padding">
        <CustomerReviews />
      </section>
      <section className="padding-x py-16 sm:py-32 w-full">
        <Subscribe />
      </section>
      <section className="bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  );
}

export default App;
