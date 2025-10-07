import Card from "./Card";
import Badge from "./Badge";
import Button from "./Button";

export type PricingCardProps = {
  title: string;
  price: string;
  description?: string;
  features: string[];
  featured?: boolean;
  cta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

const PricingCard = ({
  title,
  price,
  description,
  features,
  featured,
  cta,
  secondaryCta
}: PricingCardProps) => {
  return (
    <Card
      className={`relative overflow-hidden border border-white/10 ${
        featured ? "bg-white/[0.06]" : "bg-surface"
      }`}
    >
      {featured && (
        <div className="absolute right-8 top-8">
          <Badge className="bg-brand text-brand-ink shadow-none">Populaire</Badge>
        </div>
      )}
      <div className="flex flex-col gap-8">
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold text-foreground">{title}</h3>
          {description && <p className="text-sm text-muted">{description}</p>}
          <div className="flex items-baseline gap-2 text-foreground">
            <span className="text-4xl font-bold">{price}</span>
          </div>
        </div>
        <ul className="flex flex-col gap-3 text-sm text-foreground/80">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-2.5 w-2.5 flex-shrink-0 rounded-full bg-brand" aria-hidden />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href={cta.href} className="w-full justify-center text-center">
            {cta.label}
          </Button>
          {secondaryCta && (
            <Button
              href={secondaryCta.href}
              variant="secondary"
              className="w-full justify-center text-center"
            >
              {secondaryCta.label}
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};

export default PricingCard;
