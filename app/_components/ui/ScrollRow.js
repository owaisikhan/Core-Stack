"use client";

import { useRef } from "react";

// Wraps a horizontally-scrolling row (site CSS already sets overflow-x:auto
// and cursor:grab on these — .typ_stories, .new_icon_block.scroll_effect —
// but the source kit never wired up the scrolling itself). Vertical mouse
// wheel input scrolls the row sideways, and the row is also drag-to-scroll
// with the mouse, matching the grab cursor the design already promises.
export function ScrollRow({ className, children }) {
  const ref = useRef(null);
  const drag = useRef(null);

  function onWheel(e) {
    const el = ref.current;
    if (!el || el.scrollWidth <= el.clientWidth) return;
    e.preventDefault();
    el.scrollLeft += e.deltaY + e.deltaX;
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
    <div
      ref={ref}
      className={className}
      onWheel={onWheel}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp}
    >
      {children}
    </div>
  );
}
