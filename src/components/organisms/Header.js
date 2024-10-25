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
  const [activeTab, setActiveTab] = useState(null);

  const [ref, bounds] = useMeasure();
  let currentListener;

  function toggleHeaderOpen() {
    setHeaderOpen((value) => {
      if (!value) {
        currentListener = window.addEventListener("resize", () => {
          if (window.innerWidth >= 1024) {
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
            <a className="logo h-10 w-fit flex items-center" href="/">
              <img src={Logo} alt="Blockradar Logo" />
            </a>

            <nav className="c-nav" onMouseLeave={() => setActiveTab(null)}>
              {menuItems.map((item, i) => {
                return (
                  <a
                    onFocus={() => setActiveTab(i)}
                    onMouseOver={() => setActiveTab(i)}
                    onMouseLeave={() => setActiveTab(i)}
                    className="c-link"
                    href={`void(0)`}
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
              <button className="c-button smug secondary--bare">Log in</button>
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
        <div className="c-header__center-wrapper">
          <AnimatePresence initial={false}>
            <motion.header
              animate={{ height: bounds.height ? bounds.height + 4 : null }}
              transition={{
                duration: 0.4,
                ease: [0.215, 0.61, 0.355, 1],
              }}
              className="c-header c-header__mobile my-3 fixed top-0 left-0 right-0 lg:hidden overflow-hidden max-w-md mx-auto"
            >
              <div ref={ref} className="px-4 pl-5">
                <div className="mobile-top flex items-center justify-between w-full">
                  <a className="logo h-10 w-fit flex items-center" href="/">
                    <img src={Logo} alt="Blockradar Logo" />
                  </a>

                  <button
                    onClick={toggleHeaderOpen}
                    className="c-header__button h-10 w-10 flex items-center justify-center translate-x-2 "
                  >
                    {headerOpen ? (
                      <motion.svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                      >
                        <path
                          d="M18 6L6 18M6 6L18 18"
                          stroke="white"
                          stroke-opacity="0.3"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </motion.svg>
                    ) : (
                      <motion.svg
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.75 5.75H19.25M4.75 18.25H19.25M4.75 12H19.25"
                          stroke="#858B8A"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </motion.svg>
                    )}
                  </button>
                </div>

                {headerOpen ? (
                  <div className="mobile-header-content mt-3 flex flex-col justify-between pb-6">
                    <nav className="flex flex-col">
                      <AnimatePresence>
                        {menuItems.map((item, i, arrayLength) => {
                          return (
                            <motion.a
                              key={item.name + i}
                              initial={{ opacity: 0 }}
                              animate={{
                                opacity: 1,
                                duration: 0.2,
                                transition: { delay: i * 0.1 },
                              }}
                              transition={{ type: "spring", bounce: 0 }}
                              className="c-link !pl-3 !h-10 !justify-between"
                              href={"void(0)"}
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
                      </AnimatePresence>
                    </nav>
                    <div className="flex flex-col gap-1 mt-6">
                      <motion.button
                        initial={{ opacity: 0 }}
                        animate={{
                          opacity: 1,
                          duration: 0.2,
                          transition: { delay: menuItems.length * 0.05 },
                        }}
                        transition={{ type: "spring", bounce: 0 }}
                        className="c-button smug secondary--bare !h-10 mobile-secondary"
                      >
                        Log in
                      </motion.button>
                      <motion.button
                        initial={{ opacity: 0 }}
                        animate={{
                          opacity: 1,
                          duration: 0.2,
                          transition: { delay: (menuItems.length + 1) * 0.05 },
                        }}
                        transition={{ type: "spring", bounce: 0 }}
                        className="c-button primary--foreground smug c-button__foreground !h-10"
                      >
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
                      </motion.button>
                    </div>
                  </div>
                ) : null}
              </div>
            </motion.header>
          </AnimatePresence>
        </div>

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
