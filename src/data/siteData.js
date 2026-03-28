export const designTokens = {
  heroStyle: "carousel",
  typography: {
    heading: "Sora",
    body: "DM Sans",
    display: "Outfit",
  },
  effects: {
    noise: true,
    glassmorphism: "none",
    floatingShapes: false,
    scrollProgress: false,
    meshGradient: false,
    gradientBorders: false,
    cursorGlow: false,
  },
  animationPreset: "smooth",
  serviceCardStyle: "icon-top",
  projectGridStyle: "grid-3",
  testimonialStyle: "cards",
  statsStyle: "overlay",
  bgPattern: "none",
  homeSectionOrder: [
    "hero", "stats", "services", "projects", "whyChooseUs", "testimonials", "cta"
  ],
};

const siteData = {
  business: {
    name: "Wozoli Contractors",
    legalName: "Wozoli Contractors (Pvt) Ltd",
    tagline: "Building Zimbabwe's Future",
    description:
      "Premier construction company delivering world-class general construction, civil engineering, and infrastructure projects across Zimbabwe.",
    phone: "+263 77 751 2771",
    phoneRaw: "+263777512771",
    whatsappNumber: "263777512771",
    email: "info@wozolicontractors.co.zw",
    address:
      "3rd Floor, Causeway Building Corner Central, and Third St, Harare",
    country: "Zimbabwe",
    city: "Harare",
    rating: 4.4,
    ratingRounded: 4,
    reviewCount: 17,
    established: "2008",
    yearsExperience: "15+",
    projectsCompleted: "150+",
    employees: "50+",
    coordinates: { lat: -17.8250138, lng: 31.0516932 },
    hours: [
      { day: "Monday - Friday", time: "8:00 AM - 4:30 PM" },
      { day: "Saturday", time: "9:30 AM - 1:00 PM" },
      { day: "Sunday", time: "Closed" },
    ],
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.5!2d31.0516932!3d-17.8250138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDQ5JzMwLjEiUyAzMcKwMDMnMDYuMSJF!5e0!3m2!1sen!2szw!4v1700000000000!5m2!1sen!2szw",
    cookieConsentKey: "wozoli-cookie-consent",
    socialLinks: {
      facebook: "#",
      linkedin: "#",
      instagram: "#",
    },
  },

  // Navbar logo
  navbar: {
    logoLine1: "Wozoli",
    logoLine2: "Contractors",
  },

  hero: {
    badge: "Harare's Trusted Contractors",
    titleParts: [
      { text: "Building " },
      { text: "Zimbabwe's", highlight: true },
      { text: " Future" },
    ],
    subtitle:
      "Premier construction company delivering world-class general construction, civil engineering, and infrastructure projects across Zimbabwe.",
    ctaPrimary: "Start Your Project",
    ctaSecondary: "View Our Work",
    trustBadge: "Licensed & Insured",
    backgroundImage:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920",
    backgroundAlt:
      "Modern construction site with crane and structural framework under golden hour light",
  },

  stats: [
    { number: "150+", label: "Projects Completed" },
    { number: "4.4", label: "Star Rating" },
    { number: "15+", label: "Years Experience" },
    { number: "50+", label: "Team Members" },
  ],

  // Home page services preview (short descriptions)
  servicesPreview: [
    {
      iconName: "Buildings",
      title: "General Construction",
      desc: "Complete building solutions from foundation to finishing, delivered with precision and excellence.",
    },
    {
      iconName: "RoadHorizon",
      title: "Road Construction",
      desc: "Expert road infrastructure development connecting communities across Zimbabwe.",
    },
    {
      iconName: "HardHat",
      title: "Civil Engineering",
      desc: "Comprehensive civil engineering services for public and private sector projects.",
    },
    {
      iconName: "Wrench",
      title: "Building Renovation",
      desc: "Transforming existing structures into modern, functional, and aesthetic spaces.",
    },
    {
      iconName: "ChartLineUp",
      title: "Project Management",
      desc: "End-to-end project oversight ensuring on-time, on-budget delivery.",
    },
    {
      iconName: "Wall",
      title: "Structural Engineering",
      desc: "Advanced structural analysis and design for safe, durable constructions.",
    },
  ],

  // Home page featured projects
  featuredProjects: [
    {
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800",
      title: "Harare Business Park",
      category: "Commercial",
    },
    {
      image:
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800",
      title: "Borrowdale Residential Complex",
      category: "Residential",
    },
    {
      image:
        "https://images.unsplash.com/photo-1429497419816-9ca5cfb4571a?w=800",
      title: "Mutare Highway Extension",
      category: "Infrastructure",
    },
  ],

  // Home page why-choose-us
  whyChooseUs: {
    titleParts: [
      { text: "Excellence in Every " },
      { text: "Foundation", highlight: true },
      { text: " We Build" },
    ],
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800",
    imageAlt:
      "Architectural blueprint and construction planning by the team",
    experienceYears: "15+",
    experienceLabel: "Years of Excellence",
    points: [
      {
        title: "Quality Craftsmanship",
        desc: "Every project is built to the highest international standards with premium materials.",
      },
      {
        title: "On-Time Delivery",
        desc: "We pride ourselves on completing projects within agreed timelines without compromising quality.",
      },
      {
        title: "Safety First",
        desc: "Rigorous safety protocols protect our team and ensure compliant, safe construction sites.",
      },
      {
        title: "Transparent Pricing",
        desc: "No hidden costs. Clear, honest pricing from initial quote to final handover.",
      },
    ],
  },

  // Home page CTA
  homeCta: {
    backgroundImage:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1920",
    backgroundAlt:
      "Construction workers collaborating on a building project",
    titleParts: [
      { text: "Ready to Build Something " },
      { text: "Extraordinary", highlight: true },
      { text: "?" },
    ],
    subtitle:
      "Whether it is a commercial building, residential project, or infrastructure development, we are ready to bring your vision to life.",
    ctaPrimary: "Get a Free Quote",
    whatsappText:
      "Hello, I would like to discuss a project.",
  },

  // Home page testimonials (short list for homepage)
  homeTestimonials: [
    {
      name: "Tendai Moyo",
      role: "Property Developer",
      text: "Wozoli Contractors exceeded our expectations on every front. Their attention to detail and commitment to quality is unmatched in Harare.",
      rating: 5,
    },
    {
      name: "Grace Chimuka",
      role: "Business Owner",
      text: "Professional, reliable, and innovative. They transformed our commercial property beyond what we imagined possible.",
      rating: 5,
    },
    {
      name: "Samuel Ndlovu",
      role: "Government Project Coordinator",
      text: "Their expertise in road construction is remarkable. They delivered a complex infrastructure project on time and within budget.",
      rating: 4,
    },
  ],

  // ====== ABOUT PAGE ======
  about: {
    heroTitle: [
      { text: "Building With " },
      { text: "Purpose", highlight: true },
      { text: " & Passion" },
    ],
    heroSubtitle:
      "For over 15 years, Wozoli Contractors has been shaping the built environment of Zimbabwe with an unwavering commitment to quality, safety, and innovation.",
    storyImage:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800",
    storyImageAlt:
      "Building project showcasing modern construction techniques in Zimbabwe",
    storyProjectCount: "150+",
    storyProjectLabel: "Completed Projects",
    storyTitle: "From Humble Beginnings to Industry Leaders",
    storyParagraphs: [
      "Founded in Harare, Zimbabwe, Wozoli Contractors (Pvt) Ltd began with a simple yet powerful vision: to build structures that communities can rely on for generations.",
      "Over the years, we have grown from a small team of dedicated builders into one of Zimbabwe's most respected construction firms. Our journey has been defined by an uncompromising commitment to quality, a deep respect for safety, and a passion for innovation.",
      "Today, we offer comprehensive construction services ranging from general building and civil engineering to road construction and project management. Every project we undertake reflects our core belief that great construction is not just about erecting structures \u2014 it is about building communities.",
    ],
    mission:
      "To deliver world-class construction solutions that exceed client expectations through innovative techniques, skilled craftsmanship, and an unwavering commitment to safety and sustainability. We aim to be the partner of choice for every construction need in Zimbabwe.",
    vision:
      "To be the most trusted and innovative construction company in Southern Africa, recognized for transforming communities through exceptional infrastructure and sustainable building practices. We envision a Zimbabwe where every structure represents quality and resilience.",
    values: [
      {
        iconName: "ShieldCheck",
        title: "Integrity",
        desc: "We operate with honesty and transparency in every interaction, building trust through actions.",
      },
      {
        iconName: "Trophy",
        title: "Excellence",
        desc: "We pursue the highest standards in every project, never settling for less than the best.",
      },
      {
        iconName: "Lightbulb",
        title: "Innovation",
        desc: "We embrace modern construction methods and technologies to deliver superior results.",
      },
      {
        iconName: "Handshake",
        title: "Collaboration",
        desc: "We work closely with clients, partners, and communities to achieve shared success.",
      },
      {
        iconName: "Heart",
        title: "Safety",
        desc: "The wellbeing of our team and communities is paramount in every project we undertake.",
      },
      {
        iconName: "Users",
        title: "Community",
        desc: "We are committed to empowering local communities through job creation and sustainable development.",
      },
    ],
    team: [
      {
        name: "Tapiwa Wozoli",
        role: "Managing Director",
        image:
          "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400",
      },
      {
        name: "Rumbidzai Chikore",
        role: "Operations Director",
        image:
          "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400",
      },
      {
        name: "Farai Mupfumira",
        role: "Chief Engineer",
        image:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
      },
      {
        name: "Nyasha Dube",
        role: "Project Manager",
        image:
          "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400",
      },
    ],
    milestones: [
      {
        year: "2008",
        title: "Company Founded",
        desc: "Wozoli Contractors established in Harare with a vision to transform Zimbabwe's construction landscape.",
      },
      {
        year: "2012",
        title: "First Major Contract",
        desc: "Awarded our first government infrastructure project, marking a significant milestone in growth.",
      },
      {
        year: "2016",
        title: "50th Project Milestone",
        desc: "Completed 50 construction projects across Zimbabwe, earning a reputation for excellence.",
      },
      {
        year: "2019",
        title: "Expanded Services",
        desc: "Added civil engineering and project management divisions to offer comprehensive solutions.",
      },
      {
        year: "2022",
        title: "Regional Recognition",
        desc: "Recognized as one of the top construction firms in Southern Africa for quality and innovation.",
      },
      {
        year: "2024",
        title: "150+ Projects",
        desc: "Surpassed 150 completed projects with continued growth and expansion across Zimbabwe.",
      },
    ],
    ctaTitle: "Let Us Build Your Vision",
    ctaSubtitle:
      "Partner with us for your next construction project and experience the difference that quality makes.",
    ctaCta: "Start a Conversation",
  },

  // ====== SERVICES PAGE ======
  services: {
    heroTitle: [
      { text: "Comprehensive " },
      { text: "Construction", highlight: true },
      { text: " Solutions" },
    ],
    heroSubtitle:
      "Six core service areas designed to cover every aspect of your construction needs. From initial planning to final handover, we have you covered.",
    items: [
      {
        iconName: "Buildings",
        title: "General Construction",
        slug: "general-construction",
        image:
          "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900",
        desc: "From commercial complexes to residential buildings, we deliver complete construction solutions that stand the test of time. Our general construction services encompass every phase of the building process.",
        features: [
          "Commercial & residential building construction",
          "Industrial facility development",
          "Foundations and structural frameworks",
          "Interior and exterior finishing",
          "Quality assurance at every stage",
          "Compliance with local building codes",
        ],
      },
      {
        iconName: "HardHat",
        title: "Civil Engineering",
        slug: "civil-engineering",
        image:
          "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=900",
        desc: "Our civil engineering team brings decades of expertise to public and private infrastructure projects. We design and build solutions that serve communities for generations.",
        features: [
          "Infrastructure design and planning",
          "Water and sanitation systems",
          "Storm water management",
          "Site development and grading",
          "Environmental impact assessments",
          "Geotechnical investigations",
        ],
      },
      {
        iconName: "RoadHorizon",
        title: "Road Construction",
        slug: "road-construction",
        image:
          "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=900",
        desc: "Building the arteries of progress. Our road construction division specializes in creating durable, well-engineered road networks that connect communities and drive economic growth.",
        features: [
          "Highway and expressway construction",
          "Urban road development",
          "Rural access roads",
          "Bridge and culvert construction",
          "Pavement rehabilitation",
          "Traffic management systems",
        ],
      },
      {
        iconName: "Wrench",
        title: "Building Renovation",
        slug: "building-renovation",
        image:
          "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900",
        desc: "Breathing new life into existing structures. We transform outdated buildings into modern, functional, and visually stunning spaces while preserving their structural integrity.",
        features: [
          "Complete building refurbishment",
          "Structural repairs and reinforcement",
          "Facade modernization",
          "Interior redesign and fit-out",
          "Energy efficiency upgrades",
          "Heritage building restoration",
        ],
      },
      {
        iconName: "ChartLineUp",
        title: "Project Management",
        slug: "project-management",
        image:
          "https://images.unsplash.com/photo-1429497419816-9ca5cfb4571a?w=900",
        desc: "End-to-end project oversight that ensures your construction project is delivered on time, within budget, and to the highest quality standards. Our experienced managers keep everything on track.",
        features: [
          "Project planning and scheduling",
          "Budget management and cost control",
          "Quality assurance programs",
          "Risk assessment and mitigation",
          "Stakeholder communication",
          "Progress reporting and documentation",
        ],
      },
      {
        iconName: "Wall",
        title: "Structural Engineering",
        slug: "structural-engineering",
        image:
          "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900",
        desc: "Precision engineering for safe, durable constructions. Our structural engineers use advanced analysis tools to design foundations and frameworks that withstand the forces of nature.",
        features: [
          "Structural analysis and design",
          "Foundation engineering",
          "Seismic assessment",
          "Load-bearing capacity analysis",
          "Structural health monitoring",
          "Retrofit design solutions",
        ],
      },
    ],
    ctaTitle: "Need a Customized Solution?",
    ctaSubtitle:
      "Every project is unique. Contact us to discuss your specific requirements and let us craft a tailored construction solution.",
  },

  // ====== PROJECTS PAGE ======
  projects: {
    heroTitle: [
      { text: "Projects That " },
      { text: "Define", highlight: true },
      { text: " Excellence" },
    ],
    heroSubtitle:
      "Explore our portfolio of completed and ongoing projects. Each one tells a story of dedication, skill, and unwavering quality.",
    categories: [
      "All",
      "Commercial",
      "Residential",
      "Infrastructure",
      "Renovation",
      "Industrial",
    ],
    items: [
      {
        id: 1,
        title: "Harare Business Park",
        category: "Commercial",
        location: "Harare CBD",
        year: "2024",
        image:
          "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800",
        desc: "A state-of-the-art commercial complex featuring 12 floors of premium office space, ground-floor retail, and underground parking for 200 vehicles.",
        services: [
          "General Construction",
          "Structural Engineering",
          "Project Management",
        ],
      },
      {
        id: 2,
        title: "Borrowdale Residential Estate",
        category: "Residential",
        location: "Borrowdale, Harare",
        year: "2023",
        image:
          "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800",
        desc: "Luxury residential development comprising 24 contemporary townhouses with premium finishes, landscaped gardens, and community amenities.",
        services: ["General Construction", "Civil Engineering"],
      },
      {
        id: 3,
        title: "Mutare Highway Extension",
        category: "Infrastructure",
        location: "Harare - Mutare",
        year: "2023",
        image:
          "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800",
        desc: "45km highway extension project including two new interchanges, drainage systems, and roadside amenities. Completed 2 weeks ahead of schedule.",
        services: [
          "Road Construction",
          "Civil Engineering",
          "Project Management",
        ],
      },
      {
        id: 4,
        title: "Causeway Office Renovation",
        category: "Renovation",
        location: "Causeway, Harare",
        year: "2024",
        image:
          "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800",
        desc: "Complete renovation of a 1970s office building, transforming it into a modern workspace with energy-efficient systems and contemporary design.",
        services: ["Building Renovation", "Structural Engineering"],
      },
      {
        id: 5,
        title: "Chitungwiza Shopping Mall",
        category: "Commercial",
        location: "Chitungwiza",
        year: "2022",
        image:
          "https://images.unsplash.com/photo-1429497419816-9ca5cfb4571a?w=800",
        desc: "A modern retail destination with 45 shop units, food court, entertainment zone, and ample parking serving the Chitungwiza community.",
        services: ["General Construction", "Project Management"],
      },
      {
        id: 6,
        title: "Msasa Industrial Complex",
        category: "Industrial",
        location: "Msasa, Harare",
        year: "2022",
        image:
          "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800",
        desc: "Purpose-built industrial warehousing and manufacturing facility spanning 8,000 square meters with heavy-duty flooring and specialized loading docks.",
        services: [
          "General Construction",
          "Structural Engineering",
          "Civil Engineering",
        ],
      },
      {
        id: 7,
        title: "Glen Lorne Luxury Villas",
        category: "Residential",
        location: "Glen Lorne, Harare",
        year: "2023",
        image:
          "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800",
        desc: "Six exclusive luxury villas with infinity pools, smart home technology, and panoramic views of the Harare skyline.",
        services: ["General Construction", "Building Renovation"],
      },
      {
        id: 8,
        title: "Masvingo Road Rehabilitation",
        category: "Infrastructure",
        location: "Masvingo Province",
        year: "2021",
        image:
          "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800",
        desc: "Major road rehabilitation project covering 120km of provincial roads, including resurfacing, bridge repairs, and drainage improvements.",
        services: ["Road Construction", "Civil Engineering"],
      },
      {
        id: 9,
        title: "Avondale Heritage Restoration",
        category: "Renovation",
        location: "Avondale, Harare",
        year: "2024",
        image:
          "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800",
        desc: "Sensitive restoration of a heritage-listed colonial building, preserving original architectural features while modernizing essential systems.",
        services: ["Building Renovation", "Structural Engineering"],
      },
    ],
  },

  // ====== REVIEWS PAGE ======
  reviews: {
    heroTitle: [
      { text: "What Our Clients " },
      { text: "Say", highlight: true },
    ],
    heroSubtitle:
      "Real feedback from real clients. Our rating reflects our consistent commitment to quality and customer satisfaction.",
    ratingBreakdown: [
      { stars: 5, count: 11 },
      { stars: 4, count: 6 },
      { stars: 3, count: 0 },
      { stars: 2, count: 0 },
      { stars: 1, count: 0 },
    ],
    items: [
      {
        name: "Tendai Moyo",
        role: "Property Developer",
        text: "Wozoli Contractors exceeded our expectations on every front. Their attention to detail and commitment to quality is unmatched in Harare. The project was completed on time and the craftsmanship is outstanding.",
        rating: 5,
        date: "2 months ago",
        project: "Commercial Complex",
      },
      {
        name: "Grace Chimuka",
        role: "Business Owner",
        text: "Professional, reliable, and innovative. They transformed our commercial property beyond what we imagined possible. The team was communicative throughout and handled every challenge with expertise.",
        rating: 5,
        date: "3 months ago",
        project: "Office Renovation",
      },
      {
        name: "Samuel Ndlovu",
        role: "Government Project Coordinator",
        text: "Their expertise in road construction is remarkable. They delivered a complex infrastructure project on time and within budget. Safety standards were impeccable throughout the project duration.",
        rating: 4,
        date: "4 months ago",
        project: "Road Construction",
      },
      {
        name: "Chiedza Makoni",
        role: "Homeowner",
        text: "We hired Wozoli Contractors to build our dream home in Borrowdale. From the initial consultation to the final handover, they were professional and attentive. Our home is everything we envisioned and more.",
        rating: 5,
        date: "5 months ago",
        project: "Residential Construction",
      },
      {
        name: "Blessing Mutasa",
        role: "School Administrator",
        text: "Wozoli built our new school block and sports facility. The quality of work is exceptional. They were respectful of the school environment and ensured minimal disruption to our students.",
        rating: 5,
        date: "5 months ago",
        project: "Institutional Building",
      },
      {
        name: "Peter Zvobgo",
        role: "Retail Chain Manager",
        text: "We have worked with Wozoli on three separate projects now. Their consistency in delivering high-quality work is what keeps us coming back. Fair pricing and excellent project management.",
        rating: 4,
        date: "6 months ago",
        project: "Retail Fit-Out",
      },
      {
        name: "Nyasha Gumbo",
        role: "Real Estate Agent",
        text: "I recommend Wozoli Contractors to all my clients. Their reputation for quality construction adds value to any property. The attention to finishing details is what sets them apart.",
        rating: 5,
        date: "7 months ago",
        project: "Various Projects",
      },
      {
        name: "Margaret Dube",
        role: "Hotel Owner",
        text: "Wozoli renovated our hotel and the results are stunning. They understood our vision for a modern yet warm aesthetic and delivered beautifully. Guests constantly compliment the new look.",
        rating: 5,
        date: "8 months ago",
        project: "Hotel Renovation",
      },
      {
        name: "Tawanda Mapfumo",
        role: "Warehouse Manager",
        text: "Solid construction work on our industrial warehouse. The structural engineering was top-notch and the building has performed excellently. Very satisfied with the durability and design.",
        rating: 4,
        date: "8 months ago",
        project: "Industrial Construction",
      },
      {
        name: "Rudo Chigwedere",
        role: "Church Elder",
        text: "Our new church building is a masterpiece thanks to Wozoli Contractors. They treated the project with the reverence it deserved and delivered a space that our congregation is proud of.",
        rating: 5,
        date: "9 months ago",
        project: "Religious Building",
      },
      {
        name: "Kudzai Matimba",
        role: "NGO Director",
        text: "Wozoli built our community clinic in a rural area. Despite the challenging location, they delivered a quality structure on time. Their commitment to community development is genuine.",
        rating: 4,
        date: "10 months ago",
        project: "Healthcare Facility",
      },
      {
        name: "David Mhizha",
        role: "Civil Engineer",
        text: "As a fellow professional in the industry, I can attest to the high standards Wozoli maintains. Their structural work is precise and their adherence to building codes is exemplary.",
        rating: 5,
        date: "11 months ago",
        project: "Structural Work",
      },
      {
        name: "Faith Nyamukapa",
        role: "Restaurant Owner",
        text: "The renovation of our restaurant was completed in just 6 weeks without a single day of delay. The quality of the interior finishing exceeded our expectations. Highly recommended.",
        rating: 5,
        date: "11 months ago",
        project: "Restaurant Renovation",
      },
      {
        name: "Maxwell Chirenje",
        role: "Mining Company Director",
        text: "Wozoli constructed our mining camp facilities in challenging terrain. Their adaptability and problem-solving skills were impressive. A reliable contractor for demanding projects.",
        rating: 4,
        date: "1 year ago",
        project: "Mining Infrastructure",
      },
      {
        name: "Tariro Banda",
        role: "Apartment Complex Owner",
        text: "Our 48-unit apartment complex was a major undertaking and Wozoli handled it with professionalism from start to finish. The project management was flawless and communication was excellent.",
        rating: 5,
        date: "1 year ago",
        project: "Multi-Unit Residential",
      },
      {
        name: "Simba Chidyausiku",
        role: "Logistics Company CEO",
        text: "Wozoli built our distribution center and it has served us well. The floor load capacity is exactly as specified and the building layout optimizes our operations perfectly.",
        rating: 4,
        date: "1 year ago",
        project: "Distribution Center",
      },
      {
        name: "Agnes Manyika",
        role: "Property Manager",
        text: "I have seen many construction companies operate in Harare, and Wozoli stands out for their integrity and work ethic. They deliver what they promise, every single time.",
        rating: 5,
        date: "1 year ago",
        project: "Multiple Projects",
      },
    ],
    ctaTitle: "Ready to Experience the Difference?",
    ctaSubtitle:
      "Join our growing list of satisfied clients. Contact us today to discuss your construction project.",
    ctaCta: "Get Started Today",
    ctaWhatsappText:
      "Hello, I saw your reviews and would like to discuss a project.",
  },

  // ====== CONTACT PAGE ======
  contact: {
    heroTitle: [
      { text: "Let's Start " },
      { text: "Building", highlight: true },
      { text: " Together" },
    ],
    heroSubtitle:
      "Have a construction project in mind? We would love to hear from you. Reach out via phone, email, WhatsApp, or fill in the form below.",
    formTitle: "Send Us a Message",
    formSubtitle:
      "Fill in the form and choose how you'd like to send it.",
  },

  // ====== CAREERS PAGE ======
  careers: {
    heroTitle: [
      { text: "Build Your " },
      { text: "Career", highlight: true },
      { text: " With Us" },
    ],
    heroSubtitle:
      "Join a team of passionate professionals who are building Zimbabwe's future. We offer rewarding careers with growth opportunities, competitive benefits, and a supportive culture.",
    heroImage:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1920",
    cultureTitle: "Why Work Here?",
    cultureItems: [
      {
        iconName: "Users",
        title: "Collaborative Environment",
        desc: "Work alongside talented professionals who support and challenge each other.",
      },
      {
        iconName: "Rocket",
        title: "Growth Opportunities",
        desc: "Clear career progression paths with mentorship from industry leaders.",
      },
      {
        iconName: "ShieldCheck",
        title: "Safety Culture",
        desc: "A workplace where safety is not just a rule but a deeply held value.",
      },
    ],
    cultureImage:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1400",
    cultureImageAlt:
      "Team working together on a construction site",
    cultureTagline: "More Than a Job. A Mission.",
    cultureTaglineDesc:
      "Every day, our team comes together with a shared purpose: to build structures that improve lives and shape communities.",
    benefits: [
      {
        iconName: "CurrencyDollar",
        title: "Competitive Salary",
        desc: "Industry-leading compensation packages with performance bonuses.",
      },
      {
        iconName: "FirstAid",
        title: "Health Coverage",
        desc: "Comprehensive medical aid for you and your immediate family.",
      },
      {
        iconName: "GraduationCap",
        title: "Professional Development",
        desc: "Sponsorship for certifications, courses, and industry conferences.",
      },
      {
        iconName: "Car",
        title: "Transport Allowance",
        desc: "Monthly transport allowance or company vehicle for senior roles.",
      },
      {
        iconName: "Heart",
        title: "Work-Life Balance",
        desc: "Generous leave policies and flexible working arrangements.",
      },
      {
        iconName: "ShieldCheck",
        title: "Safety Equipment",
        desc: "All necessary PPE and safety gear provided at no cost.",
      },
    ],
    positions: [
      {
        id: 1,
        title: "Senior Civil Engineer",
        department: "Engineering",
        type: "Full-Time",
        location: "Harare",
        description:
          "We are seeking an experienced civil engineer to lead infrastructure projects. The ideal candidate has 8+ years of experience in civil engineering with expertise in road and bridge construction.",
        requirements: [
          "Bachelor's degree in Civil Engineering",
          "8+ years of experience in construction",
          "Professional registration with ZIE",
          "Project management experience",
          "Strong leadership and communication skills",
        ],
      },
      {
        id: 2,
        title: "Project Manager",
        department: "Management",
        type: "Full-Time",
        location: "Harare",
        description:
          "Join our project management team to oversee major construction projects from inception to completion. You will coordinate teams, manage budgets, and ensure timely delivery.",
        requirements: [
          "Degree in Construction Management or related field",
          "5+ years of project management experience",
          "PMP certification preferred",
          "Strong budgeting and scheduling skills",
          "Experience with construction management software",
        ],
      },
      {
        id: 3,
        title: "Structural Engineer",
        department: "Engineering",
        type: "Full-Time",
        location: "Harare",
        description:
          "We need a structural engineer to design and analyze building structures for our construction projects. Expertise in reinforced concrete and steel structures is essential.",
        requirements: [
          "Bachelor's or Master's degree in Structural Engineering",
          "5+ years of structural design experience",
          "Proficiency in AutoCAD, SAP2000, or similar",
          "Knowledge of local building codes",
          "Strong analytical and problem-solving skills",
        ],
      },
      {
        id: 4,
        title: "Quantity Surveyor",
        department: "Commercial",
        type: "Full-Time",
        location: "Harare",
        description:
          "We are looking for a qualified quantity surveyor to manage costs on our construction projects. You will handle bill of quantities, valuations, and cost reporting.",
        requirements: [
          "Degree in Quantity Surveying",
          "3+ years of experience in construction QS",
          "Proficiency in measurement and valuation",
          "Knowledge of contract administration",
          "Excellent attention to detail",
        ],
      },
      {
        id: 5,
        title: "Site Foreman",
        department: "Operations",
        type: "Full-Time",
        location: "Various Sites",
        description:
          "We need experienced site foremen to supervise construction activities on our various project sites. You will ensure work quality, safety compliance, and team coordination.",
        requirements: [
          "National Diploma in Building/Construction",
          "5+ years of site supervision experience",
          "Strong knowledge of construction methods",
          "Health and safety certification",
          "Ability to read and interpret drawings",
        ],
      },
      {
        id: 6,
        title: "Graduate Engineer (Internship)",
        department: "Engineering",
        type: "Internship",
        location: "Harare",
        description:
          "An exciting opportunity for recent engineering graduates to gain hands-on experience in construction. You will work alongside senior engineers on real projects.",
        requirements: [
          "Recent graduate in Civil/Structural Engineering",
          "Strong academic record",
          "Eagerness to learn and grow",
          "Basic knowledge of construction software",
          "Valid driver's license is an advantage",
        ],
      },
    ],
    generalApplicationTitle: "Don't See the Right Role?",
    generalApplicationSubtitle:
      "We are always looking for talented individuals. Send us your CV and we will keep you in mind for future opportunities.",
    generalApplicationCta: "Send Your CV",
  },

  // ====== FOOTER ======
  footer: {
    description:
      "Building Zimbabwe's future with excellence, integrity, and innovation. Trusted by communities and businesses since our founding.",
    copyright: "Wozoli Contractors (Pvt) Ltd",
  },
};

export default siteData;
