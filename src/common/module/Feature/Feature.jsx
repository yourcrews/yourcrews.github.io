'use client'
import Button from "@/common/component/element/Button";
import Card from "@/common/component/element/Card";
import ComponentTransition from "@/common/component/element/ComponentTransition";
import SectionHeading from "@/common/component/element/SectionHeading";
import Link from "next/link";
import React, { useEffect } from "react";
import { AiFillSliders } from "react-icons/ai";
import { ServiceItem } from "@/common/constant/Service";
import Prism from "prismjs";

export default function Feature() {
  useEffect(() => {
    // Initialize PrismJS to highlight all code blocks
    Prism.highlightAll();
  }, []);

  return (
    <div className="h-auto max-w-[1500px]  px-10 xl:px-20 pb-20">
      <ComponentTransition className="flex justify-center py-5">
        <SectionHeading title="Our product" icon={<AiFillSliders size={30} />} />
      </ComponentTransition>
      <ComponentTransition
        delay={0.1}
        className="flex justify-center items-center flex-col"
      >
        <h1 className="text-3xl md:text-5xl py-5 text-center bg-clip-text dark:bg-gradient-to-r from-white from-50% to-[#8f8f8f]  bg-text md:w-[50%] text-transparent font-bold">
          We provide clean, human-validated data in four lines of code
        </h1>
        <p className="text-base md:text-2xl text-center text-neutral-500 dark:text-neutral-300">
          Make data quality a "set and forget" process with our API
          
        </p>
        <div className="w-full max-w-3xl mx-auto my-8 overflow-hidden rounded-lg dark:bg-[#272822] bg-gray-100 p-4">
          <pre className="language-python !m-0">
            <code className="text-sm md:text-base !font-mono">
              {`BASE_URL = "https://api.usesieve.com"
response = requests.post(f'{BASE_URL}/api/v1/process', headers=headers, json={
    "document_type": "pdf",
    "metadata": {
        "url": "https://www.cecafe.com.br/site/wp-content/uploads/2023/03/CECAFE-Monthly-Coffee-Report-JANUARY-2025.pdf",
        'data_points': ['Coffee export volume in most recent period (USD)']
    }
})`}
            </code>
          </pre>
        </div>
      </ComponentTransition>
      <Card Content={ServiceItem} />

      {/* <ComponentTransition className="w-full md:flex-row flex-col items-center flex justify-center gap-3">
        <Link href="/solution" className="w-full rounded-full">
          <Button
            title="View All Solution"
            className="hover:!bg-neutral-950 hover:dark:!bg-neutral-100 transition-colors !rounded-full duration-300 overflow-hidden !bg-transparent outline outline-1 dark:outline-white outline-neutral-950 dark:!text-white !text-black w-full py-5"
          />
        </Link>
      </ComponentTransition> */}
    </div>
  );
}
