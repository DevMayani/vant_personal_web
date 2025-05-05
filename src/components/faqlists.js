import React, { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Image from "next/image";
import Arrow from "../../public/assets/arrow-down.svg";
import Vector from "../../public/assets/Vector.svg";

const faqData = [
  {
    question: "What is Vant for Business?",
    answer: "Vant for Business is an all-in-one web solution offering seamless financial management for business.",
  },
  {
    question: "How do I sign up for Vant for Business?",
    answer: "You can sign up by visiting business.vant.ng/signup and following the registration process.",
  },
  {
    question: "Is Vant for Business free to use? ",
    answer: "Yes, signing up is free and features are currently available at no additional cost.",
  },
  {
    question: "What features are available on Vant for Business?",
    answer: "Vant for Business offers payment links, invoicing, bulk payments, product listings, business accounts, team member management, and financial tracking.",
  },
  {
    question: "Can I receive payments through Vant for Business?",
    answer: "Yes, you can receive payments via payment links, invoices, and direct transfers to your Vant for Business account.",
  },
  {
    question: "How secure is Vant for Business?",
    answer: "Vant for Business uses top-tier security measures to protect your data and transactions. We protect your data with bank-level encryption. Your data is not shared with 3rd party service providers your permission.",
  },
  {
    question: "Does Vant for Business support bulk payments?",
    answer: "Yes, you can make multiple payments at once, ideal for payroll, vendor payments, and group payouts.",
  },
  {
    question: "Can I integrate Vant for Business with other platforms? ",
    answer: "Yes, Vant for Business offers API integrations for seamless business operations.",
  },
  {
    question: "Is there a mobile app for Vant for Business?",
    answer: "Vant for business currently available only the web.",
  },
  {
    question: "How can I contact Vant for Business support?",
    answer: "You can reach out via email: support@vantapp.com, or Chat with on WhatsApp: 09135792534",
  },
  {
    question: "Are there any transaction limits on Vant for Business?",
    answer: "You can reach out via email: support@vantapp.com, or Chat with on WhatsApp: 09135792534",
  },
  {
    question: "Can I use Vant for Business for international payments?  ",
    answer: "Currently, Vant for Business supports NGN and USD transactions, with more options coming soon.",
  },
  
  
];

const FaqLists = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    if (openIndex === index) {
      setOpenIndex(null); // Close if clicked again
    } else {
      setOpenIndex(index); // Open the clicked one
    }
  };

  return (
    <div className="flex flex-col gap-4 ">
      {faqData.map((item, index) => (
        <div key={index} className="border-b-1 border-gray-400  ">
          <div className="flex items-center gap-2 md:gap-4 mb-2 md:mb-4">
            <div className="border-l-4 border-[#32AE4C] h-4 md:h-6"></div>
            <div className="flex items-center justify-between w-full ">
              <p className="font-semibold font-inter text-sm md:text-2xl lg:text-base xl:text-lg ">{item.question}</p>
              <button onClick={() => handleToggle(index)}>
                {openIndex === index ? (
                  <Image src={Vector} alt="Collapse" className="h-4 w-4 md:h-6 md:w-6 lg:h-4 lg:w-4" />
                ) : (
                  <Image src={Arrow} alt="Expand" className="h-5 w-5 md:h-8 md:w-8 lg:h-6 lg:w-6 xl:h-6 xl:w-6" />
                )}
              </button>
            </div>
          </div>
          {openIndex === index && (
         
             <p className="font-light text-xs md:text-xl lg:text-sm py-3 leading-loose md:leading-snug ">
              {item.answer}
            </p>
            
          )}
          
        </div>
      ))}
    </div>
  );
};

export default FaqLists;
