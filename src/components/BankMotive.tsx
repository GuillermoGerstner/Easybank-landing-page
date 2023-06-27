import { motion } from "framer-motion";
import { BankMotiveProps } from "../types";

const BankMotive = ({ image, title, description }: BankMotiveProps) => {
  return (
    <motion.article whileHover={{ scale: 1.05 }}>
      <img
        src={image}
        alt="icon"
        className="w-[22.02%] max-w-[100px] lg:w-[72px] mx-auto lg:mx-0"
      />
      <h3 className="text-dark-blue text-center lg:text-left text-[20px] lg:text-[24px] font-PublicSans font-light leading-[28px] tracking-[-0.357px] lg:tracking-[-0.429px] mt-6 lg:mt-10 mb-4 lg:mb-[26px]">
        {title}
      </h3>
      <p className="text-grey text-center lg:text-left text-[15px] lg:text-[16px] font-PublicSans leading-[25px] lg:leading-[26px] tracking-[-0.234px] lg:tracking-[-0.25px] max-w-[465px] lg:max-w-[255px] mx-auto lg:mx-0">
        {description}
      </p>
    </motion.article>
  );
};

export default BankMotive;
