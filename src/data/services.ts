export interface ServiceCapability {
  title: string;
  description: string;
}

export interface ServiceApproachStep {
  step: string;
  title: string;
  description: string;
}

export interface PartnershipPoint {
  title: string;
  description: string;
}

export interface ServiceDetail {
  slug: string;
  title: string;
  shortTitle: string;
  accentLabel: string;
  heroHeadline: string;
  heroDescription: string;
  partnershipStatement: string;
  icon: string;

  // SEO
  seoTitle: string;
  seoDescription: string;
  ogTitle: string;
  ogDescription: string;

  // Content sections
  partnershipPoints: PartnershipPoint[];
  capabilities: ServiceCapability[];
  approachSteps: ServiceApproachStep[];
  relatedSlugs: string[];
}

export const services: ServiceDetail[] = [
  // ─── 1. Artificial Intelligence ───
  {
    slug: "artificial-intelligence",
    title: "Artificial Intelligence & Automation",
    shortTitle: "AI & Automation",
    accentLabel: "AI & Automation",
    heroHeadline: "Your Intelligent Ally in the Age of AI",
    heroDescription:
      "We don't just implement AI tools — we become your strategic partner in designing, deploying and evolving intelligent systems that truly work for your business.",
    partnershipStatement:
      "We walk alongside you from proof-of-concept to production, ensuring AI creates real, measurable value — not just impressive demos.",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    seoTitle: "Artificial Intelligence & Automation Services | Eurosynapse",
    seoDescription:
      "Eurosynapse is your AI implementation partner — from agent orchestration to NLP and predictive models. We walk alongside you at every step.",
    ogTitle: "AI & Automation Services | Eurosynapse",
    ogDescription:
      "Strategic AI partnership: we align AI to your business outcomes and stay with you through continuous improvement.",
    partnershipPoints: [
      {
        title: "We start by understanding your operations",
        description:
          "Before writing a single line of code, we map your processes, identify friction points and validate where AI can make a real difference.",
      },
      {
        title: "Models trained on your context",
        description:
          "Our models are built on your data, your language, your goals — not generic off-the-shelf solutions.",
      },
      {
        title: "We stay with you post-deployment",
        description:
          "Monitoring, retraining, improving. AI is a living system, and we treat it that way alongside your team.",
      },
      {
        title: "We translate complexity into action",
        description:
          "We bridge the gap between technical AI capabilities and business language your entire team can act on.",
      },
    ],
    capabilities: [
      {
        title: "AI Platform Design & Orchestration",
        description:
          "End-to-end design of AI platforms that integrate seamlessly into your existing infrastructure.",
      },
      {
        title: "Agent Workflow Automation",
        description:
          "Intelligent agents that automate complex workflows, decisions and multi-step processes.",
      },
      {
        title: "Natural Language Processing",
        description:
          "Text analysis, sentiment detection and conversational AI tailored to your domain.",
      },
      {
        title: "Predictive & Prescriptive Analytics",
        description:
          "Forecast trends and receive actionable recommendations powered by your business data.",
      },
      {
        title: "Computer Vision",
        description:
          "Image recognition, quality inspection and visual data processing for industrial and commercial use.",
      },
      {
        title: "Generative AI Applications",
        description:
          "Content generation, code assistance and creative tools built responsibly for enterprise use.",
      },
      {
        title: "Intelligent Document Processing",
        description:
          "Automated extraction, classification and routing of documents at scale.",
      },
      {
        title: "AI Governance & Ethics",
        description:
          "Frameworks and auditing processes to ensure your AI systems are fair, transparent and compliant.",
      },
    ],
    approachSteps: [
      {
        step: "01",
        title: "Discovery & Use-Case Validation",
        description:
          "We work with your leadership to identify high-impact AI opportunities and validate feasibility before committing resources.",
      },
      {
        step: "02",
        title: "Data Readiness Assessment",
        description:
          "We audit your data landscape, quality and governance to ensure a solid foundation for AI success.",
      },
      {
        step: "03",
        title: "Model Design & Prototyping",
        description:
          "Rapid prototyping of AI models with your feedback loop built in — so you see results early and iterate fast.",
      },
      {
        step: "04",
        title: "Deployment & Continuous Improvement",
        description:
          "Production-grade deployment with monitoring dashboards, retraining pipelines and ongoing optimization.",
      },
    ],
    relatedSlugs: ["data-analytics", "digital-transformation", "cloud-infrastructure"],
  },

  // ─── 2. Digital Transformation ───
  {
    slug: "digital-transformation",
    title: "Digital Transformation & Software",
    shortTitle: "Digital Transformation",
    accentLabel: "Digital Transformation",
    heroHeadline: "We Transform Alongside You — Not Just For You",
    heroDescription:
      "Digital transformation is a journey, not a project. We serve as your co-pilot: planning the roadmap, building the software and modernizing your legacy systems step by step.",
    partnershipStatement:
      "Your business goals drive our architecture. We never deliver software in isolation — every solution is aligned to your strategy and built with your team.",
    icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
    seoTitle: "Digital Transformation & Custom Software | Eurosynapse",
    seoDescription:
      "Eurosynapse partners with you on digital transformation — custom software, legacy modernization and digital commerce built around your business goals.",
    ogTitle: "Digital Transformation Services | Eurosynapse",
    ogDescription:
      "Your co-pilot for digital transformation: roadmap planning, custom development and legacy modernization aligned to your strategy.",
    partnershipPoints: [
      {
        title: "We align technology to your business strategy",
        description:
          "Every architecture decision maps back to a business outcome. We build what moves the needle, not what looks impressive on paper.",
      },
      {
        title: "Your team is part of the build",
        description:
          "We work embedded with your people, transferring knowledge and building internal capability from day one.",
      },
      {
        title: "Incremental delivery, not big-bang launches",
        description:
          "We ship in iterations so you see value early and can adapt direction based on real user feedback.",
      },
      {
        title: "We modernize without disruption",
        description:
          "Legacy system migration that keeps your operations running while progressively upgrading your technology stack.",
      },
    ],
    capabilities: [
      {
        title: "Custom Application Development",
        description:
          "Bespoke web and enterprise applications built to your exact specifications and workflows.",
      },
      {
        title: "Legacy System Modernization",
        description:
          "Strategic migration of legacy platforms to modern architectures without operational downtime.",
      },
      {
        title: "API Design & Integration",
        description:
          "RESTful and event-driven APIs that connect your systems, partners and data sources seamlessly.",
      },
      {
        title: "Digital Commerce Platforms",
        description:
          "End-to-end e-commerce and digital marketplace solutions that scale with your business.",
      },
      {
        title: "UX/UI Design & Product Strategy",
        description:
          "User-centered design that turns complex business requirements into intuitive digital experiences.",
      },
      {
        title: "Mobile Application Development",
        description:
          "Native and cross-platform mobile apps that extend your digital presence to every device.",
      },
      {
        title: "Microservices Architecture",
        description:
          "Decompose monoliths into scalable, independently deployable services for agility and resilience.",
      },
      {
        title: "Low-Code / No-Code Enablement",
        description:
          "Empower your business teams to build and iterate on solutions with guided low-code platforms.",
      },
    ],
    approachSteps: [
      {
        step: "01",
        title: "Business & Technology Assessment",
        description:
          "Deep-dive into your current systems, processes and goals to build a transformation roadmap that makes sense.",
      },
      {
        step: "02",
        title: "Architecture & Design",
        description:
          "Collaborative design of the target architecture — balancing innovation with practical constraints.",
      },
      {
        step: "03",
        title: "Iterative Development",
        description:
          "Agile delivery in sprints with your stakeholders in the loop at every demo and decision point.",
      },
      {
        step: "04",
        title: "Launch & Evolve",
        description:
          "Production rollout with training, support and a continuous improvement plan for what comes next.",
      },
    ],
    relatedSlugs: ["artificial-intelligence", "enterprise-solutions", "cloud-infrastructure"],
  },

  // ─── 3. Data & Analytics ───
  {
    slug: "data-analytics",
    title: "Data & Analytics",
    shortTitle: "Data & Analytics",
    accentLabel: "Data & Analytics",
    heroHeadline: "Turning Your Data Into Your Competitive Advantage",
    heroDescription:
      "Data without insight is just noise. We partner with you to build the pipelines, dashboards and models that help your teams make faster, smarter decisions every day.",
    partnershipStatement:
      "We don't just build dashboards — we help your people trust and use data as a daily business tool.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    seoTitle: "Data & Analytics Services | Eurosynapse",
    seoDescription:
      "Eurosynapse partners with you to transform raw data into actionable insights — BI dashboards, Big Data, geospatial intelligence and data governance.",
    ogTitle: "Data & Analytics Services | Eurosynapse",
    ogDescription:
      "From data strategy to real-time dashboards: we help your teams make faster, smarter decisions every day.",
    partnershipPoints: [
      {
        title: "We build a data culture, not just tools",
        description:
          "Our goal is to make your teams data-literate and confident, so insights drive every decision.",
      },
      {
        title: "Your data, your ownership",
        description:
          "We design architectures where you retain full control and governance over your data assets.",
      },
      {
        title: "From raw data to boardroom insights",
        description:
          "We connect the dots from source systems through pipelines to executive dashboards that tell the right story.",
      },
      {
        title: "Continuous optimization",
        description:
          "We refine data models and reports as your business evolves — analytics is never a one-time project.",
      },
    ],
    capabilities: [
      {
        title: "Data Strategy & Architecture",
        description:
          "Comprehensive data roadmaps that align storage, processing and access patterns to your business needs.",
      },
      {
        title: "Business Intelligence Dashboards",
        description:
          "Interactive, real-time dashboards that surface the KPIs your teams need to act quickly.",
      },
      {
        title: "Big Data Engineering",
        description:
          "Scalable pipelines for processing massive volumes of structured and unstructured data.",
      },
      {
        title: "Real-Time Analytics Pipelines",
        description:
          "Streaming data architectures that deliver insights the moment events happen.",
      },
      {
        title: "Geospatial Intelligence",
        description:
          "Location-based analytics and spatial data visualization for strategic decision-making.",
      },
      {
        title: "Data Quality & Governance",
        description:
          "Frameworks to ensure your data is accurate, consistent and compliant across the organization.",
      },
      {
        title: "Master Data Management",
        description:
          "Unified views of customers, products and entities across all your systems.",
      },
      {
        title: "Self-Service Analytics Enablement",
        description:
          "Empower business users to explore and analyze data without waiting for IT.",
      },
    ],
    approachSteps: [
      {
        step: "01",
        title: "Data Landscape Assessment",
        description:
          "We audit your current data sources, quality, flows and governance to identify gaps and opportunities.",
      },
      {
        step: "02",
        title: "Architecture & Pipeline Design",
        description:
          "Designing the data infrastructure — from ingestion to storage to visualization — tailored to your scale.",
      },
      {
        step: "03",
        title: "Build & Integrate",
        description:
          "Implementation of pipelines, dashboards and models with iterative feedback from your business users.",
      },
      {
        step: "04",
        title: "Train & Optimize",
        description:
          "Hands-on training for your team plus ongoing refinement as your data needs evolve.",
      },
    ],
    relatedSlugs: ["artificial-intelligence", "cloud-infrastructure", "cybersecurity"],
  },

  // ─── 4. Cybersecurity ───
  {
    slug: "cybersecurity",
    title: "Cybersecurity & Compliance",
    shortTitle: "Cybersecurity",
    accentLabel: "Cybersecurity & Compliance",
    heroHeadline: "Your Security Partner — Always on Guard",
    heroDescription:
      "Threats don't sleep, and neither does our vigilance. We embed security into your operations as a trusted ally — protecting assets, ensuring compliance and keeping your business running.",
    partnershipStatement:
      "We treat your organization's security posture as a shared responsibility. We are your extended security team.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    seoTitle: "Cybersecurity & Compliance Services | Eurosynapse",
    seoDescription:
      "Eurosynapse is your cybersecurity partner — SOC operations, threat detection, compliance (GDPR, ISO 27001, NIS2) and Zero Trust architecture.",
    ogTitle: "Cybersecurity & Compliance Services | Eurosynapse",
    ogDescription:
      "Your extended security team: threat detection, compliance frameworks and operational resilience built into your daily operations.",
    partnershipPoints: [
      {
        title: "Security as a shared responsibility",
        description:
          "We integrate with your teams and workflows, treating your security posture as our own commitment.",
      },
      {
        title: "Proactive, not reactive",
        description:
          "Continuous threat hunting and vulnerability assessment before incidents happen, not after.",
      },
      {
        title: "Compliance without the headache",
        description:
          "We navigate the regulatory landscape for you — GDPR, ISO 27001, NIS2 and industry-specific standards.",
      },
      {
        title: "People-first security",
        description:
          "We train your workforce to be your first line of defense, because technology alone is never enough.",
      },
    ],
    capabilities: [
      {
        title: "Security Operations Center (SOC)",
        description:
          "24/7 monitoring and incident response managed by experienced security analysts.",
      },
      {
        title: "Threat Detection & Incident Response",
        description:
          "Advanced threat intelligence and rapid response protocols to contain breaches fast.",
      },
      {
        title: "Vulnerability Assessment & Pen Testing",
        description:
          "Systematic identification of weaknesses before attackers find them.",
      },
      {
        title: "Zero Trust Architecture",
        description:
          "Never trust, always verify — network segmentation and identity-based access controls.",
      },
      {
        title: "Regulatory Compliance",
        description:
          "End-to-end compliance management for GDPR, ISO 27001, NIS2 and sector-specific regulations.",
      },
      {
        title: "Identity & Access Management",
        description:
          "Centralized IAM solutions that enforce least-privilege access across your organization.",
      },
      {
        title: "Cloud Security Posture Management",
        description:
          "Continuous assessment and remediation of misconfigurations in your cloud environments.",
      },
      {
        title: "Security Awareness Training",
        description:
          "Engaging programs that turn your employees into a human firewall against social engineering.",
      },
    ],
    approachSteps: [
      {
        step: "01",
        title: "Security Assessment & Gap Analysis",
        description:
          "Comprehensive evaluation of your current security posture, risks and compliance status.",
      },
      {
        step: "02",
        title: "Strategy & Roadmap",
        description:
          "Prioritized security roadmap aligned with your risk appetite, budget and business objectives.",
      },
      {
        step: "03",
        title: "Implementation & Hardening",
        description:
          "Deployment of security controls, tools and processes with minimal disruption to operations.",
      },
      {
        step: "04",
        title: "Continuous Monitoring & Response",
        description:
          "Ongoing vigilance with regular reporting, threat hunting and incident response readiness.",
      },
    ],
    relatedSlugs: ["cloud-infrastructure", "enterprise-solutions", "it-advisory"],
  },

  // ─── 5. Cloud & Infrastructure ───
  {
    slug: "cloud-infrastructure",
    title: "Cloud & Infrastructure",
    shortTitle: "Cloud & Infrastructure",
    accentLabel: "Cloud & Infrastructure",
    heroHeadline: "Building the Foundation Your Business Runs On",
    heroDescription:
      "We design, migrate and manage cloud infrastructure that scales with your ambitions — whether you're moving to the cloud for the first time or optimizing a complex multi-cloud environment.",
    partnershipStatement:
      "We optimize your infrastructure so your teams can focus on building products, not managing servers.",
    icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z",
    seoTitle: "Cloud & Infrastructure Services | Eurosynapse",
    seoDescription:
      "Eurosynapse designs, migrates and manages your cloud infrastructure — multi-cloud strategies, Kubernetes, FinOps and managed IT support.",
    ogTitle: "Cloud & Infrastructure Services | Eurosynapse",
    ogDescription:
      "Your cloud foundation partner: migration, scalability, cost optimization and 24/7 managed support.",
    partnershipPoints: [
      {
        title: "Cloud strategy, not just migration",
        description:
          "We design the right cloud architecture for your business — not just lift-and-shift, but a true transformation of how you operate.",
      },
      {
        title: "Cost optimization from day one",
        description:
          "FinOps practices embedded into your cloud operations so you only pay for what you truly need.",
      },
      {
        title: "We manage it so you don't have to",
        description:
          "24/7 monitoring, patching and incident management — your infrastructure runs smoothly while you focus on growth.",
      },
      {
        title: "Built for resilience",
        description:
          "Disaster recovery, high availability and business continuity planning that gives you peace of mind.",
      },
    ],
    capabilities: [
      {
        title: "Cloud Migration Strategy & Execution",
        description:
          "Structured migration programs that move workloads safely with minimal business disruption.",
      },
      {
        title: "Multi-Cloud & Hybrid Architecture",
        description:
          "Best-of-breed strategies across AWS, Azure and GCP tailored to your workload requirements.",
      },
      {
        title: "Infrastructure as Code",
        description:
          "Terraform, Ansible and CloudFormation for reproducible, version-controlled infrastructure.",
      },
      {
        title: "Kubernetes & Container Orchestration",
        description:
          "Container platforms that give your development teams speed and operational consistency.",
      },
      {
        title: "FinOps & Cost Optimization",
        description:
          "Visibility and governance over cloud spend with actionable recommendations to reduce waste.",
      },
      {
        title: "Continuous Monitoring & AIOps",
        description:
          "Proactive observability with AI-powered anomaly detection and automated remediation.",
      },
      {
        title: "Disaster Recovery Planning",
        description:
          "Tested DR strategies that ensure business continuity when the unexpected happens.",
      },
      {
        title: "Managed IT Support Services",
        description:
          "Flexible support tiers — from help desk to full infrastructure management — scaled to your needs.",
      },
    ],
    approachSteps: [
      {
        step: "01",
        title: "Infrastructure Assessment",
        description:
          "Full audit of your current infrastructure, workloads and cloud readiness to build a realistic migration plan.",
      },
      {
        step: "02",
        title: "Architecture Design",
        description:
          "Target architecture that balances performance, cost and resilience — designed with your team.",
      },
      {
        step: "03",
        title: "Migration & Deployment",
        description:
          "Phased migration with rollback plans, testing gates and zero-downtime cutover strategies.",
      },
      {
        step: "04",
        title: "Operate & Optimize",
        description:
          "Ongoing management, monitoring and continuous optimization of your cloud environment.",
      },
    ],
    relatedSlugs: ["cybersecurity", "data-analytics", "digital-transformation"],
  },

  // ─── 6. Enterprise Solutions ───
  {
    slug: "enterprise-solutions",
    title: "Enterprise Solutions (ERP & CRM)",
    shortTitle: "Enterprise Solutions",
    accentLabel: "Enterprise Solutions",
    heroHeadline: "ERP & CRM That Fits How Your Business Really Works",
    heroDescription:
      "Off-the-shelf enterprise software rarely fits out of the box. We configure, customize and implement SAP and CRM platforms aligned to your processes — not the other way around.",
    partnershipStatement:
      "We are certified SAP partners and business process experts. Your success in go-live is our success too.",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
    seoTitle: "Enterprise Solutions — SAP & CRM Services | Eurosynapse",
    seoDescription:
      "Eurosynapse implements and optimizes SAP S/4HANA, Business ByDesign, SuccessFactors and CRM platforms aligned to your business processes.",
    ogTitle: "Enterprise Solutions Services | Eurosynapse",
    ogDescription:
      "Certified SAP partner: ERP implementation, CRM strategy and business process transformation — aligned to how your business really works.",
    partnershipPoints: [
      {
        title: "Process-first, technology-second",
        description:
          "We map your business processes before configuring a single module — so the system works for you, not against you.",
      },
      {
        title: "Change management is part of the deal",
        description:
          "We prepare your people for the transition with training, communication and hands-on support at every milestone.",
      },
      {
        title: "Go-live is just the beginning",
        description:
          "Post-implementation optimization, support and continuous improvement to maximize your ROI over time.",
      },
      {
        title: "One partner for the full lifecycle",
        description:
          "From strategy through implementation to ongoing support — you have a single accountable partner.",
      },
    ],
    capabilities: [
      {
        title: "SAP S/4HANA Implementation & Migration",
        description:
          "Full-cycle SAP S/4HANA projects — greenfield, brownfield and selective data transitions.",
      },
      {
        title: "SAP Business ByDesign",
        description:
          "Cloud ERP for mid-market companies needing integrated financials, supply chain and project management.",
      },
      {
        title: "SAP BTP & Integration Suite",
        description:
          "Extending SAP with custom apps, integrations and analytics on the Business Technology Platform.",
      },
      {
        title: "Human Capital Management",
        description:
          "SAP SuccessFactors implementation for talent management, payroll and workforce planning.",
      },
      {
        title: "CRM Strategy & Implementation",
        description:
          "Salesforce, SAP CX and custom CRM solutions that unify your customer journey.",
      },
      {
        title: "Custom ABAP Development",
        description:
          "Tailored SAP enhancements and integrations when standard configuration isn't enough.",
      },
      {
        title: "Post-Go-Live Support & Optimization",
        description:
          "Dedicated support teams that resolve issues fast and continuously tune system performance.",
      },
      {
        title: "Business Process Re-engineering",
        description:
          "Redesigning workflows to eliminate waste and unlock the full potential of your enterprise platform.",
      },
    ],
    approachSteps: [
      {
        step: "01",
        title: "Process Discovery & Fit Analysis",
        description:
          "Workshops with your business teams to document current processes and design target-state workflows.",
      },
      {
        step: "02",
        title: "Solution Design & Configuration",
        description:
          "System configuration, custom development and integration design aligned to your blueprinted processes.",
      },
      {
        step: "03",
        title: "Testing & Change Management",
        description:
          "Rigorous testing cycles combined with user training and organizational readiness activities.",
      },
      {
        step: "04",
        title: "Go-Live & Continuous Improvement",
        description:
          "Smooth cutover with hypercare support, followed by ongoing optimization and enhancement sprints.",
      },
    ],
    relatedSlugs: ["digital-transformation", "it-advisory", "cybersecurity"],
  },

  // ─── 7. IT Advisory & Talent ───
  {
    slug: "it-advisory",
    title: "IT Advisory & Talent Services",
    shortTitle: "IT Advisory & Talent",
    accentLabel: "IT Advisory & Talent",
    heroHeadline: "Strategic Guidance and the Right People, Right When You Need Them",
    heroDescription:
      "Technology strategy is only as strong as the team executing it. We advise your leadership on the right technology decisions and connect you with specialized talent to make it happen.",
    partnershipStatement:
      "We are your strategic advisor and your talent partner — two capabilities, one seamless relationship.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
    seoTitle: "IT Advisory & Talent Services | Eurosynapse",
    seoDescription:
      "Eurosynapse provides IT strategy consulting, CTO-as-a-Service, managed IT and specialized tech talent acquisition to power your initiatives.",
    ogTitle: "IT Advisory & Talent Services | Eurosynapse",
    ogDescription:
      "Your strategic advisor and talent partner: technology leadership, managed services and specialized recruitment in one relationship.",
    partnershipPoints: [
      {
        title: "We think with you, not for you",
        description:
          "Our advisors integrate with your leadership team to co-create strategies that your organization can actually execute.",
      },
      {
        title: "Talent that fits your culture",
        description:
          "We don't just match skills — we find people who align with your values, ways of working and growth trajectory.",
      },
      {
        title: "Flexible engagement models",
        description:
          "From a single strategic advisor to fully managed teams — we scale to match your current reality.",
      },
      {
        title: "Long-term relationship, not transactions",
        description:
          "We invest in understanding your business deeply so every recommendation and hire compounds in value over time.",
      },
    ],
    capabilities: [
      {
        title: "IT Strategy & Roadmap Planning",
        description:
          "Technology roadmaps aligned with business strategy, budget cycles and organizational maturity.",
      },
      {
        title: "Technology Stack Assessment",
        description:
          "Evaluate your current tools and platforms with clear recommendations for consolidation or upgrade.",
      },
      {
        title: "CTO-as-a-Service",
        description:
          "Fractional technology leadership for companies that need senior guidance without a full-time hire.",
      },
      {
        title: "Managed IT Services",
        description:
          "Outsourced IT operations — help desk, infrastructure management and vendor coordination.",
      },
      {
        title: "On-Demand Staff Augmentation",
        description:
          "Skilled developers, architects and specialists embedded in your teams for as long as you need them.",
      },
      {
        title: "Tech Talent Recruitment",
        description:
          "Permanent placement of technology professionals vetted for skills, culture fit and growth potential.",
      },
      {
        title: "Agile Transformation Coaching",
        description:
          "Hands-on coaching to help your teams adopt agile practices that actually stick.",
      },
      {
        title: "Vendor Selection & Governance",
        description:
          "Objective evaluation of technology vendors and ongoing contract and performance management.",
      },
    ],
    approachSteps: [
      {
        step: "01",
        title: "Strategic Assessment",
        description:
          "We evaluate your technology landscape, team capabilities and business goals to identify where we can add the most value.",
      },
      {
        step: "02",
        title: "Tailored Engagement Plan",
        description:
          "A proposal that fits your budget, timeline and internal capacity — no cookie-cutter packages.",
      },
      {
        step: "03",
        title: "Execution & Integration",
        description:
          "Whether advisory, managed services or talent — we embed seamlessly into your operations.",
      },
      {
        step: "04",
        title: "Review & Evolve",
        description:
          "Regular check-ins to assess impact, adjust the engagement and ensure sustained value.",
      },
    ],
    relatedSlugs: ["enterprise-solutions", "digital-transformation", "artificial-intelligence"],
  },
];

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return services.find((s) => s.slug === slug);
}

export function getRelatedServices(slugs: string[]): ServiceDetail[] {
  return slugs
    .map((s) => services.find((svc) => svc.slug === s))
    .filter((s): s is ServiceDetail => !!s);
}
