# PromptForge — Complete Launch Guide

## Step 1: Activate GitHub Pages (5 minutes)

1. Go to your GitHub repository Settings
2. Click **Pages** in the left sidebar
3. Under **Source**, select **GitHub Actions**
4. Your site will be live at: `https://YOUR-USERNAME.github.io/my-first-ai-site/`

## Step 2: Set Up Gumroad (15 minutes)

### Create Account
1. Go to [gumroad.com](https://gumroad.com) and sign up (free)
2. Complete your profile
3. Add your payment details (bank/PayPal for receiving money)

### Upload Products

**Product 1: AI Mega Prompt Pack — $19**
- Upload: `products/ai-mega-prompt-pack.md` (convert to PDF first)
- Title: "AI Mega Prompt Pack — 500+ Battle-Tested Prompts"
- Description: "500+ categorized prompts for business, marketing, coding & more. Works with ChatGPT, Claude, and Gemini. Lifetime free updates."
- Price: $19
- Cover: Use Canva to create a cover (use purple/blue gradient theme)

**Product 2: Notion Productivity Bundle — $12**
- Upload: `products/notion-productivity-bundle.md` (convert to PDF)
- Title: "Notion Productivity Bundle — 12 Premium Templates"
- Description: "12 complete Notion templates for project management, CRM, content planning, habit tracking & more."
- Price: $12

**Product 3: Content Calendar Kit — $9**
- Upload: `products/content-calendar-kit.md` (convert to PDF)
- Title: "90-Day Content Calendar Kit"
- Description: "Complete 90-day social media strategy with post ideas, hashtags, scheduling templates & AI prompts."
- Price: $9

**Product 4: Complete Business Bundle — $29**
- Upload: All 3 products as a zip
- Title: "Complete Business Bundle — All Products + Bonuses"
- Description: "Get ALL 3 products at 65% off. Includes 500+ prompts, 12 Notion templates, 90-day content plan, and exclusive bonuses."
- Price: $29

### Connect Products to Website
After creating each product on Gumroad, copy the product ID (from the URL).
Edit `js/main.js` and replace `REPLACE_WITH_GUMROAD_ID` with your actual IDs:

```javascript
var GUMROAD_PRODUCTS = {
  'AI Mega Prompt Pack': 'your-actual-id-1',
  'Notion Productivity Bundle': 'your-actual-id-2',
  'Content Calendar Kit': 'your-actual-id-3',
  'Complete Business Bundle': 'your-actual-id-4'
};
```

## Step 3: Marketing Launch (Week 1)

### Day 1-2: Reddit Launch
Post in these subreddits (follow each sub's rules!):

**r/ChatGPT** (1M+ members)
- Title: "I created a free pack of 20 AI prompts for business — here's what I learned"
- Share 20 free sample prompts from the mega pack
- Add link to full product at the end

**r/artificial** (800K+ members)
- Title: "I built an autonomous AI business using AI agents — here's the architecture"
- Share the about page / blog post about the agent system
- Drives traffic to website

**r/Notion** (400K+ members)
- Title: "12 Notion templates I built for productivity — free template included"
- Share 1 free template, link to full bundle

**r/Entrepreneur** (2M+ members)
- Title: "How I'm building a $100/month digital product business using AI agents"
- Share the journey, link to website

### Day 3-4: Twitter/X Launch
Post a thread:
```
Thread: I built a fully autonomous digital business using AI agents 🤖

Here's how it works (and what I learned):

1/ The Research Agent monitors Google Trends, Reddit, and Twitter 24/7 for market opportunities...

2/ The Product Agent creates digital products based on demand signals...

[Continue for 10-15 tweets]

Last tweet: Want to try the products? Link in bio.
```

### Day 5-7: LinkedIn Launch
Write a long-form post:
- Title: "I experimented with building an autonomous AI business. Here's what happened."
- Share insights, metrics, and link to products

### Week 2: Content Marketing
- Publish the 3 blog posts (already created)
- Share blog posts on social media
- Answer questions in relevant subreddits/forums
- Start email newsletter

### Week 3: Growth & Optimization
- Analyze traffic and conversion data
- Adjust pricing if needed
- Create 2 more blog posts based on search trends
- Engage with early customers for testimonials

### Week 4: Scale & Hit $100
- Run a limited-time promotion (24-hour 20% extra off)
- Cross-promote on all channels
- Send email to subscribers with special offer
- Target: 4+ more sales to hit $100

## Step 4: Email List Setup (Optional but Recommended)

1. Create a free [Mailchimp](https://mailchimp.com) account
2. Create a signup form
3. Replace the newsletter form action in the HTML with your Mailchimp form URL

## Revenue Math

| Scenario | Sales Needed | Revenue |
|----------|-------------|---------|
| All bundles | 4 sales × $29 | $116 |
| Mix | 2×$19 + 2×$12 + 2×$9 | $80 |
| Conservative | 3×$19 + 2×$9 | $75 |
| **Target** | **~5-8 sales** | **$100+** |

## Free Tools You Need

- **Canva** (free) — Product covers and social media graphics
- **Gumroad** (free) — Payments and digital delivery
- **Mailchimp** (free tier) — Email marketing
- **Google Analytics** (free) — Traffic tracking
- **GitHub Pages** (free) — Website hosting

**Total cost to run this business: $0/month**
