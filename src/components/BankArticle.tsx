import { useState } from "react";
import { motion } from "framer-motion";
import { BankArticleProps } from "../types";

const BankArticle = ({
  image,
  owner,
  title,
  description,
}: BankArticleProps) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <motion.article
      whileHover={{ scale: 1.02 }}
      whileTap={{
        scale: 1.0,
      }}
      className="max-w-[327px] lg:max-w-[255px] bg-white rounded-[5px] overflow-hidden cursor-pointer mx-auto"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <img src={image} alt="image" className="w-full h-[200px]" />
      <p className="text-grey text-[10px] font-PublicSans leading-[18px] tracking-[-0.156px] mt-[25px] ml-[31px] lg:ml-6">
        {owner}
      </p>
      <h5
        className={`text-[16px] font-PublicSans font-light leading-5 tracking-[-0.286px] my-2 mx-[31px] lg:mx-6 ${
          isHovered ? "text-lime-green" : "text-dark-blue"
        }`}
      >
        {title}
      </h5>
      <p className="text-grey text-[13px] font-PublicSans leading-[18px] tracking-[-0.203px] mt-2 mx-[31px] lg:mx-6 mb-6">
        {description}
      </p>
    </motion.article>
  );
};

export default BankArticle;
