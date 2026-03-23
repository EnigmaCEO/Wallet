type GoalSelectionCardProps = {
  label: string;
  hint: string;
  selected: boolean;
  disabled?: boolean;
  onSelect: () => void;
};

export function GoalSelectionCard({
  label,
  hint,
  selected,
  disabled = false,
  onSelect,
}: GoalSelectionCardProps) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onSelect}
      className={`rounded-[22px] border p-4 text-left transition duration-200 ${
        selected
          ? "scale-[1.01] border-indigo-300/28 bg-primary-soft shadow-[0_0_0_1px_rgba(165,180,252,0.18),0_0_28px_rgba(129,140,248,0.14)]"
          : "border-white/10 bg-white/[0.03] hover:-translate-y-0.5 hover:border-white/18 hover:bg-white/[0.05]"
      } ${disabled ? "cursor-wait opacity-70" : ""}`}
    >
      <p className="font-display text-lg font-semibold text-white">{label}</p>
      {hint ? (
        <p className="mt-1.5 text-sm leading-5 text-text-muted">{hint}</p>
      ) : null}
    </button>
  );
}

