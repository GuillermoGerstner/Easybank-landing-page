import { motion } from "framer-motion";
import { GradientButton } from ".";
import { logoWhite } from "../assets";
import { socialLinks, footerLinks } from "../constants";

const footerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,

    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};

const socialMediaChild = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
};

const footerLinkChild = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
};

const Footer = () => {
  return (
    <motion.footer
      variants={footerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="bg-dark-blue px-[76px] lg:px-[165px] py-10 lg:py-12 relative z-50 overflow-hidden"
    >
      <div className="relative max-w-[1110px] mx-auto flex flex-col lg:flex-row lg:items-center">
        <div className="mb-8 lg:mb-0 lg:h-fit">
          <motion.img
            variants={socialMediaChild}
            src={logoWhite}
            alt="logo"
            className="h-5 mx-auto lg:ml-0"
          />

          <div className="mt-8 lg:mt-[55px] flex items-center gap-4 lg:gap-[13.33px] w-fit md:w-auto md:justify-between mx-auto md:mx-24 lg:mx-0">
            {socialLinks.map((link) => (
              <motion.a
                href={link.url}
                key={link.id}
                whileHover={{ scale: 1.1 }}
                whileTap={{
                  scale: 0.95,
                }}
                variants={socialMediaChild}
              >
                <img
                  src={link.image}
                  alt={link.id}
                  className="w-6 lg:w-5 cursor-pointer toWhite hover:filter-none"
                />
              </motion.a>
            ))}
          </div>
        </div>

        <nav className="grid md:grid-cols-6 lg:grid-cols-2 gap-2 lg:w-[31.54%] lg:ml-[11.81%]">
          {footerLinks.map((link) => (
            <motion.a
              href={link.url}
              key={link.title}
              variants={footerLinkChild}
              whileHover={{ scale: 1.05 }}
              whileTap={{
                scale: 0.95,
              }}
              className="font-PublicSans font-normal text-[15px] leading-[26px] text-center tracking-[-0.234375px] text-white hover:text-lime-green cursor-pointer w-fit mx-auto lg:ml-0"
            >
              {link.title}
            </motion.a>
          ))}
        </nav>

        <div className="mt-8 lg:mt-0 lg:absolute lg:right-0">
          <motion.div variants={footerLinkChild}>
            <GradientButton
              text="Request Invite"
              styles="block mx-auto lg:ml-[57px]"
            />
          </motion.div>

          <motion.p
            variants={footerLinkChild}
            className="font-PublicSans font-normal text-[15px] leading-[26px] text-center tracking-[-0.234375px] text-white mix-blend-normal opacity-50 mt-6 w-fit mx-auto"
          >
            © Easybank. All Rights Reserved
          </motion.p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
