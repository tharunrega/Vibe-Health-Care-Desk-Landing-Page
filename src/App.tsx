import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { NutritionSolutions } from './components/NutritionSolutions';
import { BestSellers } from './components/BestSellers';
import { TrustSection } from './components/TrustSection';
import { FeatureSection } from './components/FeatureSection';
import { CharitableInitiatives } from './components/CharitableInitiatives';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <NutritionSolutions />
      <BestSellers />
      <TrustSection />
      
      <FeatureSection
        title="Health Care Desk"
        subtitle="The Future Of Smart Health"
        description="At Health Care Desk, we are committed to producing supplements that harness the power of all-natural superfoods. Our products help support the body's natural processes, improving our customers' quality of life."
        image="/natural-components.jpg"
        imagePosition="left"
      />

      <FeatureSection
        title="100% Natural Components"
        subtitle="Nature-Powered Wellness You Can Trust"
        description="We harness the goodness of nature to create supplements enriched with premium, research-backed superfood extracts. Each formula is carefully crafted to promote overall vitality and deliver proven health benefits. At Health Desk Care, we uphold the highest standards of quality, safety, and regulatory compliance, ensuring every product you choose is both effective and trustworthy."
        image="/natural-components.jpg"
        imagePosition="left"
      />

      <FeatureSection
        title="Research-Backed Formulations"
        subtitle="Formulated with Clinically Tested Ingredients"
        description="We combine the expertise of our physicians with the latest health data and medical research, ensuring every supplement is thoughtfully formulated for maximum benefit."
        image="/research-lab.jpg"
        imagePosition="right"
      />

      <FeatureSection
        title="Eco-Conscious Manufacturing"
        subtitle="Sustainable from Source to Shelf"
        description="Our supplements are crafted in certified facilities that meet and exceed industry standards — ensuring exceptional quality while minimizing environmental impact. Through eco-friendly processes and a commitment to reducing our carbon footprint, we create wellness solutions that are as good for the planet as they are for you."
        image="/manufacturing.jpg"
        imagePosition="left"
      />

      <CharitableInitiatives />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;