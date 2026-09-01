import { useEffect, useRef } from "react";

export function CursorFX() {
  const glowRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let gx = 0;
    let gy = 0;
    let visible = false;

    const onMove = (e: PointerEvent) => {
      gx = e.clientX;
      gy = e.clientY;
      if (!visible) {
        visible = true;
        glowRef.current?.style.setProperty("opacity", "1");
        dotRef.current?.style.setProperty("opacity", "1");
      }
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const t = `translate(${gx}px, ${gy}px) translate(-50%, -50%)`;
        if (glowRef.current) glowRef.current.style.transform = t;
        if (dotRef.current) dotRef.current.style.transform = t;
      });
    };

    const interactiveSelector = "a, button, [role='button']";
    const onOver = (e: PointerEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.closest(interactiveSelector);
      if (dotRef.current) {
        dotRef.current.style.width = isInteractive ? "26px" : "14px";
        dotRef.current.style.height = isInteractive ? "26px" : "14px";
      }
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerover", onOver, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", onOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        ref={glowRef}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[1] hidden size-[34rem] rounded-full opacity-0 transition-opacity duration-500 md:block"
        style={{
          background: "radial-gradient(circle, var(--accent-tint) 0%, transparent 60%)",
          willChange: "transform",
        }}
      />
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[90] hidden rounded-full border border-accent opacity-0 transition-[width,height,opacity] duration-200 md:block"
        style={{ width: 14, height: 14, willChange: "transform" }}
      />
    </>
  );
}
