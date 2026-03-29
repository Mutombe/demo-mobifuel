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
    name: "Mobifuel",
    legalName: "Mobifuel (Pvt) Ltd",
    tagline: "Fuel Delivered. Anywhere. Anytime.",
    description:
      "Zimbabwe's premier mobile fuel delivery service bringing diesel, petrol, and bulk fuel directly to your fleet, farm, or business. No queues. No downtime. Just fuel, on demand.",
    phone: "+263 78 753 3382",
    phoneRaw: "+263787533382",
    whatsappNumber: "263787533382",
    email: "info@mobifuel.co.zw",
    address: "Harare, Zimbabwe",
    country: "Zimbabwe",
    city: "Harare",
    rating: 4.7,
    ratingRounded: 5,
    reviewCount: 31,
    established: "2019",
    yearsExperience: "6+",
    projectsCompleted: "5000+",
    employees: "25+",
    coordinates: { lat: -17.8292, lng: 31.0522 },
    hours: [
      { day: "Monday - Friday", time: "6:00 AM - 8:00 PM" },
      { day: "Saturday", time: "7:00 AM - 5:00 PM" },
      { day: "Sunday", time: "Emergency Only" },
    ],
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.5!2d31.0522!3d-17.8292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDQ5JzQ1LjEiUyAzMcKwMDMnMDcuOSJF!5e0!3m2!1sen!2szw!4v1700000000000!5m2!1sen!2szw",
    cookieConsentKey: "mobifuel-cookie-consent",
    socialLinks: {
      facebook: "#",
      linkedin: "#",
      instagram: "#",
    },
  },

  navbar: {
    logoLine1: "Mobi",
    logoLine2: "Fuel",
  },

  hero: {
    badge: "Zimbabwe's On-Demand Fuel Delivery",
    titleParts: [
      { text: "Fuel That " },
      { text: "Comes", highlight: true },
      { text: " To You" },
    ],
    subtitle:
      "Skip the queues. Eliminate downtime. Mobifuel delivers diesel, petrol, and bulk fuel directly to your location, on your schedule, with metered accuracy.",
    ctaPrimary: "Order Fuel Now",
    ctaSecondary: "How It Works",
    trustBadge: "Licensed & Certified",
    backgroundImage:
      "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=1920",
    backgroundAlt:
      "Fuel delivery tanker truck on a highway at sunset delivering mobile fuel",
  },

  stats: [
    { number: "5000+", label: "Deliveries Made" },
    { number: "4.7", label: "Star Rating" },
    { number: "6+", label: "Years Operating" },
    { number: "25+", label: "Team Members" },
  ],

  servicesPreview: [
    {
      iconName: "NavigationArrow",
      title: "Diesel Delivery",
      desc: "On-demand diesel delivered to your fleet, construction site, or generator. Metered, certified, and on time.",
    },
    {
      iconName: "Car",
      title: "Petrol Delivery",
      desc: "Premium petrol brought directly to your vehicles, business, or event location with precision fueling.",
    },
    {
      iconName: "Briefcase",
      title: "Fleet Fueling",
      desc: "Scheduled fleet fueling programs that keep your vehicles on the road without a single trip to the station.",
    },
    {
      iconName: "Buildings",
      title: "Bulk Supply",
      desc: "Large-volume fuel supply for industrial operations, mines, farms, and commercial enterprises.",
    },
    {
      iconName: "Rocket",
      title: "Emergency Fuel",
      desc: "Ran out of fuel? Our rapid-response team delivers emergency fuel within 60 minutes across Harare.",
    },
    {
      iconName: "Leaf",
      title: "Farm Delivery",
      desc: "Agricultural fuel delivery for tractors, irrigation pumps, and farm equipment across Zimbabwe.",
    },
  ],

  featuredProjects: [
    {
      image:
        "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800",
      title: "Logistics Fleet Contract",
      category: "Fleet Fueling",
    },
    {
      image:
        "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=800",
      title: "Commercial Farm Supply",
      category: "Agricultural",
    },
    {
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800",
      title: "Mining Site Operations",
      category: "Industrial",
    },
  ],

  whyChooseUs: {
    titleParts: [
      { text: "Reliability in Every " },
      { text: "Drop", highlight: true },
      { text: " We Deliver" },
    ],
    image:
      "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=800",
    imageAlt:
      "Fuel delivery operation with metered dispensing equipment",
    experienceYears: "6+",
    experienceLabel: "Years of Reliability",
    points: [
      {
        title: "Metered Accuracy",
        desc: "Every litre is tracked with calibrated flow meters. You pay for exactly what you receive, no more, no less.",
      },
      {
        title: "Rapid Response",
        desc: "Standard deliveries within 4 hours. Emergency fuel within 60 minutes across Harare.",
      },
      {
        title: "Certified & Compliant",
        desc: "Fully licensed fuel operation with NOCZIM-approved tankers, trained handlers, and safety certification.",
      },
      {
        title: "Flexible Scheduling",
        desc: "One-time orders or recurring schedules. We adapt to your operations, not the other way around.",
      },
    ],
  },

  homeCta: {
    backgroundImage:
      "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=1920",
    backgroundAlt:
      "Fuel tanker delivering diesel to a commercial operation",
    titleParts: [
      { text: "Never Run on " },
      { text: "Empty", highlight: true },
      { text: " Again" },
    ],
    subtitle:
      "Whether you need 50 litres for your generator or 10,000 litres for your fleet, we deliver it to your door. Get a quote in minutes.",
    ctaPrimary: "Get a Free Quote",
    whatsappText:
      "Hello, I would like to order fuel delivery.",
  },

  homeTestimonials: [
    {
      name: "Tonderai Mukwena",
      role: "Logistics Manager",
      text: "Mobifuel has been a game-changer for our fleet operations. No more sending drivers to fuel stations. They come to us, fuel up the entire fleet, and we are on the road by 6 AM.",
      rating: 5,
    },
    {
      name: "Priscilla Hove",
      role: "Farm Owner, Mazowe",
      text: "Having diesel delivered directly to the farm during harvest season is invaluable. Every hour counts and Mobifuel ensures our tractors never stop running.",
      rating: 5,
    },
    {
      name: "Edmore Chinembiri",
      role: "Construction Site Manager",
      text: "We use Mobifuel for all our construction site generators and machinery. Reliable, accurate, and they always arrive when they say they will. No more fuel theft worries either.",
      rating: 4,
    },
  ],

  // ====== ABOUT PAGE ======
  about: {
    heroTitle: [
      { text: "Delivering " },
      { text: "Energy", highlight: true },
      { text: " On Demand" },
    ],
    heroSubtitle:
      "For over 6 years, Mobifuel has been revolutionizing fuel logistics in Zimbabwe, making mobile fuel delivery reliable, efficient, and accessible to businesses of every size.",
    storyImage:
      "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=800",
    storyImageAlt:
      "Mobifuel delivery operation serving commercial and agricultural clients",
    storyProjectCount: "5000+",
    storyProjectLabel: "Deliveries Completed",
    storyTitle: "Born From Frustration, Built on Reliability",
    storyParagraphs: [
      "Mobifuel was born from a simple frustration: why should businesses waste productive hours queuing at fuel stations? We saw an opportunity to bring fuel directly to the people who need it most.",
      "Starting with a single tanker in Harare, we built a reputation for punctuality, accuracy, and professionalism. Word spread quickly. Logistics companies, farmers, construction firms, and mines began calling. We scaled to meet the demand.",
      "Today, Mobifuel operates a fleet of certified tankers serving the greater Harare area and beyond. Every delivery is metered, every driver is trained, and every litre is accounted for. We have completed over 5,000 deliveries and counting.",
    ],
    mission:
      "To eliminate fuel-related downtime for every business in Zimbabwe through reliable, transparent, and on-demand mobile fuel delivery that keeps operations running without interruption.",
    vision:
      "To be the most trusted fuel logistics partner in Southern Africa, recognized for our reliability, transparency, and commitment to keeping businesses moving.",
    values: [
      {
        iconName: "ShieldCheck",
        title: "Reliability",
        desc: "When we say we will be there, we are there. On time, every time. Our reputation depends on it.",
      },
      {
        iconName: "Trophy",
        title: "Accuracy",
        desc: "Calibrated meters ensure every litre is accounted for. No guesswork, no discrepancies.",
      },
      {
        iconName: "Lightbulb",
        title: "Innovation",
        desc: "We continuously invest in technology to improve routing, tracking, and the ordering experience.",
      },
      {
        iconName: "Handshake",
        title: "Transparency",
        desc: "Clear pricing, metered deliveries, and detailed invoices. You always know exactly what you are paying for.",
      },
      {
        iconName: "Heart",
        title: "Safety",
        desc: "Fuel handling is serious business. Our drivers are certified, our tankers are inspected, and safety protocols are non-negotiable.",
      },
      {
        iconName: "Users",
        title: "Customer First",
        desc: "Your operational needs drive our service. We adapt, we respond, and we deliver because your success is ours.",
      },
    ],
    team: [
      {
        name: "Tawanda Mhizha",
        role: "Founder & Managing Director",
        image:
          "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400",
      },
      {
        name: "Shamiso Kunonga",
        role: "Operations Manager",
        image:
          "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400",
      },
      {
        name: "George Matondora",
        role: "Fleet Supervisor",
        image:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
      },
      {
        name: "Rejoice Nyakudya",
        role: "Customer Relations Manager",
        image:
          "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400",
      },
    ],
    milestones: [
      {
        year: "2019",
        title: "Company Founded",
        desc: "Mobifuel launched in Harare with one tanker and a mission to revolutionize fuel delivery.",
      },
      {
        year: "2020",
        title: "Fleet Expansion",
        desc: "Expanded to three certified tankers to meet growing demand from logistics companies.",
      },
      {
        year: "2021",
        title: "1000th Delivery",
        desc: "Reached our 1,000th successful delivery, establishing a track record of reliability.",
      },
      {
        year: "2022",
        title: "Agricultural Division",
        desc: "Launched dedicated farm fuel delivery, serving agricultural operations across Mashonaland.",
      },
      {
        year: "2024",
        title: "Digital Ordering",
        desc: "Introduced WhatsApp and online ordering systems for faster, more convenient fuel requests.",
      },
      {
        year: "2025",
        title: "5000+ Deliveries",
        desc: "Surpassed 5,000 deliveries with plans for regional expansion beyond Harare.",
      },
    ],
    ctaTitle: "Fuel Your Operations With Confidence",
    ctaSubtitle:
      "Partner with Zimbabwe's most reliable mobile fuel delivery service and never worry about fuel again.",
    ctaCta: "Start a Conversation",
  },

  // ====== SERVICES PAGE ======
  services: {
    heroTitle: [
      { text: "Fuel " },
      { text: "Delivery", highlight: true },
      { text: " Solutions" },
    ],
    heroSubtitle:
      "Six fuel delivery services designed for every operational need. Whether you need 50 litres or 50,000, we deliver with metered precision and certified safety.",
    items: [
      {
        iconName: "NavigationArrow",
        title: "Diesel Delivery",
        slug: "diesel-delivery",
        image:
          "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=900",
        desc: "Our core service. On-demand diesel delivery for generators, fleets, construction machinery, and any diesel-powered operation. Every litre metered and certified.",
        features: [
          "Same-day delivery across Harare",
          "Calibrated flow meter dispensing",
          "Minimum order of 50 litres",
          "Scheduled recurring deliveries available",
          "Real-time delivery tracking",
          "Detailed delivery receipts and invoicing",
        ],
      },
      {
        iconName: "Car",
        title: "Petrol Delivery",
        slug: "petrol-delivery",
        image:
          "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=900",
        desc: "Premium petrol delivered to your vehicles, business premises, or event location. Perfect for fleet vehicles, company pools, and situations where station trips waste valuable time.",
        features: [
          "Premium and unleaded petrol available",
          "Direct vehicle fueling on-site",
          "Event and function fueling services",
          "Corporate account options",
          "Safety-certified handling and equipment",
          "Volume discounts for regular orders",
        ],
      },
      {
        iconName: "Briefcase",
        title: "Fleet Fueling",
        slug: "fleet-fueling",
        image:
          "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=900",
        desc: "Comprehensive fleet fueling programs that eliminate downtime and fuel station trips. We come to your depot overnight or early morning so your vehicles start each day with full tanks.",
        features: [
          "Overnight and early-morning depot fueling",
          "Per-vehicle tracking and reporting",
          "Monthly consumption analytics",
          "Dedicated account manager",
          "Custom scheduling to match your operations",
          "Fuel card integration available",
        ],
      },
      {
        iconName: "Buildings",
        title: "Bulk Supply",
        slug: "bulk-supply",
        image:
          "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=900",
        desc: "Large-volume fuel supply for industrial operations, mines, power plants, and commercial enterprises. Tanker-load deliveries with competitive pricing and reliable scheduling.",
        features: [
          "5,000 to 50,000 litre deliveries",
          "Competitive bulk pricing",
          "Direct-to-tank delivery and monitoring",
          "Long-term supply contracts available",
          "Multiple fuel grades available",
          "Quality testing certificates provided",
        ],
      },
      {
        iconName: "Rocket",
        title: "Emergency Fuel",
        slug: "emergency-fuel",
        image:
          "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=900",
        desc: "When you run dry unexpectedly, our rapid-response team delivers emergency fuel within 60 minutes across Harare. Available 24/7 for critical situations.",
        features: [
          "60-minute response time in Harare",
          "24/7 emergency hotline",
          "Roadside vehicle fueling",
          "Generator and backup power fueling",
          "Hospital and clinic priority service",
          "No minimum order for emergencies",
        ],
      },
      {
        iconName: "Leaf",
        title: "Farm Delivery",
        slug: "farm-delivery",
        image:
          "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=900",
        desc: "Agricultural fuel delivery for tractors, irrigation pumps, harvesters, and farm equipment. We understand farming seasons and deliver when every hour of uptime matters.",
        features: [
          "Delivery to farms across Mashonaland",
          "Seasonal volume planning and contracts",
          "Tractor and equipment direct fueling",
          "Irrigation pump fuel management",
          "Harvest-season priority scheduling",
          "Multi-point farm delivery routes",
        ],
      },
    ],
    ctaTitle: "Need a Custom Fuel Solution?",
    ctaSubtitle:
      "Every operation is different. Contact us to discuss your specific fuel requirements and we will design a delivery plan that fits.",
  },

  // ====== PROJECTS PAGE ======
  projects: {
    heroTitle: [
      { text: "Deliveries That " },
      { text: "Keep", highlight: true },
      { text: " Zimbabwe Moving" },
    ],
    heroSubtitle:
      "From single-vehicle emergency fills to industrial-scale supply contracts, explore the breadth of our fuel delivery operations.",
    categories: [
      "All",
      "Fleet Fueling",
      "Agricultural",
      "Industrial",
      "Emergency",
      "Commercial",
    ],
    items: [
      {
        id: 1,
        title: "National Logistics Fleet Contract",
        category: "Fleet Fueling",
        location: "Harare",
        year: "2025",
        image:
          "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800",
        desc: "Ongoing contract to fuel a 40-vehicle logistics fleet with nightly depot fueling. Eliminated 3 hours of daily station queuing and reduced fuel shrinkage to zero with metered tracking.",
        services: [
          "Fleet Fueling",
          "Diesel Delivery",
        ],
      },
      {
        id: 2,
        title: "Mazowe Commercial Farm",
        category: "Agricultural",
        location: "Mazowe, Mashonaland",
        year: "2024",
        image:
          "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=800",
        desc: "Seasonal fuel supply contract for a 2,000-hectare commercial farm. Weekly diesel deliveries for tractors, harvesters, and irrigation pumps during peak farming season.",
        services: [
          "Farm Delivery",
          "Bulk Supply",
        ],
      },
      {
        id: 3,
        title: "Gold Mining Operation",
        category: "Industrial",
        location: "Bindura",
        year: "2024",
        image:
          "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800",
        desc: "Monthly bulk diesel supply to a medium-scale gold mining operation. 20,000 litres per delivery, direct to site storage tanks with quality certification.",
        services: [
          "Bulk Supply",
          "Diesel Delivery",
        ],
      },
      {
        id: 4,
        title: "Hospital Backup Generator",
        category: "Emergency",
        location: "Harare",
        year: "2025",
        image:
          "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=800",
        desc: "Emergency 3 AM diesel delivery to a private hospital during an extended power outage. Arrived within 45 minutes, ensuring critical care continued without interruption.",
        services: [
          "Emergency Fuel",
          "Diesel Delivery",
        ],
      },
      {
        id: 5,
        title: "Event Catering Fleet",
        category: "Commercial",
        location: "Harare",
        year: "2024",
        image:
          "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800",
        desc: "On-demand petrol and diesel delivery for a catering company's fleet of 15 vehicles during the wedding season. Weekend scheduling with early-morning depot fueling.",
        services: [
          "Fleet Fueling",
          "Petrol Delivery",
        ],
      },
      {
        id: 6,
        title: "Tobacco Farm Season Supply",
        category: "Agricultural",
        location: "Karoi",
        year: "2024",
        image:
          "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=800",
        desc: "Full-season fuel supply for a tobacco farm operation including curing barn generators, tractor operations, and transport vehicles. Over 100,000 litres delivered across the season.",
        services: [
          "Farm Delivery",
          "Bulk Supply",
          "Diesel Delivery",
        ],
      },
      {
        id: 7,
        title: "Construction Site Supply",
        category: "Industrial",
        location: "Harare CBD",
        year: "2023",
        image:
          "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800",
        desc: "Daily diesel delivery for a major CBD construction project. Powered cranes, generators, and earthmoving equipment over a 14-month build period.",
        services: [
          "Diesel Delivery",
          "Bulk Supply",
        ],
      },
      {
        id: 8,
        title: "Ride-Hail Driver Program",
        category: "Fleet Fueling",
        location: "Harare",
        year: "2023",
        image:
          "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=800",
        desc: "Fuel subscription program for 50+ ride-hail drivers with daily petrol delivery to a central pickup point. Drivers saved an average of 45 minutes per day.",
        services: [
          "Petrol Delivery",
          "Fleet Fueling",
        ],
      },
      {
        id: 9,
        title: "Diplomatic Mission Fueling",
        category: "Commercial",
        location: "Harare",
        year: "2024",
        image:
          "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800",
        desc: "Discreet, scheduled fuel delivery for a diplomatic mission's vehicle fleet. Monthly contract with detailed reporting and dedicated security protocols.",
        services: [
          "Fleet Fueling",
          "Diesel Delivery",
          "Petrol Delivery",
        ],
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
      "Real feedback from businesses that rely on Mobifuel to keep their operations running. Our reputation is built one delivery at a time.",
    ratingBreakdown: [
      { stars: 5, count: 22 },
      { stars: 4, count: 7 },
      { stars: 3, count: 2 },
      { stars: 2, count: 0 },
      { stars: 1, count: 0 },
    ],
    items: [
      {
        name: "Tonderai Mukwena",
        role: "Logistics Manager",
        text: "Mobifuel has been a game-changer for our fleet operations. No more sending drivers to fuel stations. They come to us, fuel up the entire fleet, and we are on the road by 6 AM. Incredibly reliable.",
        rating: 5,
        date: "1 month ago",
        project: "Fleet Fueling",
      },
      {
        name: "Priscilla Hove",
        role: "Farm Owner, Mazowe",
        text: "Having diesel delivered directly to the farm during harvest season is invaluable. Every hour counts and Mobifuel ensures our tractors never stop running. Could not farm without them now.",
        rating: 5,
        date: "2 months ago",
        project: "Farm Delivery",
      },
      {
        name: "Edmore Chinembiri",
        role: "Construction Site Manager",
        text: "We use Mobifuel for all our construction site generators and machinery. Reliable, accurate, and they always arrive when they say they will. No more fuel theft worries either with metered delivery.",
        rating: 4,
        date: "3 months ago",
        project: "Site Supply",
      },
      {
        name: "Sarah Mutisi",
        role: "Hospital Administrator",
        text: "Our generator is literally life-critical. Mobifuel's emergency response saved us during a 12-hour power outage. They arrived within 40 minutes at 2 AM. You cannot put a price on that reliability.",
        rating: 5,
        date: "3 months ago",
        project: "Emergency Fuel",
      },
      {
        name: "Donald Chipunza",
        role: "Transport Company CEO",
        text: "The monthly fuel reports Mobifuel provides have helped us identify inefficiencies in our fleet. Their per-vehicle tracking is incredibly detailed. Great service, great data.",
        rating: 5,
        date: "4 months ago",
        project: "Fleet Analytics",
      },
      {
        name: "Rumbidzai Nyamwe",
        role: "Event Planner",
        text: "When you are running a big outdoor event with generators and a fleet of vehicles, the last thing you want is fuel stress. Mobifuel handled everything seamlessly. Will use again.",
        rating: 5,
        date: "5 months ago",
        project: "Event Fueling",
      },
      {
        name: "Arthur Magidi",
        role: "Mining Operations Director",
        text: "Our mine site is remote and fuel logistics were a constant headache. Mobifuel took over our fuel supply and we have not had a single downtime incident since. Professional operation.",
        rating: 4,
        date: "5 months ago",
        project: "Bulk Supply",
      },
      {
        name: "Chipo Madondo",
        role: "School Bus Fleet Manager",
        text: "Mobifuel fuels our school bus fleet every morning before the children arrive. It is efficient, safe, and the drivers are always courteous. The school runs like clockwork now.",
        rating: 5,
        date: "6 months ago",
        project: "Fleet Fueling",
      },
      {
        name: "Takudzwa Zengeni",
        role: "Ride-Hail Driver",
        text: "The driver fuel program is brilliant. Instead of queuing for an hour at the station every morning, I pick up a full tank at the collection point and start earning immediately. Saves me money and time.",
        rating: 5,
        date: "7 months ago",
        project: "Driver Program",
      },
      {
        name: "Margaret Gumbo",
        role: "Restaurant Chain Owner",
        text: "Our three restaurants all have backup generators. Mobifuel keeps them all topped up on a weekly schedule. We have never run dry and the pricing is very fair. Recommended.",
        rating: 4,
        date: "7 months ago",
        project: "Generator Supply",
      },
      {
        name: "Raymond Shumba",
        role: "NGO Fleet Coordinator",
        text: "We operate a fleet serving rural health clinics. Mobifuel's farm delivery service reaches us even in remote areas. Their reliability ensures our healthcare workers reach the communities that need them.",
        rating: 5,
        date: "8 months ago",
        project: "Rural Delivery",
      },
      {
        name: "Natalie Chivandire",
        role: "Commercial Property Manager",
        text: "Managing diesel for generators across four commercial buildings used to be a nightmare. With Mobifuel, I set a schedule and forget about it. They show up, fill up, and send the invoice. Simple.",
        rating: 5,
        date: "9 months ago",
        project: "Property Management",
      },
      {
        name: "Farai Machingura",
        role: "Tobacco Farmer, Karoi",
        text: "During curing season our diesel consumption triples. Mobifuel handled the increased demand without a hiccup. Their seasonal planning and volume commitment gave us real peace of mind.",
        rating: 5,
        date: "10 months ago",
        project: "Agricultural Season",
      },
      {
        name: "Patrick Mufandaedza",
        role: "Fuel Station Owner",
        text: "Ironically, I am a station owner and I use Mobifuel for my own fleet vehicles. Their service is that good. The metered accuracy is something I respect as a fellow fuel industry professional.",
        rating: 4,
        date: "11 months ago",
        project: "Fleet Fueling",
      },
      {
        name: "Nyasha Chitambo",
        role: "Construction Company Director",
        text: "The transparency is what I value most. Every litre is metered, every delivery has a receipt, and the monthly reports are detailed. In an industry where fuel theft is rampant, Mobifuel is a breath of fresh air.",
        rating: 5,
        date: "11 months ago",
        project: "Construction Supply",
      },
      {
        name: "Tafadzwa Nhengo",
        role: "Brewery Operations Manager",
        text: "Our brewery runs on generator power during load shedding. Mobifuel ensures we never run dry. They understand that for us, no fuel means no production. Completely dependable.",
        rating: 5,
        date: "1 year ago",
        project: "Industrial Generator",
      },
      {
        name: "Collins Mhaka",
        role: "Security Company Director",
        text: "Our patrol vehicles need fuel 24/7. Mobifuel's overnight depot fueling means our security response teams are always ready. The consistency of service over 2 years has been outstanding.",
        rating: 5,
        date: "1 year ago",
        project: "Security Fleet",
      },
    ],
    ctaTitle: "Ready to Simplify Your Fuel Logistics?",
    ctaSubtitle:
      "Join thousands of businesses that trust Mobifuel with their fuel supply. Contact us today to discuss your requirements.",
    ctaCta: "Get Started Today",
    ctaWhatsappText:
      "Hello, I would like to discuss fuel delivery for my business.",
  },

  // ====== CONTACT PAGE ======
  contact: {
    heroTitle: [
      { text: "Let's Fuel Your " },
      { text: "Operations", highlight: true },
    ],
    heroSubtitle:
      "Need fuel delivered? Have questions about our services? Reach out via phone, email, WhatsApp, or fill in the form below. We respond within the hour.",
    formTitle: "Send Us a Message",
    formSubtitle:
      "Fill in the form and choose how you'd like to send it.",
  },

  // ====== CAREERS PAGE ======
  careers: {
    heroTitle: [
      { text: "Drive Your " },
      { text: "Career", highlight: true },
      { text: " Forward" },
    ],
    heroSubtitle:
      "Join Zimbabwe's fastest-growing fuel delivery company. We are building a team of reliable, safety-focused professionals who keep the country moving.",
    heroImage:
      "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=1920",
    cultureTitle: "Why Work Here?",
    cultureItems: [
      {
        iconName: "Rocket",
        title: "Growing Fast",
        desc: "We are expanding rapidly. Join early and grow with the company as we scale across Zimbabwe.",
      },
      {
        iconName: "ShieldCheck",
        title: "Safety First",
        desc: "Fuel handling is serious business. We invest heavily in training and safety for every team member.",
      },
      {
        iconName: "Users",
        title: "Team Spirit",
        desc: "A tight-knit team where everyone knows your name and celebrates your wins.",
      },
    ],
    cultureImage:
      "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=1400",
    cultureImageAlt:
      "Fuel delivery team preparing for the day's operations",
    cultureTagline: "More Than a Job. A Mission.",
    cultureTaglineDesc:
      "Every day, our team ensures businesses stay powered, farms stay productive, and emergencies are met with speed. We deliver energy, literally.",
    benefits: [
      {
        iconName: "CurrencyDollar",
        title: "Competitive Pay",
        desc: "Above-market compensation with delivery bonuses and performance incentives.",
      },
      {
        iconName: "FirstAid",
        title: "Health Coverage",
        desc: "Full medical aid for employees and their immediate families.",
      },
      {
        iconName: "GraduationCap",
        title: "Safety Training",
        desc: "Comprehensive hazmat and fuel handling certification provided and renewed annually.",
      },
      {
        iconName: "Car",
        title: "Company Vehicles",
        desc: "Drivers operate well-maintained, modern tanker vehicles with GPS tracking.",
      },
      {
        iconName: "Heart",
        title: "Stable Hours",
        desc: "Predictable schedules with overtime pay for emergency and weekend deliveries.",
      },
      {
        iconName: "ShieldCheck",
        title: "Safety Equipment",
        desc: "Full PPE including fire-resistant clothing, boots, and personal gas monitors.",
      },
    ],
    positions: [
      {
        id: 1,
        title: "Tanker Driver",
        department: "Operations",
        type: "Full-Time",
        location: "Harare",
        description:
          "We are seeking experienced drivers to operate our fuel tanker vehicles. You will handle diesel and petrol deliveries across the greater Harare area and surrounding regions.",
        requirements: [
          "Class 2 driver's license (heavy vehicle)",
          "3+ years of tanker or heavy vehicle driving experience",
          "DG (Dangerous Goods) certification",
          "Clean driving record",
          "Physically fit and reliable",
        ],
      },
      {
        id: 2,
        title: "Dispatch Coordinator",
        department: "Operations",
        type: "Full-Time",
        location: "Harare",
        description:
          "Manage daily fuel delivery scheduling, route optimization, and driver communication. You will be the operational hub ensuring every delivery is on time and efficient.",
        requirements: [
          "Diploma in Logistics, Supply Chain, or related field",
          "2+ years of dispatch or logistics coordination experience",
          "Strong organizational and communication skills",
          "Proficiency with GPS tracking and scheduling software",
          "Ability to work under pressure in a fast-paced environment",
        ],
      },
      {
        id: 3,
        title: "Sales Representative",
        department: "Sales",
        type: "Full-Time",
        location: "Harare",
        description:
          "Drive new business by prospecting fleet operators, farms, construction companies, and industrial clients. You will build relationships and close fuel supply contracts.",
        requirements: [
          "2+ years of B2B sales experience",
          "Understanding of fuel and energy markets preferred",
          "Excellent communication and negotiation skills",
          "Self-starter with strong pipeline management",
          "Valid driver's license and own vehicle",
        ],
      },
      {
        id: 4,
        title: "Fuel Technician",
        department: "Technical",
        type: "Full-Time",
        location: "Harare",
        description:
          "Maintain and calibrate fuel dispensing equipment, flow meters, and tanker systems. Ensure all equipment meets safety and accuracy standards.",
        requirements: [
          "Diploma in Mechanical or Electrical Engineering",
          "Experience with fuel dispensing systems",
          "Knowledge of flow meter calibration",
          "Strong troubleshooting and mechanical skills",
          "Safety certification preferred",
        ],
      },
    ],
    generalApplicationTitle: "Don't See the Right Role?",
    generalApplicationSubtitle:
      "We are always looking for reliable, safety-conscious people. Send us your CV and we will keep you in mind as we grow.",
    generalApplicationCta: "Send Your CV",
  },

  // ====== FOOTER ======
  footer: {
    description:
      "Fuel delivered, anywhere, anytime. Zimbabwe's trusted mobile fuel delivery service since 2019. Keeping businesses moving, one delivery at a time.",
    copyright: "Mobifuel (Pvt) Ltd",
  },
};

export default siteData;
