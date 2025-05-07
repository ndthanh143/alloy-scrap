// app/components/QuoteForm.tsx
"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
// import { toast } from "sonner"

const schema = yup.object().shape({
  name: yup.string().required("Vui lòng nhập họ tên"),
  phone: yup.string().required("Vui lòng nhập số điện thoại"),
  company: yup.string().nullable(),
  email: yup.string().email("Email không hợp lệ").nullable(),
  message: yup.string().nullable(),
  product: yup.string().required("Vui lòng nhập loại hợp kim"),
});

export function QuoteForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    // toast.success("Yêu cầu báo giá đã được gửi!")
    console.log("Form submitted:", data);
  };

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/bg-pattern.svg')] opacity-10" />
      <div className="relative max-w-xl mx-auto bg-white/40 backdrop-blur-md border border-white/30 rounded-2xl shadow-xl p-8">
        <h3 className="text-3xl font-bold text-center mb-4">
          Nhận Báo Giá Nhanh
        </h3>
        <p className="text-center text-muted-foreground mb-8">
          Điền thông tin và chúng tôi sẽ liên hệ bạn trong 5 phút!
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Input placeholder="Họ tên" {...register("name")} />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}

          <Input placeholder="Số điện thoại" {...register("phone")} />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone.message}</p>
          )}

          <Input
            placeholder="Tên công ty (không bắt buộc)"
            {...register("company")}
          />
          <Input placeholder="Email (không bắt buộc)" {...register("email")} />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}

          <Input placeholder="Loại hợp kim cần bán" {...register("product")} />
          {errors.product && (
            <p className="text-red-500 text-sm">{errors.product.message}</p>
          )}

          <Textarea
            placeholder="Nội dung thêm (nếu có)"
            rows={3}
            {...register("message")}
          />

          <Button type="submit" className="w-full mt-2">
            Gửi yêu cầu
          </Button>
        </form>
      </div>
    </section>
  );
}
