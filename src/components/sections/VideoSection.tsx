import { useState, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Play, Pause, Maximize2 } from "lucide-react";
import { AnimatedSection } from "../AnimatedSection";
import { Pill } from "../Pill";
import { siteContent } from "../../content/siteContent.ts";

export const VideoSection = () => {
  const shouldReduceMotion = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const content = siteContent.video;

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        videoRef.current.requestFullscreen();
      }
    }
  };

  return (
    <section id="video" className="relative overflow-hidden bg-section-alt" style={{ paddingTop: 'var(--section-top-padding)', paddingBottom: 'var(--space-section)' }}>

      <div className="section-container relative z-10">
        <div className="container-md mx-auto text-center">
          <AnimatedSection delay={0}>
            <div className="mb-6">
              <Pill>
                {content.badge}
              </Pill>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h2 className="heading-section mb-1">
              {content.title}
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="container-sm mx-auto">
              <p className="body mb-12">
                {content.description}
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="bg-section rounded-3xl p-6 md:p-8">
              <div className="relative rounded-2xl overflow-hidden group shadow-none">
                <video
                  ref={videoRef}
                  className="w-full aspect-video object-contain bg-footer-dark"
                  onClick={togglePlay}
                  onEnded={() => setIsPlaying(false)}
                >
                  <source src="/RadPass_advert_short1.pptx.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <motion.div
                  className="absolute bottom-6 left-6 right-6 flex items-center gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <motion.button
                    onClick={togglePlay}
                    whileHover={{ scale: shouldReduceMotion ? 1 : 1.05 }}
                    whileTap={{ scale: shouldReduceMotion ? 1 : 0.95 }}
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm text-heading shadow-lg hover:bg-white transition-colors"
                    aria-label={isPlaying ? "Pause video" : "Play video"}
                  >
                    {isPlaying ? (
                      <Pause className="w-5 h-5" fill="currentColor" />
                    ) : (
                      <Play className="w-5 h-5 ml-0.5" fill="currentColor" />
                    )}
                  </motion.button>

                  <motion.button
                    onClick={toggleFullscreen}
                    whileHover={{ scale: shouldReduceMotion ? 1 : 1.05 }}
                    whileTap={{ scale: shouldReduceMotion ? 1 : 0.95 }}
                    className="ml-auto flex items-center justify-center w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm text-heading shadow-lg hover:bg-white transition-colors"
                    aria-label="Toggle fullscreen"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
