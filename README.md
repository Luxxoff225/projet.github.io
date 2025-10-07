# AcheterEnChine-Afrique — Landing Page Pack Service Unique

Landing page premium construite avec **Next.js (App Router)**, **TypeScript/JSX**, **Tailwind CSS**, **Framer Motion** et **Lottie**. Elle présente le pack service unique à 50 000 FCFA pour accompagner les entrepreneurs et particuliers africains qui souhaitent acheter en Chine tout en payant en devises locales.

## ✨ Points forts

- Hero immersif avec fond animé `GlowBackground`, mockup en parallaxe et boutons magnétiques vers téléphone et WhatsApp.
- Sections animées au scroll (problèmes → solutions, services, process, stats, logo wall, témoignages, pricing, formations, FAQ).
- Cartes premium avec effet tilt 3D, animations stagger, accordéons accessibles et Lottie chargées en `dynamic import`.
- Design dark mode premium inspiré d'Apple/Stripe : palette mint, glassmorphism, responsive et accessible.

## 🧱 Structure

```
app/
  layout.tsx      # Layout global + métadonnées SEO/OG
  page.tsx        # Landing page complète en client components
  globals.css     # Styles globaux, tokens et keyframes
components/
  Badge.tsx
  Button.tsx
  Card.tsx
  FAQItem.tsx
  FeatureCard.tsx
  GlowBackground.tsx
  LogoWall.tsx
  MagneticButton.tsx
  ParallaxImage.tsx
  PricingCard.tsx
  SectionFormations.tsx
  Stats.tsx
  StepCard.tsx
public/
  images/         # Logos, avatars, mockup
  lottie/payment.json
```

## 🚀 Prise en main

```bash
npm install
npm run dev
```

L'application est accessible sur [http://localhost:3000](http://localhost:3000).

### Build de production

```bash
npm run build
npm start
```

## ⚙️ Personnalisation rapide

| Élement | Fichier | Détails |
| --- | --- | --- |
| Téléphone / WhatsApp / Email | `app/page.tsx` (constantes CTA & footer) | Recherchez `tel:+8615014166156` et `wa.me/2250700000000` pour adapter vos coordonnées. |
| Prix du pack | `app/page.tsx` (section Offre & tarif) | Modifiez `50 000 FCFA` et la liste des bénéfices si besoin. |
| Logos / avatars | `public/images/` | Remplacez les SVG/PNG par vos propres visuels (conservez les noms ou mettez à jour les imports). |
| Animation Lottie | `public/lottie/payment.json` | Remplacez par votre animation (format Lottie). |
| Couleurs & tokens | `app/globals.css` / `tailwind.config.ts` | Variables CSS `--bg`, `--brand`, etc. pour ajuster la charte graphique. |

## 🛡️ Accessibilité & UX

- Focus visible (`:focus-visible`) et composants interactifs accessibles (FAQ accordéon ARIA, CTA descriptifs).
- Animations subtiles déclenchées au scroll avec `framer-motion` et parallaxe légère.
- Design responsive (mobile → desktop) avec grande lisibilité (Inter, contrastes AA).

## 📬 Support & suivi

- `app/layout.tsx` contient des commentaires pour intégrer Google Analytics ou Meta Pixel.
- `README.md` sert de guide pour modifier rapidement le contenu, le tarif, les CTA et les visuels.

Bonne mise en production !
