import Image from "next/image";

const services = [
  {
    title: "Dao phay hợp kim",
    description:
      "Dao phay hợp kim có độ cứng cao, khả năng chịu nhiệt tốt, phù hợp cho gia công các vật liệu cứng như thép không gỉ, thép tôi và hợp kim nhôm.",
    image: "/products/dao-phay-hop-kim.jpg",
  },
  {
    title: "Mũi khoan hợp kim",
    description:
      "Mũi khoan hợp kim được thiết kế chính xác, giúp khoan nhanh và bền bỉ, đảm bảo hiệu suất làm việc cao trong các ngành cơ khí chính xác.",
    image: "/products/mui-khoan-hop-kim.webp",
  },
  {
    title: "Chip phay hợp kim",
    description:
      "Chip phay hợp kim chuyên dụng cho các máy CNC, giúp nâng cao độ chính xác và tuổi thọ dao cắt trong quá trình gia công kim loại.",
    image: "/products/chip-phay-hop-kim.png",
  },
  {
    title: "Chip tiện hợp kim",
    description:
      "Chip tiện hợp kim mang lại khả năng cắt gọt mượt mà, bền bỉ và chịu được môi trường gia công khắc nghiệt, lý tưởng cho các ứng dụng tiện CNC.",
    image: "/products/chip-tien-hop-kim.avif",
  },
  {
    title: "Dao hợp kim các loại",
    description:
      "Cung cấp đa dạng các loại dao hợp kim: dao phay, dao tiện, dao doa… đáp ứng mọi nhu cầu gia công cơ khí với chất lượng cao và độ bền vượt trội.",
    image: "/products/dao-hop-kim-cac-loai.jpg",
  },
];

export function AlloyPurchase() {
  const firstRow = services.slice(0, 3);
  const secondRow = services.slice(3);

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold">
            Các loại phế liệu hợp kim thu mua
          </h2>
        </div>

        {/* Hàng 1: 3 cột */}
        <div className="grid gap-6 md:grid-cols-3 mb-6">
          {firstRow.map((service, index) => (
            <Card key={index} service={service} />
          ))}
        </div>

        {/* Hàng 2: 2 cột */}
        <div className="grid gap-6 md:grid-cols-2">
          {secondRow.map((service, index) => (
            <Card key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Tách card riêng cho gọn
function Card({ service }: { service: (typeof services)[0] }) {
  return (
    <div className="group rounded-2xl overflow-hidden shadow hover:shadow-xl transition-all duration-300 bg-white">
      <div className="overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          width={500}
          height={400}
          className="h-52 w-full object-cover group-hover:scale-105 transition-transform duration-300"
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
  );
}
