const svg = `
<svg width="1600" height="900" viewBox="0 0 1600 900" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="1600" height="900" rx="48" fill="#09111F"/>
  <circle cx="290" cy="290" r="210" fill="#10223D"/>
  <circle cx="575" cy="400" r="220" fill="#0D2E28"/>
  <circle cx="860" cy="290" r="230" fill="#17305A"/>
  <circle cx="1140" cy="430" r="220" fill="#3D1735"/>
  <rect x="80" y="110" width="1440" height="680" rx="42" fill="#070C1AD6" stroke="#6CF0AA55" stroke-width="2"/>
  <rect x="130" y="180" width="640" height="520" rx="30" fill="#FFFFFF16" stroke="#7DD3FC66" stroke-width="2"/>
  <rect x="840" y="180" width="620" height="150" rx="28" fill="#10B9812A" stroke="#A7F3D066" stroke-width="2"/>
  <rect x="840" y="370" width="620" height="330" rx="28" fill="#3B82F61F" stroke="#BFDBFE66" stroke-width="2"/>
  <text x="140" y="180" fill="#F8FAFC" font-family="Arial, sans-serif" font-size="70" font-weight="700">Zion Flowers</text>
  <text x="145" y="245" fill="#86EFAC" font-family="Arial, sans-serif" font-size="32" font-weight="600">AI-Driven Flower Marketplace &amp; SaaS</text>
  <text x="145" y="320" fill="#DBEAFE" font-family="Arial, sans-serif" font-size="24">Generate floral arrangements from mood, occasion, or inspiration images.</text>
  <text x="145" y="360" fill="#DBEAFE" font-family="Arial, sans-serif" font-size="24">Built for real florist storefronts, inventory, checkout, and delivery workflows.</text>
  <text x="875" y="230" fill="#F8FAFC" font-family="Arial, sans-serif" font-size="34" font-weight="700">AI Features</text>
  <text x="875" y="280" fill="#E2E8F0" font-family="Arial, sans-serif" font-size="24">Text + image guided arrangement generation</text>
  <text x="875" y="420" fill="#F8FAFC" font-family="Arial, sans-serif" font-size="34" font-weight="700">Platform Modules</text>
  <text x="875" y="480" fill="#E2E8F0" font-family="Arial, sans-serif" font-size="24">Marketplace storefronts</text>
  <text x="875" y="530" fill="#E2E8F0" font-family="Arial, sans-serif" font-size="24">Inventory and scheduling</text>
  <text x="875" y="580" fill="#E2E8F0" font-family="Arial, sans-serif" font-size="24">Stripe checkout and delivery</text>
  <text x="875" y="630" fill="#E2E8F0" font-family="Arial, sans-serif" font-size="24">Owner dashboard</text>
</svg>
`;

export async function GET() {
  return new Response(svg, {
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
