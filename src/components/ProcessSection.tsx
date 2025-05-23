// app/components/ProcessSection.tsx
import {
  PhoneCall,
  Camera,
  FileText,
  Handshake,
  Scale,
  CreditCard,
} from "lucide-react";
import Image from "next/image";

const steps = [
  {
    title: "Tiếp nhận thông tin",
    description:
      "Khách hàng liên hệ để cung cấp thông tin sơ bộ về loại phế liệu, số lượng và địa điểm.",
    icon: PhoneCall, // Icon đại diện cho cuộc gọi
  },
  {
    title: "Khảo sát qua hình ảnh hoặc đến xem thực tế",
    description:
      "Tiến hành khảo sát thông qua hình ảnh do khách cung cấp hoặc đến tận nơi để đánh giá trực tiếp.",
    icon: Camera, // Icon máy ảnh để thể hiện khảo sát
  },
  {
    title: "Báo giá",
    description:
      "Sau khi khảo sát, chúng tôi đưa ra mức giá thu mua phù hợp với thị trường và tình trạng hàng hóa.",
    icon: FileText, // Icon tài liệu, biểu tượng của báo giá
  },
  {
    title: "Chốt giá",
    description:
      "Thỏa thuận và xác nhận giá cuối cùng giữa hai bên trước khi tiến hành thu mua.",
    icon: Handshake, // Icon bắt tay để thể hiện sự đồng thuận
  },
  {
    title: "Cân hàng",
    description:
      "Tiến hành cân đo hàng hóa bằng thiết bị chính xác để xác định khối lượng thực tế.",
    icon: Scale, // Icon cái cân để thể hiện việc cân hàng
  },
  {
    title: "Thanh toán",
    description:
      "Hoàn tất giao dịch bằng cách thanh toán đầy đủ và nhanh chóng cho khách hàng.",
    icon: CreditCard, // Icon thẻ tín dụng thể hiện thanh toán
  },
];

const images = [
  "/phe-lieu-23.jpg",
  "/phe-lieu-2.jpg",
  "/phe-lieu-21.jpg",
  "/phe-lieu-20.jpg",
];

export function ProcessSection() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Quy Trình Thu Mua & Bán Hợp Kim
        </h2>
        <p className="text-muted-foreground mb-12">
          Chúng tôi phục vụ trên toàn quốc – nhanh chóng, minh bạch và tiện lợi.
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 transition-all duration-300 shadow hover:shadow-lg"
            >
              <div className="border-2 border-blue-500 text-primary p-3 rounded-full w-fit mx-auto mb-4">
                <step.icon className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600 mt-2">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <h3 className="text-xl font-semibold text-gray-900 mt-10">
            Hình ảnh thực tế
          </h3>
          <p className="text-sm text-gray-600 mt-2">
            Dưới đây là một số hình ảnh thực tế về quy trình thu mua phế liệu
            hợp kim của chúng tôi.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
            {images.map((image, index) => (
              <div key={index}>
                <Image
                  src={image}
                  width={0}
                  height={0}
                  sizes="100vw"
                  alt={`Image ${index + 1}`}
                  className="w-full h-full rounded-lg shadow-md"
                />
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-600 mt-4">
            Chúng tôi cam kết mang đến dịch vụ thu mua phế liệu hợp kim tốt nhất
            với giá cả cạnh tranh và quy trình minh bạch.
          </p>
        </div>
      </div>
    </section>
  );
}
