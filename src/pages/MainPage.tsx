import { HeroSection } from '../components/sections/HeroSection';
import { ApproachSection } from '../components/sections/ApproachSection';
import { NHSAlignmentSection } from '../components/sections/NHSAlignmentSection';
import { VideoSection } from '../components/sections/VideoSection';
import { AnalyticsSection } from '../components/sections/AnalyticsSection';
import { ContactSection } from '../components/sections/ContactSection';
import { ShaderBackground } from '../components/ShaderBackground';

export const MainPage = () => {
  return (
    <div className="relative">
      <div className="fixed inset-0 w-full h-full">
        <ShaderBackground />
      </div>
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
