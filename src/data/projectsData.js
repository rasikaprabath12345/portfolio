import img1 from "../images/1.jpg";
import img2 from "../images/2.jpg";
import img3 from "../images/3.jpeg";
import img4 from "../images/4.jpeg";
import img5 from "../images/5.png";
import img6 from "../images/6.png";
import img8 from "../images/8.jpg";
import img9 from "../images/9.jpg";
import img10 from "../images/10.png";

const projectsData = [
  {
    id: 1,
    type: "Travel",
    title: "Aurum Travel Experience",
    description: "Premium travel experiences and booking platform for luxury destinations worldwide.",
    intro: "Aurum Travel Experience is a luxury travel booking platform that connects travelers with curated destinations and exclusive experiences. From pristine beaches to mountain retreats, the platform offers personalized travel packages with real-time availability, instant booking, and 24/7 concierge support. Designed for discerning travelers seeking authentic, unforgettable experiences.",
    client: "Aurum Travel Co",
    year: "2023-2024",
    duration: "6 months",
    teamSize: "8 members",
    techStack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    image: img1,
    overview: "A premium travel booking platform serving 500+ destinations globally with personalized recommendations. Enables 100K+ monthly bookings across luxury resorts, adventure tours, and unique experiences.",
    problem: "Travelers faced fragmented booking experiences across multiple platforms. No unified way to discover, compare, and book curated experiences. Lost context between destination research and booking.",
    solution: "Built unified booking platform with AI-powered recommendations, real-time inventory sync, and seamless checkout. Integrated reviews, photos, and personalized itinerary builder.",
    demo: {
      login: "traveler@aurumtravel.com",
      password: "Travel2024!",
      demoData: "500+ destinations with live availability",
      features: "Browse, book, manage reservations & itineraries",
      testAccounts: "Traveler and agent profiles with sample bookings"
    },
    results: [
      "100K+ monthly bookings",
      "89% user satisfaction rating",
      "$45M annual GMV",
      "68% repeat booking rate"
    ],
    features: [
      "Destination discovery & curation",
      "Real-time booking system",
      "Personalized itinerary builder",
      "Reviews & ratings system",
      "Travel insurance integration",
      "24/7 concierge support"
    ],
    metrics: {
      performance: "1.8s load time",
      destinations: "500+ active",
      users: "100K+ monthly",
      gmv: "$45M annual"
    },
    visuals: ["Destination Gallery", "Booking Flow", "Itinerary View"],
    link: "https://aurumtravel.demo",
    github: "https://github.com/yourusername/aurum-travel"
  },
  {
    id: 2,
    type: "E-Commerce",
    title: "Noir Marketplace",
    description: "Dynamic marketplace platform for independent sellers with colorful product showcase.",
    intro: "Noir Commerce Suite is a vibrant, multi-vendor marketplace platform that empowers independent sellers and creators. Built with a focus on visual storytelling and ease of use, the platform features colorful product galleries, intuitive categorization, and social commerce integration. Connecting 50K+ sellers with millions of buyers globally.",
    client: "Noir Marketplace Inc",
    year: "2023",
    duration: "4 months",
    teamSize: "5 members",
    techStack: ["React", "Next.js", "Tailwind", "Stripe"],
    image: img2,
    overview: "A multi-vendor marketplace platform with 50K+ active sellers and 2M+ products. Powers $280M+ annual GMV with sellers in 120+ countries.",
    problem: "Independent sellers struggled with complex, unintuitive marketplace tools. Product listings were dull and failed to capture attention. Checkout process was too complicated, causing 45% cart abandonment.",
    solution: "Built vibrant, seller-friendly marketplace with drag-drop product management, rich media support, and simplified checkout. Social features encourage product discovery.",
    demo: {
      login: "seller@noimarketplace.com",
      password: "Marketplace2024!",
      demoData: "1000+ products from 50+ demo sellers",
      features: "Browse, filter, wishlist, checkout, seller dashboard",
      testAccounts: "Buyer and seller profiles with sample products"
    },
    results: [
      "50K+ active sellers",
      "2M+ products listed",
      "$280M+ annual GMV",
      "63% repeat purchase rate"
    ],
    features: [
      "Multi-vendor management system",
      "Drag-drop product listings",
      "Rich media galleries",
      "Social commerce integration",
      "Seller analytics dashboard",
      "Automated payouts system"
    ],
    metrics: {
      performance: "0.9s load time",
      sellers: "50K+",
      products: "2M+",
      gmv: "$280M+ annual"
    },
    visuals: ["Marketplace Grid", "Seller Dashboard", "Checkout"],
    link: "https://noir-marketplace.demo",
    github: "https://github.com/yourusername/noir-marketplace"
  },
  {
    id: 3,
    type: "Healthcare",
    title: "CareHub Pro",
    description: "A digital care experience unifying patient clarity and operational excellence.",
    intro: "Echelon Health Studio is a comprehensive healthcare platform connecting patients with clinicians through intelligent digital workflows. Combining telemedicine capabilities with electronic health records management, this platform streamlines patient care while maintaining HIPAA compliance. The dual-interface design serves both patients seeking care and healthcare providers managing workflows.",
    client: "Echelon Healthcare Systems",
    year: "2022-2023",
    duration: "8 months",
    teamSize: "12 members",
    techStack: ["React", "Node.js", "GraphQL", "Figma"],
    image: img3,
    overview: "An end-to-end patient portal and clinician dashboard built for clarity, empathy, and speed. Serves 45,000+ patients across 80+ clinics with HIPAA-compliant infrastructure.",
    problem: "Patients felt disconnected while clinicians battled fragmented workflows. Average consultation time was 28 minutes due to data retrieval. Paper records caused delays.",
    solution: "Designed a unified journey across patient and clinician touchpoints with seamless data flow. Automated appointment scheduling and medical record access with end-to-end encryption.",
    demo: {
      login: "patient@echelon.health / doctor@echelon.health",
      password: "HealthDemo123!",
      demoData: "Patient records with 20+ appointments",
      features: "Telemedicine, prescription management, records",
      testAccounts: "Patient, clinician, admin profiles"
    },
    results: [
      "45,000+ registered patients",
      "60% reduction in admin time",
      "89% patient satisfaction score",
      "3,200+ appointments/month"
    ],
    features: [
      "Patient appointment booking",
      "Medical records access",
      "Telemedicine integration",
      "Prescription management",
      "Lab results tracking",
      "Clinician scheduling dashboard"
    ],
    metrics: {
      performance: "1.4s load time",
      users: "45K patients",
      satisfaction: "89%",
      appointments: "3.2K/month"
    },
    visuals: ["Journey Map", "Prototype", "Final UI"],
    link: "https://echelon-health.demo",
    github: "https://github.com/yourusername/carehub-pro"
  },
  {
    id: 4,
    type: "Analytics",
    title: "DataViz Pro",
    description: "Real-time data analytics platform for enterprise intelligence and predictive insights.",
    intro: "Stellar Analytics Engine is an enterprise-grade analytics platform that transforms massive datasets into visual intelligence. Powered by Apache Spark and D3.js visualizations, it enables data scientists and business analysts to uncover hidden patterns and predictive insights. The platform processes over 500 million data points daily with sub-second query response times.",
    client: "Stellar Data Corp",
    year: "2023",
    duration: "5 months",
    teamSize: "10 members",
    techStack: ["React", "D3.js", "Python", "Apache Spark"],
    image: img4,
    overview: "A powerful analytics suite that transforms raw data into actionable business intelligence. Processes 500M+ data points daily for 200+ enterprise clients with military-grade security.",
    problem: "Teams struggled to visualize complex datasets and identify trends quickly. Data analysis took 3-4 hours per report. Siloed data sources prevented insights.",
    solution: "Created interactive dashboards with advanced filtering, custom visualizations, and real-time updates. Unified data lakes with ML-powered anomaly detection.",
    demo: {
      login: "analyst@stellar.analytics",
      password: "AnalyticsDemo123!",
      demoData: "Sample datasets with 2M records",
      features: "Dashboard builder, advanced analytics, exports",
      testAccounts: "Analyst, manager, executive profiles"
    },
    results: [
      "98% faster report generation",
      "500M+ daily data points processed",
      "200+ enterprise clients",
      "99.95% uptime SLA"
    ],
    features: [
      "Real-time data visualization",
      "Predictive analytics",
      "Custom dashboard builder",
      "Advanced filtering & search",
      "Automated report scheduling",
      "Data export (CSV, PDF, Excel)"
    ],
    metrics: {
      performance: "1.2s query time",
      dataPoints: "500M+ daily",
      clients: "200+ enterprise",
      uptime: "99.95%"
    },
    visuals: ["Dashboard Mockup", "Data Visualization", "Report Templates"],
    link: "https://stellar-analytics.demo",
    github: "https://github.com/yourusername/dataviz-pro"
  },
  {
    id: 5,
    type: "Collaboration",
    title: "TeamSync",
    description: "A unified workspace platform for remote teams to communicate and collaborate seamlessly.",
    intro: "Prism Collaboration Hub revolutionizes remote work by consolidating communication, project management, and file sharing into a single, intuitive workspace. Supporting over 2.3 million users across 75 countries, Prism enables distributed teams to maintain context, reduce communication silos, and increase productivity. Real-time collaboration features powered by WebSocket technology ensure instant synchronization.",
    client: "Prism Teams Inc",
    year: "2022-2023",
    duration: "6 months",
    teamSize: "9 members",
    techStack: ["React", "WebSocket", "Node.js", "MongoDB"],
    image: img5,
    overview: "An all-in-one communication and project management solution for distributed teams. Active in 75 countries with 85,000+ teams and 2.3M+ users managing workflows daily.",
    problem: "Teams juggled multiple tools, losing context and reducing productivity. Average team used 8+ different apps. Meeting fatigue from fragmented communications.",
    solution: "Built an integrated platform combining chat, video, file sharing, and task management. Single workspace reduces context switching by 68%.",
    demo: {
      login: "team@prism.collab",
      password: "CollabDemo123!",
      demoData: "Sample workspace with 20+ team members",
      features: "Chat, video calls, file sharing, tasks",
      testAccounts: "Team lead, member, guest profiles"
    },
    results: [
      "75 countries using platform",
      "85,000+ active teams",
      "2.3M+ users globally",
      "68% reduction in context switching"
    ],
    features: [
      "Unified chat & video calls",
      "Task management system",
      "File sharing & storage",
      "Project timeline view",
      "Team analytics dashboard",
      "Integration marketplace"
    ],
    metrics: {
      performance: "0.9s load time",
      countries: "75+",
      users: "2.3M+",
      activeTeams: "85K+"
    },
    visuals: ["Workspace Layout", "Feature Showcase", "Mobile View"],
    link: "https://prism-collab.demo",
    github: "https://github.com/yourusername/teamsync"
  },
  {
    id: 6,
    type: "EdTech",
    title: "LearnAI Academy",
    description: "An adaptive e-learning platform with AI-powered personalization and engagement tracking.",
    intro: "Nexus Learning Platform is a next-generation education technology platform that personalizes learning experiences through machine learning algorithms. Serving over 250,000 students globally, Nexus adapts course content and pacing based on individual learning patterns. The platform combines interactive video lectures, hands-on labs, peer collaboration tools, and gamification to maintain engagement and boost completion rates.",
    client: "Nexus Education Group",
    year: "2023-2024",
    duration: "7 months",
    teamSize: "11 members",
    techStack: ["React", "Machine Learning", "Firebase", "WebGL"],
    image: img6,
    overview: "An intelligent learning management system that adapts to individual student needs. Serves 250K+ students globally with 78% course completion rates and 4.8/5 ratings.",
    problem: "Traditional e-learning lacked personalization and failed to keep students engaged. Course completion rate was only 12%. One-size-fits-all content didn't work.",
    solution: "Implemented adaptive content paths, gamification, and real-time progress tracking. ML algorithms personalize learning journey for each student.",
    demo: {
      login: "student@nexus.learn / instructor@nexus.learn",
      password: "LearningDemo123!",
      demoData: "15+ courses with complete curriculum",
      features: "Video lectures, labs, quizzes, certificates",
      testAccounts: "Student, instructor, admin profiles"
    },
    results: [
      "250K+ active students",
      "78% course completion rate",
      "4.8/5 average rating",
      "$12M funding raised"
    ],
    features: [
      "AI-powered adaptive learning",
      "Gamification system",
      "Video lectures & interactive labs",
      "Real-time progress tracking",
      "Peer collaboration tools",
      "Certificate generation"
    ],
    metrics: {
      performance: "1.6s load time",
      students: "250K+",
      completion: "78%",
      rating: "4.8/5"
    },
    visuals: ["Course Builder", "Student Dashboard", "Analytics View"],
    link: "https://nexus-learning.demo",
    github: "https://github.com/yourusername/learnai-academy"
  },
  {
    id: 8,
    type: "Finance",
    title: "FinFlow Pro",
    description: "Smart financial management platform with AI-powered budgeting and investment tracking.",
    intro: "FinFlow Pro is an intelligent personal finance management application designed to help users take control of their financial lives. With advanced budgeting algorithms, investment portfolio tracking, and AI-powered spending insights, FinFlow makes financial planning accessible to everyone. The platform securely manages over $2.5B in assets across 150K+ users globally.",
    client: "FinFlow Systems Inc",
    year: "2023-2024",
    duration: "8 months",
    teamSize: "14 members",
    techStack: ["React", "Node.js", "PostgreSQL", "D3.js", "Stripe API"],
    image: img8,
    overview: "A comprehensive financial dashboard combining budgeting, investing, and wealth management. Tracks over $2.5B in assets with real-time analytics and smart recommendations.",
    problem: "Users struggled to track spending, optimize budgets, and make informed investment decisions. Traditional banking apps were disconnected and non-intuitive.",
    solution: "Built an integrated platform with AI algorithms that analyze spending patterns, provide personalized recommendations, and automate savings.",
    demo: {
      login: "user@finflow.app",
      password: "FinDemo2024!",
      demoData: "Sample portfolio with $500K assets, 12 months spending history",
      features: "Budget planning, investment tracking, bill payments, financial reports",
      testAccounts: "Individual investor, financial advisor profiles"
    },
    results: [
      "150K+ active users",
      "$2.5B assets under management",
      "92% budget goal achievement",
      "$45M Series B funding"
    ],
    metrics: {
      performance: "0.8s load time",
      users: "150K+",
      aum: "$2.5B",
      achievement: "92%"
    },
    visuals: ["Dashboard Overview", "Investment Portfolio", "Budget Analytics"],
    link: "https://finflow.demo",
    github: "https://github.com/yourusername/finflow-pro"
  },
  {
    id: 9,
    type: "Social",
    title: "ConnectHub",
    description: "Community-driven social platform for meaningful connections and knowledge sharing.",
    intro: "ConnectHub is a next-generation social networking platform that prioritizes meaningful interactions over vanity metrics. With intelligent matching algorithms, interest-based communities, and real-time collaboration tools, ConnectHub has grown to 3M+ users across 120+ countries. The platform fosters genuine connections between professionals, creatives, and enthusiasts worldwide.",
    client: "ConnectHub Networks",
    year: "2024-2025",
    duration: "6 months",
    teamSize: "16 members",
    techStack: ["React Native", "Node.js", "MongoDB", "WebSocket", "Redis"],
    image: img9,
    overview: "A social platform emphasizing quality connections and community building. Features intelligent matching, interest-based groups, and real-time messaging with 3M+ active users.",
    problem: "Existing social networks were cluttered, focused on engagement metrics, and lacked meaningful community building. Users felt overwhelmed and disconnected.",
    solution: "Designed algorithm-driven communities, smart matching, and curated content feeds that encourage genuine interactions and valuable content sharing.",
    demo: {
      login: "creator@connecthub.io",
      password: "SocialDemo24!",
      demoData: "120+ communities, 500+ connections, curated feed",
      features: "Communities, messaging, content sharing, video calls, events",
      testAccounts: "Creator, member, community moderator profiles"
    },
    results: [
      "3M+ active users",
      "120+ countries",
      "89% daily active rate",
      "$30M Series A funding"
    ],
    metrics: {
      performance: "1.2s load time",
      users: "3M+",
      countries: "120+",
      engagement: "89%"
    },
    visuals: ["Community Feed", "Matching Algorithm", "Live Messaging"],
    link: "https://connecthub.demo",
    github: "https://github.com/yourusername/connecthub"
  },
  {
    id: 10,
    type: "IoT",
    title: "SmartHome Central",
    description: "Unified IoT control platform for smart home automation and energy management.",
    intro: "SmartHome Central is a comprehensive IoT management platform that centralizes control of all smart home devices. Supporting 500+ device types, real-time automation, energy optimization, and voice control integration, the platform serves 180K+ households worldwide. Users save an average of $1,200 annually on energy costs through intelligent automation and monitoring.",
    client: "SmartHome Innovations LLC",
    year: "2023-2024",
    duration: "9 months",
    teamSize: "18 members",
    techStack: ["React", "Python", "MQTT", "TensorFlow", "AWS IoT"],
    image: img10,
    overview: "A unified IoT control center managing 500+ device types. Features real-time automation, energy optimization, and ML-based predictive maintenance for 180K+ smart homes.",
    problem: "Users had to juggle multiple apps for different smart devices. No centralized control or intelligent automation existed. Energy waste was common.",
    solution: "Created unified dashboard with cross-device automation, ML-powered energy optimization, and predictive maintenance capabilities.",
    demo: {
      login: "homeowner@smarthome.io",
      password: "IoTDemo2024!",
      demoData: "Sample home with 35+ connected devices, 6 months automation logs",
      features: "Device control, automation rules, energy reports, voice integration, alerts",
      testAccounts: "Homeowner, installer, family member profiles"
    },
    results: [
      "180K+ active households",
      "500+ supported devices",
      "$1,200 avg annual savings",
      "$50M Series B funding"
    ],
    metrics: {
      performance: "0.9s load time",
      households: "180K+",
      devices: "500+",
      savings: "$1.2K avg"
    },
    visuals: ["Home Dashboard", "Device Control Panel", "Energy Analytics"],
    link: "https://smarthome-central.demo",
    github: "https://github.com/yourusername/smarthome-central"
  }
];

export default projectsData;
