import Card from "./Card";

export type StepCardProps = {
  step: number;
  title: string;
  description: string;
  icon?: string;
};

const StepCard = ({ step, title, description, icon }: StepCardProps) => {
  return (
    <Card className="bg-surface/80">
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/20 text-lg font-semibold text-brand">
            {step}
          </div>
          {icon && (
            <span className="text-2xl" aria-hidden>
              {icon}
            </span>
          )}
        </div>
        <div>
          <h4 className="text-lg font-semibold text-foreground">{title}</h4>
          <p className="mt-2 text-sm text-muted">{description}</p>
        </div>
      </div>
    </Card>
  );
};

export default StepCard;
