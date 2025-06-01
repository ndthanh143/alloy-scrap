import {
  AlloyPurchase,
  ContactInfo,
  FAQSection,
  HeroSection,
  ProcessSection,
  PurchaseRegion,
  QuoteForm,
  WhyChooseUs,
} from "@/components";

export default function LandingPage() {
  return (
    <section>
      {/* <Header /> */}
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
      {/* <Footer /> */}
    </section>
  );
}
