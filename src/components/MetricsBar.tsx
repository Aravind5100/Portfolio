interface Metric {
  label: string;
  value: string;
}

export function MetricsBar({ metrics }: { metrics: Metric[] }) {
  if (!metrics.length) return null;
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      {metrics.map((m) => (
        <div
          key={m.label}
          className="rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 text-center dark:border-neutral-700 dark:bg-neutral-800/50"
        >
          <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{m.value}</p>
          <p className="mt-1 text-xs font-medium text-neutral-500 dark:text-neutral-400">
            {m.label}
          </p>
        </div>
      ))}
    </div>
  );
}
