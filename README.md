# The Service Margin — Cleaning Edition

A responsive informational storefront and free quote-cost calculator for independent residential cleaning businesses.

**Status: prelaunch.** The proposed $49 digital product is not yet available for purchase. Checkout is disabled; seller verification, brand clearance, legal terms, and payment processing are not complete. No sales have occurred.

## Publish the free site

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/balaminacandles-dotcom/Service-margin-cleaning)

Choose Netlify **Free ($0)**, sign into your account, review any permissions and publishing prompt, and do not add payment information. This official one-click deploy process may create a new repository copy in your GitHub account. If you'd rather deploy directly from the existing repository, follow [the manual steps](DEPLOY_FREE_HOSTING.md).

The site has a root `netlify.toml` pointing to `.`; no dependencies, environment variables or build process are required.

## Lemon Squeezy commercial launch (owner-approved, not yet accepting payments)

The owner selected **Lemon Squeezy** for the proposed $49 one-time digital download and explicitly prohibited the assistant from connecting bank, payout, PayPal, card or other financial accounts. The public storefront keeps checkout disabled until live seller activation, business/legal review, actual secure fulfillment and end-to-end testing are complete. No live link has been provided and no sales have occurred.

- [Seller-store setup, private ZIP fulfillment and checkout release steps](LEMON_SQUEEZY_LAUNCH.md)
- [Permission-based organic customer research and first-customer plan](ORGANIC_CUSTOMER_LAUNCH.md)
- [Prelaunch release gates and QA](LAUNCH_RELEASE_QA.md)
- [Read-only deployment synchronization marker](release-health.json)
- Only [`checkout-settings.js`](checkout-settings.js) controls the provider and final shareable URL; do not publish private download files in GitHub.
- The public website is https://regal-caramel-74ca51.netlify.app; **live deployment is not independently verified** with the available tools. If one-click Netlify deployment cloned the repo, connect the production project to **this exact repository** for GitHub updates to deploy.

## What is inside?

- `index.html` — responsive landing page, free cleaning quote calculator, and disabled purchase CTA.
- `guides.html` and three articles — non-transactional educational content.
- `privacy.html`, `terms.html` — **prelaunch notices**, not final legal documents.
- `robots.txt` and `netlify.toml` — site-wide no-index signals while business setup is incomplete.

**Never commit paid downloads, customer information, payment data, passwords, or API secrets to this public repository.**

## What must happen before sales

Check relevant business registration, brand/trademark clearance, taxes, product accuracy, required consumer disclosures, finalized policies, payment-provider seller verification, delivery security, and a real end-to-end test of checkout and refunds. None of these checks is certified as completed. Owner approval is required for all costs, financial connections, and consequential business decisions.

The files here are **not a guarantee of revenue or profitability**.
