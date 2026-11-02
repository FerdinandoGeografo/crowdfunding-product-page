export default function Footer() {
  return (
    <footer className="pb-8 text-center text-xs text-neutral-700">
      Coded by{" "}
      <a
        className="relative font-bold text-primary-800 outline-hidden after:absolute after:-bottom-px after:left-0 after:h-px after:w-full after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:after:scale-x-100 focus-visible:after:scale-x-100"
        href="https://github.com/FerdinandoGeografo"
        target="_blank"
        rel="noopener noreferrer"
      >
        Ferdinando Geografo
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    </footer>
  );
}
