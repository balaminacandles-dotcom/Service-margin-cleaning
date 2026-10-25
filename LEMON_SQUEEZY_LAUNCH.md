# Commercial launch setup — Lemon Squeezy (no bank access authorized)

**Project:** The Service Margin — Cleaning Edition  
**Product:** Cleaning Quote & Profit Kit  
**Authorized proposed retail price:** **US $49 one-time**  
**Publisher:** User-owned website at https://regal-caramel-74ca51.netlify.app  
**Status (2026-10-25):** Prelaunch. Website checkout disabled. No live product link or seller verification supplied. No sales established.

## Why this stack

- **GitHub:** public site source; no paid downloads or credentials.
- **Netlify Free:** static hosting; no paid subscriptions authorized. Ensure it is linked to this exact repository and production branch main, rather than a separately cloned template repo. Otherwise GitHub edits won't update the active site.
- **Lemon Squeezy:** Merchant of Record for payments on digital products; advertises **$0/month, 5% + $0.50 per transaction** before special/additional fees. It hosts digital downloads and buyer receipts. Do **not** add a second checkout processor.
- **No other paid tools or marketing software.** Use seller dashboard reports for sales and conversion observations initially.

Official pricing: https://www.lemonsqueezy.com/pricing  
Official fees: https://docs.lemonsqueezy.com/help/getting-started/fees  
Store activation: https://docs.lemonsqueezy.com/help/getting-started/activate-your-store  
Digital product setup: https://docs.lemonsqueezy.com/guides/getting-started  
Share checkout: https://docs.lemonsqueezy.com/help/products/sharing-products

## Step 1 — Create store (non-financial setup only)

Visit https://app.lemonsqueezy.com/ to make or access **your own** seller account. Choose a store name after brand/trademark clearance. Verify only your own account details. Creating a seller login is not authorization to add a payout method, bank, PayPal, credit card, or other financial information.

**Do not complete bank/PayPal payout connection on behalf of the owner.** Do not initiate bank, tax identity, or payout verification without the owner's separate explicit consent. Lemon Squeezy may require those steps before sales and/or disbursements. If so, stop at that gate.

## Step 2 — Product draft (test mode / private)

Create one *digital-download* product, not a service or subscription:

- **Name:** Cleaning Quote & Profit Kit
- **Price:** $49 USD, one-time
- **Description:** Eight-sheet Excel workbook plus four editable Word templates that help residential cleaning business owners estimate costs, compare visit frequency, document job scope, and compare actual job costs with their original estimate.
- **What's included:** 8-tab workbook; start-here instructions; client estimate and scope; walkthrough/add-ons checklist; client messages.
- **Intended customer:** Independent residential cleaning operators and small service teams.
- **Software needed:** Excel-compatible spreadsheet tool and Word-compatible document software.
- **Delivery:** Upload the private ZIP from this chat conversation. **Never add that ZIP to GitHub or public Netlify assets.** Verify the live product's file is the reviewed final version, not an earlier draft.
- **License:** Draft single-business internal use terms; one purchaser may use the editable forms in their own cleaning operations; no resale, reposting, redistribution, or sublicensing of original file package. **Must be reviewed and finalized by seller.**
- **Refund/support:** Use the seller-reviewed customer policies consistent with Lemon Squeezy rules. Do not promise an absolute no-refund policy or claim all digital sales are final without assessing consumer rights.

**Suggested product description for the seller dashboard:**

> Stop guessing at cleaning-job prices. The Cleaning Quote & Profit Kit gives independent residential cleaning business owners an editable Excel workbook and Word documents to help estimate job costs, compare repeat-service quotes, define client scope, and review how actual job costs compared with the original quote. One-time download, no monthly subscription. You enter your own labor rates, supplies, travel costs, overhead, and margin goals. For business planning only; not a guarantee of profit or a recommended local market rate. Requires compatible spreadsheet and document software.

## Step 3 — Test fulfillment before going live

- Confirm downloadable package includes 5 core editable files and the read-me, all open successfully.
- Use **test mode** to test checkout and confirm the test receipt and order record. **Lemon Squeezy disables file downloads for test-mode purchases**, so this does NOT verify the buyer can access the file. Inspect the uploaded ZIP separately, and once live activation and owner approval are complete, conduct a controlled legitimate live verification of file access without authorizing any unapproved financial action. Never use a real card for test-mode checkout and never simulate a successful paid order in marketing.
- Check both desktop and mobile checkout links, order confirmation, and customer-support contact visibility. **Live secure file download needs a separate post-activation check** because test-mode file downloads are disabled.
- Check live mode product is not accidentally configured as a subscription; $49 charged exactly once.
- Verify no secret checkout API keys, payout data, or customer emails are added to the public GitHub repository.

## Step 4 — Store approval / legal gates (owner controlled)

Lemon Squeezy requires live-store activation, business questionnaire and identity verification. Approval timing is not guaranteed. Test-mode products typically must be copied to live mode. Additional requirements may exist for payout activation; obtaining seller identity details or linking payout accounts is *not* included in the website-building authorization.

Before **live paid sales**, complete name clearance, seller name/contact disclosure, applicable California business/DBA requirements and local licenses, actual support and refund/license terms, product accuracy review, and seller account approval. Lemon Squeezy as Merchant of Record handles its customer transaction sales taxes, but does not exempt seller from income tax, business registrations or any other obligations.

California overview: https://calosba.ca.gov/for-small-businesses-and-non-profits/set-up-your-business-in-california/  
USPTO trademark clearance: https://www.uspto.gov/trademarks/search/federal-trademark-searching

## Step 5 — Obtain official shareable URL

In the **approved LIVE product**, choose **Products → Share → Hosted Checkout**.

Copy URL format:

```
https://YOUR-STORE.lemonsqueezy.com/checkout/buy/VARIANT_ID
```

Do **not** use `/checkout/?cart=...` (temporary cart), a test-mode link or an arbitrary substitute.

## Step 6 — Connect website checkout (this can be done here after URL arrives)

Edit only `checkout-settings.js` in GitHub after verifying the owner-controlled live $49 product and working automatic delivery:

```js
window.SERVICE_MARGIN_CONFIG = Object.freeze({
  provider: 'lemon-squeezy',
  checkoutUrl: 'https://YOUR-STORE.lemonsqueezy.com/checkout/buy/VARIANT_ID',
  productPriceUsd: 49,
  checkoutEnabled: true
});
```

The website's client-side guard permits **only** HTTPS `*.lemonsqueezy.com/checkout/buy/<variant>` links when `checkoutEnabled` is true. Price verification occurs on the real Lemon Squeezy dashboard, **not** in public JavaScript.

Then perform a **final end-to-end** check on the actual Netlify domain and have seller inspect terms, receipts, delivery, refunds, mobile layout, and the seller's customer support contact. Remove search-engine noindex safeguards only after clearance and approval.

## Fee model (illustration; not guaranteed profit)

At $49, standard listed platform transaction fee = 5% × $49 + $0.50 = **$2.95**. Amount remaining = **$46.05** before special additional payment/payout fees, refunds, advertising, income tax, and business expenses. This is contribution after baseline platform fees, **not net profit**. Payout fees and international-payment surcharges may differ.

## Current owner restrictions

- No bank, PayPal, credit card, financial account, payout method, seller tax identity, payment authorization or billing connection by the assistant.
- No paid advertising or paid subscriptions.
- No claims of actual paid orders or projected profitability without real evidence.
