import Image from "next/image";

const services = [
  {
    title: "Dao phay hợp kim",
    description:
      "Các loại dao phay hợp kim đã qua sử dụng thường được thu gom từ xưởng gia công, có nhiều kích thước và tình trạng khác nhau.",
    image: "/products/dao-phay-hop-kim.jpg",
  },
  {
    title: "Mũi khoan hợp kim",
    description:
      "Mũi khoan hợp kim sau sử dụng từ các đơn vị cơ khí, công nghiệp thường còn lõi hợp kim giá trị, thích hợp cho việc thu mua và tái chế.",
    image: "/products/mui-khoan-hop-kim.webp",
  },
  {
    title: "Chip phay hợp kim",
    description:
      "Chip phay hợp kim từ máy CNC, dù đã qua sử dụng vẫn chứa thành phần hợp kim quý, có thể thu hồi và xử lý tiếp.",
    image: "/products/chip-phay-hop-kim.png",
  },
  {
    title: "Chip tiện hợp kim",
    description:
      "Chip tiện hợp kim được thu gom từ quá trình tiện cơ khí, là nguồn nguyên liệu quan trọng trong việc tái chế hợp kim cứng.",
    image: "/products/chip-tien-hop-kim.avif",
  },
  {
    title: "Dao hợp kim các loại",
    description:
      "Thu mua đa dạng các loại dao hợp kim cũ: dao phay, dao tiện, dao doa… từ nhà xưởng, khu công nghiệp và cơ sở gia công cơ khí.",
    image: "/products/dao-hop-kim-cac-loai.jpg",
  },
];

export function AlloyPurchase() {
  const firstRow = services.slice(0, 3);
  const secondRow = services.slice(3);

  return (
    <section className="py-4 xl:py-16 px-4">
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
