// Symbols set no colours: shapes paint with currentColor (`text-*` on <Icon>),
// and the circles of bookmark and check inherit `fill` (`fill-*` on <Icon>).
export default function IconSprite() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="hidden">
      <symbol id="bookmark" viewBox="0 0 56 56">
        <circle cx="28" cy="28" r="28" />
        <path fill="currentColor" d="M23 19v18l5-5.058L33 37V19z" />
      </symbol>
      <symbol id="check" viewBox="0 0 90 90">
        <circle cx="45" cy="45" r="45" />
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          transform="translate(4 4) scale(1.3)"
          d="M20 31.86L28.093 40 44 24"
        />
      </symbol>
      <symbol id="close-menu" viewBox="0 0 14 15">
        <g fill="currentColor" fillRule="evenodd">
          <path d="M2.404.782l11.314 11.314-2.122 2.122L.282 2.904z" />
          <path d="M.282 12.096L11.596.782l2.122 2.122L2.404 14.218z" />
        </g>
      </symbol>
      <symbol id="close-modal" viewBox="0 0 15 15">
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M11.314 0l2.828 2.828L9.9 7.071l4.243 4.243-2.828 2.828L7.07 9.9l-4.243 4.243L0 11.314 4.242 7.07 0 2.828 2.828 0l4.243 4.242L11.314 0z"
        />
      </symbol>
      <symbol id="hamburger" viewBox="0 0 16 15">
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M0 0h16v3H0zM0 6h16v3H0zM0 12h16v3H0z"
        />
      </symbol>
    </svg>
  );
}
