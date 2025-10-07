"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Button from "./Button";
import Card from "./Card";

const Player = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  { ssr: false }
);

const modules = [
  {
    title: "Alibaba",
    description:
      "Rechercher, filtrer, négocier et sécuriser le paiement avec checklist prête à l'emploi.",
    href: "#formations",
    lottie: "/lottie/payment.json"
  },
  {
    title: "Taobao",
    description:
      "Identifier les meilleures boutiques, lire les avis et maîtriser les tailles & retours.",
    href: "#formations",
    lottie: "/lottie/payment.json"
  },
  {
    title: "1688",
    description:
      "Traduire les fiches, comprendre MOQ/prix usine et éviter les intermédiaires surprises.",
    href: "#formations",
    lottie: "/lottie/payment.json"
  },
  {
    title: "Pinduoduo",
    description:
      "Débusquer les deals cachés, connaître les limites et sécuriser vos commandes groupées.",
    href: "#formations",
    lottie: "/lottie/payment.json"
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 }
};

const SectionFormations = () => {
  return (
    <section id="formations" className="section-padding">
      <div className="container-grid">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-4 inline-flex items-center justify-center rounded-full border border-white/10 px-4 py-1 text-xs uppercase tracking-[0.3em] text-muted">
            Formations express incluses
          </span>
          <h2 className="text-3xl font-semibold text-foreground md:text-4xl">
            Formations express incluses — passez de zéro à pro
          </h2>
          <p className="mt-4 text-muted">
            Quatre modules pragmatiques pour maîtriser Alibaba, Taobao, 1688 et Pinduoduo sans perdre de temps.
          </p>
        </div>
        <motion.div
          className="mt-12 grid gap-6 md:grid-cols-2"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.15, delayChildren: 0.1 }}
        >
          {modules.map((module) => (
            <motion.div key={module.title} variants={cardVariants}>
              <Card className="h-full bg-surface/80">
                <div className="flex h-full flex-col gap-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/15">
                      <Player autoplay loop src={module.lottie} style={{ height: 36, width: 36 }} />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{module.title}</h3>
                  </div>
                  <p className="text-sm text-muted">{module.description}</p>
                  <div className="mt-auto">
                    <Button href={module.href} variant="ghost" className="justify-start px-0 text-sm text-brand hover:text-brand/80">
                      Voir le module →
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SectionFormations;
