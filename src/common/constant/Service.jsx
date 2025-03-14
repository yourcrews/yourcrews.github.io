import { CiShop } from "react-icons/ci";
import { FaConnectdevelop, FaPager, FaPiedPiper } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { IoIosSchool } from "react-icons/io";
import { IoDiamondOutline } from "react-icons/io5";
import { MdAnimation } from "react-icons/md";
import { MdOutlineAutoAwesomeMotion } from "react-icons/md";

const size = 35

export const Services = [
  {
    icon: (
      <FaConnectdevelop
        size={size}
        className="group-hover:rotate-90 transition-all duration-300"
        
      />
    ),
    title: "Can I try the service before paying?",
    desc: "Yes! Contact us at hello@usesieve.com to get set up.",
  },
  {
    icon: (
      <MdAnimation
        size={size}
        className="group-hover:rotate-90 transition-all duration-300"
      />
    ),
    title: "How can I be sure that the data is accurate?",
    desc: "We use the most performant AI models supplemented with human review to ensure the right information every time. Contact us for a demo to see for yourself!",
  },
  {
    icon: (
      <MdOutlineAutoAwesomeMotion
        size={size}
        className="group-hover:rotate-90 transition-all duration-300"
      />
    ),
    title: "I have a specific/niche use case - will sieve work for that?",
    desc: "Yes! We're happpy to build out custom integrations - contact us for more info.",
  },
];

export const ServiceItem = [
  // {
  //   title: 'Intuitive Dashboard Design',
  //   desc: 'Experience an intuitive dashboard design that simplifies navigation and provides at-a-glance insights',
  //   icon : <FaPager className="h-12 w-12 mb-4 dark:text-white text-black " />
  // },
  // {
  //   title: 'Seamless Integration Across Tools',
  //   desc: 'Teaser ensures seamless integration across a variety of essential tools, promoting a cohesive workflow that effortlessly connects your SaaS and startup solutions.',
  //   icon : <ImProfile className="h-12 w-12 mb-4 dark:text-white text-black " />
  // },
  // {
  //   title: 'Adaptive Scalability for Growing Ventures',
  //   desc: ' Teaser offers adaptive scalability, catering to the evolving needs of startups',
  //   icon : <IoDiamondOutline className="h-12 w-12 mb-4 dark:text-white text-black " />
  // },
  // {
  //   title: 'Collaboration Hubs for Team Synergy',
  //   desc: 'Foster team synergy with collaboration hubs in Teaser. Enhance communication',
  //   icon : <CiShop className="h-12 w-12 mb-4 dark:text-white text-black " />
  // },
  // {
  //   title: 'Customizable Workflows for Your Unique Needs',
  //   desc: 'Tailor Teaser to match your specific workflows',
  //   icon : <IoIosSchool className="h-12 w-12 mb-4 dark:text-white text-black " />
  // },
  // {
  //   title: 'User-Friendly Onboarding and Training',
  //   desc: 'Teaser ensures a smooth onboarding process with user-friendly interfaces and comprehensive training resources.',
  //   icon : <FaPiedPiper className="h-12 w-12 mb-4 dark:text-white text-black " />
  // },

];

