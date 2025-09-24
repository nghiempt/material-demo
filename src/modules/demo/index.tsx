"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";
import { Star, Heart, Share2, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { HELPER } from "../../utils/helper";

interface MaterialProduct {
  id: number;
  title: string;
  thumbnail: string;
  price: number;
  originalPrice: number;
  description: string;
  category: string;
  rating: number;
  sold: number;
  features: string[];
  images: string[];
  specifications: {
    material: string;
    size: string;
    weight: string;
    origin: string;
  };
}

export default function DemoClient() {
  const [selectedProduct, setSelectedProduct] = useState<MaterialProduct | null>(null);

  const mockData: MaterialProduct[] = [
    {
      id: 1,
      title: "Xi măng Portland PCB40 bao 50kg",
      thumbnail: "https://vietmylogistic.com/wp-content/uploads/2021/06/vat-lieu-xay-dung.jpg",
      price: 150000,
      originalPrice: 180000,
      description: "Xi măng Portland PCB40 chất lượng cao, đạt tiêu chuẩn quốc gia, thích hợp cho các công trình xây dựng dân dụng và công nghiệp. Độ bền cao, khả năng chịu nước tốt.",
      category: "Xi măng",
      rating: 4.8,
      sold: 245,
      features: ["Đạt chuẩn PCB40", "Chịu nước tốt", "Độ bền cao", "Thích hợp mọi công trình"],
      images: ["https://vietmylogistic.com/wp-content/uploads/2021/06/vat-lieu-xay-dung.jpg", "https://bizweb.dktcdn.net/100/379/731/files/cac-loai-vat-lieu-xay-dung.jpg?v=1747032221176", "https://haiquanvietnam.net/wp-content/uploads/2020/05/thu-tuc-nhap-khau-vat-lieu-xay-dung.jpg"],
      specifications: {
        material: "Xi măng Portland PCB40",
        size: "Bao 50kg",
        weight: "50kg",
        origin: "Việt Nam"
      }
    },
    {
      id: 2,
      title: "Gạch ốp lát granite 60x60cm",
      thumbnail: "https://bizweb.dktcdn.net/100/379/731/files/cac-loai-vat-lieu-xay-dung.jpg?v=1747032221176",
      price: 320000,
      originalPrice: 380000,
      description: "Gạch granite cao cấp kích thước 60x60cm, bề mặt bóng đẹp, chống trơn trượt, thích hợp cho không gian hiện đại. Màu sắc đa dạng, độ bền cao.",
      category: "Gạch ốp lát",
      rating: 4.9,
      sold: 189,
      features: ["Granite cao cấp", "Chống trơn trượt", "Bề mặt bóng đẹp", "Màu sắc đa dạng"],
      images: ["https://bizweb.dktcdn.net/100/379/731/files/cac-loai-vat-lieu-xay-dung.jpg?v=1747032221176", "https://haiquanvietnam.net/wp-content/uploads/2020/05/thu-tuc-nhap-khau-vat-lieu-xay-dung.jpg", "https://lh3.googleusercontent.com/proxy/-mhgKeuZe8cDtLhzxl7y-YUWk-7dFiI_py6cokE_FpgkcRORdvnQB-R9WaWtqBVhX2ngEcKxwZtgiKfDzPLu9OQ-WrsnFTVH8tkIZ4mSr6GCZGkf5G21-TxMfyJMUXH_6kEXOA"],
      specifications: {
        material: "Granite tự nhiên",
        size: "60x60x1cm",
        weight: "3.5kg/viên",
        origin: "Trung Quốc"
      }
    },
    {
      id: 3,
      title: "Cát xây dựng loại 1 - m3",
      thumbnail: "https://haiquanvietnam.net/wp-content/uploads/2020/05/thu-tuc-nhap-khau-vat-lieu-xay-dung.jpg",
      price: 750000,
      originalPrice: 900000,
      description: "Cát xây dựng loại 1 chất lượng cao, độ sạch tốt, không lẫn bùn đất. Thích hợp cho việc trộn bê tông, tô tường, lát gạch.",
      category: "Cát đá",
      rating: 4.6,
      sold: 567,
      features: ["Độ sạch cao", "Không lẫn bùn", "Kích thước đồng đều", "Giá cạnh tranh"],
      images: ["https://haiquanvietnam.net/wp-content/uploads/2020/05/thu-tuc-nhap-khau-vat-lieu-xay-dung.jpg", "https://media.vneconomy.vn/images/upload/2023/06/11/13-1641868270-vat-lieu-xay-dung-tang-gia.jpg", "https://vietmylogistic.com/wp-content/uploads/2021/06/vat-lieu-xay-dung.jpg"],
      specifications: {
        material: "Cát tự nhiên loại 1",
        size: "1m3",
        weight: "1.5 tấn/m3",
        origin: "Việt Nam"
      }
    },
    {
      id: 4,
      title: "Thép xây dựng CB300V đường kính 12mm",
      thumbnail: "https://lh3.googleusercontent.com/proxy/-mhgKeuZe8cDtLhzxl7y-YUWk-7dFiI_py6cokE_FpgkcRORdvnQB-R9WaWtqBVhX2ngEcKxwZtgiKfDzPLu9OQ-WrsnFTVH8tkIZ4mSr6GCZGkf5G21-TxMfyJMUXH_6kEXOA",
      price: 280000,
      originalPrice: 320000,
      description: "Thép xây dựng CB300V đường kính 12mm, độ bền cao, chất lượng đạt tiêu chuẩn. Thích hợp cho các công trình dân dụng và công nghiệp.",
      category: "Thép xây dựng",
      rating: 4.7,
      sold: 123,
      features: ["Chuẩn CB300V", "Đường kính 12mm", "Độ bền cao", "Tiêu chuẩn quốc gia"],
      images: ["https://lh3.googleusercontent.com/proxy/-mhgKeuZe8cDtLhzxl7y-YUWk-7dFiI_py6cokE_FpgkcRORdvnQB-R9WaWtqBVhX2ngEcKxwZtgiKfDzPLu9OQ-WrsnFTVH8tkIZ4mSr6GCZGkf5G21-TxMfyJMUXH_6kEXOA", "https://vietmylogistic.com/wp-content/uploads/2021/06/vat-lieu-xay-dung.jpg", "https://bizweb.dktcdn.net/100/379/731/files/cac-loai-vat-lieu-xay-dung.jpg?v=1747032221176"],
      specifications: {
        material: "Thép carbon CB300V",
        size: "Ф12mm x 11.7m",
        weight: "10.5kg/cây",
        origin: "Việt Nam"
      }
    },
    {
      id: 5,
      title: "Gạch không nung Bê tông khí 20x20x60cm",
      thumbnail: "https://media.vneconomy.vn/images/upload/2023/06/11/13-1641868270-vat-lieu-xay-dung-tang-gia.jpg",
      price: 25000,
      originalPrice: 30000,
      description: "Gạch không nung từ bê tông khí nhẹ, cách nhiệt tốt, khả năng cách âm cao. Thân thiện với môi trường, tiết kiệm chi phí xây dựng.",
      category: "Gạch xây",
      rating: 4.8,
      sold: 890,
      features: ["Bê tông khí nhẹ", "Cách nhiệt tốt", "Cách âm cao", "Thân thiện môi trường"],
      images: ["https://media.vneconomy.vn/images/upload/2023/06/11/13-1641868270-vat-lieu-xay-dung-tang-gia.jpg", "https://haiquanvietnam.net/wp-content/uploads/2020/05/thu-tuc-nhap-khau-vat-lieu-xay-dung.jpg", "https://bizweb.dktcdn.net/100/379/731/files/cac-loai-vat-lieu-xay-dung.jpg?v=1747032221176"],
      specifications: {
        material: "Bê tông khí AAC",
        size: "20x20x60cm",
        weight: "2.5kg/viên",
        origin: "Đức"
      }
    },
    {
      id: 6,
      title: "Sơn nước ngoại thất Dulux 18L",
      thumbnail: "https://vietmylogistic.com/wp-content/uploads/2021/06/vat-lieu-xay-dung.jpg",
      price: 4200000,
      originalPrice: 4800000,
      description: "Sơn nước ngoại thất Dulux cao cấp 18L, chống thấm tuyệt đối, bền màu dưới tác động của thời tiết. Không độc hại, thân thiện môi trường.",
      category: "Sơn",
      rating: 4.9,
      sold: 67,
      features: ["Chống thấm tuyệt đối", "Bền màu", "Không độc hại", "Thương hiệu uy tín"],
      images: ["https://vietmylogistic.com/wp-content/uploads/2021/06/vat-lieu-xay-dung.jpg", "https://bizweb.dktcdn.net/100/379/731/files/cac-loai-vat-lieu-xay-dung.jpg?v=1747032221176", "https://media.vneconomy.vn/images/upload/2023/06/11/13-1641868270-vat-lieu-xay-dung-tang-gia.jpg"],
      specifications: {
        material: "Sơn acrylic cao cấp",
        size: "18L",
        weight: "20kg",
        origin: "Singapore"
      }
    },
    {
      id: 7,
      title: "Đá 1x2 xây dựng - m3",
      thumbnail: "https://bizweb.dktcdn.net/100/379/731/files/cac-loai-vat-lieu-xay-dung.jpg?v=1747032221176",
      price: 1800000,
      originalPrice: 2100000,
      description: "Đá dăm 1x2 chất lượng cao cho xây dựng, kích thước đồng đều, độ sạch tốt. Thích hợp làm móng, đổ bê tông, làm đường.",
      category: "Cát đá",
      rating: 4.7,
      sold: 156,
      features: ["Kích thước 1x2cm", "Độ sạch cao", "Chất lượng ổn định", "Giá cả hợp lý"],
      images: ["https://bizweb.dktcdn.net/100/379/731/files/cac-loai-vat-lieu-xay-dung.jpg?v=1747032221176", "https://lh3.googleusercontent.com/proxy/-mhgKeuZe8cDtLhzxl7y-YUWk-7dFiI_py6cokE_FpgkcRORdvnQB-R9WaWtqBVhX2ngEcKxwZtgiKfDzPLu9OQ-WrsnFTVH8tkIZ4mSr6GCZGkf5G21-TxMfyJMUXH_6kEXOA", "https://haiquanvietnam.net/wp-content/uploads/2020/05/thu-tuc-nhap-khau-vat-lieu-xay-dung.jpg"],
      specifications: {
        material: "Đá dăm tự nhiên",
        size: "1m3",
        weight: "1.6 tấn/m3",
        origin: "Việt Nam"
      }
    },
    {
      id: 8,
      title: "Ống nước PPR phi 27mm",
      thumbnail: "https://haiquanvietnam.net/wp-content/uploads/2020/05/thu-tuc-nhap-khau-vat-lieu-xay-dung.jpg",
      price: 150000,
      originalPrice: 180000,
      description: "Ống nước PPR phi 27mm chất lượng cao, chịu nhiệt tốt, không độc hại. Thích hợp cho hệ thống nước nóng, lạnh trong gia đình.",
      category: "Đường ống",
      rating: 4.5,
      sold: 234,
      features: ["Chịu nhiệt tốt", "Không độc hại", "Dễ lắp đặt", "Tuổi thọ cao"],
      images: ["https://haiquanvietnam.net/wp-content/uploads/2020/05/thu-tuc-nhap-khau-vat-lieu-xay-dung.jpg", "https://media.vneconomy.vn/images/upload/2023/06/11/13-1641868270-vat-lieu-xay-dung-tang-gia.jpg", "https://vietmylogistic.com/wp-content/uploads/2021/06/vat-lieu-xay-dung.jpg"],
      specifications: {
        material: "Polypropylene Random (PPR)",
        size: "Phi 27mm x 4m",
        weight: "0.6kg/cây",
        origin: "Việt Nam"
      }
    },
    {
      id: 9,
      title: "Tấm panel 3D PVC 50x50cm",
      thumbnail: "https://lh3.googleusercontent.com/proxy/-mhgKeuZe8cDtLhzxl7y-YUWk-7dFiI_py6cokE_FpgkcRORdvnQB-R9WaWtqBVhX2ngEcKxwZtgiKfDzPLu9OQ-WrsnFTVH8tkIZ4mSr6GCZGkf5G21-TxMfyJMUXH_6kEXOA",
      price: 380000,
      originalPrice: 450000,
      description: "Tấm panel 3D PVC cao cấp kích thước 50x50cm, tạo hiệu ứng thẩm mỹ cao cho không gian nội thất. Chống ẩm, dễ vệ sinh.",
      category: "Vật liệu trang trí",
      rating: 4.8,
      sold: 78,
      features: ["Hiệu ứng 3D", "Chống ẩm", "Dễ vệ sinh", "Lắp đặt đơn giản"],
      images: ["https://lh3.googleusercontent.com/proxy/-mhgKeuZe8cDtLhzxl7y-YUWk-7dFiI_py6cokE_FpgkcRORdvnQB-R9WaWtqBVhX2ngEcKxwZtgiKfDzPLu9OQ-WrsnFTVH8tkIZ4mSr6GCZGkf5G21-TxMfyJMUXH_6kEXOA", "https://media.vneconomy.vn/images/upload/2023/06/11/13-1641868270-vat-lieu-xay-dung-tang-gia.jpg", "https://vietmylogistic.com/wp-content/uploads/2021/06/vat-lieu-xay-dung.jpg"],
      specifications: {
        material: "PVC cao cấp",
        size: "50x50x0.8cm",
        weight: "0.5kg/tấm",
        origin: "Trung Quốc"
      }
    },
    {
      id: 10,
      title: "Keo dán gạch chuyên dụng 25kg",
      thumbnail: "https://media.vneconomy.vn/images/upload/2023/06/11/13-1641868270-vat-lieu-xay-dung-tang-gia.jpg",
      price: 650000,
      originalPrice: 750000,
      description: "Keo dán gạch chuyên dụng chất lượng cao 25kg, khả năng bám dính tốt, chống thấm. Thích hợp cho gạch ceramic, granite, đá tự nhiên.",
      category: "Keo xây dựng",
      rating: 5.0,
      sold: 45,
      features: ["Bám dính tốt", "Chống thấm", "Đa năng", "Tiết kiệm"],
      images: ["https://media.vneconomy.vn/images/upload/2023/06/11/13-1641868270-vat-lieu-xay-dung-tang-gia.jpg", "https://bizweb.dktcdn.net/100/379/731/files/cac-loai-vat-lieu-xay-dung.jpg?v=1747032221176", "https://vietmylogistic.com/wp-content/uploads/2021/06/vat-lieu-xay-dung.jpg"],
      specifications: {
        material: "Keo polymer cao cấp",
        size: "Bao 25kg",
        weight: "25kg",
        origin: "Việt Nam"
      }
    },
    {
      id: 11,
      title: "Tôn lợp nhà màu xám dày 0.45mm",
      thumbnail: "https://vietmylogistic.com/wp-content/uploads/2021/06/vat-lieu-xay-dung.jpg",
      price: 290000,
      originalPrice: 350000,
      description: "Tôn lợp nhà màu xám dày 0.45mm, chống gỉ sét tốt, khả năng chịu lực cao. Phù hợp cho mái nhà dân dụng và công nghiệp.",
      category: "Vật liệu lợp",
      rating: 4.6,
      sold: 198,
      features: ["Chống gỉ sét", "Chịu lực cao", "Màu bền", "Dễ thi công"],
      images: ["https://vietmylogistic.com/wp-content/uploads/2021/06/vat-lieu-xay-dung.jpg", "https://haiquanvietnam.net/wp-content/uploads/2020/05/thu-tuc-nhap-khau-vat-lieu-xay-dung.jpg", "https://bizweb.dktcdn.net/100/379/731/files/cac-loai-vat-lieu-xay-dung.jpg?v=1747032221176"],
      specifications: {
        material: "Tôn mạ kẽm phủ màu",
        size: "0.9x2m x 0.45mm",
        weight: "6.5kg/tấm",
        origin: "Việt Nam"
      }
    },
    {
      id: 12,
      title: "Gạch block bê tông 19x19x39cm",
      thumbnail: "https://bizweb.dktcdn.net/100/379/731/files/cac-loai-vat-lieu-xay-dung.jpg?v=1747032221176",
      price: 12000,
      originalPrice: 15000,
      description: "Gạch block bê tông kích thước chuẩn 19x19x39cm, chất lượng cao, độ bền tốt. Thích hợp xây tường, làm hàng rào.",
      category: "Gạch xây",
      rating: 4.4,
      sold: 412,
      features: ["Kích thước chuẩn", "Độ bền cao", "Giá cạnh tranh", "Dễ thi công"],
      images: ["https://bizweb.dktcdn.net/100/379/731/files/cac-loai-vat-lieu-xay-dung.jpg?v=1747032221176", "https://haiquanvietnam.net/wp-content/uploads/2020/05/thu-tuc-nhap-khau-vat-lieu-xay-dung.jpg", "https://lh3.googleusercontent.com/proxy/-mhgKeuZe8cDtLhzxl7y-YUWk-7dFiI_py6cokE_FpgkcRORdvnQB-R9WaWtqBVhX2ngEcKxwZtgiKfDzPLu9OQ-WrsnFTVH8tkIZ4mSr6GCZGkf5G21-TxMfyJMUXH_6kEXOA"],
      specifications: {
        material: "Bê tông cốt liệu nhẹ",
        size: "19x19x39cm",
        weight: "15kg/viên",
        origin: "Việt Nam"
      }
    },
    {
      id: 13,
      title: "Cửa nhôm kính lùa 2 cánh 1.5x2.1m",
      thumbnail: "https://haiquanvietnam.net/wp-content/uploads/2020/05/thu-tuc-nhap-khau-vat-lieu-xay-dung.jpg",
      price: 4500000,
      originalPrice: 5200000,
      description: "Cửa nhôm kính lùa 2 cánh chất lượng cao, kích thước 1.5x2.1m. Khung nhôm bền đẹp, kính cường lực an toàn.",
      category: "Cửa nhôm kính",
      rating: 4.9,
      sold: 56,
      features: ["Nhôm cao cấp", "Kính cường lực", "Lùa êm ái", "Cách âm tốt"],
      images: ["https://haiquanvietnam.net/wp-content/uploads/2020/05/thu-tuc-nhap-khau-vat-lieu-xay-dung.jpg", "https://media.vneconomy.vn/images/upload/2023/06/11/13-1641868270-vat-lieu-xay-dung-tang-gia.jpg", "https://vietmylogistic.com/wp-content/uploads/2021/06/vat-lieu-xay-dung.jpg"],
      specifications: {
        material: "Nhôm định hình + kính cường lực",
        size: "1.5x2.1m",
        weight: "45kg/bộ",
        origin: "Việt Nam"
      }
    },
    {
      id: 14,
      title: "Thạch cao bột xây dựng 40kg",
      thumbnail: "https://lh3.googleusercontent.com/proxy/-mhgKeuZe8cDtLhzxl7y-YUWk-7dFiI_py6cokE_FpgkcRORdvnQB-R9WaWtqBVhX2ngEcKxwZtgiKfDzPLu9OQ-WrsnFTVH8tkIZ4mSr6GCZGkf5G21-TxMfyJMUXH_6kEXOA",
      price: 200000,
      originalPrice: 240000,
      description: "Thạch cao bột xây dựng chất lượng cao 40kg, dùng để trét tường, làm trần thạch cao, tạo hình trang trí. Khô nhanh, bề mặt mịn đẹp.",
      category: "Vật liệu hoàn thiện",
      rating: 4.6,
      sold: 289,
      features: ["Khô nhanh", "Bề mặt mịn", "Dễ thi công", "Đa mục đích"],
      images: ["https://lh3.googleusercontent.com/proxy/-mhgKeuZe8cDtLhzxl7y-YUWk-7dFiI_py6cokE_FpgkcRORdvnQB-R9WaWtqBVhX2ngEcKxwZtgiKfDzPLu9OQ-WrsnFTVH8tkIZ4mSr6GCZGkf5G21-TxMfyJMUXH_6kEXOA", "https://media.vneconomy.vn/images/upload/2023/06/11/13-1641868270-vat-lieu-xay-dung-tang-gia.jpg", "https://vietmylogistic.com/wp-content/uploads/2021/06/vat-lieu-xay-dung.jpg"],
      specifications: {
        material: "Thạch cao tinh khiết",
        size: "Bao 40kg",
        weight: "40kg",
        origin: "Việt Nam"
      }
    },
    {
      id: 15,
      title: "Vôi tôi hóa xây dựng bao 20kg",
      thumbnail: "https://media.vneconomy.vn/images/upload/2023/06/11/13-1641868270-vat-lieu-xay-dung-tang-gia.jpg",
      price: 45000,
      originalPrice: 55000,
      description: "Vôi tôi hóa chất lượng cao bao 20kg, dùng để trộn vữa xây, tô tường. Có khả năng khử trùng tự nhiên, thân thiện môi trường.",
      category: "Vật liệu xây",
      rating: 4.3,
      sold: 678,
      features: ["Khử trùng tự nhiên", "Thân thiện môi trường", "Giá rẻ", "Chất lượng ổn định"],
      images: ["https://media.vneconomy.vn/images/upload/2023/06/11/13-1641868270-vat-lieu-xay-dung-tang-gia.jpg", "https://bizweb.dktcdn.net/100/379/731/files/cac-loai-vat-lieu-xay-dung.jpg?v=1747032221176", "https://haiquanvietnam.net/wp-content/uploads/2020/05/thu-tuc-nhap-khau-vat-lieu-xay-dung.jpg"],
      specifications: {
        material: "Vôi tôi hóa Ca(OH)2",
        size: "Bao 20kg",
        weight: "20kg",
        origin: "Việt Nam"
      }
    },
    {
      id: 16,
      title: "Dây điện đồng Cu 2.5mm2 (100m)",
      thumbnail: "https://vietmylogistic.com/wp-content/uploads/2021/06/vat-lieu-xay-dung.jpg",
      price: 5800000,
      originalPrice: 6500000,
      description: "Dây điện đồng Cu tiết diện 2.5mm2 cuộn 100m, chất lượng cao, đạt tiêu chuẩn an toàn điện. Cách điện tốt, bền bỉ theo thời gian.",
      category: "Thiết bị điện",
      rating: 4.9,
      sold: 23,
      features: ["Đồng nguyên chất", "Cách điện tốt", "Tiêu chuẩn an toàn", "Bền bỉ"],
      images: ["https://vietmylogistic.com/wp-content/uploads/2021/06/vat-lieu-xay-dung.jpg", "https://bizweb.dktcdn.net/100/379/731/files/cac-loai-vat-lieu-xay-dung.jpg?v=1747032221176", "https://haiquanvietnam.net/wp-content/uploads/2020/05/thu-tuc-nhap-khau-vat-lieu-xay-dung.jpg"],
      specifications: {
        material: "Đồng nguyên chất + cách điện PVC",
        size: "2.5mm2 x 100m",
        weight: "20kg/cuộn",
        origin: "Việt Nam"
      }
    },
    {
      id: 17,
      title: "Ván bê tông siêu nhẹ 60x120x7.5cm",
      thumbnail: "https://bizweb.dktcdn.net/100/379/731/files/cac-loai-vat-lieu-xay-dung.jpg?v=1747032221176",
      price: 180000,
      originalPrice: 220000,
      description: "Ván bê tông siêu nhẹ kích thước 60x120x7.5cm, cách nhiệt tốt, chống cháy. Thích hợp làm vách ngăn, trần nhà, tường bao.",
      category: "Vật liệu xây",
      rating: 4.5,
      sold: 134,
      features: ["Siêu nhẹ", "Cách nhiệt tốt", "Chống cháy", "Dễ cắt, khoan"],
      images: ["https://bizweb.dktcdn.net/100/379/731/files/cac-loai-vat-lieu-xay-dung.jpg?v=1747032221176", "https://lh3.googleusercontent.com/proxy/-mhgKeuZe8cDtLhzxl7y-YUWk-7dFiI_py6cokE_FpgkcRORdvnQB-R9WaWtqBVhX2ngEcKxwZtgiKfDzPLu9OQ-WrsnFTVH8tkIZ4mSr6GCZGkf5G21-TxMfyJMUXH_6kEXOA", "https://media.vneconomy.vn/images/upload/2023/06/11/13-1641868270-vat-lieu-xay-dung-tang-gia.jpg"],
      specifications: {
        material: "Bê tông siêu nhẹ ALC",
        size: "60x120x7.5cm",
        weight: "18kg/tấm",
        origin: "Malaysia"
      }
    },
    {
      id: 18,
      title: "Ngói lợp UPVC chống UV 86x23cm",
      thumbnail: "https://haiquanvietnam.net/wp-content/uploads/2020/05/thu-tuc-nhap-khau-vat-lieu-xay-dung.jpg",
      price: 95000,
      originalPrice: 115000,
      description: "Ngói lợp UPVC chống UV kích thước 86x23cm, chống thấm tuyệt đối, chịu nhiệt tốt. Màu sắc bền đẹp, không phai theo thời gian.",
      category: "Vật liệu lợp",
      rating: 4.2,
      sold: 167,
      features: ["Chống UV", "Chống thấm", "Màu bền", "Nhẹ, dễ lắp"],
      images: ["https://haiquanvietnam.net/wp-content/uploads/2020/05/thu-tuc-nhap-khau-vat-lieu-xay-dung.jpg", "https://lh3.googleusercontent.com/proxy/-mhgKeuZe8cDtLhzxl7y-YUWk-7dFiI_py6cokE_FpgkcRORdvnQB-R9WaWtqBVhX2ngEcKxwZtgiKfDzPLu9OQ-WrsnFTVH8tkIZ4mSr6GCZGkf5G21-TxMfyJMUXH_6kEXOA", "https://media.vneconomy.vn/images/upload/2023/06/11/13-1641868270-vat-lieu-xay-dung-tang-gia.jpg"],
      specifications: {
        material: "UPVC cao cấp",
        size: "86x23x0.8cm",
        weight: "1.2kg/tấm",
        origin: "Thái Lan"
      }
    },
    {
      id: 19,
      title: "Ống luồn dây điện PVC phi 20mm",
      thumbnail: "https://lh3.googleusercontent.com/proxy/-mhgKeuZe8cDtLhzxl7y-YUWk-7dFiI_py6cokE_FpgkcRORdvnQB-R9WaWtqBVhX2ngEcKxwZtgiKfDzPLu9OQ-WrsnFTVH8tkIZ4mSr6GCZGkf5G21-TxMfyJMUXH_6kEXOA",
      price: 12000,
      originalPrice: 15000,
      description: "Ống luồn dây điện PVC phi 20mm, bảo vệ dây điện an toàn, chống cháy lan. Dễ uốn cong, lắp đặt đơn giản.",
      category: "Thiết bị điện",
      rating: 4.7,
      sold: 534,
      features: ["Chống cháy lan", "Dễ uốn cong", "An toàn điện", "Giá cạnh tranh"],
      images: ["https://lh3.googleusercontent.com/proxy/-mhgKeuZe8cDtLhzxl7y-YUWk-7dFiI_py6cokE_FpgkcRORdvnQB-R9WaWtqBVhX2ngEcKxwZtgiKfDzPLu9OQ-WrsnFTVH8tkIZ4mSr6GCZGkf5G21-TxMfyJMUXH_6kEXOA", "https://vietmylogistic.com/wp-content/uploads/2021/06/vat-lieu-xay-dung.jpg", "https://bizweb.dktcdn.net/100/379/731/files/cac-loai-vat-lieu-xay-dung.jpg?v=1747032221176"],
      specifications: {
        material: "PVC chống cháy",
        size: "Phi 20mm x 3m",
        weight: "0.8kg/cây",
        origin: "Việt Nam"
      }
    },
    {
      id: 20,
      title: "Kính cường lực trong suốt 8mm",
      thumbnail: "https://media.vneconomy.vn/images/upload/2023/06/11/13-1641868270-vat-lieu-xay-dung-tang-gia.jpg",
      price: 1400000,
      originalPrice: 1600000,
      description: "Kính cường lực trong suốt dày 8mm, độ bền cao gấp 5 lần kính thường. An toàn tuyệt đối khi vỡ, thích hợp làm vách ngăn, cửa kính.",
      category: "Kính xây dựng",
      rating: 4.4,
      sold: 201,
      features: ["Cường lực cao", "An toàn tuyệt đối", "Trong suốt", "Chống va đập"],
      images: ["https://media.vneconomy.vn/images/upload/2023/06/11/13-1641868270-vat-lieu-xay-dung-tang-gia.jpg", "https://haiquanvietnam.net/wp-content/uploads/2020/05/thu-tuc-nhap-khau-vat-lieu-xay-dung.jpg", "https://bizweb.dktcdn.net/100/379/731/files/cac-loai-vat-lieu-xay-dung.jpg?v=1747032221176"],
      specifications: {
        material: "Kính cường lực an toàn",
        size: "1.2x2.4m x 8mm",
        weight: "45kg/tấm",
        origin: "Trung Quốc"
      }
    }
  ];

  const ProductCard = ({ product, onClick }: { product: MaterialProduct; onClick: () => void }) => (
    <Card
      className="bg-white h-full rounded-xl overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
      onClick={onClick}
    >
      <div className="relative overflow-hidden">
        <Image
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-48 lg:h-64 object-cover transition-transform duration-300 group-hover:scale-110"
          width={300}
          height={300}
          priority
        />
        <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-md text-xs font-medium">
          -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
        </div>
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex flex-col gap-2">
            <button className="p-2 bg-white rounded-full shadow-md hover:bg-red-50 transition-colors">
              <Heart className="w-4 h-4 text-gray-600 hover:text-red-500" />
            </button>
            <button className="p-2 bg-white rounded-full shadow-md hover:bg-blue-50 transition-colors">
              <Share2 className="w-4 h-4 text-gray-600 hover:text-blue-500" />
            </button>
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="mb-2">
          <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium">
            {product.category}
          </span>
        </div>
        <h3 className="text-sm lg:text-base font-semibold text-gray-900 line-clamp-2 mb-2 h-10 lg:h-12">
          {product.title}
        </h3>
        <div className="flex items-center mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                  }`}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500 ml-2">({product.sold} đã bán)</span>
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-red-600">
              {HELPER.formatVND(product.price.toString())}
            </span>
          </div>
          <span className="text-sm text-gray-400 line-through">
            {HELPER.formatVND(product.originalPrice.toString())}
          </span>
        </div>
      </div>
    </Card>
  );

  const ProductDetailDialog = ({ product }: { product: MaterialProduct | null }) => {
    if (!product) return null;
    return (
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-white w-[95vw] sm:w-full z-[70] lg:z-50">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-gray-900">{product.title}</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="aspect-square relative rounded-lg overflow-hidden">
              <Image
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-full object-cover"
                width={400}
                height={400}
                priority
              />
            </div>
            <div className="grid grid-cols-3 gap-2">
              {product.images.slice(0, 3).map((img, idx) => (
                <div key={idx} className="aspect-square relative rounded-md overflow-hidden">
                  <Image
                    src={img}
                    alt={`${product.title} ${idx + 1}`}
                    className="w-full h-full object-cover"
                    width={100}
                    height={100}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">
                {product.category}
              </span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                      }`}
                  />
                ))}
                <span className="ml-2 text-sm text-gray-600">({product.rating}/5)</span>
              </div>
              <span className="text-sm text-gray-500">{product.sold} đã bán</span>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="text-2xl font-bold text-red-600">
                  {HELPER.formatVND(product.price.toString())}
                </span>
                <span className="text-lg text-gray-400 line-through">
                  {HELPER.formatVND(product.originalPrice.toString())}
                </span>
              </div>
              <div className="text-sm text-green-600 font-medium">
                Tiết kiệm {HELPER.formatVND((product.originalPrice - product.price).toString())}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Mô tả sản phẩm:</h4>
              <p className="text-gray-700 text-sm leading-relaxed">{product.description}</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Tính năng nổi bật:</h4>
              <ul className="space-y-1">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-gray-700 flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Thông số kỹ thuật:</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-500">Chất liệu:</span>
                  <div className="font-medium">{product.specifications.material}</div>
                </div>
                <div>
                  <span className="text-gray-500">Kích thước:</span>
                  <div className="font-medium">{product.specifications.size}</div>
                </div>
                <div>
                  <span className="text-gray-500">Trọng lượng:</span>
                  <div className="font-medium">{product.specifications.weight}</div>
                </div>
                <div>
                  <span className="text-gray-500">Xuất xứ:</span>
                  <div className="font-medium">{product.specifications.origin}</div>
                </div>
              </div>
            </div>
            <div className="flex gap-3 pt-4">
              <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
                <ShoppingCart className="w-5 h-5" />
                Thêm vào giỏ
              </button>
              <button className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <Heart className="w-5 h-5" />
              </button>
              <button className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </DialogContent>
    );
  };

  return (
    <main className="min-h-screen bg-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Vật Liệu Xây Dựng Chất Lượng Cao
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Khám phá bộ sưu tập vật liệu xây dựng đa dạng và chất lượng cao,
            đáp ứng mọi nhu cầu từ xây thô đến hoàn thiện công trình
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {mockData.map((product) => (
            <Dialog key={product.id}>
              <DialogTrigger asChild>
                <div>
                  <ProductCard
                    product={product}
                    onClick={() => setSelectedProduct(product)}
                  />
                </div>
              </DialogTrigger>
              <ProductDetailDialog product={product} />
            </Dialog>
          ))}
        </div>
      </div>
    </main>
  );
}
