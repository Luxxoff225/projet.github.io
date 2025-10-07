"use client";

import { motion } from "framer-motion";
import MagneticButton from "@/components/MagneticButton";
import GlowBackground from "@/components/GlowBackground";
import ParallaxImage from "@/components/ParallaxImage";
import Card from "@/components/Card";
import StepCard from "@/components/StepCard";
import PricingCard from "@/components/PricingCard";
import FAQItem from "@/components/FAQItem";
import Badge from "@/components/Badge";
import Button from "@/components/Button";
import FeatureCard from "@/components/FeatureCard";
import Stats from "@/components/Stats";
import LogoWall from "@/components/LogoWall";
import SectionFormations from "@/components/SectionFormations";
import Image from "next/image";

const fadeContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18
    }
  }
};

const fadeItem = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const heroBadges = ["Inspection en Chine", "Paiements sécurisés", "Support 7j/7"];

const problems = [
  {
    title: "Faux fournisseurs",
    description: "Difficile de vérifier une usine à distance : photos volées, catalogues mensongers et arnaques aux acomptes.",
    icon: "❌"
  },
  {
    title: "Paiements bloqués",
    description: "Vos comptes bancaires ne parlent pas Alipay ou WeChat Pay : transfert impossible, délais interminables.",
    icon: "⛔"
  },
  {
    title: "Langue & délais",
    description: "Fuseaux horaires, mandarin et incoterms : la communication se tend, les expéditions dérapent.",
    icon: "🕑"
  }
];

const solutions = [
  {
    title: "Vérification & shortlist",
    description: "Sourcing terrain, validation documentaire et fournisseurs mis en concurrence sur prix, MOQ et délais.",
    icon: "✅"
  },
  {
    title: "Pont de paiement",
    description: "Vous réglez en MTN / Orange / Wave / Cash (CFA), nous payons votre fournisseur via Alipay, WeChat Pay ou virement CNY.",
    icon: "💳"
  },
  {
    title: "Accompagnement complet",
    description: "Négociation, inspection photo/vidéo et expédition Air 5–7 j · Mer 45–60 j avec suivi jusqu'à réception.",
    icon: "🤝"
  }
];

const services = [
  {
    title: "Sourcing (Chine)",
    description:
      "Recherche, validation et mise en concurrence sur prix, MOQ et délais. Rapports clairs, traductions incluses.",
    icon: "🧭"
  },
  {
    title: "Paiement fournisseurs",
    description:
      "Client : MTN, Orange, Wave, Cash (CFA). Fournisseur : Alipay, WeChat Pay ou virement bancaire CNY avec preuve immédiate.",
    icon: "💱"
  },
  {
    title: "Accompagnement end-to-end",
    description:
      "Négociation, inspection photo/vidéo, expédition Air 5–7 j ou Mer 45–60 j, tracking et assistance jusqu'à Abidjan.",
    icon: "🚀"
  }
];

const process = [
  {
    title: "Brief",
    description: "Produit, quantités, budget, délais : nous cadrons vos besoins et les spécifications clés.",
    icon: "📝"
  },
  {
    title: "Devis",
    description: "Shortlist fournisseurs, proforma traduite et recommandation du meilleur scénario d'achat.",
    icon: "📊"
  },
  {
    title: "Paiement",
    description: "Vous réglez en CFA, nous payons votre fournisseur en CNY avec justificatifs instantanés.",
    icon: "🔁"
  },
  {
    title: "Expédition",
    description: "Inspection photo/vidéo, envoi Air 5–7 j ou Mer 45–60 j et suivi complet jusqu'à réception.",
    icon: "✈️"
  }
];

const testimonials = [
  {
    quote: "Paiement local, fournisseur réglé via Alipay : simple et rapide. J'ai reçu la preuve de virement en moins de 10 minutes.",
    name: "K.Y., Abidjan",
    avatar: "/images/avatar-amelie.svg"
  },
  {
    quote: "MOQ négocié, délais tenus, preuve de virement CNY. Leur équipe est présente à chaque étape.",
    name: "M.D., Bouaké",
    avatar: "/images/avatar-lucas.svg"
  },
  {
    quote: "Accompagnement clair jusqu'à la livraison : inspection photo et tracking du container jusqu'au port de Dakar.",
    name: "A.S., Dakar",
    avatar: "/images/avatar-samia.svg"
  }
];

