const GlowBackground = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      <div className="absolute -top-24 -left-20 h-80 w-80 rounded-full bg-[rgba(var(--glow1),0.32)] blur-3xl animate-blob" />
      <div className="absolute top-1/2 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[rgba(var(--glow2),0.26)] blur-3xl animate-blob [animation-delay:6s]" />
      <div className="absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-[rgba(var(--glow1),0.2)] blur-3xl animate-blob [animation-delay:12s]" />
    </div>
  );
};

export default GlowBackground;
