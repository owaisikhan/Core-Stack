// One module, one name per glyph — matches the source site's chrome-only
// inline SVG usage (nav caret, drawer close X, FAQ plus/minus, submenu
// arrows). Nothing here is a generic icon-library substitute.

export function CaretIcon({ className }) {
  return (
    <svg className={className} width="11" height="7" viewBox="0 0 11 7" fill="none" aria-hidden="true">
      <path
        d="M1.02148 0.888916L5.53718 5.56381L7.79503 3.22636L10.0529 0.888916"
        stroke="#000"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SubArrow({ className }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

export function SubmenuArrow({ className }) {
  return (
    <svg
      className={"submenu-arrow " + (className || "")}
      width="6"
      height="10"
      viewBox="0 0 6 10"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="1 1 5 5 1 9" />
    </svg>
  );
}

export function CloseIcon({ className }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

export function PlusIcon({ className }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M19.3336 9.66703V10.3336C19.3336 10.7018 19.0352 11.0003 18.667 11.0003H11.0003V18.667C11.0003 19.0351 10.7018 19.3336 10.3336 19.3336H9.66702C9.29882 19.3336 9.00032 19.0351 9.00032 18.667V11.0003H1.33366C0.965473 11.0003 0.666992 10.7018 0.666992 10.3336V9.66703C0.666992 9.29883 0.965473 9.00033 1.33366 9.00033H9.00032V1.33365C9.00032 0.965463 9.29882 0.666992 9.66702 0.666992H10.3336C10.7018 0.666992 11.0003 0.965463 11.0003 1.33365V9.00033H18.667C19.0352 9.00033 19.3336 9.29883 19.3336 9.66703Z"
        fill="#2A2A2A"
      />
    </svg>
  );
}

export function MinusIcon({ className }) {
  return (
    <svg className={className} width="24" height="4" viewBox="0 0 24 4" fill="none" aria-hidden="true">
      <path d="M2 2L22 2" stroke="black" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}
