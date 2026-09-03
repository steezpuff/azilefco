import { ref, watch } from "vue";

export type Theme = "dark" | "light";

const STORAGE_KEY = "theme";

function getInitialTheme(): Theme {
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "dark" || stored === "light") return stored;
  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

const theme = ref<Theme>(getInitialTheme());

watch(
  theme,
  (value) => {
    document.documentElement.dataset.theme = value;
    window.localStorage.setItem(STORAGE_KEY, value);
  },
  { immediate: true },
);

function toggleTheme() {
  theme.value = theme.value === "dark" ? "light" : "dark";
}

export function useTheme() {
  return { theme, toggleTheme };
}
