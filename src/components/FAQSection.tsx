"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Phế liệu hợp kim là gì?",
    answer:
      "Phế liệu hợp kim là những vật liệu kim loại đã qua sử dụng, bị hỏng hoặc không còn giá trị sử dụng. Chúng có thể được thu mua để tái chế và tái sử dụng, đặc biệt là các loại hợp kim như thép, nhôm, đồng, và các hợp kim khác dùng trong ngành công nghiệp cơ khí.",
  },
  {
    question: "Dao hợp kim bị gãy bể có thu mua không?",
    answer:
      "Chúng tôi thu mua tất cả các loại dao hợp kim, bao gồm cả những dao bị gãy, bể hoặc hư hỏng. Các dao hợp kim này sẽ được tái chế và sử dụng lại cho các quy trình gia công khác.",
  },
  {
    question: "Số lượng tối thiểu để thu mua là bao nhiêu ký?",
    answer:
      "Không có yêu cầu về số lượng tối thiểu khi thu mua phế liệu hợp kim. Chúng tôi thu mua mọi số lượng, dù là số lượng nhỏ hay lớn, và cam kết mang lại giá trị hợp lý cho khách hàng.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(i === openIndex ? null : i);
  };

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Câu Hỏi Thường Gặp</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = i === openIndex;
            return (
              <div
                key={i}
                className="border border-blue-100 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex justify-between items-center p-5 text-left"
                >
                  <h3 className="text-base font-medium text-gray-800">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="text-blue-500 w-6 h-6" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="text-left px-5 pb-5 text-gray-600">
                        <p>{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
