// Renders a captured site image by filename (content data stores bare
// filenames, e.g. "alerts_5067f5a40d.webp"), or a tinted placeholder tile
// when a page references an image the scrape couldn't retrieve — matches
// the design system's documented "11 images not retrievable" gap.
export function SiteImage({ src, alt, className, style, eager }) {
  if (!src) {
    return <div className={"kit_img_ph " + (className || "")} style={style} />;
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element -- captured assets
    // have no known intrinsic dimensions; plain <img> matches the source
    // kit's Img() helper and avoids 130+ hand-measured next/image entries.
    <img
      className={className}
      style={style}
      src={"/assets/img/" + src}
      alt={alt || ""}
      // Lazy-loading an <img> that lives inside a display:none tab panel
      // never fires until the panel becomes visible, so switching tabs
      // shows a blank flash right when the image should already be there.
      // `eager` opts a panel image out of that for exactly this case.
      loading={eager ? "eager" : "lazy"}
      decoding="async"
    />
  );
}
