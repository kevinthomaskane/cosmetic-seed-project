import FixedBackground from '@/components/FixedBackground';
import ParallaxSection from '@/components/ParallaxSection';
import WelcomeSection from '@/components/WelcomeSection';
import { VisibleSectionProvider } from './context/VisibleSectionProvider';

export default function Home() {
  return (
    <main>
      <VisibleSectionProvider>
        <FixedBackground />
        <ParallaxSection id="section1">
          <WelcomeSection />
        </ParallaxSection>
        <ParallaxSection id="section2">
          <div className="h-full flex flex-col justify-end pb-20 px-8">
            {/* Welcome Text with Animation */}
            <h1 className="animate-fade-in mb-8 text-4xl">Who We Are</h1>

            {/* Subheading and CTAs */}
            <div className="animate-slide-up-delayed">
              {/* Subheading */}
              <p className="text-lg text-gray-900 mb-8 max-w-md leading-relaxed">
                lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </ParallaxSection>
        <ParallaxSection id="section3">
          <div className="h-full flex flex-col justify-end pb-20 px-8">
            {/* Welcome Text with Animation */}
            <h1 className="animate-fade-in mb-8 text-4xl">What We Offer</h1>

            {/* Subheading and CTAs */}
            <div className="animate-slide-up-delayed">
              {/* Subheading */}
              <p className="text-lg text-gray-900 mb-8 max-w-md leading-relaxed">
                lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
              </p>
            </div>
          </div>
        </ParallaxSection>
      </VisibleSectionProvider>
    </main>
  );
}
