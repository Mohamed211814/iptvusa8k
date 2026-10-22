/**
 * Central site configuration for IPTV USA.
 * All brand details, URLs, plans, and contact info are defined here.
 */

export interface NavItem {
  id: string;
  label: string;
  href: string; // anchor or route
  description?: string;
  children?: NavItem[];
}

export interface PricingPlan {
  id: string;
  name: string;
  duration: string;
  durationMonths: number;
  priceUSD: number;
  regularPriceUSD?: number;
  billingText: string;
  popular?: boolean;
  badge?: string;
  discountBadge?: string;
  features: string[];
  ctaText: string;
  ctaHref: string;
  accentColor: "blue" | "purple" | "orange" | "green";
}

export interface DeviceCategory {
  id: string;
  name: string;
  iconName: string;
  description: string;
  popularApps: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface LegalSection {
  id: string;
  title: string;
  content: string[];
}

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://iptvusa-8k.com";

export const siteConfig = {
  brand: {
    name: "IPTV USA",
    shortName: "IPTV USA",
    tagline: "Premium IPTV Streaming Subscription in the United States",
    description:
      "IPTV USA delivers reliable, high definition streaming subscriptions tailored for United States viewers. Enjoy seamless streaming across Smart TVs, streaming boxes, mobile devices, and computers with 24/7 dedicated support.",
    url: siteUrl,
    domain: siteUrl.replace(/^https?:\/\//, ""),
    language: "en-US",
    locale: "en_US",
    currency: "USD",
    country: "US",
  },
  contact: {
    email: process.env.NEXT_PUBLIC_SUPPORT_EMAIL || "iptvusapro@gmail.com",
    salesEmail: "iptvusapro@gmail.com",
    phone: "",
    whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "212779395271",
    whatsappDisplay: "Click to Chat on WhatsApp",
    whatsappUrl: "https://wa.me/212779395271",
    supportHours: "Monday to Sunday, 24/7 WhatsApp & Email Support",
    address: {
      streetAddress: "100 Tech Plaza, Suite 400",
      city: "Dover",
      state: "DE",
      postalCode: "19901",
      country: "United States",
    },
  },
  legal: {
    companyName: "IPTV USA Services LLC",
    registrationNumber: "US-DE-EXAMPLE-2026",
    jurisdiction: "State of Delaware, United States",
    lastUpdated: "October 20, 2026",
  },
  social: {
    whatsapp: "https://wa.me/212779395271",
    twitter: "https://twitter.com/iptvusa",
    facebook: "https://facebook.com/iptvusa",
    telegram: "https://t.me/iptvusa_support",
  },
  navigation: [
    {
      id: "home",
      label: "Home",
      href: "/",
    },
    {
      id: "plans-menu",
      label: "Plans",
      href: "/#plans",
      children: [
        {
          id: "plans-pricing",
          label: "Subscription Plans",
          href: "/#plans",
          description: "Compare flexible 1, 3, 6, and 12 month subscription tiers.",
        },
        {
          id: "plans-how-it-works",
          label: "How It Works",
          href: "/#how-it-works",
          description: "Three simple steps to activate and start watching on your device.",
        },
      ],
    },
    {
      id: "services-menu",
      label: "Services",
      href: "/#services",
      children: [
        {
          id: "services-overview",
          label: "Service Overview",
          href: "/#services",
          description: "Explore our US optimized streaming infrastructure and core benefits.",
        },
        {
          id: "services-features",
          label: "Features",
          href: "/#features",
          description: "High definition streams, electronic program guide, and fast zapping.",
        },
        {
          id: "services-devices",
          label: "Supported Devices",
          href: "/#devices",
          description: "Compatible with Smart TVs, Firestick, Android, iOS, and PC.",
        },
      ],
    },
    {
      id: "features",
      label: "Features",
      href: "/#features",
    },
    {
      id: "devices",
      label: "Devices",
      href: "/#devices",
    },
    {
      id: "faq",
      label: "FAQ",
      href: "/#faq",
    },
    {
      id: "contact",
      label: "Contact",
      href: "/contact",
    },
    {
      id: "legal",
      label: "Legal",
      href: "/legal",
    },
  ] as NavItem[],
  pricingPlans: [
    {
      id: "plan-1m",
      name: "1 Month",
      duration: "1 Month",
      durationMonths: 1,
      priceUSD: 14.95,
      regularPriceUSD: 18.00,
      billingText: "Billed monthly • Cancel anytime",
      popular: false,
      discountBadge: "17% Discount !",
      accentColor: "blue",
      features: [
        "+24,000 Channels",
        "+110,000 VOD",
        "4K & Full HD Quality",
        "Live Sports & PPV Events",
        "Anti Freeze 9.3 Technology",
        "Catch Up & 7 Day Replay",
        "Instant Activation!",
        "All devices supported",
        "Server Stability 99.9%",
        "EPG updated",
        "24/7 Support",
        "After order you'll get HotPlayer app for free",
      ],
      ctaText: "Order on WhatsApp",
      ctaHref: "https://wa.me/212779395271?text=Hello%20IPTV%20USA%2C%20I%20want%20to%20order%20the%201%20Month%20plan%20for%20%2414.95",
    },
    {
      id: "plan-3m",
      name: "3 Months",
      duration: "3 Months",
      durationMonths: 3,
      priceUSD: 29.95,
      regularPriceUSD: 42.80,
      billingText: "Billed every 3 months ($9.98/mo)",
      popular: false,
      discountBadge: "Save 30%",
      accentColor: "purple",
      features: [
        "+24,000 Channels",
        "+110,000 VOD",
        "4K & Full HD Quality",
        "Live Sports & PPV Events",
        "Anti Freeze 9.3 Technology",
        "Catch Up & 7 Day Replay",
        "Instant Activation!",
        "All devices supported",
        "Server Stability 99.9%",
        "EPG updated",
        "24/7 Support",
        "After order you'll get HotPlayer app for free",
      ],
      ctaText: "Order on WhatsApp",
      ctaHref: "https://wa.me/212779395271?text=Hello%20IPTV%20USA%2C%20I%20want%20to%20order%20the%203%20Months%20plan%20for%20%2429.95",
    },
    {
      id: "plan-6m",
      name: "6 Months",
      duration: "6 Months",
      durationMonths: 6,
      priceUSD: 44.95,
      regularPriceUSD: 81.70,
      billingText: "Billed every 6 months ($7.49/mo)",
      popular: false,
      discountBadge: "Save 45%",
      accentColor: "orange",
      features: [
        "+24,000 Channels",
        "+110,000 VOD",
        "4K & Full HD Quality",
        "Live Sports & PPV Events",
        "Anti Freeze 9.3 Technology",
        "Catch Up & 7 Day Replay",
        "Instant Activation!",
        "All devices supported",
        "Server Stability 99.9%",
        "EPG updated",
        "24/7 Support",
        "After order you'll get HotPlayer app for free",
      ],
      ctaText: "Order on WhatsApp",
      ctaHref: "https://wa.me/212779395271?text=Hello%20IPTV%20USA%2C%20I%20want%20to%20order%20the%206%20Months%20plan%20for%20%2444.95",
    },
    {
      id: "plan-12m",
      name: "12 Months",
      duration: "12 Months",
      durationMonths: 12,
      priceUSD: 59.95,
      regularPriceUSD: 171.30,
      billingText: "Billed annually ($4.99/mo)",
      popular: true,
      badge: "★ MOST POPULAR CHOICE",
      discountBadge: "🔥 Best Value Save 65%",
      accentColor: "green",
      features: [
        "+24,000 Channels",
        "+110,000 VOD",
        "4K & Full HD Quality",
        "Live Sports & PPV Events",
        "Anti Freeze 9.3 Technology",
        "Catch Up & 7 Day Replay",
        "Instant Activation!",
        "All devices supported",
        "Server Stability 99.9%",
        "EPG updated",
        "24/7 Support",
        "After order you'll get HotPlayer app for free",
      ],
      ctaText: "Order on WhatsApp",
      ctaHref: "https://wa.me/212779395271?text=Hello%20IPTV%20USA%2C%20I%20want%20to%20order%20the%2012%20Months%20plan%20for%20%2459.95",
    },
  ] as PricingPlan[],
  devices: [
    {
      id: "smart-tv",
      name: "Smart TVs",
      iconName: "Tv",
      description: "Samsung (Tizen), LG (webOS), Sony, TCL, and any TV running Android TV or Google TV.",
      popularApps: ["IPTV Smarters Pro", "TiviMate", "Smart IPTV", "Nanomid"],
    },
    {
      id: "streaming-boxes",
      name: "Streaming Devices & Sticks",
      iconName: "MonitorPlay",
      description: "Amazon Fire TV Stick, Fire TV Cube, Nvidia Shield, Xiaomi Mi Box, and Roku media players.",
      popularApps: ["TiviMate", "XCIPTV", "Smarters Player", "Downloader Apps"],
    },
    {
      id: "apple-devices",
      name: "Apple TV & iOS",
      iconName: "Apple",
      description: "Apple TV 4K / HD, iPhone, and iPad with smooth playback and AirPlay capabilities.",
      popularApps: ["IPTV Smarters", "GSE Smart IPTV", "Smarters Player Lite", "Snapp"],
    },
    {
      id: "android-mobile",
      name: "Android Phones & Tablets",
      iconName: "Smartphone",
      description: "Any modern Android smartphone or tablet with Google Play Store or APK support.",
      popularApps: ["TiviMate", "XCIPTV", "IPTV Smarters", "OTT Navigator"],
    },
    {
      id: "computers",
      name: "Windows & macOS",
      iconName: "Laptop",
      description: "Desktop computers and laptops running Windows 10/11, macOS, or Linux via web or dedicated players.",
      popularApps: ["VLC Media Player", "IPTV Smarters PC", "Web Player", "Kodi"],
    },
    {
      id: "mag-boxes",
      name: "MAG & Dedicated Set Top Boxes",
      iconName: "Cpu",
      description: "MAG 250/254/322/420/520, Formuler Z series, and Dreamlink set top boxes via MAC address portal.",
      popularApps: ["Stalker Portal", "MyTVOnline 2/3", "Ministra Player"],
    },
  ] as DeviceCategory[],
  faqs: [
    {
      question: "Is IPTV legal in USA?",
      answer:
        "Yes, IPTV technology is completely legal in the United States. IPTV stands for Internet Protocol Television, which is the delivery of television programming over broadband internet rather than conventional cable or satellite. Using legitimate streaming applications and services to watch broadcast media on your devices is fully lawful across all US states.",
    },
    {
      question: "Is IPTV illegal in USA?",
      answer:
        "No, IPTV is not illegal in the USA. Internet Protocol Television is a standard digital transmission protocol used by major telecommunications and media companies worldwide. IPTV USA provides reliable streaming infrastructure configured for compatible media players like TiviMate and HotPlayer, offering a secure, transparent, and high quality entertainment solution.",
    },
    {
      question: "Is Indian IPTV legal in USA?",
      answer:
        "Yes, streaming Indian IPTV channels and South Asian regional programming is legal in the United States. Millions of diaspora viewers across the US use IPTV players to enjoy regional news, live cricket matches, Hindi movies, Punjabi broadcasts, and regional entertainment. Using trusted streaming apps on your Smart TV or streaming device to view international channels is completely legal.",
    },
    {
      question: "Is Guru IPTV legal in USA?",
      answer:
        "Guru IPTV is a third party South Asian streaming brand popular among viewers seeking Indian content in North America. Streaming international programming is lawful when using compatible devices. To ensure the highest streaming stability and low latency without buffering, subscribers often choose IPTV USA for our dedicated North American server network and direct customer assistance.",
    },
    {
      question: "Is IPTV available in the USA?",
      answer:
        "Yes, IPTV is widely available throughout the United States. Anyone with a broadband internet connection from providers such as Comcast Xfinity, AT&T, Spectrum, Verizon Fios, or Cox can easily connect. IPTV USA works seamlessly across Amazon Firestick, Smart TVs from Samsung, LG, and Sony, Android TV, Apple TV, smartphones, and computers.",
    },
    {
      question: "Which IPTV is best in the USA?",
      answer:
        "IPTV USA is considered among the top choices in the United States thanks to our dedicated US server network, 99.9% target uptime stability, and 9.3 Anti Freeze streaming technology. With over 24,000 live channels, 110,000 VOD movies, electronic program guides, and a complimentary HotPlayer app license included with every plan, subscribers enjoy premium entertainment at affordable rates.",
    },
    {
      question: "Which IPTV service will be the best in 2026?",
      answer:
        "In 2026, the best IPTV services are defined by low latency 4K streaming, instant playlist activation, real time Electronic Program Guide syncing, and responsive live support. IPTV USA leads with our upgraded 2026 high performance server cluster, zero contract obligations, and direct WhatsApp customer onboarding that gets you set up in minutes.",
    },
    {
      question: "Is my internet provider blocking IPTV?",
      answer:
        "Some US internet providers occasionally throttle high bandwidth streaming traffic or apply network filters during peak hours and live sports broadcasts. If you experience buffering despite having fast broadband speeds, your ISP may be restricting video feeds. IPTV USA utilizes adaptive port routing and intelligent CDN optimization to bypass standard ISP throttling, ensuring smooth playback.",
    },
    {
      question: "How much is IPTV in the USA?",
      answer:
        "IPTV in the USA typically costs between $10 and $20 monthly, which is vastly more affordable than traditional US cable packages that often exceed $100 per month. At IPTV USA, transparent pricing starts at $14.95 for a 1 Month plan, $29.95 for 3 Months, $44.95 for 6 Months, and our best value 12 Months plan at $59.95, saving you 65% with no hidden fees.",
    },
    {
      question: "What is the monthly fee for IPTV?",
      answer:
        "The standard monthly fee for IPTV USA is $14.95 on our flexible 1 Month plan with no contract commitment. For customers seeking maximum savings, multi month options reduce the effective cost even further: the 3 Months plan averages under $10 monthly, the 6 Months plan averages $7.49 monthly, and our popular 12 Months plan averages less than $5.00 monthly with a free HotPlayer app bonus.",
    },
    {
      question: "What internet speed is recommended for smooth streaming?",
      answer:
        "For High Definition (HD) streaming, a stable internet connection of at least 15 Mbps is recommended. For Full HD and 4K streams, we advise a consistent speed of 30 Mbps or higher. Using a wired Ethernet connection or a 5 GHz WiFi network ensures minimal latency and smooth playback.",
    },
    {
      question: "How long does activation take after choosing a subscription?",
      answer:
        "Activation is fast and straightforward. Once you connect with our team on WhatsApp or submit your order, your login credentials (M3U playlist link and Xtream Codes API details) are sent to you immediately. Typical digital delivery occurs within minutes.",
    },
    {
      question: "Which applications work best with IPTV USA?",
      answer:
        "IPTV USA is compatible with all leading IPTV player applications, including HotPlayer, TiviMate, IPTV Smarters Pro, XCIPTV, and VLC Media Player. Every subscription includes a complimentary HotPlayer license, and our team provides step by step configuration assistance for any device.",
    },
    {
      question: "What is your refund and cancellation policy?",
      answer:
        "We want all customers to enjoy a smooth viewing experience. If you encounter verified technical issues within the first 72 hours of your initial subscription that our support team cannot resolve, you may request a refund in accordance with our documented Refund Policy on our Legal page.",
    },
  ] as FaqItem[],
};
