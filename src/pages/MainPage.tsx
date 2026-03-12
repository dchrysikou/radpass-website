import { HeroSection } from '../components/sections/HeroSection';
import { ApproachSection } from '../components/sections/ApproachSection';
import { NHSAlignmentSection } from '../components/sections/NHSAlignmentSection';
import { VideoSection } from '../components/sections/VideoSection';
import { AnalyticsSection } from '../components/sections/AnalyticsSection';
import { ContactSection } from '../components/sections/ContactSection';
import { AnimatedGradientBackground } from '../components/AnimatedGradientBackground';

export const MainPage = () => {
  return (
    <div className="relative">
      <AnimatedGradientBackground />
      <div className="relative z-10">
        <HeroSection />
        <ApproachSection />
        <AnalyticsSection />
        <NHSAlignmentSection />
        <VideoSection />
        <ContactSection />
      </div>
    </div>
  );
};
