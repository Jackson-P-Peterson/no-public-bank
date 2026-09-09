export const INVOLVE_CHOICES = [
  { id: "volunteer", label: "Volunteer" },
  { id: "endorse", label: "Endorse" },
  { id: "sign", label: "Get A Sign" },
  { id: "updates", label: "Get Updates" },
] as const;

export type InvolveIntent = (typeof INVOLVE_CHOICES)[number]["id"];

export const INVOLVE_INTENTS: Record<InvolveIntent, string> = {
  volunteer: "Volunteer",
  endorse: "Endorse",
  sign: "Get A Sign",
  updates: "Get Updates",
};

const INTENT_IDS = new Set<string>(INVOLVE_CHOICES.map((choice) => choice.id));

export function parseWantParam(
  value: string | string[] | undefined,
): InvolveIntent[] {
  const raw = Array.isArray(value) ? value.join(",") : (value ?? "");
  const selected = new Set<InvolveIntent>();
  for (const part of raw.split(/[+,]/)) {
    const key = part.trim().toLowerCase().replace(/\s+/g, "-");
    const id =
      key === "get-a-sign" || key === "sign"
        ? "sign"
        : key === "get-updates" || key === "updates"
          ? "updates"
          : key;
    if (INTENT_IDS.has(id)) selected.add(id as InvolveIntent);
  }
  return INVOLVE_CHOICES.map((choice) => choice.id).filter((id) =>
    selected.has(id),
  );
}
