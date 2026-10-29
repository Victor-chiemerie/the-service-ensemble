# The Service Ensemble — Website starter

A responsive, premium-style one-page website for The Service Ensemble, built with plain HTML, CSS and JavaScript.

## Why this approach
This first version uses static HTML/CSS/JavaScript rather than a framework. It is lightweight, easy to preview, can be hosted cheaply, and doesn't require a backend for the initial WhatsApp-enquiry workflow. If the business later needs customer accounts, online payments, staff scheduling, or an admin dashboard, it can be expanded or migrated to a framework.

## Preview locally
1. Extract the ZIP.
2. Open `index.html` in a browser, or use VS Code's Live Server extension.
3. Internet access is required for the remote Unsplash photographs and Google Fonts.

## Before launch — required customisation
1. Open `script.js`.
2. Replace `2348000000000` in `WHATSAPP_NUMBER` with the real business WhatsApp number in international format, without `+`, spaces, or the leading zero. Example format for a Nigerian number: `2348012345678`.
3. Replace the stock photography with approved photos of the real team and real work. Images are currently remote Unsplash images used as visual placeholders; internet access is needed to load them.
4. Review the service descriptions, service coverage area, response expectations, and booking policies. The copy deliberately avoids promising unconfirmed response times or guaranteed repairs.
5. Add the business email/phone/social handles when confirmed.
6. Test the booking form on desktop and mobile. Submitting opens WhatsApp with a pre-filled message; it does not save data to a database and the visitor must press Send in WhatsApp.

## Hosting
- **Netlify Drop:** extract the folder and drag the `the-service-ensemble` folder (or its contents) to Netlify Drop.
- **Cloudflare Pages:** create a Pages project and upload/deploy the static files.
- **GitHub Pages:** push the contents to a repository and enable Pages.
- A custom domain can be connected after the business chooses and registers one.

No build step is required. `index.html`, `styles.css`, and `script.js` must remain together.

## Reference material
`reference-material/` contains copies of the supplied previous website screenshot and video for design reference. They are intentionally not shown as public website content because the video appears to document the previous website rather than the actual service team in action.

## Notes
- This is a front-end starter, not a database-backed booking system.
- Pricing is enquiry-based for now because confirmed rates were not supplied.
- All remote photos should be replaced or confirmed as suitable before production launch.
