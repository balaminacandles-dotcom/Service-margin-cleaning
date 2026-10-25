// A single gate controls the public checkout button.
// Safe prelaunch default. Never put Stripe secret keys, bank details or private product files here.
// To activate ONLY after owner approval, legal/seller verification, a valid $49 Payhip product,
// and a confirmed test purchase with automatic protected digital file delivery:
// replace checkoutUrl with the real https://payhip.com/b/... link, then set checkoutEnabled:true.
window.SERVICE_MARGIN_CONFIG = Object.freeze({
  provider: 'payhip',
  checkoutUrl: '',
  productPriceUsd: 49,
  checkoutEnabled: false
});
