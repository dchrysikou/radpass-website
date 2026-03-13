import { motion, useReducedMotion } from "framer-motion";
import { AnimatedSection } from "../AnimatedSection";
import { Button } from "../Button";
import { Pill } from "../Pill";
import { siteContent } from "../../content/siteContent.ts";
import { useState } from "react";

export const HeroSection = () => {
  const shouldReduceMotion = useReducedMotion();
  const content = siteContent.hero;
  const [topCard, setTopCard] = useState<'card1' | 'card2' | 'card3'>('card1');

  return (
    <section
      id="overview"
      className="relative flex items-start pt-24"
    >
      <div className="section-container relative z-10 pt-8 pb-20 md:pb-16">
        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-16">
          <div className="flex-1 md:pr-8 container-sm">
            {/* Classification pill */}
            <AnimatedSection delay={0}>
              <Pill className="mb-4"> 
                {content.badge}
              </Pill>
            </AnimatedSection>

            {/* Main headline */}
            <AnimatedSection delay={0.1}>
              <h1 className="heading-hero mb-6 text-balance">
                {content.title} 
              </h1>
            </AnimatedSection>

            {/* Supporting paragraph */}
            <AnimatedSection delay={0.2}>
              <p className="body mb-8">
                {content.description}
              </p>
            </AnimatedSection>

            {/* CTAs */}
            <AnimatedSection delay={0.3}>
              <div className="flex flex-wrap gap-4">
                <Button
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("contact")?.scrollIntoView({
                      behavior: shouldReduceMotion ? "auto" : "smooth"
                    });
                  }}
                >
                  {content.ctaPrimary}
                </Button>
              </div>
            </AnimatedSection>
          </div> 

          {/* Decorative floating card previews - stacked on right */}
          <div className="hidden md:flex flex-col gap-2 flex-shrink-0 mt-8 md:mt-0">
            <AnimatedSection delay={0.5}>
              <motion.img
                src="/card1.svg"
                alt="RadPass card 1"
                width={305}
                height={136}
                animate={{
                  y: shouldReduceMotion ? 0 : [-12, 8, -12],
                  x: shouldReduceMotion ? 0 : [10, 20, 10]
                }}
                transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
                onClick={() => setTopCard('card1')}
                className="cursor-pointer hover:scale-105 transition-transform translate-x-6"
                style={{ zIndex: topCard === 'card1' ? 50 : 20 }}
              />
            </AnimatedSection>

            <AnimatedSection delay={0.6}>
              <motion.img
                src="/card2.svg"
                alt="RadPass card 2"
                width={305}
                height={136}
                animate={{
                  y: shouldReduceMotion ? 0 : [10, -6, 10],
                  x: shouldReduceMotion ? 0 : [8, 0, -8]
                }}
                transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
                onClick={() => setTopCard('card2')}
                className="cursor-pointer hover:scale-105 transition-transform"
                style={{ zIndex: topCard === 'card2' ? 50 : 10 }}
              />
            </AnimatedSection>

            <AnimatedSection delay={0.7}>
              <motion.img
                src="/card3.svg"
                alt="RadPass card 3"
                width={305}
                height={136}
                animate={{
                  y: shouldReduceMotion ? 0 : [-8, 14, -8],
                  x: shouldReduceMotion ? 0 : [20, 30, 20]
                }}
                transition={{ repeat: Infinity, duration: 9, ease: "easeInOut" }}
                onClick={() => setTopCard('card3')}
                className="cursor-pointer hover:scale-105 transition-transform translate-x-10"
                style={{ zIndex: topCard === 'card3' ? 50 : 30 }}
              />
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};
