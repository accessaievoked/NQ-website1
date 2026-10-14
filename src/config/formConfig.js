/**
 * NQ Client Onboarding Form
 *
 * Compound questions are split into single-answer fields; each question id
 * is one Google Sheet column (see the Apps Script for the order).
 *
 * Layout:
 * - 8 total steps
 * - Icon-choice questions occupy their own steps
 * - Business Stage: single-select icon cards
 * - Ad Platforms: multi-select icon cards
 * - Creative Assets: required multi-select icon cards
 * - Icons use Lucide React via ./iconMap
 *
 * Option fields:
 * value, title, explanation?, icon?, color?, specify?
 */

const formConfig = [
  // STEP 1 — Business Basics
  {
    id: "business",
    title: "Business Information",
    eyebrow: "Step 01",
    heading: "Tell us about your business",
    description: "Let's start with the basics of your brand.",
    leftTitle: "Let's get to know your brand.",
    leftText:
      "A few details will help us understand your business and tailor the right growth strategy.",
    questions: [
      {
        id: "pocName",
        name: "POC Name",
        required: true,
        inputType: "text",
        placeholder: "Enter your full name",
      },
      {
        id: "pocMobile",
        name: "POC Mobile No",
        required: true,
        inputType: "tel",
        placeholder: "98765 43210",
      },
      {
        id: "pocEmail",
        name: "POC Email Id",
        required: true,
        inputType: "email",
        placeholder: "you@brand.com",
      },
      {
        id: "brandName",
        name: "Brand name",
        required: true,
        inputType: "text",
        placeholder: "Your brand name",
      },
      {
        id: "websiteUrl",
        name: "Website URL",
        required: true,
        inputType: "url",
        placeholder: "https://yourbrand.com",
      },
      {
        id: "industry",
        name: "Industry / category",
        required: true,
        inputType: "text",
        placeholder: "e.g. Fashion, Skincare, SaaS",
      },
      {
        id: "productsServices",
        name: "Products / services offered",
        required: true,
        inputType: "text",
        placeholder: "Tell us what you sell...",
      },
    ],
  },

  // STEP 2 — Business & Market
  {
    id: "businessMarket",
    title: "Business & Market",
    eyebrow: "Step 02",
    heading: "Tell us about your market and goals",
    description:
      "Help us understand your audience, products, revenue and business priorities.",
    leftTitle: "Understand the bigger picture.",
    leftText:
      "Your market, product positioning and business goals help us identify the right growth opportunities.",
    questions: [
      {
        id: "targetMarket",
        name: "Target market",
        required: true,
        inputType: "text",
        placeholder: "Who are you selling to?",
      },
      {
        id: "locations",
        name: "Locations you sell to",
        required: true,
        inputType: "text",
        placeholder: "e.g. India, UAE, US",
      },
      {
        id: "businessModel",
        name: "Business model",
        required: true,
        inputType: "text",
        placeholder: "e.g. D2C, B2B, marketplace, subscription",
      },
      {
        id: "currentRevenue",
        name: "Current monthly revenue",
        required: true,
        inputType: "text",
        placeholder: "e.g. ₹5L",
      },
      {
        id: "targetRevenue",
        name: "Target monthly revenue",
        required: true,
        inputType: "text",
        placeholder: "e.g. ₹15L",
      },
      {
        id: "competitors",
        name: "Main competitors",
        required: false,
        inputType: "text",
        placeholder: "Who are your main competitors?",
      },
      {
        id: "usp",
        name: "Your unique selling proposition (USP)",
        required: false,
        inputType: "text",
        placeholder: "What makes you different?",
      },
      {
        id: "bestSellingProducts",
        name: "Key / best-selling products",
        required: true,
        inputType: "text",
        placeholder: "Tell us about your best-selling products...",
      },
      {
        id: "upcomingLaunches",
        name: "Upcoming launches",
        required: false,
        inputType: "text",
        placeholder: "Any new products or launches planned?",
      },
      {
        id: "businessGoal",
        name: "Primary business goal",
        required: true,
        inputType: "text",
        placeholder: "What is your main goal?",
      },
      {
        id: "goalTimeline",
        name: "Timeline to hit it",
        required: true,
        inputType: "text",
        placeholder: "e.g. 6 months",
      },
    ],
  },

  // STEP 3 — Business Stage (icon cards, single-select)
  {
    id: "businessStage",
    title: "Business Stage",
    eyebrow: "Step 03",
    heading: "Where does your business stand?",
    description:
      "Choose the stage that best describes your business.",
    leftTitle: "Every brand has a different starting point.",
    leftText:
      "Understanding your business stage helps us recommend realistic next steps.",
    questions: [
      {
        id: "businessStage",
        name: "Business stage",
        required: true,
        inputType: "select",
        selection: "single",
        display: "cards",
        options: [
          {
            value: "Pre-launch",
            title: "Pre-launch",
            explanation: "Preparing to launch.",
            icon: "rocket",
            color: "#8B5CF6",
          },
          {
            value: "Early-stage",
            title: "Early-stage",
            explanation: "Building initial traction.",
            icon: "trending",
            color: "#0D9488",
          },
          {
            value: "Scaling",
            title: "Scaling",
            explanation: "Growing sales and acquisition.",
            icon: "growth",
            color: "#2563EB",
          },
          {
            value: "Mature",
            title: "Mature",
            explanation: "Established operations and sales.",
            icon: "building",
            color: "#D97706",
          },
          {
            value: "Other",
            title: "Other",
            explanation: "Another business stage.",
            icon: "more",
            color: "#64748B",
            specify: true,
          },
        ],
      },
    ],
  },

  // STEP 4 — Advertising Platforms (icon cards, multi-select)
  {
    id: "marketingSetup",
    title: "Marketing Setup",
    eyebrow: "Step 04",
    heading: "How do you acquire customers?",
    description:
      "Select the advertising platforms you currently use.",
    leftTitle: "Know what's already working.",
    leftText:
      "Your current channels give us a starting point for planning acquisition.",
    questions: [
      {
        id: "adPlatforms",
        name: "Ad platforms currently in use",
        required: false,
        inputType: "checkbox",
        selection: "multiple",
        display: "cards",
        options: [
          {
            value: "Google Ads",
            title: "Google Ads",
            explanation: "Search, Shopping and Performance Max.",
            icon: "google",
            color: "#4285F4",
          },
          {
            value: "Meta Ads",
            title: "Meta Ads",
            explanation: "Facebook and Instagram advertising.",
            icon: "meta",
            color: "#0866FF",
          },
          {
            value: "WhatsApp",
            title: "WhatsApp",
            explanation: "WhatsApp campaigns.",
            icon: "whatsapp",
            color: "#25D366",
          },
          {
            value: "Email",
            title: "Email",
            explanation: "Email marketing and automations.",
            icon: "gmail",
            color: "#EA4335",
          },
          {
            value: "Other",
            title: "Other",
            explanation: "Other acquisition channels.",
            icon: "more",
            color: "#64748B",
            specify: true,
          },
        ],
      },
    ],
  },

  // STEP 5 — Marketing Performance
  {
    id: "marketingHistory",
    title: "Marketing Performance",
    eyebrow: "Step 05",
    heading: "What have you tried so far?",
    description:
      "Share your marketing spend, campaign performance and agency history.",
    leftTitle: "Learn from what's come before.",
    leftText:
      "Past results and experiments help us identify opportunities and avoid repeating mistakes.",
    questions: [
      {
        id: "spendGoogle",
        name: "Monthly spend: Google Ads",
        required: false,
        inputType: "text",
        placeholder: "e.g. ₹1L",
      },
      {
        id: "spendMeta",
        name: "Monthly spend: Meta Ads",
        required: false,
        inputType: "text",
        placeholder: "e.g. ₹1L",
      },
      {
        id: "spendWhatsApp",
        name: "Monthly spend: WhatsApp",
        required: false,
        inputType: "text",
        placeholder: "e.g. ₹20K",
      },
      {
        id: "spendEmail",
        name: "Monthly spend: Email",
        required: false,
        inputType: "text",
        placeholder: "e.g. ₹10K",
      },
      {
        id: "spendOther",
        name: "Monthly spend: Other platforms",
        required: false,
        inputType: "text",
        placeholder: "e.g. ₹30K",
      },
      {
        id: "totalMarketingSpend",
        name: "Total monthly marketing spend",
        required: false,
        inputType: "text",
        placeholder: "e.g. ₹3L",
      },
      {
        id: "historicalRoas",
        name: "Historical ROAS",
        required: false,
        inputType: "text",
        placeholder: "e.g. 3.2x",
      },
      {
        id: "historicalCac",
        name: "Historical CAC",
        required: false,
        inputType: "text",
        placeholder: "e.g. ₹850",
      },
      {
        id: "purchasesLeads",
        name: "Purchases/leads in the last 30–90 days",
        required: false,
        inputType: "number",
        placeholder: "Enter approximate number",
      },
      {
        id: "bestCampaigns",
        name: "Best-performing campaigns / creatives",
        required: false,
        inputType: "text",
        placeholder: "Which campaigns or creatives worked best?",
      },
      {
        id: "worstCampaigns",
        name: "Worst-performing campaigns / creatives",
        required: false,
        inputType: "text",
        placeholder: "Which campaigns or creatives performed worst?",
      },
      {
        id: "previousAgencies",
        name: "Previous agencies / freelancers",
        required: false,
        inputType: "text",
        placeholder: "Who did you work with before?",
      },
      {
        id: "previousStrategy",
        name: "Strategy they used",
        required: false,
        inputType: "text",
        placeholder: "What strategy did they follow?",
      },
    ],
  },

  // STEP 6 — Customers & Products
  {
    id: "customers",
    title: "Customers & Products",
    eyebrow: "Step 06",
    heading: "Who are your customers?",
    description:
      "Help us understand your audience and product priorities.",
    leftTitle: "Better customer insight. Better campaigns.",
    leftText:
      "Understanding customer motivations and product margins helps us identify growth opportunities.",
    questions: [
      {
        id: "whatWorked",
        name: "What worked in previous campaigns",
        required: false,
        inputType: "text",
        placeholder: "What worked well?",
      },
      {
        id: "whatDidntWork",
        name: "What didn't work, and why",
        required: false,
        inputType: "text",
        placeholder: "What didn't work and why?",
      },
      {
        id: "whyStopped",
        name: "Why previous campaigns / agency stopped",
        required: false,
        inputType: "text",
        placeholder: "Why did it end?",
      },
      {
        id: "customerDemographics",
        name: "Target customer demographics",
        required: true,
        inputType: "text",
        placeholder: "Describe your typical customer...",
      },
      {
        id: "customerLocation",
        name: "Target customer location",
        required: true,
        inputType: "text",
        placeholder: "e.g. Tier 1 cities in India",
      },
      {
        id: "customerAge",
        name: "Target customer age range",
        required: true,
        inputType: "text",
        placeholder: "e.g. 25–40",
      },
      {
        id: "genderSplit",
        name: "Gender split",
        required: true,
        inputType: "text",
        placeholder: "e.g. 70% women / 30% men",
      },
      {
        id: "customerPainPoints",
        name: "Customer pain points",
        required: true,
        inputType: "text",
        placeholder: "What problems are customers trying to solve?",
      },
      {
        id: "purchaseMotivations",
        name: "Purchase motivations",
        required: true,
        inputType: "text",
        placeholder: "What makes them buy?",
      },
      {
        id: "buyingFrequency",
        name: "Average buying frequency",
        required: false,
        inputType: "text",
        placeholder: "e.g. 2 purchases/year",
      },
      {
        id: "newVsReturning",
        name: "New vs returning customer split",
        required: false,
        inputType: "text",
        placeholder: "e.g. 70% new / 30% returning",
      },
      {
        id: "topSellers",
        name: "Best-selling products",
        required: true,
        inputType: "text",
        placeholder: "List your best sellers...",
      },
      {
        id: "highMarginProducts",
        name: "Highest-margin products",
        required: true,
        inputType: "text",
        placeholder: "Which products earn the most margin?",
      },
      {
        id: "lowMarginProducts",
        name: "Low-margin products",
        required: true,
        inputType: "text",
        placeholder: "Which products have low margins?",
      },
      {
        id: "productsToScale",
        name: "Products to scale",
        required: true,
        inputType: "text",
        placeholder: "Which products should we focus on and why?",
      },
      {
        id: "productsToLiquidate",
        name: "Products to liquidate",
        required: false,
        inputType: "text",
        placeholder: "Any stock you want to clear?",
      },
      {
        id: "seasonalLaunches",
        name: "Seasonal / upcoming launches",
        required: false,
        inputType: "text",
        placeholder: "Any seasonal or upcoming products?",
      },
    ],
  },

  // STEP 7 — Creative Assets (icon cards, multi-select, required)
  {
    id: "creative",
    title: "Creative & Brand Assets",
    eyebrow: "Step 07",
    heading: "What creative assets do you have?",
    description:
      "Select the creative resources available to your brand.",
    leftTitle: "Creative gives your strategy a voice.",
    leftText:
      "We'll use your available assets to plan what to reuse, improve and test next.",
    questions: [
      {
        id: "creativeAssets",
        name: "Creative assets you have available",
        required: true,
        inputType: "checkbox",
        selection: "multiple",
        display: "cards",
        options: [
          {
            value: "Product Photos",
            title: "Product Photos",
            explanation: "Professional product photography.",
            icon: "image",
            color: "#8B5CF6",
          },
          {
            value: "Lifestyle Photos",
            title: "Lifestyle Photos",
            explanation: "Your product in real-world use.",
            icon: "camera",
            color: "#F59E0B",
          },
          {
            value: "UGC",
            title: "UGC",
            explanation: "Content from customers or creators.",
            icon: "users",
            color: "#EC4899",
          },
          {
            value: "Video-Reels",
            title: "Video / Reels",
            explanation: "Short-form video content.",
            icon: "video",
            color: "#EF4444",
          },
          {
            value: "Testimonials",
            title: "Testimonials",
            explanation: "Customer stories and experiences.",
            icon: "message",
            color: "#10B981",
          },
          {
            value: "Before - After Content",
            title: "Before / After",
            explanation: "Before-and-after visual proof.",
            icon: "arrow",
            color: "#6366F1",
          },
          {
            value: "Other",
            title: "Other",
            explanation: "Any other creative assets.",
            icon: "more",
            color: "#64748B",
            specify: true,
          },
        ],
      },
    ],
  },

  // STEP 8 — Goals & Requirements
  {
    id: "goals",
    title: "Goals & Requirements",
    eyebrow: "Step 08",
    heading: "Let's plan your next stage of growth",
    description:
      "Tell us about your creative resources, targets and constraints.",
    leftTitle: "Let's define your next stage of growth.",
    leftText:
      "Clear goals, available resources and measurable targets give us a shared direction.",
    questions: [
      {
        id: "creativeLibrary",
        name: "Existing creative library or DAM link",
        required: false,
        inputType: "url",
        placeholder: "https://...",
      },
      {
        id: "inHouseCreative",
        name: "In-house creative production capability",
        required: false,
        inputType: "text",
        placeholder: "Tell us about your creative team and setup...",
      },
      {
        id: "creativeCapacity",
        name: "Monthly creative output capacity",
        required: false,
        inputType: "text",
        placeholder: "e.g. 20 static + 8 videos",
      },
      {
        id: "brandGuidelines",
        name: "Brand guidelines / colors / fonts link",
        required: false,
        inputType: "url",
        placeholder: "https://...",
      },
      {
        id: "revenueTarget",
        name: "Monthly revenue target",
        required: true,
        inputType: "text",
        placeholder: "e.g. ₹15L",
      },
      {
        id: "orderLeadTarget",
        name: "Monthly order / lead target",
        required: true,
        inputType: "text",
        placeholder: "e.g. 1,500 orders",
      },
      {
        id: "marketingBudget",
        name: "Monthly marketing budget",
        required: true,
        inputType: "text",
        placeholder: "e.g. ₹3L",
      },
      {
        id: "targetCac",
        name: "Target CAC",
        required: false,
        inputType: "text",
        placeholder: "e.g. ₹500",
      },
      {
        id: "targetRoas",
        name: "Target ROAS",
        required: false,
        inputType: "text",
        placeholder: "e.g. 4x",
      },
      {
        id: "breakEvenRoas",
        name: "Break-even ROAS",
        required: false,
        inputType: "text",
        placeholder: "e.g. 2.5x",
      },
      {
        id: "constraints",
        name: "Non-negotiables or constraints",
        hint: "Budget caps, brand restrictions, platform exclusions, etc.",
        required: false,
        inputType: "text",
        placeholder: "Anything we should know before we start...",
      },
    ],
  },
];

export default formConfig;
