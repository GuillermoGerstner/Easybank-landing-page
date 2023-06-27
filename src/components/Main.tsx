import { motion } from "framer-motion";
import { BankArticle, BankMotive, GradientButton } from ".";
import { bgIntroMobile, bgIntroDesktop, imageMockups } from "../assets";
import { bankMotives, bankLatestArticles } from "../constants";

const motiveContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,

    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.2,
    },
  },
};

const motiveChild = {
  hidden: { opacity: 0, x: 200 },
  visible: { opacity: 1, x: 0 },
};

const articleContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,

    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.2,
    },
  },
};

const articleChild = {
  hidden: { opacity: 0, y: 200 },
  visible: { opacity: 1, y: 0 },
};

const Main = () => {
  return (
    <main>
      <section className="bg-[#fafafa]">
        <div className="h-full w-full max-w-[1440px] mx-auto flex flex-col md:flex-row-reverse relative">
          <div className="md:h-[656px] md:w-[55.56%] mb-10 md:mb-0 relative">
            <motion.img
              initial={{ x: 400, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              src={bgIntroMobile}
              alt="bgMobile"
              className="md:hidden w-full absolute top-[-64px]"
            />
            <motion.img
              initial={{ x: 1000, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              src={bgIntroDesktop}
              alt="bgDesktop"
              className="hidden md:block absolute top-[-42.38%] left-[20%] xl:left-[-5%] w-[1371px] max-w-none"
            />

            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              src={imageMockups}
              alt="mockups"
              className="absolute top-[-122px] md:top-[-118px] w-11/12 md:w-[732px] max-w-[490px] md:max-w-none left-1/2 md:left-[192px] -translate-x-1/2 md:translate-x-0 z-10"
            />
          </div>
          <div className="mt-[75.6%] md:mt-0 mx-6 md:mx-0 mb-[88px] md:mb-0 md:w-[447px] md:absolute top-[25.92%] left-[11.46%]">
            <motion.h1
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-dark-blue text-center md:text-left text-[40px] md:text-[56px] font-PublicSans font-light tracking-[-0.714px] md:tracking-[-1px]"
            >
              Next generation digital banking
            </motion.h1>
            <motion.p
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-grey text-center md:text-left text-[15px] md:text-[18px] font-PublicSans leading-[25px] md:leading-[28px] tracking-[-0.234px] md:tracking-[-0.281px] mt-4 md:mt-6 mb-8 md:mb-9"
            >
              Take your financial life online. Your Easybank account will be a
              one-stop-shop for spending, saving, budgeting, investing, and much
              more.
            </motion.p>
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <GradientButton
                text="Request Invite"
                styles="block mx-auto md:mx-0"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-[#f4f5f7] px-6 md:px-20 lg:px-[165px] py-16 lg:pt-24 lg:pb-[94px]">
        <div className="max-w-[1110px] mx-auto">
          <motion.h2
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            className="text-dark-blue text-center lg:text-left text-[32px] lg:text-[40px] font-PublicSans font-light tracking-[-0.571px] lg:tracking-[-0.714px] lg:leading-[64px]"
          >
            Why choose Easybank?
          </motion.h2>
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            className="text-grey text-center lg:text-left text-[15px] lg:text-[18px] font-PublicSans leading-[25px] lg:leading-[28px] tracking-[-0.234px] lg:tracking-[-0.281px] mt-[14px] lg:mt-4 mb-14 lg:mb-[72px] max-w-[465px] lg:max-w-[635px] mx-auto lg:mx-0"
          >
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </motion.p>

          <motion.div
            variants={motiveContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col lg:flex-row gap-8 lg:gap-[30px]"
          >
            {bankMotives.map((motive) => (
              <motion.div key={motive.title} variants={motiveChild}>
                <BankMotive {...motive} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-[#fafafa] py-[88px] lg:py-20 px-6 lg:px-[165px]">
        <div className="max-w-[1110px] mx-auto">
          <motion.h4
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            className="text-dark-blue text-center lg:text-left text-[32px] lg:text-[40px] font-PublicSans font-light lg:leading-[64px] tracking-[-0.571px] lg:tracking-[-0.714px]"
          >
            Latest Articles
          </motion.h4>

          <motion.div
            variants={articleContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-[31px] lg:mt-10 grid md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-[30px]"
          >
            {bankLatestArticles.map((article) => (
              <motion.div key={article.title} variants={articleChild}>
                <BankArticle {...article} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Main;
