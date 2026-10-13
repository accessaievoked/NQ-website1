/**
 * NQ Client Onboarding Form
 *
 * 30 existing question IDs preserved for Google Sheets compatibility.
 *
 * Layout:
 * - 8 total steps
 * - Maximum 6 questions per step
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
  // STEP 1 — Business Basics (5 questions)
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
        id: "brandWebsite",
        name: "Brand name & website URL",
        required: true,
        inputType: "text",
        placeholder: "Brand name + website URL",
      },
      {
        id: "industry",
        name: "Industry/category & products/services offered",
        required: true,
        inputType: "textarea",
        placeholder:
          "Tell us about your industry and what you sell...",
      },
    ],
  },

  // STEP 2 — Business & Market (5 questions)
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
        name: "Target market, locations & business model",
        required: true,
        inputType: "textarea",
        placeholder:
          "Describe your target market, locations and business model...",
      },
      {
        id: "revenue",
        name: "Current monthly revenue & target monthly revenue",
        required: true,
        inputType: "text",
        placeholder: "e.g. ₹5L current, ₹15L target",
      },
      {
        id: "competitorsUSP",
        name: "Main competitors & your unique selling proposition (USP)",
        required: false,
        inputType: "textarea",
        placeholder:
          "Who are your main competitors and what makes you different?",
      },
      {
        id: "bestSellingProducts",
        name: "Key/best-selling products & any upcoming launches",
        required: true,
        inputType: "textarea",
        placeholder:
          "Tell us about your best-selling products and upcoming launches...",
      },
      {
        id: "businessGoal",
        name: "Primary business goal & timeline to hit it",
        required: true,
        inputType: "textarea",
        placeholder:
          "What is your main goal and when do you want to achieve it?",
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

  // STEP 5 — Marketing Performance (5 questions)
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
        id: "monthlySpend",
        name: "Monthly spend by platform & total marketing spend",
        required: false,
        inputType: "textarea",
        placeholder:
          "Google: ₹___ | Meta: ₹___ | Other: ₹___ | Total: ₹___",
      },
      {
        id: "roasCAC",
        name: "Historical ROAS & CAC",
        required: false,
        inputType: "text",
        placeholder: "e.g. ROAS 3.2x, CAC ₹850",
      },
      {
        id: "purchasesLeads",
        name: "Purchases/leads in the last 30–90 days",
        required: false,
        inputType: "number",
        placeholder: "Enter approximate number",
      },
      {
        id: "campaignPerformance",
        name: "Best- and worst-performing campaigns/creatives",
        required: false,
        inputType: "textarea",
        placeholder:
          "Which campaigns or creatives performed best and worst?",
      },
      {
        id: "previousAgencies",
        name: "Previous agencies/freelancers & their strategy",
        required: false,
        inputType: "textarea",
        placeholder:
          "Who did you work with and what strategy did they use?",
      },
    ],
  },

  // STEP 6 — Customers & Products (6 questions)
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
        id: "previousStrategyResults",
        name:
          "What worked, what didn't, and why previous campaigns or partnerships stopped",
        required: false,
        inputType: "textarea",
        placeholder:
          "What worked? What didn't? What would you change?",
      },
      {
        id: "targetCustomer",
        name:
          "Target customer: demographics, location, age range & gender split",
        required: true,
        inputType: "textarea",
        placeholder: "Describe your typical customer...",
      },
      {
        id: "customerPainPoints",
        name: "Customer pain points & purchase motivations",
        required: true,
        inputType: "textarea",
        placeholder:
          "What problems are customers trying to solve?",
      },
      {
        id: "buyingFrequency",
        name:
          "Average buying frequency & new-vs-returning customer split",
        required: false,
        inputType: "textarea",
        placeholder:
          "e.g. 2 purchases/year, 70% new / 30% returning",
      },
      {
        id: "productMargins",
        name: "Best-selling, highest-margin & low-margin products",
        required: true,
        inputType: "textarea",
        placeholder:
          "List your key products and their margin profile...",
      },
      {
        id: "productsToScale",
        name:
          "Products to scale, liquidate, or seasonal/upcoming launches",
        required: true,
        inputType: "textarea",
        placeholder:
          "Which products should we focus on and why?",
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

  // STEP 8 — Goals & Requirements (6 questions)
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
        name:
          "In-house creative production capability & monthly output capacity",
        required: false,
        inputType: "textarea",
        placeholder:
          "Tell us about your team and monthly creative capacity...",
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
        name:
          "Monthly revenue target, order/lead target & marketing budget",
        required: true,
        inputType: "textarea",
        placeholder:
          "Revenue: ₹___ | Orders/Leads: ___ | Marketing budget: ₹___",
      },
      {
        id: "targetMetrics",
        name: "Target CAC, target ROAS & break-even ROAS",
        required: false,
        inputType: "text",
        placeholder:
          "e.g. CAC ₹500 | Target ROAS 4x | Break-even ROAS 2.5x",
      },
      {
        id: "constraints",
        name: "Non-negotiables or constraints",
        hint:
          "Budget caps, brand restrictions, platform exclusions, etc.",
        required: false,
        inputType: "textarea",
        placeholder:
          "Anything we should know before we start...",
      },
    ],
  },
];

export default formConfig;
