import Image from "next/image";

const logos = [
  { src: "/images/logo-altair.svg", alt: "Altair" },
  { src: "/images/logo-celestia.svg", alt: "Celestia" },
  { src: "/images/logo-lumina.svg", alt: "Lumina" },
  { src: "/images/logo-orion.svg", alt: "Orion" },
  { src: "/images/logo-polaris.svg", alt: "Polaris" },
  { src: "/images/logo-zenith.svg", alt: "Zenith" }
];

const LogoWall = () => {
  return (
    <div className="glass-surface">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 px-6 py-10 opacity-70 sm:grid-cols-3 md:grid-cols-6">
        {logos.map((logo) => (
          <div key={logo.alt} className="flex items-center justify-center">
            <Image src={logo.src} alt={logo.alt} width={140} height={60} className="h-10 w-auto opacity-80" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoWall;
