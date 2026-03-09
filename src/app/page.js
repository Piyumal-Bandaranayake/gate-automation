import Navbar from '@/components/Navbar';
import HeroSlider from '@/components/HeroSlider';
import ModelsPreview from '@/components/ModelsPreview';
import Features from '@/components/Features';
import GoogleReviews from '@/components/GoogleReviews';
import GalleryPreview from '@/components/GalleryPreview';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <HeroSlider />
      <ModelsPreview />
      <Features />
      <GoogleReviews />
      <GalleryPreview />
      <Footer />
    </main>
  );
}
