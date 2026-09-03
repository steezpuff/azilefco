import { onUnmounted, ref, watch } from "vue";

const TYPE_SPEED = 70;
const DELETE_SPEED = 40;
const HOLD_MS = 1600;

export function useTypewriter(words: string[]) {
  const wordIndex = ref(0);
  const text = ref("");
  const phase = ref<"typing" | "holding" | "deleting">("typing");
  let timer: ReturnType<typeof setTimeout> | undefined;

  function step() {
    const current = words[wordIndex.value % words.length];

    if (phase.value === "typing") {
      if (text.value.length < current.length) {
        timer = setTimeout(() => {
          text.value = current.slice(0, text.value.length + 1);
        }, TYPE_SPEED);
      } else {
        timer = setTimeout(() => {
          phase.value = "holding";
        }, HOLD_MS);
      }
      return;
    }

    if (phase.value === "holding") {
      timer = setTimeout(() => {
        phase.value = "deleting";
      }, 0);
      return;
    }

    if (text.value.length > 0) {
      timer = setTimeout(() => {
        text.value = current.slice(0, text.value.length - 1);
      }, DELETE_SPEED);
    } else {
      wordIndex.value = (wordIndex.value + 1) % words.length;
      phase.value = "typing";
    }
  }

  watch([text, phase, wordIndex], () => {
    clearTimeout(timer);
    step();
  });
  step();

  onUnmounted(() => clearTimeout(timer));

  return text;
}
