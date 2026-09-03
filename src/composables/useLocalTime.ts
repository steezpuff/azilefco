import { onMounted, onUnmounted, ref } from "vue";

function formatManila(date: Date) {
  return new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Manila",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(date);
}

export function useLocalTime() {
  const time = ref(formatManila(new Date()));
  let id: ReturnType<typeof setInterval> | undefined;

  onMounted(() => {
    id = setInterval(() => {
      time.value = formatManila(new Date());
    }, 1000);
  });

  onUnmounted(() => {
    clearInterval(id);
  });

  return time;
}
