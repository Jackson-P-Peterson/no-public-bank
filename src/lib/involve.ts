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

export const INVOLVE_WANT_KEY = "involveWant";

export function subscribeInvolveWant(onStoreChange: () => void) {
  window.addEventListener("hashchange", onStoreChange);
  window.addEventListener("popstate", onStoreChange);
  return () => {
    window.removeEventListener("hashchange", onStoreChange);
    window.removeEventListener("popstate", onStoreChange);
  };
}

export function getClientWantKey() {
  try {
    const stored = sessionStorage.getItem(INVOLVE_WANT_KEY);
    if (stored) return stored;
  } catch {
    // ignore
  }
  return parseWantFromLocation(window.location)[0] ?? "";
}

export function parseWantFromLocation(loc: {
  search: string;
  hash: string;
}): InvolveIntent[] {
  const fromQuery = parseWantParam(
    new URLSearchParams(loc.search).get("want") ?? undefined,
  );
  if (fromQuery.length) return fromQuery;
  const hash = loc.hash.replace(/^#/, "");
  if (hash === "act" || hash === "") return [];
  const hashWant = hash.startsWith("act=")
    ? hash.slice(4)
    : hash.startsWith("act/")
      ? hash.slice(4)
      : hash;
  return parseWantParam(hashWant);
}

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

export function withDefaultUpdates(intents: InvolveIntent[]): InvolveIntent[] {
  const selected = new Set<InvolveIntent>(intents);
  selected.add("updates");
  return INVOLVE_CHOICES.map((choice) => choice.id).filter((id) =>
    selected.has(id),
  );
}
