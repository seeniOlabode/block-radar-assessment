import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";
import useMeasure from "react-use-measure";
import { useLockBodyScroll } from "@custom-react-hooks/use-lock-body-scroll";

import Logo from "@/assets/blockradar-logo.svg";
import "./Header.scss";

const menuItems = [
  { name: "Use Cases", links: [] },
  { name: "Security Overview", links: [] },
  { name: "Developers", links: ["projects", "time"] },
  { name: "Resources", links: ["time", "slo"] },
  { name: "Company", links: ["members"] },
];

const LARGE_SIZE = 1024;

function Header() {
  const [headerOpen, setHeaderOpen] = useState(false);

  const [ref, bounds] = useMeasure();
  let currentListener;

  function toggleHeaderOpen() {
    setHeaderOpen((value) => {
      if (!value) {
        currentListener = window.addEventListener("resize", () => {
          if (window.innerWidth >= LARGE_SIZE) {
            setHeaderOpen(false);
            currentListener?.();
          }
        });
      } else {
        currentListener?.();
      }

      return !value;
    });
  }

  useLockBodyScroll(headerOpen);

  return (
    <>
      <>
        <header className="c-header c-header__desktop hidden lg:flex fixed top-0 px-4 pr-2">
          <div className="c-header__top-content">
            <a
              className="logo h-10 w-fit flex items-center"
              href="javascript:void(0)"
            >
              <img src={Logo} alt="Blockradar Logo" />
            </a>

            <nav className="c-nav">
              {menuItems.map((item, i) => {
                return (
                  <a
                    className="c-link"
                    href={`javascript:void(0)`}
                    key={item.name}
                  >
                    {item.name}

                    {item.links.length ? (
                      <svg
                        className="c-link__dropdown"
                        width="17"
                        height="16"
                        viewBox="0 0 17 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.30507 7.60875L8.03174 9.33542C8.29174 9.59542 8.71174 9.59542 8.97174 9.33542L10.6984 7.60875C11.1184 7.18875 10.8184 6.46875 10.2251 6.46875H6.77174C6.17841 6.46875 5.88507 7.18875 6.30507 7.60875Z"
                          fill="white"
                          fill-opacity="0.8"
                        />
                      </svg>
                    ) : null}

                    <span className="c-link__highlighter"></span>
                  </a>
                );
              })}
            </nav>

            <div className="button-container flex gap-4">
              <button className="c-button smug secondary--bare bare--hover">
                Log in
              </button>
              <button className="c-button primary--foreground smug c-button__foreground">
                Sign up
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.75 6.75L19.25 12L13.75 17.25M19 12H4.75"
                    stroke="#191A1A"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          <nav className="c-header__bottom-content"></nav>
        </header>
      </>

      <>
        <AnimatePresence>
          <motion.header
            animate={{
              height: bounds.height && headerOpen ? bounds.height : 54,
            }}
            transition={{
              duration: headerOpen ? 0.4 : 0.3,
              ease: headerOpen ? [0.77, 0, 0.175, 1] : [0.42, 0, 0.58, 1],
            }}
            className="c-header c-header__mobile my-3 fixed top-0 left-0 right-0 lg:hidden overflow-hidden max-w-md mx-auto"
          >
            <div ref={ref}>
              <div className="mobile-top flex items-center justify-between w-full px-4 pl-5">
                <a
                  className="logo h-10 w-fit flex items-center"
                  href="javascript:void(0)"
                >
                  <img src={Logo} alt="Blockradar Logo" />
                </a>

                <button
                  onClick={toggleHeaderOpen}
                  className="c-header__button h-10 w-10 flex items-center justify-center translate-x-2 active:scale-95 transition-transform"
                >
                  <svg
                    style={{ display: headerOpen ? null : "none" }}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 6L6 18M6 6L18 18"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <svg
                    style={{ display: headerOpen ? "none" : null }}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.75 5.75H19.25M4.75 18.25H19.25M4.75 12H19.25"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>

              <AnimatePresence>
                {headerOpen ? (
                  <div className="mobile-header-content mt-3 flex flex-col justify-between p-5 pt-0">
                    <nav className="flex flex-col">
                      {menuItems.map((item, i, array) => {
                        return (
                          <motion.a
                            key={item.name + i}
                            initial={{ opacity: 0 }}
                            animate={{
                              opacity: 1,
                              duration: 0.2,
                              transition: { delay: (i + 1) * 0.07 },
                            }}
                            exit={{
                              opacity: 0,
                              duration: 0.025,
                            }}
                            transition={{ type: "spring", bounce: 0 }}
                            className="c-link !pl-3 !h-10 !justify-between"
                            href={"javascript:void(0)"}
                          >
                            {item.name}

                            {item.links.length ? (
                              <svg
                                className="c-link__dropdown"
                                width="17"
                                height="16"
                                viewBox="0 0 17 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M6.30507 7.60875L8.03174 9.33542C8.29174 9.59542 8.71174 9.59542 8.97174 9.33542L10.6984 7.60875C11.1184 7.18875 10.8184 6.46875 10.2251 6.46875H6.77174C6.17841 6.46875 5.88507 7.18875 6.30507 7.60875Z"
                                  fill="white"
                                  fill-opacity="0.8"
                                />
                              </svg>
                            ) : null}

                            <span className="c-link__highlighter"></span>
                          </motion.a>
                        );
                      })}
                    </nav>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                        transition: {
                          type: "tween",
                          duration: 0.45,
                          delay: menuItems.length * 0.08,
                          ease: [0.23, 1, 0.32, 1],
                        },
                      }}
                      exit={{
                        opacity: 0,
                        transition: { duration: 0.05 },
                      }}
                      className="flex flex-col gap-1 mt-10"
                    >
                      <button className="c-button smug secondary--bare bare--hover !h-10 mobile-secondary">
                        Log in
                      </button>
                      <button className="c-button primary--foreground smug c-button__foreground !h-10">
                        Sign up
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.75 6.75L19.25 12L13.75 17.25M19 12H4.75"
                            stroke="#191A1A"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </button>
                    </motion.div>
                  </div>
                ) : null}
              </AnimatePresence>
            </div>
          </motion.header>
        </AnimatePresence>

        <AnimatePresence>
          {headerOpen ? (
            <motion.div
              onClick={toggleHeaderOpen}
              transition={{ duration: 0.5 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mobile-backdrop lg:hidden"
            ></motion.div>
          ) : null}
        </AnimatePresence>
      </>
    </>
  );
}

export default Header;
