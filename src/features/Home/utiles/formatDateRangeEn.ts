export function formatDateRangeEn(fromStr: string, toStr: string): string {
  const from = new Date(fromStr);
  const to = new Date(toStr);

  const dayFrom = from.getDate();
  const monthFrom = from.toLocaleDateString("en-US", { month: "short" });

  const dayTo = to.getDate();
  const monthTo = to.toLocaleDateString("en-US", { month: "short" });

  if (monthFrom === monthTo) {
    return `${monthFrom} ${dayFrom}-${dayTo}`;
  } else {
    return `${monthFrom} ${dayFrom} - ${monthTo} ${dayTo}`;
  }
}
