import { AnimatedSection } from "../AnimatedSection";
import { Pill } from "../Pill";
import { siteContent } from "../../content/siteContent.ts";

const insightImages = ["/scroll_card1.svg", "/scroll_card2.svg", "/scroll_card3.svg"];
const insightAlts = [
  "Live area status interface",
  "Complete visibility dashboard",
  "Inspection-ready records timeline"
];

export const AnalyticsSectionStatic = () => {
  const content = siteContent.visibility;

  return (
    <section id="visibility" className="relative overflow-visible bg-section-alt" style={{ paddingTop: 'var(--section-top-padding)', paddingBottom: 'var(--space-section)' }}>
      <div className="section-container relative z-10">
        <AnimatedSection>
          <div className="text-center mb-16 container-md mx-auto">
            <div className="mb-6">
              <Pill>
                {content.badge}
              </Pill>
            </div>
            <h2 className="heading-section mb-1">
              {content.title}
            </h2>
            <div className="container-sm mx-auto">
              <p className="body">
                {content.description}
              </p>
            </div>
          </div>
        </AnimatedSection>

        <div className="flex flex-col gap-16 md:gap-24 container-md mx-auto">
          {content.insights.map((insight, index) => {
            const isImageRight = index === 0 || index === 2;

            return (
              <AnimatedSection key={index}>
                <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${!isImageRight ? 'lg:grid-flow-dense' : ''}`}>
                  <div className={`${!isImageRight ? 'lg:col-start-2' : ''}`}>
                    <h3 className="heading-assertion mb-3 text-heading">
                      {insight.title}
                    </h3>
                    <div className="h-px mb-3 bg-gradient-to-r from-[hsl(40,18%,70%)] via-[hsl(40,18%,80%)] to-transparent" />
                    <p className="body text-body">
                      {insight.description}
                    </p>
                  </div>

                  <div className={`w-full flex items-center ${isImageRight ? 'justify-end' : 'justify-start lg:col-start-1'}`}>
                    <img
                      src={insightImages[index]}
                      alt={insightAlts[index]}
                      className="w-full max-w-[550px]"
                    />
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};
