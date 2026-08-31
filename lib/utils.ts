export function cn(...inputs: (string | undefined | null | false | Record<string, boolean> | (string | undefined | null | false)[])[]): string {
  return inputs
    .flat(Infinity as 1)
    .filter(Boolean)
    .map((item) => {
      if (typeof item === "object" && item !== null) {
        return Object.entries(item)
          .filter(([, value]) => Boolean(value))
          .map(([key]) => key)
          .join(" ");
      }
      return String(item);
    })
    .join(" ");
}
