/**
 * Shared Qatar-first + GCC/MENA payment rails for service tech stacks.
 * Homepage Payments category merges these via service hubs.
 */

/** Local and regional processors (Qatar first, then GCC / wider MENA). */
export const MENA_PAYMENT_TOOLS = [
  { name: "SADAD", tip: "Qatar NAPS/QPAY, POS, links & smart store" },
  { name: "Dibsy", tip: "Qatar API, payment links & recurring billing" },
  { name: "Fatora", tip: "Qatar e-invoicing, WooCommerce & Shopify" },
  { name: "QPay", tip: "Qatar national debit network (NAPS)" },
  { name: "Tap Payments", tip: "All-GCC: QPAY, Mada, KNET, BENEFIT" },
  { name: "PayTabs", tip: "GCC & MENA checkout and marketplaces" },
  { name: "MyFatoorah", tip: "Multi-GCC local methods & subscriptions" },
  { name: "HyperPay", tip: "Saudi Mada & enterprise acquiring" },
  { name: "Moyasar", tip: "Saudi Mada, STC Pay & clean APIs" },
  { name: "Telr", tip: "UAE & GCC ecommerce payments" },
  { name: "Network International", tip: "UAE enterprise acquiring" },
  { name: "STC Pay", tip: "Saudi digital wallet" },
  { name: "Mada", tip: "Saudi national debit scheme" },
  { name: "KNET", tip: "Kuwait national debit scheme" },
  { name: "BENEFIT", tip: "Bahrain national debit & BenefitPay" },
  { name: "OmanNet", tip: "Oman national debit scheme" },
  { name: "Fawry", tip: "Egypt bill pay & ecommerce" },
  { name: "Tabby", tip: "BNPL · UAE & Saudi Arabia" },
  { name: "Tamara", tip: "BNPL · UAE & Saudi Arabia" },
  { name: "Noqoody", tip: "Qatar fintech & tokenization" },
  { name: "SkipCash", tip: "Qatar NFC & QR payments" },
];

/** International rails kept alongside MENA gateways. */
export const GLOBAL_PAYMENT_TOOLS = [
  { name: "Stripe", tip: "International cards & subscriptions" },
  { name: "PayPal", tip: "Global checkout" },
  { name: "Apple Pay", tip: "Wallet checkout" },
  { name: "Google Pay", tip: "Wallet checkout" },
];

/** Full Payments category toolkit for ecommerce / API / mobile hubs. */
export const FULL_PAYMENT_TOOLS = [
  ...MENA_PAYMENT_TOOLS,
  ...GLOBAL_PAYMENT_TOOLS,
];

/** SaaS billing: MENA + global + merchant-of-record options. */
export const SAAS_PAYMENT_TOOLS = [
  ...MENA_PAYMENT_TOOLS,
  ...GLOBAL_PAYMENT_TOOLS,
  { name: "Paddle", tip: "Merchant-of-record billing" },
  { name: "Lemon Squeezy", tip: "Digital product billing" },
];

/** Mobile: MENA + global + store IAP. */
export const MOBILE_PAYMENT_TOOLS = [
  ...MENA_PAYMENT_TOOLS,
  ...GLOBAL_PAYMENT_TOOLS,
  { name: "In-App Purchases", tip: "App Store & Play monetization" },
];

/** WooCommerce category: keep WP commerce tools, then MENA + global rails. */
export const WOOCOMMERCE_PAYMENT_TOOLS = [
  { name: "WooCommerce", tip: "WordPress commerce engine" },
  { name: "WooCommerce HPOS", tip: "High-performance order storage" },
  { name: "WooCommerce Subscriptions", tip: "Recurring revenue" },
  ...MENA_PAYMENT_TOOLS,
  ...GLOBAL_PAYMENT_TOOLS,
];
