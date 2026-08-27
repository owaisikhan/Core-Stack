"use client";

import { useRef, useState, useEffect, useCallback } from "react";

// Wraps a horizontally-scrolling row (site CSS already sets overflow-x:auto
// and cursor:grab on these — .typ_stories, .new_icon_block.scroll_effect —
// but the source kit never wired up any way to actually move it). Renders
// click-to-scroll prev/next buttons using the site's own captured carousel
// arrow icons, plus drag-to-scroll with the mouse, matching the grab cursor
// the design already promises. An earlier version hijacked the mouse wheel
// too, but that fought the page's own scroll once the row hit either end —
// buttons only, now.
export function ScrollRow({ className, children }) {
  const ref = useRef(null);
  const drag = useRef(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const updateEdges = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    updateEdges();
    const el = ref.current;
    if (!el) return;
    const onScroll = () => updateEdges();
    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [updateEdges]);

  function scrollByCard(direction) {
    const el = ref.current;
    if (!el) return;
    const card = el.firstElementChild;
    const amount = card ? card.getBoundingClientRect().width + 20 : el.clientWidth * 0.8;
    el.scrollBy({ left: direction * amount, behavior: "smooth" });
  }

  function onPointerDown(e) {
    const el = ref.current;
    if (!el) return;
    drag.current = { startX: e.clientX, startScroll: el.scrollLeft };
    el.setPointerCapture(e.pointerId);
  }

  function onPointerMove(e) {
    const el = ref.current;
    if (!el || !drag.current) return;
    el.scrollLeft = drag.current.startScroll - (e.clientX - drag.current.startX);
  }

  function onPointerUp() {
    drag.current = null;
  }

  return (
    <div className="kit_scroll_row_wrap">
      <div
        ref={ref}
        className={className}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
      >
        {children}
      </div>
      <div className="kit_scroll_arrows">
        <button
          type="button"
          className="kit_scroll_arrow"
          aria-label="Scroll left"
          disabled={!canPrev}
          onClick={() => scrollByCard(-1)}
        >
          <img src="/assets/icons/arrow-prev.png" alt="" />
        </button>
        <button
          type="button"
          className="kit_scroll_arrow"
          aria-label="Scroll right"
          disabled={!canNext}
          onClick={() => scrollByCard(1)}
        >
          <img src="/assets/icons/arrow-next.png" alt="" />
        </button>
      </div>
    </div>
  );
}
