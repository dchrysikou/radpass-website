export const siteContent = {
  hero: {
    badge: "Overview",
    title: "Smart Solution for Radiation Controlled Areas",
    description: "RadPass is a secure, cloud-based platform designed to streamline and digitise radiation-safety management within radiotherapy and diagnostic departments.",
    ctaPrimary: "Request Information",
    ctaSecondary: "Learn more",
    scrollText: "Scroll",
    floatingCards: [
      {
        location: "Linac 1 - Bristol",
        status: "Treating",
        statusColor: { bg: "#CCEBDB", text: "#5B816C" },
        person: "Emily Davis",
        role: "Radiographer",
        detail: "Area Responsibility since 12:05"
      },
      {
        location: "Linac 3 - Manchester",
        status: "Breakdown",
        statusColor: { bg: "#FAD282", text: "#907955" },
        person: "James Wilson",
        role: "Engineer",
        detail: "Area Responsibility since 14:32"
      },
      {
        location: "Linac 2 - Leeds",
        status: "QA",
        statusColor: { bg: "#E2EEE9", text: "#7E928A" },
        person: "Sarah Chen",
        role: "Physicist",
        detail: "Area Responsibility since 11:32"
      }
    ]
  },

  context: {
    badge: "THE PROBLEM & APPROACH",
    sectionTitle: "Operational oversight today is fragmented",
    title: "Radiotherapy and diagnostic imaging departments frequently operate with fragmented or partially manual radiation safety processes. This creates inefficiency, incomplete documentation, and increased risk of non-compliance with National Regulations (IRR17 and IR(ME)R), particularly across multi-site Trusts where real-time oversight is essential."
  },

  approach: {
    introStatement: "Effective oversight requires a single, reliable source of truth.",
    solutionAnchor: "RadPass provides a single, auditable system of record for radiation-controlled areas, making operational state explicit, governed, and traceable across sites.",
    items: [
      {
        title: "Safety",
        description: "Defensible compliance through accurate, auditable records."
      },
      {
        title: "Governance",
        description: "Centralised visibility for consistent, trust-level oversight."
      },
      {
        title: "Efficiency",
        description: "Reduced administrative load through automated logging."
      }
    ]
  },

  clinicalFit: {
    badge: "NHS alignment",
    title: "Designed to align with NHS priorities",
    description: "RadPass supports national NHS objectives by integrating safety, efficiency, governance, and sustainability requirements into a single, auditable system of record.",
    calloutTitle: "Principle-led by design",
    calloutDescription: "RadPass applies four foundational principles — Safety, Efficiency, Governance, and Sustainability — to ensure regulatory compliance, clear accountability, and long-term operational resilience across NHS radiotherapy services.",
    roles: [
      {
        role: "NHS Long Term Plan",
        fit: "Digitises radiation-safety governance to improve efficiency and oversight."
      },
      {
        role: "CQC: Safe & Well-Led domains",
        fit: "Clear, auditable records that support inspection readiness."
      },
      {
        role: "NHS Net Zero",
        fit: "Paperless workflows that reduce waste and storage."
      }
    ]
  },


 principles: {
    badge: "Foundational Principles",
    title: "Designed for audit safety",
    description: "RadPass is designed to support deliberate change, clear accountability, and auditable transitions.",
    principles: [
      {
        title: "Safety-first",
        description: "Every operational state has a named owner. Transitions are acknowledged, not assumed."
      },
      {
        title: "Accountability",
        description: "Explicit responsibility for every state transition. Operational rules are defined once and applied consistently across sites."
      },
      {
        title: "Auditable",
        description: "State changes are recorded automatically as part of normal use. Operational history is preserved, queryable, and inspection-ready."
      }
    ],
    footer: "These principles allow visibility and analytics to emerge directly from how systems are operated."
  },
  

  visibility: {
    badge: "Analytics",
    title: "Derived Insight",
    description: "Insight emerges naturally when operational state is governed and auditable.",
    insights: [
      {
        title: "Live Monitor",
        description: "Real-time visibility of all Controlled Areas, with role-based access and clear responsibility."
      },
      {
        title: "Operational time overview",
        description: "See how time is distributed across Radiation Controlled Areas, by machine state."
      },
      {
        title: "Inspection-ready records",
        description: "Generate audit logs directly from historical records."
      }
    ]
  },


  video: {
    badge: "Product Overview",
    title: "RadPass in practice",
    description: "This short walkthrough shows how RadPass provides real-time visibility of radiation controlled areas, clear responsibility for clinical states, and a complete audit trail for governance and reporting."
  },

  contact: {
    badge: "DEPLOYMENT",
    title: "Currently in controlled pilots",
    description: "RadPass is being deployed in partnership with selected radiotherapy departments. Rollout is phased, focusing on governance, safety, and demonstrable operational benefit.",
    cardTitle: "Explore suitability for your department",
    cardDescription: "If your department is exploring structured approaches to operational governance,\nwe're open to a conversation.",
    ctaText: "Request Information",
    email: "info@radpass.co.uk"
  }
};
