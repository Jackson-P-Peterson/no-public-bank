export const CONTRIBUTION_RULES_PATH = "/contribution-rules";

export const DONATE_PRESETS = [25, 50, 100, 250, 500, 1000] as const;

export const MIN_CENTS = 100;
export const MAX_CENTS = 100_000_00;

export function parseAmountCents(value: unknown): number | null {
  const cents = Number(value);
  if (!Number.isInteger(cents) || cents < MIN_CENTS || cents > MAX_CENTS) {
    return null;
  }
  return cents;
}
