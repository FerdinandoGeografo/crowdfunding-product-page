import Navigation from "./Navigation";

export default function Header() {
  return (
    <>
      <div className="absolute inset-x-0 top-0 -z-10 h-75 bg-[url('/image-hero-mobile.jpg')] bg-cover bg-center sm:h-100 sm:bg-[url('/image-hero-desktop.jpg')]">
        <div className="from-shade-900 to-shade-50 h-32 bg-linear-to-b" />
      </div>

      <header className="flex items-center justify-between px-6 pt-8 pb-19 sm:px-[clamp(1.5rem,11.46vw,10.3125rem)] sm:pt-12 sm:pb-15">
        <img className="z-50" src="/logo.svg" alt="Crowdfunding page logo" />
        <Navigation />
      </header>
    </>
  );
}
