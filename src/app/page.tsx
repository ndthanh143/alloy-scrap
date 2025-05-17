import {
  AlloyPurchase,
  ContactInfo,
  FAQSection,
  Footer,
  Header,
  HeroSection,
  ProcessSection,
  PurchaseRegion,
  QuoteForm,
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
      <ContactInfo />
      <Footer />
    </main>
  );
}
