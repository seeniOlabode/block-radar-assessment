import "./App.scss";
import LandingPage from "./assets/dashboard-page-dark.png";

import Header from "./components/organisms/Header";
import Logos from "./components/organisms/Logos";

function App() {
  return (
    <div className="c-app">
      <Header />
      <main className="c-main text-center">
        <div className="c-hero pt-40 sm:pt-52 px-[var(--bleed-margin)]">
          <div className="max-w-screen-md mx-auto">
            <h1 className="heading-1 discrete-block">
              Seamless stablecoin deposits and payments for your fintech app
            </h1>
            <p className="subtitle discrete-block">
              Empower your customers with secure, non-custodial stablecoin
              deposits and payments using our easy-to-integrate wallet
              infrastructure.
            </p>

            <div className="button-container mt-8 sm:mt-16 flex flex-col gap-3 sm:flex-row sm:justify-center discrete-block">
              <button className="c-button primary large">Sign up now!</button>
              <button className="c-button secondary large">
                Explore our API docs
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.75 15.25V6.75H9.25M17.5 7L7.25 17.25"
                    stroke="white"
                    stroke-opacity="0.5"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="image-container mt-36 max-w-5xl mx-auto">
            {/* wrapper for preventing layout shift */}
            <div className="img-wrapper">
              <img
                className="discrete-block hero-img"
                src={LandingPage}
                alt="Blockradar Dashboard Landing Page"
              />
            </div>

            <div className="c-hero__background">
              <div className="circles">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div className="plus">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="radar"></div>
              <div className="nucleus"></div>

              <div className="hits">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
        <Logos />
      </main>
    </div>
  );
}

export default App;
