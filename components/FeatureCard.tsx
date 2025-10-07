import Card from "./Card";

export type FeatureCardProps = {
  title: string;
  description: string;
  icon: string;
  tone?: "positive" | "negative";
};

const toneClasses: Record<NonNullable<FeatureCardProps["tone"]>, string> = {
  positive: "bg-brand/15 text-brand",
  negative: "bg-red-400/10 text-red-200"
};

const FeatureCard = ({ title, description, icon, tone = "positive" }: FeatureCardProps) => {
  return (
    <Card className="bg-surface/70">
      <div className="flex flex-col gap-5">
        <span
          className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl text-xl font-medium ${
            toneClasses[tone]
          }`}
          aria-hidden
        >
          {icon}
        </span>
        <div>
          <h3 className="text-lg font-semibold text-foreground">{title}</h3>
          <p className="mt-2 text-sm text-muted">{description}</p>
        </div>
      </div>
    </Card>
  );
};

export default FeatureCard;
