import { AnimatedSection } from "../AnimatedSection";
import { useState } from "react";

type TabType = "overview" | "colors" | "typography" | "spacing" | "components" | "patterns";

export const DesignSystemSection = () => {
  const [activeTab, setActiveTab] = useState<TabType>("overview");

  const tabs: { id: TabType; label: string }[] = [
    { id: "overview", label: "Overview" },
    { id: "colors", label: "Colors" },
    { id: "typography", label: "Typography" },
    { id: "spacing", label: "Spacing" },
    { id: "components", label: "Components" },
    { id: "patterns", label: "Patterns" },
  ];

  return (
    <section id="design-system" className="relative overflow-hidden bg-page" style={{ paddingTop: 'var(--section-top-padding)', paddingBottom: 'var(--space-section)' }}>
      <div className="section-container">
        <AnimatedSection>
          <h1 className="heading-hero mb-4 text-center">Design System</h1>
          <p className="body text-center mb-16 max-w-2xl mx-auto">
            A comprehensive reference of all design tokens, components, and patterns used throughout the RadPass platform.
          </p>
        </AnimatedSection>

        {/* Tabs */}
        <div className="container-md mx-auto mb-12">
          <div className="flex justify-center gap-2 flex-wrap">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all ${
                  activeTab === tab.id
                    ? "bg-brand text-white"
                    : "bg-section text-heading hover:bg-card"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="container-md mx-auto">
          {/* Overview Tab */}
          {activeTab === "overview" && (
            <AnimatedSection>
              <div className="space-y-12">
                <div>
                  <h3 className="heading-subsection mb-6">Semantic System</h3>
                  <div className="bg-card p-6 rounded-lg border border-subtle">
                    <p className="body mb-6">
                      The design system uses semantic naming to maintain consistency and enable easy theme updates. All colors, spacing, and typography reference CSS custom properties.
                    </p>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-medium mb-2">Color Semantics</h4>
                        <div className="text-xs text-muted space-y-1 font-mono">
                          <div>--bg-page, --bg-section, --bg-card</div>
                          <div>--text-heading, --text-body, --text-muted</div>
                          <div>--brand, --brand-muted</div>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium mb-2">Layout Containers</h4>
                        <div className="text-xs text-muted space-y-1 font-mono">
                          <div>--container-xs (500px), --container-sm (700px)</div>
                          <div>--container-md (1040px), --container-lg (1200px)</div>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium mb-2">Component Classes</h4>
                        <div className="text-xs text-muted space-y-1 font-mono">
                          <div>.heading-hero, .heading-section, .heading-subsection</div>
                          <div>.heading-small, .heading-assertion, .heading-card</div>
                          <div>.body, .body-muted, .body-small</div>
                          <div>.pill-badge, .icon-container, .floating-nav</div>
                          <div>.dot-pattern, .gradient-mesh</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="heading-subsection mb-6">Usage Guidelines</h3>
                  <div className="space-y-4">
                    <div className="bg-card p-6 rounded-lg border border-subtle">
                      <h4 className="heading-small mb-3">When to use utility classes</h4>
                      <p className="body-muted mb-3">Use Tailwind utility classes for one-off spacing, sizing, or layout adjustments that don't need to be reusable components.</p>
                      <div className="text-xs font-mono bg-card border border-subtle text-body p-3 rounded">
                        {'<div className="max-w-[700px] mx-auto mb-6">'}
                      </div>
                    </div>
                    <div className="bg-card p-6 rounded-lg border border-subtle">
                      <h4 className="heading-small mb-3">When to use design system classes</h4>
                      <p className="body-muted mb-3">Use defined classes (.heading-hero, .pill-badge, etc.) for consistent, repeatable patterns across the application.</p>
                      <div className="text-xs font-mono bg-card border border-subtle text-body p-3 rounded">
                        {'<h1 className="heading-hero">RadPass</h1>'}
                      </div>
                    </div>
                    <div className="bg-card p-6 rounded-lg border border-subtle">
                      <h4 className="heading-small mb-3">When to use semantic tokens</h4>
                      <p className="body-muted mb-3">Reference CSS variables for colors, spacing, and containers to maintain consistency and enable future theme changes.</p>
                      <div className="text-xs font-mono bg-card border border-subtle text-body p-3 rounded">
                        {'style={{ paddingTop: "var(--section-top-padding)" }}'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          )}

          {/* Colors Tab */}
          {activeTab === "colors" && (
            <AnimatedSection>
              <div className="space-y-12">
                <div>
                  <h3 className="heading-subsection mb-6">Warm Neutrals</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <div className="space-y-2">
                      <div className="h-24 rounded-lg border border-subtle" style={{ backgroundColor: '#FBFAF9' }}></div>
                      <div className="text-xs font-medium">01 - Page BG</div>
                      <div className="text-xs text-muted">#FBFAF9</div>
                      <div className="text-xs text-muted font-mono">40 33% 98%</div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-24 rounded-lg border border-subtle" style={{ backgroundColor: '#FAFAFA' }}></div>
                      <div className="text-xs font-medium">02 - Section BG</div>
                      <div className="text-xs text-muted">#FAFAFA</div>
                      <div className="text-xs text-muted font-mono">0 0% 98%</div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-24 rounded-lg border border-subtle" style={{ backgroundColor: '#EEECE7' }}></div>
                      <div className="text-xs font-medium">03 - Cards</div>
                      <div className="text-xs text-muted">#EEECE7</div>
                      <div className="text-xs text-muted font-mono">40 12% 93%</div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-24 rounded-lg border border-subtle" style={{ backgroundColor: '#E4E1DA' }}></div>
                      <div className="text-xs font-medium">04 - Borders</div>
                      <div className="text-xs text-muted">#E4E1DA</div>
                      <div className="text-xs text-muted font-mono">40 18% 87%</div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-24 rounded-lg border border-subtle relative" style={{ backgroundColor: '#8A877F' }}>
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                          <div className="text-xs font-medium">05 - Muted Text</div>
                          <div className="text-xs text-white/80">#8A877F</div>
                          <div className="text-xs text-white/80 font-mono">40 6% 52%</div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-24 rounded-lg border border-subtle relative" style={{ backgroundColor: '#5E5C57' }}>
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                          <div className="text-xs font-medium">055 - Body Text</div>
                          <div className="text-xs text-white/80">#5E5C57</div>
                          <div className="text-xs text-white/80 font-mono">40 5% 36%</div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-24 rounded-lg border border-subtle relative" style={{ backgroundColor: '#353330' }}>
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                          <div className="text-xs font-medium">06 - Headings</div>
                          <div className="text-xs text-white/80">#353330</div>
                          <div className="text-xs text-white/80 font-mono">40 4% 20%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="heading-subsection mb-6">Brand Colors</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="space-y-2">
                      <div className="h-24 rounded-lg" style={{ backgroundColor: '#2F6F5F' }}></div>
                      <div className="text-xs font-medium">Primary Green - Strong</div>
                      <div className="text-xs text-muted">#2F6F5F</div>
                      <div className="text-xs text-muted font-mono">164 40% 31%</div>
                      <div className="text-xs text-muted">Buttons, Active Navigation, Brand Color</div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-24 rounded-lg" style={{ backgroundColor: '#8FB5A8' }}></div>
                      <div className="text-xs font-medium">Primary Green - Muted</div>
                      <div className="text-xs text-muted">#8FB5A8</div>
                      <div className="text-xs text-muted font-mono">155 24% 64%</div>
                      <div className="text-xs text-muted">Dot pattern, gradient mesh backgrounds</div>
                    </div>
                  </div>
                  <div className="p-4 bg-card rounded-lg border border-subtle">
                    <div className="text-xs text-muted space-y-1">
                      <div className="font-semibold text-foreground mb-2">Gradient Usage</div>
                      <div className="font-mono">Pills & Icon containers: linear-gradient(to bottom, hsl(var(--brand) / 0.12), hsl(var(--brand) / 0.08))</div>
                      <div className="text-muted mt-2">Uses Strong green at varying opacity levels for subtle backgrounds</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="heading-subsection mb-6">Footer Color</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="h-24 rounded-lg border border-subtle relative" style={{ backgroundColor: '#252628' }}>
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                          <div className="text-xs font-medium">Footer Dark</div>
                          <div className="text-xs text-white/80">#252628</div>
                          <div className="text-xs text-white/80 font-mono">220 5% 15%</div>
                        </div>
                      </div>
                      <div className="text-xs text-muted">Used for footer background</div>
                    </div>
                  </div>
                </div>

              </div>
            </AnimatedSection>
          )}

          {/* Typography Tab */}
          {activeTab === "typography" && (
            <AnimatedSection>
              <div className="space-y-8">
                <div>
                  <h3 className="heading-subsection mb-6">Font Family</h3>
                  <div className="bg-card p-6 rounded-lg border border-subtle">
                    <div className="text-2xl font-medium mb-2">Inter</div>
                    <div className="text-sm text-muted mb-4">Weights: 400 (Normal), 500 (Medium), 600 (Semibold)</div>
                    <div className="mt-4 text-muted space-y-1">
                      <div className="font-normal">ABCDEFGHIJKLMNOPQRSTUVWXYZ - Normal</div>
                      <div className="font-medium">ABCDEFGHIJKLMNOPQRSTUVWXYZ - Medium</div>
                      <div className="font-semibold">ABCDEFGHIJKLMNOPQRSTUVWXYZ - Semibold</div>
                      <div className="font-normal">abcdefghijklmnopqrstuvwxyz</div>
                      <div className="font-normal">0123456789</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="heading-subsection mb-6">Heading Styles</h3>
                  <div className="space-y-8 bg-card p-6 rounded-lg border border-subtle">
                    <div>
                      <div className="heading-hero mb-2">Hero Heading</div>
                      <div className="text-xs text-muted font-mono">40-48px / Medium / Line height: 1.1 / tracking-tight</div>
                      <div className="text-xs text-muted mt-1">Class: .heading-hero</div>
                    </div>
                    <div>
                      <div className="heading-section mb-2">Section Heading</div>
                      <div className="text-xs text-muted font-mono">32-36px / Medium / Line height: 1.2 / tracking-tight</div>
                      <div className="text-xs text-muted mt-1">Class: .heading-section</div>
                    </div>
                    <div>
                      <div className="heading-small mb-2">Small Heading</div>
                      <div className="text-xs text-muted font-mono">18-20px / Normal / Line height: 1.4 / tracking-tight</div>
                      <div className="text-xs text-muted mt-1">Class: .heading-small</div>
                    </div>
                    <div>
                      <div className="heading-subsection mb-2">Subsection Heading</div>
                      <div className="text-xs text-muted font-mono">28-32px / Normal / Line height: 1.2 / tracking-tight</div>
                      <div className="text-xs text-muted mt-1">Class: .heading-subsection</div>
                    </div>
                    <div>
                      <div className="heading-assertion mb-2">Assertion Statement</div>
                      <div className="text-xs text-muted font-mono">22-24px / Medium / Line height: 1.5 / tracking-tight</div>
                      <div className="text-xs text-muted mt-1">Class: .heading-assertion</div>
                    </div>
                    <div>
                      <div className="heading-card">Card Heading</div>
                      <div className="text-xs text-muted font-mono">20px / Medium / Line height: 1.3 / tracking-tight / mb-2</div>
                      <div className="text-xs text-muted mt-1">Class: .heading-card</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="heading-subsection mb-6">Body Text Styles</h3>
                  <div className="space-y-6 bg-card p-6 rounded-lg border border-subtle">
                    <div>
                      <div className="body mb-2">Body Text - Standard paragraph text for most content. Base text style with good readability.</div>
                      <div className="text-xs text-muted font-mono">16px / Normal / Line height: 1.6 / text-body color</div>
                      <div className="text-xs text-muted mt-1">Class: .body</div>
                    </div>
                    <div>
                      <div className="body-muted mb-2">Body Muted - Used for secondary or supporting text</div>
                      <div className="text-xs text-muted font-mono">14px / Normal / Line height: 1.6 / text-muted color / tracking-tight</div>
                      <div className="text-xs text-muted mt-1">Class: .body-muted</div>
                    </div>
                    <div>
                      <div className="body-small mb-2">Body Small - Used for descriptions in cards and smaller content areas</div>
                      <div className="text-xs text-muted font-mono">14px / Normal / Line height: 1.7 / text-body color</div>
                      <div className="text-xs text-muted mt-1">Class: .body-small</div>
                    </div>
                    <div>
                      <div className="text-xs uppercase font-medium mb-2">UPPERCASE LABEL TEXT</div>
                      <div className="text-xs text-muted font-mono">12px / Medium / uppercase</div>
                      <div className="text-xs text-muted mt-1">Inline: text-xs uppercase font-medium (used in pill-badge)</div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          )}

          {/* Spacing Tab */}
          {activeTab === "spacing" && (
            <AnimatedSection>
              <div className="space-y-12">
                <div>
                  <h3 className="heading-subsection mb-6">Layout Containers</h3>
                  <div className="bg-card p-6 rounded-lg border border-subtle space-y-4">
                    <div className="space-y-2">
                      <div className="font-medium text-sm">.container-xs</div>
                      <div className="text-xs text-muted font-mono">var(--container-xs): 500px</div>
                      <div className="text-xs text-muted">Use for: Narrow content forms or focused elements</div>
                    </div>
                    <div className="space-y-2">
                      <div className="font-medium text-sm">.container-sm</div>
                      <div className="text-xs text-muted font-mono">var(--container-sm): 700px</div>
                      <div className="text-xs text-muted">Use for: Readable text blocks (hero text, section headers)</div>
                    </div>
                    <div className="space-y-2">
                      <div className="font-medium text-sm">.container-md</div>
                      <div className="text-xs text-muted font-mono">var(--container-md): 1040px</div>
                      <div className="text-xs text-muted">Use for: Wide content (two-column layouts)</div>
                    </div>
                    <div className="space-y-2">
                      <div className="font-medium text-sm">.container-lg</div>
                      <div className="text-xs text-muted font-mono">var(--container-lg): 1200px</div>
                      <div className="text-xs text-muted">Use for: Full section width</div>
                    </div>
                    <div className="space-y-2">
                      <div className="font-medium text-sm">.section-container</div>
                      <div className="text-xs text-muted font-mono">max-width: var(--container-lg) + responsive padding</div>
                      <div className="text-xs text-muted">Standard section wrapper with padding (1.5rem mobile, 2rem desktop)</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="heading-subsection mb-6">Section Spacing</h3>
                  <div className="bg-card p-6 rounded-lg border border-subtle space-y-6">
                    <div className="space-y-3">
                      <div className="font-medium text-sm">section-top-padding</div>
                      <div className="text-xs text-muted font-mono">var(--section-top-padding): 6rem (96px)</div>
                      <div className="text-xs text-muted">Top padding for sections (accounts for fixed nav)</div>
                      <div className="h-12 bg-brand/20 rounded" style={{ width: '96px' }}></div>
                    </div>
                    <div className="space-y-3">
                      <div className="font-medium text-sm">space-section</div>
                      <div className="text-xs text-muted font-mono">var(--space-section): 6rem (96px)</div>
                      <div className="text-xs text-muted">Standard section bottom padding/spacing</div>
                      <div className="h-12 bg-brand/20 rounded" style={{ width: '96px' }}></div>
                    </div>
                    <div className="space-y-3">
                      <div className="font-medium text-sm">section-padding-x</div>
                      <div className="text-xs text-muted font-mono">var(--section-padding-x): 1.5rem (24px)</div>
                      <div className="text-xs text-muted">Horizontal padding for sections (mobile)</div>
                      <div className="h-12 bg-brand/20 rounded" style={{ width: '24px' }}></div>
                    </div>
                    <div className="space-y-3">
                      <div className="font-medium text-sm">section-padding-x-md</div>
                      <div className="text-xs text-muted font-mono">var(--section-padding-x-md): 2rem (32px)</div>
                      <div className="text-xs text-muted">Horizontal padding for sections (desktop)</div>
                      <div className="h-12 bg-brand/20 rounded" style={{ width: '32px' }}></div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="heading-subsection mb-6">Common Spacing Patterns</h3>
                  <div className="bg-card p-6 rounded-lg border border-subtle space-y-6">
                    <div>
                      <div className="font-medium text-sm mb-2">Section Header Spacing</div>
                      <div className="text-xs text-muted space-y-1">
                        <div>Badge → Title: <span className="font-mono">mb-6 (24px)</span></div>
                        <div>Title → Description: <span className="font-mono">mb-6 (24px)</span></div>
                        <div>Header → Content: <span className="font-mono">mb-12 (48px)</span></div>
                      </div>
                    </div>
                    <div>
                      <div className="font-medium text-sm mb-2">Hero Section</div>
                      <div className="text-xs text-muted space-y-1">
                        <div>Badge → Title: <span className="font-mono">mb-7 (28px)</span></div>
                        <div>Title → Description: <span className="font-mono">mb-7 (28px)</span></div>
                        <div>Description → CTA: <span className="font-mono">mb-12 (48px)</span></div>
                      </div>
                    </div>
                    <div>
                      <div className="font-medium text-sm mb-2">Card Grid Spacing</div>
                      <div className="text-xs text-muted space-y-1">
                        <div>Grid gap: <span className="font-mono">gap-4 (16px) or gap-6 (24px)</span></div>
                        <div>Card padding: <span className="font-mono">p-6 (24px) or p-8 (32px)</span></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="heading-subsection mb-6">Border Radius</h3>
                  <div className="bg-card p-6 rounded-lg border border-subtle">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      <div className="space-y-3">
                        <div className="font-medium text-sm">rounded-lg</div>
                        <div className="text-xs text-muted font-mono mb-2">0.5rem (8px)</div>
                        <div className="text-xs text-muted mb-2">Cards, badges</div>
                        <div className="w-20 h-20 bg-brand/30 rounded-lg"></div>
                      </div>
                      <div className="space-y-3">
                        <div className="font-medium text-sm">rounded-xl</div>
                        <div className="text-xs text-muted font-mono mb-2">0.75rem (12px)</div>
                        <div className="text-xs text-muted mb-2">Icons</div>
                        <div className="w-20 h-20 bg-brand/30 rounded-xl"></div>
                      </div>
                      <div className="space-y-3">
                        <div className="font-medium text-sm">rounded-2xl</div>
                        <div className="text-xs text-muted font-mono mb-2">1rem (16px)</div>
                        <div className="text-xs text-muted mb-2">Large cards</div>
                        <div className="w-20 h-20 bg-brand/30 rounded-2xl"></div>
                      </div>
                      <div className="space-y-3">
                        <div className="font-medium text-sm">rounded-full</div>
                        <div className="text-xs text-muted font-mono mb-2">9999px</div>
                        <div className="text-xs text-muted mb-2">Pills, buttons</div>
                        <div className="w-20 h-20 bg-brand/30 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          )}

          {/* Components Tab */}
          {activeTab === "components" && (
            <AnimatedSection>
              <div className="space-y-12">
                <div>
                  <h3 className="heading-subsection mb-6">Buttons & Links</h3>
                  <div className="space-y-6">
                    <div className="bg-card p-6 rounded-lg border border-subtle">
                      <div className="flex flex-wrap gap-4 mb-4">
                        <a href="#" className="inline-flex items-center gap-2 font-medium rounded-full transition-shadow duration-200 hover:shadow-xl bg-brand text-white px-6 py-3.5">
                          Primary CTA
                        </a>
                        <button className="px-6 py-2.5 rounded-full font-medium text-sm bg-section text-heading hover:bg-card transition-colors">
                          Tab Button
                        </button>
                      </div>
                      <div className="text-xs text-muted space-y-1 mt-4">
                        <div className="font-mono">Primary CTA: bg-brand text-white px-6 py-3.5 rounded-full</div>
                        <div className="font-mono">Hover: shadow-xl transition-shadow</div>
                        <div className="font-mono">Tab button: bg-section text-heading px-6 py-2.5</div>
                        <div className="font-mono">Active tab: bg-brand text-white</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="heading-subsection mb-6">Pills & Badges</h3>
                  <div className="bg-card p-6 rounded-lg border border-subtle">
                    <div className="flex flex-wrap gap-3 mb-4">
                      <span className="pill-badge">Overview</span>
                      <span className="pill-badge">Clinical Fit</span>
                      <span className="pill-badge">Approach</span>
                      <span className="pill-badge">Deployment</span>
                    </div>
                    <div className="text-xs text-muted space-y-1 mt-4">
                      <div className="font-mono">.pill-badge class</div>
                      <div className="font-mono">Background: linear-gradient brand (12% to 8% opacity)</div>
                      <div className="font-mono">Text: hsl(var(--brand)) uppercase, font-semibold</div>
                      <div className="font-mono">Padding: px-3 py-1 + gap-1.5</div>
                      <div className="font-mono">Border radius: rounded-full</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="heading-subsection mb-6">Icon Containers</h3>
                  <div className="bg-card p-6 rounded-lg border border-subtle">
                    <div className="flex flex-wrap gap-4 mb-4">
                      <div
                        className="flex items-center justify-center"
                        style={{
                          width: '56px',
                          height: '56px',
                          backgroundImage: 'linear-gradient(to bottom, hsl(var(--brand) / 0.12), hsl(var(--brand) / 0.08))',
                          borderRadius: '12px',
                          boxShadow: 'inset 0 0.5px 0 rgba(255,255,255,0.4), 0 1px 2px rgba(0,0,0,0.02)'
                        }}
                      >
                        <svg style={{ color: 'hsl(var(--brand))', opacity: 0.9 }} width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div
                        className="flex items-center justify-center"
                        style={{
                          width: '56px',
                          height: '56px',
                          backgroundImage: 'linear-gradient(to bottom, hsl(var(--brand) / 0.12), hsl(var(--brand) / 0.08))',
                          borderRadius: '12px',
                          boxShadow: 'inset 0 0.5px 0 rgba(255,255,255,0.4), 0 1px 2px rgba(0,0,0,0.02)'
                        }}
                      >
                        <svg style={{ color: 'hsl(var(--brand))', opacity: 0.9 }} width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                        </svg>
                      </div>
                      <div
                        className="flex items-center justify-center"
                        style={{
                          width: '56px',
                          height: '56px',
                          backgroundImage: 'linear-gradient(to bottom, hsl(var(--brand) / 0.12), hsl(var(--brand) / 0.08))',
                          borderRadius: '12px',
                          boxShadow: 'inset 0 0.5px 0 rgba(255,255,255,0.4), 0 1px 2px rgba(0,0,0,0.02)'
                        }}
                      >
                        <svg style={{ color: 'hsl(var(--brand))', opacity: 0.9 }} width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                    </div>
                    <div className="text-xs text-muted space-y-1 mt-4">
                      <div className="font-mono">Container: 56px × 56px, border-radius: 12px</div>
                      <div className="font-mono">Background: linear-gradient brand (12% to 8% opacity)</div>
                      <div className="font-mono">Shadow: inset highlight + subtle outer shadow</div>
                      <div className="font-mono">Icon: 28px, strokeWidth: 1.6, brand color @ 90% opacity</div>
                      <div className="font-mono">Used in: Approach cards, Contact section</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="heading-subsection mb-6">Cards</h3>
                  <div className="bg-card p-6 rounded-lg border border-subtle">
                    <div className="bg-card p-6 rounded-lg border border-subtle mb-4">
                      <h4 className="heading-small mb-2">Standard Card</h4>
                      <p className="body-muted">Warm neutral background with subtle border</p>
                    </div>
                    <div className="text-xs text-muted space-y-1">
                      <div className="font-mono">Standard: .bg-card + .border-subtle</div>
                      <div className="font-mono">Padding: p-6 (24px) or p-8 (32px) typical</div>
                      <div className="font-mono">Border radius: rounded-lg (8px) or rounded-2xl (16px)</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="heading-subsection mb-6">Navigation</h3>
                  <div className="bg-card p-6 rounded-lg border border-subtle">
                    <div className="floating-nav inline-flex items-center gap-1 px-3 py-2">
                      <a href="#" className="px-4 py-1.5 text-sm font-medium text-brand">Overview</a>
                      <a href="#" className="px-4 py-1.5 text-sm font-medium text-muted hover:text-heading transition-colors">Features</a>
                      <a href="#" className="px-4 py-1.5 text-sm font-medium text-muted hover:text-heading transition-colors">Contact</a>
                    </div>
                    <div className="text-xs text-muted space-y-1 mt-6">
                      <div className="font-mono">.floating-nav class</div>
                      <div className="font-mono">Background: hsl(var(--bg-page) / 0.85)</div>
                      <div className="font-mono">Backdrop: backdrop-blur-md</div>
                      <div className="font-mono">Border: hsl(var(--border-subtle) / 0.6)</div>
                      <div className="font-mono">Shape: rounded-full</div>
                      <div className="font-mono">Active link: .text-brand (changes on scroll)</div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          )}

          {/* Patterns Tab */}
          {activeTab === "patterns" && (
            <AnimatedSection>
              <div className="space-y-8">
                <div>
                  <h3 className="heading-subsection mb-4">Dot Pattern</h3>
                  <div className="h-64 rounded-lg border border-subtle dot-pattern mb-4"></div>
                  <div className="bg-card p-4 rounded-lg border border-subtle">
                    <p className="body-muted mb-3">Subtle radial gradient dots on a 24px grid. Used throughout the site for texture.</p>
                    <div className="text-xs text-muted space-y-1">
                      <div className="font-mono">Class: .dot-pattern</div>
                      <div className="font-mono">radial-gradient(hsl(var(--brand-muted) / 0.15) 1px, transparent 1px)</div>
                      <div className="font-mono">background-size: 24px 24px</div>
                      <div className="font-mono">Usage: Hero, Video, Contact, Analytics sections</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="heading-subsection mb-4">Gradient Mesh</h3>
                  <div className="h-64 rounded-lg border border-subtle gradient-mesh mb-4"></div>
                  <div className="bg-card p-4 rounded-lg border border-subtle">
                    <p className="body-muted mb-3">Soft radial gradients creating subtle depth and visual interest.</p>
                    <div className="text-xs text-muted space-y-1">
                      <div className="font-mono">Class: .gradient-mesh</div>
                      <div className="font-mono">Two layered radial gradients</div>
                      <div className="font-mono">radial-gradient at 20% 40% (brand / 6%)</div>
                      <div className="font-mono">radial-gradient at 80% 60% (brand-muted / 8%)</div>
                      <div className="font-mono">Creates organic depth without overwhelming</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="heading-subsection mb-4">Combined Pattern</h3>
                  <div className="h-64 rounded-lg border border-subtle relative overflow-hidden mb-4">
                    <div className="absolute inset-0 gradient-mesh"></div>
                    <div className="absolute inset-0 dot-pattern opacity-60"></div>
                  </div>
                  <div className="bg-card p-4 rounded-lg border border-subtle">
                    <p className="body-muted mb-3">Layered approach combining gradient mesh base with dot pattern overlay.</p>
                    <div className="text-xs text-muted space-y-1">
                      <div className="font-mono">Layer 1 (base): .gradient-mesh</div>
                      <div className="font-mono">Layer 2 (texture): .dot-pattern with opacity-60</div>
                      <div className="font-mono">Container: relative overflow-hidden</div>
                      <div className="font-mono">Both layers: absolute inset-0</div>
                      <div className="font-mono">Used in Hero section</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="heading-subsection mb-4">Section Backgrounds</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="h-32 rounded-lg bg-page border border-subtle flex items-center justify-center">
                        <span className="text-sm font-medium">Page BG</span>
                      </div>
                      <div className="h-32 rounded-lg bg-section border border-subtle flex items-center justify-center">
                        <span className="text-sm font-medium">Section BG</span>
                      </div>
                    </div>
                    <div className="bg-card p-4 rounded-lg border border-subtle">
                      <p className="body-muted mb-3">Alternating backgrounds for visual rhythm and section separation.</p>
                      <div className="text-xs text-muted space-y-1">
                        <div className="font-mono">.bg-page - hsl(var(--bg-page)) - warm-neutral-01</div>
                        <div className="font-mono">.bg-section - hsl(var(--bg-section)) - warm-neutral-02</div>
                        <div className="font-mono">Alternate between sections for subtle visual flow</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          )}
        </div>
      </div>
    </section>
  );
};
