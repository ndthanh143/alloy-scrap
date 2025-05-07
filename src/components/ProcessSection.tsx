// app/components/ProcessSection.tsx
import { Truck, Phone, PackageCheck, Store } from "lucide-react";

const steps = [
  {
    title: "Liên hệ & tư vấn",
    description: "Gọi điện hoặc điền form để chúng tôi hỗ trợ nhanh nhất.",
    icon: Phone,
  },
  {
    title: "Báo giá nhanh",
    description:
      "Chúng tôi gửi báo giá trong vòng 5 phút sau khi nhận thông tin.",
    icon: PackageCheck,
  },
  {
    title: "Thu mua tận nơi",
    description: "Chúng tôi đến tận nơi kiểm tra, thu mua và thanh toán ngay.",
    icon: Truck,
  },
  {
    title: "Giao hàng toàn quốc",
    description: "Chúng tôi cung cấp hợp kim cho khách hàng trên toàn quốc.",
    icon: Store,
  },
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
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
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
      </div>
    </section>
  );
}
