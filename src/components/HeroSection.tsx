"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-primary/0 to-white pt-[88px] pb-12 px-4 min-h-[70vh] flex items-center">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-3xl font-bold mb-4 max-w-[400px] text-gray-900">
            Thu Mua Phế Liệu Hợp Kim Giá Cao
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Chuyên thu mua hợp kim các loại: dao phay, mũi khoan, chip tiện CNC,
            chip phay, dao hợp kim các loại, và nhiều hơn nữa. Cam kết giá cao
            và phục vụ tận nơi.
          </p>
          <Button size="lg">
            Nhận Báo Giá Nhanh <ArrowRight />
          </Button>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <Image
            src="/alloy-scrap-hero-section.jpg"
            alt="Thu mua hợp kim"
            width={0}
            height={0}
            sizes="100vw"
            className="rounded-xl shadow-md w-full h-auto object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
