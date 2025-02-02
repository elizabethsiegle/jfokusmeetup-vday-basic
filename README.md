## Jfokus x Cloudflare Meetup

This is a simple Cloudflare Worker that generates a Valentine's Day message for the user using [Workers AI](https://developers.cloudflare.com/workers-ai/models/).

Checkout the [more-complex-version branch](https://github.com/elizabethsiegle/jfokusmeetup-vday-basic/tree/more-complex-version) for a more complexversion of the app that has text boxes submitted via a form on the client side to the Workers AI model to generate a personal poem on the server-side.

### Prerequisites
- Cloudflare account
- Node.js & Wrangler CLI installed (`npm install -g wrangler`).

### How to run

1. Clone the repository and `cd` into <em> vdaytest </em>
2. Run `npm install`
3. To test locally, run `npm run dev` or `npx wrangler dev`
4. Open a browser tab at http://localhost:8787/
5. Click "Generate"
6. To deploy, run `npm run deploy` or `npx wrangler deploy`