const faqs = [
  {
    question: "Comment payer depuis l'Afrique ?",
    answer: "Vous payez votre pack et vos commandes via MTN Mobile Money, Orange Money, Wave ou en espèces (CFA) dans nos points relais sécurisés."
  },
  {
    question: "Comment payez-vous le fournisseur ?",
    answer: "Nous utilisons Alipay, WeChat Pay ou un virement bancaire CNY. Chaque paiement est confirmé par reçu officiel et capture écran instantanée."
  },
  {
    question: "Quels sont les délais ?",
    answer: "Transport aérien estimé 5 à 7 jours ouvrés après paiement fournisseur. Transport maritime estimé 45 à 60 jours selon la ligne."
  },
  {
    question: "Que couvre le pack 50 000 FCFA ?",
    answer:
      "Méthodologie sourcing, création comptes Alipay & WeChat, formations Alibaba/Taobao/1688/Pinduoduo, sourcing & validation fournisseur, exécution du paiement, négociation de base, inspection simple et suivi expédition jusqu'à réception."
  },
  {
    question: "Quels frais ne sont pas inclus ?",
    answer: "Le coût des produits, du transport international, des douanes, de l'assurance et des options d'inspection avancées sont devisés séparément."
  },
  {
    question: "Comment gérez-vous la qualité et les litiges ?",
    answer: "Inspection photo/vidéo systématique, options QC avancées sur demande et assistance litige directement auprès du fournisseur."
  },
  {
    question: "Montant maximum par paiement ?",
    answer: "Nous conseillons selon la méthode choisie (MTN, Orange, Wave ou Cash) et segmentons les paiements si nécessaire pour respecter les plafonds."
  },
  {
    question: "Contact rapide ?",
    answer: "Appelez le +86 15014166156 ou écrivez-nous sur WhatsApp au lien proposé : réponse garantie sous 12 h."
  }
];

const stats = [
  { value: 850, prefix: "+", label: "produits sourcés" },
  { value: 98, suffix: "%", label: "paiements confirmés en moins de 2 heures" },
  { value: "Air 5–7 j · Mer 45–60 j", label: "temps moyens d'expédition" }
];

