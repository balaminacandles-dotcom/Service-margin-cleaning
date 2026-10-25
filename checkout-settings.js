// Lemon Squeezy hosted-checkout configuration. PUBLIC FILE: no API keys or payout details.
// Owner approved Lemon Squeezy and proposed one-time $49 price on 2026-10-25.
// Leave checkout disabled until Lemon Squeezy LIVE store approval, correct product variant,
// owner-reviewed legal terms, secure automatic file delivery, and a verified test purchase.
// Paste the SHAREABLE product URL from Products > Share:
// https://YOUR-STORE.lemonsqueezy.com/checkout/buy/VARIANT_ID
// Do not paste a /checkout/?cart= URL; cart URLs are temporary and customer-specific.
// Also verify the actual Lemon Squeezy variant price is exactly $49 (website config alone
// does NOT guarantee the checkout price).
window.SERVICE_MARGIN_CONFIG = Object.freeze({
  provider: 'lemon-squeezy',
  checkoutUrl: '',
  productPriceUsd: 49,
  checkoutEnabled: false
});
