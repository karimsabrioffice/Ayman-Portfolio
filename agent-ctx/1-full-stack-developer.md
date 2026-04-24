---
Task ID: 1
Agent: full-stack-developer
Task: Comprehensive refactor of Ayman Faried portfolio Next.js site

Work Log:
- Read and analyzed the existing 1282-line page.tsx monolith
- Created `/home/z/my-project/src/components/portfolio/` directory structure
- Decomposed page.tsx into 12 separate component files:
  - `data.ts` — All static data (navLinks, stats, skills, experiences, educations)
  - `useInView.ts` — Optimized IntersectionObserver hook with shared observer instance
  - `Navigation.tsx` — Nav bar (mobile + desktop)
  - `HeroSection.tsx` — Hero section with photo and intro
  - `StatsSection.tsx` — Stats grid with StatCard sub-component
  - `AboutSection.tsx` — Skills/What I Do section (also exports shared Section wrapper)
  - `ExperienceSection.tsx` — Work experience timeline with ExperienceCard and ExpContent
  - `CampaignSection.tsx` — All 3 campaign showcases (Rama, Alshakreen, Oriel)
  - `EducationSection.tsx` — Education & certifications
  - `ContactSection.tsx` — Contact form/social links (with Facebook replacing Twitter)
  - `Footer.tsx` — Footer (with Facebook replacing Twitter)
  - `Lightbox.tsx` — Lightbox modal
  - `BackToTop.tsx` — Back to top button
- Created `/home/z/my-project/src/components/GalaxyBackground.tsx` — Canvas-based galaxy/milky way background with:
  - Milky way diagonal band effect with shimmer
  - Twinkling stars (varied sizes, opacity, twinkle rates)
  - Pulsing nebula clouds in brand colors (blue, purple, emerald)
  - Occasional shooting stars
  - Performant requestAnimationFrame loop
- Updated `/home/z/my-project/src/app/globals.css`:
  - Added `aspect-ratio: 3/4` and `object-fit: cover` to `.gallery-image`
  - Added Galaxy background animation keyframes (twinkle, twinkle-slow, float-nebula, shooting-star, milky-way-shimmer)
  - Added performance CSS rules (will-change, contain for animated elements)
  - Added `content-visibility: auto` with `contain-intrinsic-size` for below-fold sections
- Updated `/home/z/my-project/src/app/page.tsx` — Clean 101-line file importing and composing all components
- Fixed social links:
  - LinkedIn URL changed from `https://www.linkedin.com/in/aymanfaried17` to `https://www.linkedin.com/in/ayman-faried-0a8405347/` in both Contact and Footer
  - Twitter/X replaced with Facebook (`https://web.facebook.com/ayman.faried`) in both Contact and Footer
  - Twitter icon replaced with Facebook icon from lucide-react
  - Facebook hover colors: `hover:text-blue-500 hover:bg-blue-600/10` in contact section
- Fixed profile image: Added `fetchPriority="high"` for faster loading
- Added `loading="lazy"` on all campaign gallery images below the fold
- Replaced Background Glow Orbs with GalaxyBackground component (dynamically imported with `ssr: false`)
- Optimized useInView hook to use a shared IntersectionObserver instance per threshold instead of creating one per element
- Build succeeded with no errors
- Lint passed with no issues

Stage Summary:
- Successfully refactored 1282-line monolithic page.tsx into 14 well-organized component files totaling 1603 lines across 14 files
- page.tsx reduced from 1282 lines to 101 lines
- All social links fixed (LinkedIn URL corrected, Twitter→Facebook in both contact section and footer)
- Galaxy/Milky Way background with twinkling stars, nebula clouds, and shooting stars replaces simple glow orbs
- Campaign images now have proper aspect-ratio (3/4) to prevent squishing
- Performance improvements: shared IntersectionObserver, lazy loading, fetchPriority, content-visibility, will-change
- Build and lint both pass cleanly
