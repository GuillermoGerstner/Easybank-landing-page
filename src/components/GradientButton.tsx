import { motion } from "framer-motion";
import { GradientButtonProps } from "../types";

const GradientButton = ({ text, styles }: GradientButtonProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{
        scale: 0.95,
      }}
      className={`cursor-pointer py-2 px-[34px] gradientLimeGreen rounded-[22px] font-PublicSans font-bold text-[14px] leading-[28px] text-white hover:opacity-40 ${styles}`}
    >
      {text}
    </motion.button>
  );
};

export default GradientButton;
