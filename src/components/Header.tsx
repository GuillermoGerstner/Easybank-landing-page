import { useState } from "react";
import { GradientButton } from ".";
import { logo } from "../assets";
import { navbarLinks } from "../constants";
import { motion } from "framer-motion";
import { HeaderProps } from "../types";

const linkSelectedVariants = {
  show: { y: -4 },
  hide: { y: 0 },
};

const modalNavbarVariants = {
  openTop: { rotate: 45, y: 5 },

  /* openMiddle: { opacity: 0 }, */
  /* openMiddle: { x: 50 }, */
  openMiddle: { scale: 0 },

  openBottom: { rotate: -45, y: -5 },
};

const linkContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,

    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.1,
    },
  },
};

const linkChild = {
  hidden: { y: -100 },
  visible: { y: 0 },
};

const Header = ({ modalOpened, setModalOpened }: HeaderProps) => {
  const [linkHovered, setLinkHovered] = useState<number>(0);

  return (
    <header className="bg-white relative z-50">
      <div className="px-6 lg:px-[165px] py-[22px] md:py-0 max-w-[1440px] mx-auto flex items-center justify-between overflow-hidden">
        <motion.img
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          src={logo}
          alt="logo"
          className="h-5"
        />

        <motion.nav
          variants={linkContainer}
          initial="hidden"
          animate="visible"
          className="hidden md:flex gap-[30px] relative overflow-hidden"
        >
          {navbarLinks.map((link) => (
            <motion.div
              variants={linkChild}
              key={link.position}
              className="h-20 flex items-center"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{
                  scale: 0.95,
                }}
                href={link.url}
                className="font-PublicSans font-normal text-[14px] leading-4 tracking-[-0.107692px] text-grey cursor-pointer hover:text-dark-blue"
                onMouseEnter={() => setLinkHovered(link.position)}
                onMouseLeave={() => setLinkHovered(0)}
              >
                {link.title}
              </motion.a>
            </motion.div>
          ))}

          <motion.div
            animate={linkHovered === 1 ? "show" : "hide"}
            variants={linkSelectedVariants}
            className={`absolute bottom-[-4px] gradientLimeGreen h-1 w-[38.16px] left-0`}
          />
          <motion.div
            animate={linkHovered === 2 ? "show" : "hide"}
            variants={linkSelectedVariants}
            className={`absolute bottom-[-4px] gradientLimeGreen h-1 w-[39.22px] left-[68.16px]`}
          />
          <motion.div
            animate={linkHovered === 3 ? "show" : "hide"}
            variants={linkSelectedVariants}
            className={`absolute bottom-[-4px] gradientLimeGreen h-1 w-[50.44px] left-[137.38px]`}
          />
          <motion.div
            animate={linkHovered === 4 ? "show" : "hide"}
            variants={linkSelectedVariants}
            className={`absolute bottom-[-4px] gradientLimeGreen h-1 w-[29.44px] left-[217.82px]`}
          />
          <motion.div
            animate={linkHovered === 5 ? "show" : "hide"}
            variants={linkSelectedVariants}
            className={`absolute bottom-[-4px] gradientLimeGreen h-1 w-[50.27px] left-[277.26px]`}
          />
        </motion.nav>

        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <GradientButton text="Request Invite" styles="hidden md:block" />
        </motion.div>

        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.1 }}
          className="md:hidden w-6 h-[11px] flex flex-col justify-between cursor-pointer"
          onClick={() => setModalOpened(!modalOpened)}
        >
          <motion.div
            animate={modalOpened === true ? "openTop" : ""}
            variants={modalNavbarVariants}
            className="w-6 h-[1px] bg-[#2c314c]"
          />
          <motion.div
            animate={modalOpened === true ? "openMiddle" : ""}
            variants={modalNavbarVariants}
            className="w-6 h-[1px] bg-[#2c314c]"
          />
          <motion.div
            animate={modalOpened === true ? "openBottom" : ""}
            variants={modalNavbarVariants}
            className="w-6 h-[1px] bg-[#2c314c]"
          />
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
