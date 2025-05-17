"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-primary/0 to-white pt-[104px] pb-12 px-4 min-h-[70vh] flex items-center">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
        <motion.div
          className="order-2 lg:order-1"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-center lg:text-left text-3xl font-bold mb-4 lg:max-w-[400px] text-gray-900">
            Thu Mua Phế Liệu Hợp Kim Giá Cao
          </h2>
          <p className="text-center lg:text-left text-gray-700 mb-6 leading-relaxed">
            Chuyên thu mua phế liệu dao cụ hợp kim các loại: Dao phay hợp kim,
            mũi khoan hợp kim, chip phay hợp kim, chip tiện hợp kim, dao hợp kim
            các loại... Cam kết giá cao và làm việc chuyên nghiệp.
          </p>
          <Link href={"#contact"} passHref>
            <Button size="lg" className="w-full lg:w-fit">
              Nhận Báo Giá Nhanh <ArrowRight />
            </Button>
          </Link>
        </motion.div>
        <motion.div
          className="order-1 lg:order-2"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <Image
            src="/hero-banner2.png"
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
