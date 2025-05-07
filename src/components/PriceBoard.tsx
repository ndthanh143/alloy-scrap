import { DollarSign } from "lucide-react";

const priceGroups = [
  {
    category: "Hợp Kim",
    items: [
      { name: "Hợp kim cứng (Carbide)", price: "350,000đ/kg" },
      { name: "Molipden (Molybdenum)", price: "250,000đ/kg" },
      { name: "Vonfram (Tungsten)", price: "500,000đ/kg" },
      { name: "Coban (Cobalt)", price: "370,000đ/kg" },
    ],
  },
  {
    category: "Kim Loại Quý",
    items: [
      { name: "Niken nguyên chất", price: "400,000đ/kg" },
      { name: "Titan", price: "220,000đ/kg" },
      { name: "Inox 304", price: "120,000đ/kg" },
    ],
  },
  {
    category: "Công Cụ CNC",
    items: [
      { name: "Dao tiện CNC", price: "300,000đ/kg" },
      { name: "Chip phay", price: "280,000đ/kg" },
      { name: "Mũi khoan gãy", price: "150,000đ/kg" },
    ],
  },
];

export function PriceBoard() {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <DollarSign className="text-primary w-6 h-6" />
          <h2 className="text-2xl font-bold">Bảng Giá Phế Liệu</h2>
        </div>

        {priceGroups.map((group, index) => (
          <div key={index} className="mb-8">
            <h3 className="text-lg font-semibold text-gray-700 mb-3">{group.category}</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto border border-gray-200 rounded-lg">
                <thead className="bg-muted/50 text-left">
                  <tr>
                    <th className="px-4 py-2 font-semibold text-sm text-gray-700">Tên Vật Liệu</th>
                    <th className="px-4 py-2 font-semibold text-sm text-gray-700">Đơn Giá</th>
                  </tr>
                </thead>
                <tbody>
                  {group.items.map((item, i) => (
                    <tr
                      key={i}
                      className="hover:bg-muted transition border-b border-gray-100"
                    >
                      <td className="px-4 py-3 text-sm">{item.name}</td>
                      <td className="px-4 py-3 text-sm font-semibold text-primary">
                        {item.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
