## Jfokus x Cloudflare Meetup

This is a simple Cloudflare Worker that generates a Valentine's Day message for the user using [Workers AI](https://developers.cloudflare.com/workers-ai/models/).

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
