import { useState, useEffect } from "react";
import { Header, Main, Footer } from "./components";
import { navbarLinks } from "./constants";
import { motion } from "framer-motion";

const App = () => {
  const [modalOpened, setModalOpened] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 768) {
        setModalOpened(false);
      }
    });
  }, []);

  const modalNavbarVariants = {
    modalBackgroundHidden: { opacity: 0 },
    modalBackgroundVisible: { opacity: 1 },

    modalMenuHidden: { opacity: 0, x: -400 },
    modalMenuVisible: {
      opacity: 1,
      x: 0,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const modalLinksChild = {
    modalMenuHidden: { opacity: 0, x: 400 },
    modalMenuVisible: { opacity: 1, x: 0 },
  };

  return (
    <div className={`overflow-hidden ${modalOpened ? "h-[100vh]" : ""}`}>
      <motion.div
        animate={
          modalOpened === true
            ? "modalBackgroundVisible"
            : "modalBackgroundHidden"
        }
        variants={modalNavbarVariants}
        className={`gradientDarkBlue w-full absolute top-0 left-0 z-50 overflow-hidden h-[100vh] pt-16 ${
          modalOpened ? "" : "hidden"
        }`}
      >
        <motion.div
          animate={
            modalOpened === true ? "modalMenuVisible" : "modalMenuHidden"
          }
          variants={modalNavbarVariants}
          className="bg-white mx-6 mt-6 h-[265px] rounded py-8 flex flex-col justify-between"
        >
          {navbarLinks.map((link) => (
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{
                scale: 0.95,
              }}
              variants={modalLinksChild}
              href={link.url}
              key={link.position}
              className="text-dark-blue hover:text-lime-green text-center text-[18px] font-PublicSans tracking-[-0.138px] w-fit mx-auto"
            >
              {link.title}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      <Header modalOpened={modalOpened} setModalOpened={setModalOpened} />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
