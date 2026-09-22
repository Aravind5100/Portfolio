interface Metric {
  label: string;
  value: string;
}

export function MetricsBar({ metrics }: { metrics: Metric[] }) {
  if (!metrics.length) return null;
  return (
    <div className="grid grid-cols-2 gap-6 border-t border-b border-border py-6 sm:grid-cols-4">
      {metrics.map((m) => (
        <div key={m.label}>
          <p className="font-mono text-xl text-ink">{m.value}</p>
          <p className="mt-1 text-sm text-muted">{m.label}</p>
        </div>
      ))}
    </div>
  );
}
