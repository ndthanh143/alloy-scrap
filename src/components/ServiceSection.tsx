"use client";

import Image from "next/image";

const services = [
  {
    title: "Thu mua hợp kim cứng",
    description: "Dao phay, chip tiện, mũi khoan, dao tiện CNC...",
    image: "/services/hop-kim-cung.png",
  },
  {
    title: "Thu mua molipden",
    description: "Tấm, thanh, que, dây molipden với giá tốt nhất.",
    image: "/services/molypden.webp",
  },
  {
    title: "Thu mua niken, inox",
    description: "Nhận thu mua inox, hợp kim niken công nghiệp tận nơi.",
    image: "/services/niken-inox.jpg",
  },
  {
    title: "Thu mua hợp kim cứng",
    description: "Dao phay, chip tiện, mũi khoan, dao tiện CNC...",
    image: "/services/hop-kim-cung.png",
  },
  {
    title: "Thu mua molipden",
    description: "Tấm, thanh, que, dây molipden với giá tốt nhất.",
    image: "/services/molypden.webp",
  },
  {
    title: "Thu mua niken, inox",
    description: "Nhận thu mua inox, hợp kim niken công nghiệp tận nơi.",
    image: "/services/niken-inox.jpg",
  },
];

export function ServiceSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Dịch Vụ Nổi Bật
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group rounded-2xl overflow-hidden shadow hover:shadow-xl transition-all duration-300 bg-white"
            >
              <div className="overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={500}
                  height={300}
                  className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold group-hover:text-primary transition">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-2">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
