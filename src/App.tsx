import BackProjectDialog from "./components/BackProjectDialog";
import Header from "./components/Header";
import IconSprite from "./components/IconSprite";
import ProductAbout from "./components/ProductAbout";
import ProductHeader from "./components/ProductHeader";
import ProductInfo from "./components/ProductInfo";
import ThankYou from "./components/ThankYou";
import ModalProvider from "./contexts/ModalProvider";
import ProductProvider from "./contexts/ProductProvider";

function App() {
  return (
    <div className="flex min-h-screen flex-col gap-29 sm:gap-45">
      <IconSprite />
      <Header />
      <ProductProvider>
        <main className="mx-6 mb-19 self-center sm:mb-31">
          <article className="flex w-full flex-col gap-6 sm:max-w-182.5">
            <ModalProvider>
              <ProductHeader />
              <ProductInfo />
              <ProductAbout />

              <BackProjectDialog />
              <ThankYou />
            </ModalProvider>
          </article>
        </main>
      </ProductProvider>
    </div>
  );
}

export default App;
