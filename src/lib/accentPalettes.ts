export interface AccentPalette {
  accent: string;
  bright: string;
  deep: string;
  ink: string;
  tint: string;
  glow: string;
}

export const accentPalettes: AccentPalette[] = [
  { accent: "#8b7bff", bright: "#ac9fff", deep: "#5a45d6", ink: "#100b26", tint: "#8b7bff1f", glow: "#7c5cff73" },
  { accent: "#7fb0db", bright: "#a3c9e8", deep: "#3d6f96", ink: "#0d151c", tint: "#7fb0db1f", glow: "#4d8ec073" },
  { accent: "#4ddbc0", bright: "#7ff0da", deep: "#1f8f78", ink: "#08201b", tint: "#4ddbc01f", glow: "#2fb99a73" },
  { accent: "#ff8fab", bright: "#ffb3c6", deep: "#c7477a", ink: "#26101a", tint: "#ff8fab1f", glow: "#e8598573" },
  { accent: "#c9a3e0", bright: "#ddc2ef", deep: "#7c4d9e", ink: "#160f1c", tint: "#c9a3e01f", glow: "#9e5fcb73" },
];

export function applyAccentPalette(palette: AccentPalette) {
  const root = document.documentElement.style;
  root.setProperty("--accent", palette.accent);
  root.setProperty("--accent-bright", palette.bright);
  root.setProperty("--accent-deep", palette.deep);
  root.setProperty("--accent-ink", palette.ink);
  root.setProperty("--accent-tint", palette.tint);
  root.setProperty("--accent-glow", palette.glow);
}
