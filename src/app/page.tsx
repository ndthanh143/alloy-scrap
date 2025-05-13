import {
  AlloyPurchase,
  FAQSection,
  Footer,
  Header,
  HeroSection,
  PriceBoard,
  ProcessSection,
  PurchaseRegion,
  QuoteForm,
  ServiceSection,
  WhyChooseUs,
} from "@/components";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      <Header />
      <HeroSection />
      {/* <ServiceSection /> */}
      <AlloyPurchase />
      <PurchaseRegion />
      {/* <PriceBoard /> */}
      <ProcessSection />
      <WhyChooseUs />
      <QuoteForm />
      <FAQSection />
      <Footer />
    </main>
  );
}
