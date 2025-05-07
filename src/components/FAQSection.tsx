"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Hợp kim là gì?",
    answer:
      "Hợp kim là vật liệu được tạo thành từ hai hoặc nhiều kim loại khác nhau hoặc giữa kim loại và phi kim.",
  },
  {
    question: "Công ty thu mua hợp kim tại đâu?",
    answer:
      "Chúng tôi thu mua hợp kim trên toàn quốc, phục vụ tận nơi từ thành phố đến vùng sâu vùng xa.",
  },
  {
    question: "Làm sao để nhận báo giá?",
    answer:
      "Chỉ cần điền form hoặc gọi điện, chúng tôi sẽ báo giá nhanh chóng trong 5 phút.",
  },
  {
    question: "Có hỗ trợ kiểm tra hàng tại chỗ không?",
    answer:
      "Có, đội ngũ kỹ thuật của chúng tôi có thể đến tận nơi để đánh giá và kiểm tra loại hợp kim bạn bán.",
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
                      <div className="px-5 pb-5 text-gray-600">
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
