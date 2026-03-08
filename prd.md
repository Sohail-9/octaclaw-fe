Project Name: OctaClaw Landing Page

Goal:
Create a modern AI startup landing page for OctaClaw. The page should feel futuristic, minimal, and premium like modern AI companies such as Vercel, OpenAI, and Linear.

Primary objective:
Collect waitlist emails and introduce OctaClaw as a spatial AI workspace.

Target users:
AI builders, developers, AI startups, and technical teams.

Tech Stack:
Next.js (App Router)
TailwindCSS
Framer Motion for animations

Architecture:
Single-page landing site with reusable components.

Components structure:

/components
Navbar.tsx
Hero.tsx
Features.tsx
Waitlist.tsx
Footer.tsx

/pages
index.tsx

/styles
globals.css

Layout Structure:

1. Navbar
   Minimal top navigation.

Left:
OctaClaw (Cute blue octopus logo)

Right:
Product
Features
Join Waitlist button

Style:
Transparent background with subtle blur.
Sticky navbar when scrolling.

2. Hero Section
   Full screen hero section.

Headline:
"The Spatial Workspace for AI Collaboration"

Subtext:
"Design, connect, and run AI agents in a visual workspace. Build intelligent workflows for the next generation of teams."

Buttons:
Primary: Join Waitlist
Secondary: Watch Demo

Hero visual:
Animated node network representing AI agents collaborating in a spatial environment.

Animation idea:
Floating nodes connected by lines with subtle motion.

Design style:
Dark background (#0B0B0F)
Gradient accent (purple → blue)

Layout:
Centered text with animation behind or beside it.

3. Features Section

Section title:
"Build AI Systems Visually"

Three feature cards in a responsive grid.

Card 1
Title: Spatial AI Workspace
Description:
Design complex AI workflows using a visual spatial canvas.

Card 2
Title: Autonomous AI Agents
Description:
Deploy agents that collaborate and execute workflows automatically.

Card 3
Title: Enterprise Ready
Description:
Secure infrastructure with private models and enterprise-grade scalability.

Card Design:
Rounded corners
Subtle border
Glassmorphism effect
Hover animation (scale + glow)

4. Waitlist Section

Title:
"Join OctaClaw Early Access"

Subtitle:
"Be among the first builders creating spatial AI workflows."

Elements:
Email input field
Join Waitlist button

Below form:
"Early access • Private beta • Limited seats"

Email can be stored using:
Supabase
Resend
or simple API route.

5. Footer

Left:
OctaClaw

Right:
[contact@octaclaw.com](mailto:contact@octaclaw.com)

Optional links:
Twitter
LinkedIn
GitHub

Design Style Guidelines:

Background:
#0B0B0F

Primary text:
White

Accent colors:
Purple (#7C3AED)
Blue (#3B82F6)

Typography:
Inter
Space Grotesk

Animations:
Smooth hover transitions
Framer Motion fade-in sections
Subtle glowing hover effects

Responsive behavior:
Mobile-first design
Feature cards stack vertically on small screens.

Design Inspirations:

Vercel landing page
Linear.app
OpenAI
Perplexity AI
Framer

The landing page should feel like a premium AI infrastructure product.

Deliverables:
Complete responsive landing page
Reusable components
Clean Tailwind styling
Smooth animations
Waitlist email capture functionality.
