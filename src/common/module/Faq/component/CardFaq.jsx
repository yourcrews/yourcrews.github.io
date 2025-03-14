import Buttons from "@/common/component/element/Buttons";
import ComponentTransition from "@/common/component/element/ComponentTransition";
import FaqAccordian from "@/common/component/element/FaqAccordian";
import Image from "@/common/component/element/Image";
import React from "react";
import { FaPiedPiper } from "react-icons/fa";

const CardFaq = () => {
  return (
    <div className="py-10 flex w-full justify-center flex-row relative flex-wrap">
      <div className="absolute  z-[-9] glowbg w-[100%] md:w-[600px] h-[400px] top-[50px]"></div>
      <FaqAccordian />

      <ComponentTransition className="border-[1px] border-neutral-600 rounded-3xl max-md:flex-col flex">
        <div className="w-full h-auto md:h-[400px] md:basis-[50%] overflow-hidden  max-md:rounded-t-3xl  lg:rounded-tl-3xl lg:rounded-bl-3xl ">
          <Image
            // src="/robot.jpg"
            src="https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Header Image"
            width={400}
            height={400}
            loading="lazy"
            className="w-full object-cover md:top-[-20px] relative"
          />
        </div>
        <div className="w-full px-5 lg:px-10 py-5 md:basis-[50%] h-[400px] bg-neutral-50 dark:bg-neutral-950/50   rounded-br-3xl rounded-tr-3xl">
          <FaPiedPiper size={50} />
          <h1 className="text-2xl font-bold py-2 text-neutral-800 dark:text-neutral-300">
            Get started now
          </h1>
          <p className="text-base mb-10 text-neutral-700 mt-5 max-xl:line-clamp-5 dark:text-neutral-300">
            Sign up to start using the API and make manual data cleaning a thing of the past
          </p>
          <Buttons className="!px-10 " title="Get started" />
        </div>
      </ComponentTransition>
    </div>
  );
};

export default CardFaq;
