import Navigation from "./Navigation";

export default function Header() {
  return (
    <>
      <div className="fixed inset-x-0 top-0 -z-10 h-75 bg-[url('/image-hero-mobile.jpg')] bg-cover bg-center sm:h-100 sm:bg-[url('/image-hero-desktop.jpg')]">
        <div className="fixed inset-0 top-75 bg-neutral-50 sm:top-100"></div>
        <div className="from-shade-900 to-shade-50 h-32 bg-linear-to-b" />
      </div>

      <div className="flex items-center justify-between px-6 pt-8 pb-19 sm:px-41.25 sm:pt-12 sm:pb-15">
        <img className="z-50" src="logo.svg" alt="Crowdfunding page logo" />
        <Navigation />
      </div>
    </>
  );
}
