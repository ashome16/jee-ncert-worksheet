export type AppliedItem = {
  kind: "concept" | "technique" | "skill";
  name: string;
  inScene: string;
};

export type ApplyBrief = {
  hook: string;
  setting: string;
  paragraph: string;
  applied: AppliedItem[];
  linkBack: string;
};

const FALLBACK: Record<string, ApplyBrief> = {
  "force-friction-and-pressure": {
    hook: "The tunnel crew has to keep the boring face from slumping.",
    setting: "Delhi Metro underground drive",
    paragraph:
      "A tunnel-boring machine pushes on wet clay 18 m below a road. The same shove spread over a wide cutter head keeps pressure low enough that the wall holds. If the head were half as wide, that pressure would double and the clay could squeeze in. Walkers on the site need friction on their boots; grease on the rails is there so unused friction does not waste the motor.",
    applied: [
      { kind: "concept", name: "Pressure = force / area", inScene: "Same push, smaller cutter → higher pressure on the clay." },
      { kind: "concept", name: "Friction opposes slip", inScene: "Boots grip; greased rails let the machine slide where you want motion." },
      { kind: "technique", name: "Compare areas before you compare pressure", inScene: "Halving the head area doubles pressure if force stays the same." },
      { kind: "skill", name: "Sense-check the size of the number", inScene: "18 m depth and a wide head should feel like a modest pressure, not a spike." },
    ],
    linkBack: "Same ideas as the pressure and friction items you just marked.",
  },
};

export function applyFallbackForSlug(slug?: string): ApplyBrief | null {
  if (!slug) return null;
  return FALLBACK[slug] ?? null;
}