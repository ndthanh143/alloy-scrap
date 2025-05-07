import {
  FAQSection,
  Footer,
  Header,
  HeroSection,
  PriceBoard,
  ProcessSection,
  QuoteForm,
  ServiceSection,
} from "@/components";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      <Header />
      <HeroSection />
      <ServiceSection />
      <PriceBoard />
      <ProcessSection />
      <QuoteForm />
      <FAQSection />
      <Footer />
    </main>
  );
}
