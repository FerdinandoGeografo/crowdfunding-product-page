import BackProjectForm from "./components/BackProjectForm";
import Header from "./components/Header";
import Modal from "./components/Modal";
import ProductAbout from "./components/ProductAbout";
import ProductHeader from "./components/ProductHeader";
import ProductInfo from "./components/ProductInfo";
import ThankYou from "./components/ThankYou";
import ProductProvider from "./contexts/ProductProvider";

function App() {
  return (
    <div className="flex min-h-screen flex-col gap-29 sm:gap-45">
      <Header />
      <ProductProvider>
        <main className="mx-6 mb-19 self-center sm:mx-0 sm:mb-31">
          <article className="flex w-full flex-col gap-6 sm:max-w-182.5">
            <Modal>
              <ProductHeader />
              <ProductInfo />
              <ProductAbout />

              <Modal.Window name="back-project">
                <BackProjectForm />
              </Modal.Window>

              <Modal.Window name="thank-you" showClose={false}>
                <ThankYou />
              </Modal.Window>
            </Modal>
          </article>
        </main>
      </ProductProvider>
    </div>
  );
}

export default App;
