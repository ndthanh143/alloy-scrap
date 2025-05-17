"use client";

import { CheckCircle } from "lucide-react";

export function WhyChooseUs() {
  const reasons = [
    {
      title: "Định giá chính xác",
      description:
        "Chúng tôi cam kết cung cấp giá trị chính xác, đảm bảo sự hài lòng cho khách hàng với giá cả hợp lý.",
      icon: <CheckCircle className="text-green-500 w-10 h-10" />,
    },
    {
      title: "Báo giá nhanh",
      description:
        "Quá trình báo giá được thực hiện nhanh chóng và hiệu quả, giúp khách hàng tiết kiệm thời gian.",
      icon: <CheckCircle className="text-green-500 w-10 h-10" />,
    },
    {
      title: "Thanh toán ngay",
      description:
        "Chúng tôi đảm bảo thanh toán ngay khi giao dịch hoàn tất, tạo sự an tâm cho khách hàng.",
      icon: <CheckCircle className="text-green-500 w-10 h-10" />,
    },
    {
      title: "Làm việc chuyên nghiệp",
      description:
        "Với đội ngũ nhân viên chuyên nghiệp, chúng tôi cam kết mang đến dịch vụ chất lượng và tận tâm.",
      icon: <CheckCircle className="text-green-500 w-10 h-10" />,
    },
  ];

  return (
    <section className="py-4 xl:py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-4">
          <h2 className="text-3xl font-bold mb-2">Tại sao chọn chúng tôi?</h2>
        </div>
        <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
          Chúng tôi luôn cam kết mang lại giá trị cao và dịch vụ tận tâm, giúp
          khách hàng có những trải nghiệm tốt nhất khi sử dụng dịch vụ của chúng
          tôi.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="mb-4">{reason.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
              <p className="text-sm text-muted-foreground">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
