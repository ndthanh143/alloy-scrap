"use client";

import Image from "next/image";

const provinces = [
  "Hà Nội",
  "Hồ Chí Minh",
  "Đà Nẵng",
  "Hải Phòng",
  "Cần Thơ",
  "An Giang",
  "Bà Rịa - Vũng Tàu",
  "Bắc Giang",
  "Bắc Kạn",
  "Bạc Liêu",
  "Bắc Ninh",
  "Bến Tre",
  "Bình Dương",
  "Bình Định",
  "Bình Phước",
  "Bình Thuận",
  "Cà Mau",
  "Cao Bằng",
  "Đắk Lắk",
  "Đắk Nông",
  "Điện Biên",
  "Đồng Nai",
  "Đồng Tháp",
  "Gia Lai",
  "Hà Giang",
  "Hà Nam",
  "Hà Tĩnh",
  "Hải Dương",
  "Hậu Giang",
  "Hòa Bình",
  "Hưng Yên",
  "Khánh Hòa",
  "Kiên Giang",
  "Kon Tum",
  "Lai Châu",
  "Lâm Đồng",
  "Lạng Sơn",
  "Lào Cai",
  "Long An",
  "Nam Định",
  "Nghệ An",
  "Ninh Bình",
  "Ninh Thuận",
  "Phú Thọ",
  "Phú Yên",
  "Quảng Bình",
  "Quảng Nam",
  "Quảng Ngãi",
  "Quảng Ninh",
  "Quảng Trị",
  "Sóc Trăng",
  "Sơn La",
  "Tây Ninh",
  "Thái Bình",
  "Thái Nguyên",
  "Thanh Hóa",
  "Thừa Thiên Huế",
  "Tiền Giang",
  "Trà Vinh",
  "Tuyên Quang",
  "Vĩnh Long",
  "Vĩnh Phúc",
  "Yên Bái",
];

export function PurchaseRegion() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Khu vực thu mua</h2>
        <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
          Chúng tôi nhận thu mua phế liệu hợp kim trên toàn quốc, bao gồm tất cả
          các tỉnh thành từ Bắc đến Nam.
        </p>
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Map Image */}
          <div className="flex-1 order-2 lg:order-1">
            <Image
              src="/viet-nam-map.png"
              alt="Bản đồ Việt Nam"
              width={600}
              height={800}
              className="w-full h-auto object-contain rounded-xl"
            />
          </div>

          {/* Provinces List */}
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 text-sm w-full order-1 lg:order-2">
            {provinces.map((province, index) => (
              <div
                key={index}
                className="bg-white px-2 py-2 rounded shadow-sm hover:shadow-md transition text-center"
              >
                {province}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
