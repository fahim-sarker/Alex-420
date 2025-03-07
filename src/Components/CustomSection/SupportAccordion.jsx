import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion2";

const items = [
  {
    id: 1,
    value: "item-1",
    title: "How is Sipawayy different from other eCommerce platforms?",
    text: "Yes, you can connect your existing domain. Uvodo also provides a forever uvo.do domain suffix to all sellers upon creating an account.",
  },
  {
    id: 2,
    value: "item-2",
    title: "Does Sipawayy offer international shipping?",
    text: "Yes, Sipawayy provides international shipping with multiple courier options to choose from, ensuring fast and secure deliveries worldwide.",
  },
  {
    id: 3,
    value: "item-3",
    title: "What payment methods does Sipawayy support?",
    text: "Sipawayy supports various payment methods, including credit/debit cards, PayPal, Apple Pay, Google Pay, and bank transfers.",
  },
  {
    id: 4,
    value: "item-4",
    title: "Can I track my orders on Sipawayy?",
    text: "Yes, you can track your orders in real-time through your account dashboard, where live tracking details are provided for each shipment.",
  },
  {
    id: 5,
    value: "item-5",
    title: "Does Sipawayy offer refunds and returns?",
    text: "Yes, Sipawayy has a flexible return policy. You can request a return or refund within 30 days of receiving your order, subject to terms and conditions.",
  },
  {
    id: 6,
    value: "item-6",
    title: "How do I become a seller on Sipawayy?",
    text: "To become a seller, sign up for a merchant account, list your products, and start selling. Sipawayy provides tools to help manage your store efficiently.",
  },
  {
    id: 7,
    value: "item-7",
    title: "Does Sipawayy provide customer support?",
    text: "Yes, our support team is available 24/7 through live chat, email, and phone to assist with any queries or concerns.",
  },
  {
    id: 8,
    value: "item-8",
    title: "Are there any subscription fees for using Sipawayy?",
    text: "No, there are no subscription fees. Sipawayy only charges a small transaction fee per sale made through the platform.",
  },
  {
    id: 9,
    value: "item-9",
    title: "Can I integrate third-party apps with Sipawayy?",
    text: "Yes, Sipawayy supports integration with various third-party apps and services, including marketing tools, accounting software, and logistics providers.",
  },
  {
    id: 10,
    value: "item-10",
    title: "How secure is Sipawayy for transactions?",
    text: "Sipawayy uses advanced encryption and fraud detection systems to ensure all transactions are secure and protected from unauthorized access.",
  },
];

const SupportAccordion = () => {
  const [itemsCount, setItemsCount] = useState(3);

  return (
    <div>
      <Accordion type="multiple" collapsible>
        {items.slice(0, itemsCount).map((item) => (
          <AccordionItem className="" key={item.id} value={item.value}>
            <AccordionTrigger>{item.title}</AccordionTrigger>
            <AccordionContent>{item.text}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className=" flex items-center justify-center gap-10 mt-5">
        {itemsCount === 3 && (
          <button
            type="button"
            className="text-lg font-medium text-[#0E0E0E] cursor-pointer bg-[linear-gradient(92deg,#DBA514_2.3%,#EEB609_35.25%,#FCC201_97.79%)] py-3.5 px-7 rounded-[6px] w-[180px]"
            onClick={() => setItemsCount(console.log(items.length))}
          >
            See all
          </button>
        )}
        <button
          type="button"
          className="text-lg font-medium text-[#0E0E0E] cursor-pointer bg-[linear-gradient(92deg,#DBA514_2.3%,#EEB609_35.25%,#FCC201_97.79%)] py-3.5 px-7 rounded-[6px] w-[180px]"
        >
          Contact
        </button>
      </div>
    </div>
  );
};

export default SupportAccordion;
