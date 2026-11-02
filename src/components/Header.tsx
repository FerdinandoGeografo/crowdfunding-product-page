import Navigation from "./Navigation";

export default function Header() {
  return (
    <>
      <div className="absolute inset-x-0 top-0 -z-10 h-75 bg-hero bg-cover bg-center sm:h-100">
        <div className="h-32 bg-linear-to-b from-shade-900 to-shade-50" />
      </div>

      <header className="px-6 pt-8 pb-19 sm:pt-12 sm:pb-15">
        <div className="mx-auto flex max-w-277.5 items-center justify-between">
          <img
            className="z-50"
            src="/logo.svg"
            alt="crowdfund"
            width="128"
            height="20"
          />
          <Navigation />
        </div>
      </header>
    </>
  );
}