export default function HomePage() {
  return (
    <main className="relative flex flex-col gap-28 pb-24">
      <section className="relative overflow-hidden pt-28">
        <GlowBackground className="hero-gradient" />
        <div className="container-grid relative z-10 grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            className="space-y-10"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex flex-wrap items-center gap-3">
              {heroBadges.map((badge) => (
                <Badge key={badge} className="bg-white/10 text-foreground">
                  {badge}
                </Badge>
              ))}
            </div>
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold leading-tight text-foreground md:text-5xl lg:text-6xl">
                Achetez en Chine, payez en local.
              </h1>
              <p className="max-w-xl text-lg text-muted">
                Sourcing vérifié, inspection, expédition — vous payez en <strong>MTN / ORANGE / WAVE / CASH (CFA)</strong>, nous réglons votre fournisseur via <strong>Alipay / WeChat Pay / virement CNY</strong>. Air <strong>5–7 j</strong>, Mer <strong>45–60 j</strong>.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <MagneticButton href="tel:+8615014166156" className="min-w-[220px] justify-center">
                Parler à un conseiller
              </MagneticButton>
              <Button
                href="mailto:contact@acheterenchine-afrique.com"
                variant="secondary"
                className="min-w-[220px] justify-center"
              >
                Écrire un e-mail
              </Button>
              <MagneticButton
                href="https://wa.me/2250700000000?text=Bonjour%20je%20veux%20en%20savoir%20plus%20sur%20le%20pack%20AcheterEnChine-Afrique"
                variant="whatsapp"
                className="min-w-[220px] justify-center"
              >
                WhatsApp
              </MagneticButton>
            </div>
            <div className="grid grid-cols-1 gap-4 text-sm text-muted sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <span className="text-foreground">+86 15014166156</span>
                <p className="mt-1">Conseiller basé à Guangzhou</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <span className="text-foreground">contact@acheterenchine-afrique.com</span>
                <p className="mt-1">Réponse garantie sous 12 h</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <span className="text-foreground">WhatsApp direct</span>
                <p className="mt-1">Disponibilité 7j/7</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
            className="relative"
          >
            <ParallaxImage
              src="/images/mockup-dashboard.svg"
              alt="Tableau de bord Paiements & Fournisseurs AcheterEnChine-Afrique"
              width={880}
              height={820}
              priority
            />
            <div className="absolute -bottom-10 left-1/2 w-[85%] -translate-x-1/2 rounded-2xl border border-white/10 bg-surface/90 px-6 py-4 text-sm text-muted shadow-soft">
              Flux paiement : CFA → Alipay / WeChat / CNY · Preuve envoyée instantanément.
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-grid">
          <motion.div
            className="grid gap-12 lg:grid-cols-2"
            initial="hidden"
            whileInView="show"
            variants={fadeContainer}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="space-y-6">
              <motion.h2 className="text-3xl font-semibold text-foreground md:text-4xl" variants={fadeItem}>
                Les obstacles récurrents
              </motion.h2>
              <motion.p className="text-muted" variants={fadeItem}>
                Nous opérons directement depuis la Chine pour sécuriser vos achats et éviter les pièges classiques.
              </motion.p>
              <motion.div className="grid gap-4" variants={fadeContainer}>
                {problems.map((item) => (
                  <FeatureCard key={item.title} title={item.title} description={item.description} icon={item.icon} tone="negative" />
                ))}
              </motion.div>
            </div>
            <div className="space-y-6">
              <motion.h3 className="text-3xl font-semibold text-foreground md:text-4xl" variants={fadeItem}>
                Notre réponse terrain
              </motion.h3>
              <motion.p className="text-muted" variants={fadeItem}>
                Un pack unique qui combine sourcing, paiement et logistique, avec un interlocuteur francophone 7j/7.
              </motion.p>
              <motion.div className="grid gap-4" variants={fadeContainer}>
                {solutions.map((item) => (
                  <FeatureCard key={item.title} title={item.title} description={item.description} icon={item.icon} tone="positive" />
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-grid">
          <div className="mx-auto max-w-2xl text-center">
            <span className="mb-4 inline-flex items-center justify-center rounded-full border border-white/10 px-4 py-1 text-xs uppercase tracking-[0.3em] text-muted">
              Services inclus
            </span>
            <h2 className="text-3xl font-semibold text-foreground md:text-4xl">Trois piliers pour sécuriser vos achats</h2>
            <p className="mt-4 text-muted">
              Un seul pack pour être opérationnel : sourcing vérifié, paiement fournisseur et accompagnement logistique jusqu'à réception.
            </p>
          </div>
          <motion.div
            className="mt-12 grid gap-6 md:grid-cols-3"
            initial="hidden"
            whileInView="show"
            variants={fadeContainer}
            viewport={{ once: true, amount: 0.2 }}
          >
            {services.map((service) => (
              <motion.div key={service.title} variants={fadeItem}>
                <Card className="h-full bg-surface/80">
                  <div className="flex h-full flex-col gap-5">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/15 text-xl">
                      {service.icon}
                    </span>
                    <div className="space-y-3">
                      <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
                      <p className="text-sm text-muted">{service.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-grid space-y-12">
          <div className="max-w-2xl">
            <span className="mb-4 inline-flex items-center justify-center rounded-full border border-white/10 px-4 py-1 text-xs uppercase tracking-[0.3em] text-muted">
              Comment ça marche ?
            </span>
            <h2 className="text-3xl font-semibold text-foreground md:text-4xl">
              Votre pack en 4 étapes maîtrisées
            </h2>
          </div>
          <motion.div
            className="grid gap-6 md:grid-cols-2"
            initial="hidden"
            whileInView="show"
            variants={fadeContainer}
            viewport={{ once: true, amount: 0.2 }}
          >
            {process.map((step, index) => (
              <motion.div key={step.title} variants={fadeItem}>
                <StepCard step={index + 1} title={step.title} description={step.description} icon={step.icon} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-padding" id="offre">
        <div className="container-grid">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-flex items-center justify-center rounded-full border border-white/10 px-4 py-1 text-xs uppercase tracking-[0.3em] text-muted">
              Offre & tarif
            </span>
            <h2 className="text-3xl font-semibold text-foreground md:text-4xl">
              Pack Service Unique — 50 000 FCFA
            </h2>
            <p className="mt-4 text-muted">
              Un paiement unique pour sécuriser votre première importation Chine → Afrique avec un interlocuteur francophone sur place.
            </p>
          </div>
          <div className="mt-12 grid justify-center">
            <PricingCard
              featured
              title="Pack complet"
              price="50 000 FCFA"
              description="Tout pour sourcer, payer et expédier depuis la Chine avec un accompagnement de bout en bout."
              features={[
                "B-A-BA du sourcing Chine → Afrique",
                "Création comptes Alipay & WeChat",
                "Formations Alibaba, Taobao, 1688, Pinduoduo",
                "Sourcing + validation fournisseur",
                "Exécution paiement fournisseur (Alipay/WeChat/CNY)",
                "Négociation de base (prix, MOQ, délais)",
                "Inspection photo/vidéo simple",
                "Suivi expédition Air 5–7 j / Mer 45–60 j"
              ]}
              cta={{ label: "Démarrer maintenant", href: "tel:+8615014166156" }}
              secondaryCta={{
                label: "WhatsApp",
                href: "https://wa.me/2250700000000?text=Je%20souhaite%20m%27inscrire%20au%20pack%20AcheterEnChine-Afrique"
              }}
            />
          </div>
        </div>
      </section>

      <SectionFormations />

      <section className="section-padding">
        <div className="container-grid">
          <Stats
            items={stats.map((stat) =>
              typeof stat.value === "number"
                ? { value: stat.value, prefix: stat.prefix, suffix: stat.suffix, label: stat.label }
                : { value: stat.value, label: stat.label }
            )}
          />
        </div>
      </section>

      <section className="section-padding">
        <div className="container-grid space-y-12">
          <div className="mx-auto max-w-2xl text-center">
            <span className="mb-4 inline-flex items-center justify-center rounded-full border border-white/10 px-4 py-1 text-xs uppercase tracking-[0.3em] text-muted">
              Confiance
            </span>
            <h2 className="text-3xl font-semibold text-foreground md:text-4xl">
              Ils utilisent notre pont Chine → Afrique
            </h2>
          </div>
          <LogoWall />
        </div>
      </section>

      <section className="section-padding">
        <div className="container-grid">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-flex items-center justify-center rounded-full border border-white/10 px-4 py-1 text-xs uppercase tracking-[0.3em] text-muted">
              Témoignages
            </span>
            <h2 className="text-3xl font-semibold text-foreground md:text-4xl">
              Les clients parlent de leur importation réussie
            </h2>
          </div>
          <motion.div
            className="mt-12 grid gap-6 md:grid-cols-3"
            initial="hidden"
            whileInView="show"
            variants={fadeContainer}
            viewport={{ once: true, amount: 0.2 }}
          >
            {testimonials.map((testimonial) => (
              <motion.div key={testimonial.name} variants={fadeItem}>
                <Card className="h-full bg-surface/80">
                  <div className="flex h-full flex-col gap-6">
                    <p className="text-sm text-foreground/90">“{testimonial.quote}”</p>
                    <div className="mt-auto flex items-center gap-3">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="h-12 w-12 rounded-full border border-white/10"
                      />
                      <div>
                        <p className="text-sm font-semibold text-foreground">{testimonial.name}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-padding" id="faq">
        <div className="container-grid space-y-12">
          <div className="mx-auto max-w-2xl text-center">
            <span className="mb-4 inline-flex items-center justify-center rounded-full border border-white/10 px-4 py-1 text-xs uppercase tracking-[0.3em] text-muted">
              FAQ
            </span>
            <h2 className="text-3xl font-semibold text-foreground md:text-4xl">
              Questions fréquentes
            </h2>
            <p className="mt-4 text-muted">
              Nous couvrons toutes les étapes de la chaîne d'achat. Besoin d'une réponse personnalisée ? Contactez-nous directement.
            </p>
          </div>
          <motion.div
            className="grid gap-4"
            initial="hidden"
            whileInView="show"
            variants={fadeContainer}
            viewport={{ once: true, amount: 0.2 }}
          >
            {faqs.map((faq) => (
              <motion.div key={faq.question} variants={fadeItem}>
                <FAQItem question={faq.question} answer={faq.answer} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-surface/70">
        <div className="container-grid grid gap-12 py-16 md:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground">
              Prêt à sécuriser vos achats Chine → Afrique ?
            </h3>
            <p className="text-muted">
              Rejoignez les entrepreneurs africains qui sourcent en confiance grâce à notre présence terrain et à notre pont de paiement.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <MagneticButton href="tel:+8615014166156" className="min-w-[220px] justify-center">
                Parler à un conseiller
              </MagneticButton>
              <Button
                href="https://wa.me/2250700000000?text=Bonjour%20je%20veux%20en%20savoir%20plus%20sur%20le%20pack%20AcheterEnChine-Afrique"
                variant="whatsapp"
                className="min-w-[220px] justify-center"
              >
                WhatsApp immédiat
              </Button>
            </div>
          </div>
          <div className="space-y-6">
            <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-muted">Newsletter</h4>
            <p className="text-sm text-muted">
              Recevez nos checklists sourcing et alertes logistiques Chine → Afrique.
            </p>
            <form className="flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                required
                placeholder="Votre e-mail professionnel"
                className="w-full rounded-full border border-white/10 bg-surfaceMuted/80 px-5 py-3 text-sm text-foreground placeholder:text-muted focus:border-brand focus:outline-none"
              />
              <Button type="submit" className="justify-center">
                S'inscrire
              </Button>
            </form>
            <div className="grid grid-cols-2 gap-4 text-sm text-muted sm:grid-cols-3">
              <a href="#offre" className="hover:text-brand">
                Offre
              </a>
              <a href="#formations" className="hover:text-brand">
                Formations
              </a>
              <a href="#faq" className="hover:text-brand">
                FAQ
              </a>
              <a href="mailto:contact@acheterenchine-afrique.com" className="hover:text-brand">
                Email
              </a>
              <a href="tel:+8615014166156" className="hover:text-brand">
                Téléphone
              </a>
              <a href="https://www.linkedin.com" className="hover:text-brand">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/5 py-6 text-center text-xs text-muted">
          © {new Date().getFullYear()} AcheterEnChine-Afrique — Tous droits réservés.
        </div>
      </footer>
    </main>
  );
}
