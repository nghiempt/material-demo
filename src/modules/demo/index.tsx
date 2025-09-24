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
      title: "Khung ảnh mica trong suốt A4",
      thumbnail: "/background.png",
      price: 75000,
      originalPrice: 100000,
      description: "Khung ảnh mica trong suốt chất lượng cao, phù hợp trưng bày chứng nhận, bằng khen, poster. Thiết kế đơn giản, hiện đại.",
      category: "Khung ảnh",
      rating: 4.6,
      sold: 567,
      features: ["Mica trong suốt", "Chống UV", "Dễ thay đổi", "Giá thành hợp lý"],
      images: ["/background.png", "/logo.png", "/iaht-logo.png"],
      specifications: {
        material: "Mica PMMA cao cấp",
        size: "21x29.7cm (A4)",
        weight: "0.3kg",
        origin: "Trung Quốc"
      }
    },
    {
      id: 4,
      title: "Album ảnh canvas phong cách vintage",
      thumbnail: "/logo-transparent.png",
      price: 280000,
      originalPrice: 350000,
      description: "Album ảnh với chất liệu canvas bền đẹp, phong cách vintage độc đáo. Mỗi trang được thiết kế với họa tiết cổ điển, tạo nên vẻ đẹp hoài cổ.",
      category: "Album ảnh",
      rating: 4.7,
      sold: 123,
      features: ["Chất liệu canvas", "Phong cách vintage", "Họa tiết cổ điển", "Bền màu"],
      images: ["/logo-transparent.png", "/background.png", "/logo.png"],
      specifications: {
        material: "Canvas cotton + giấy kraft",
        size: "30x30x3cm",
        weight: "0.8kg",
        origin: "Việt Nam"
      }
    },
    {
      id: 5,
      title: "Khung ảnh kim loại phong cách hiện đại 30x40cm",
      thumbnail: "/bg-empty.png",
      price: 250000,
      originalPrice: 320000,
      description: "Khung ảnh kim loại với thiết kế hiện đại, minimalist. Bề mặt được phủ lớp chống han gỉ, màu sắc bền đẹp theo thời gian.",
      category: "Khung ảnh",
      rating: 4.8,
      sold: 89,
      features: ["Kim loại cao cấp", "Chống han gỉ", "Thiết kế minimalist", "Nhiều màu sắc"],
      images: ["/bg-empty.png", "/logo.png", "/background.png"],
      specifications: {
        material: "Nhôm anodized",
        size: "30x40cm",
        weight: "0.7kg",
        origin: "Đức"
      }
    },
    {
      id: 6,
      title: "Album ảnh có khóa vintage 300 hình",
      thumbnail: "/bg-full.png",
      price: 420000,
      originalPrice: 550000,
      description: "Album ảnh cao cấp với khóa bảo mật, phong cách vintage sang trọng. Có thể chứa 300 bức ảnh với nhiều kích thước khác nhau.",
      category: "Album ảnh",
      rating: 4.9,
      sold: 67,
      features: ["Có khóa bảo mật", "Chứa 300 ảnh", "Phong cách vintage", "Nhiều ngăn"],
      images: ["/bg-full.png", "/iaht-logo.png", "/logo.png"],
      specifications: {
        material: "Da thật + kim loại",
        size: "35x30x6cm",
        weight: "1.8kg",
        origin: "Ý"
      }
    },
    {
      id: 7,
      title: "Khung ảnh gỗ tự nhiên oval 25x35cm",
      thumbnail: "/logo.png",
      price: 180000,
      originalPrice: 230000,
      description: "Khung ảnh oval độc đáo từ gỗ tự nhiên, phù hợp cho những bức ảnh chân dung đặc biệt. Thiết kế cổ điển, thanh lịch.",
      category: "Khung ảnh",
      rating: 4.7,
      sold: 156,
      features: ["Hình oval độc đáo", "Gỗ tự nhiên", "Thiết kế cổ điển", "Handmade"],
      images: ["/logo.png", "/background.png", "/iaht-logo.png"],
      specifications: {
        material: "Gỗ thông tự nhiên",
        size: "25x35cm",
        weight: "0.6kg",
        origin: "Việt Nam"
      }
    },
    {
      id: 8,
      title: "Album ảnh DIY tự trang trí",
      thumbnail: "/iaht-logo.png",
      price: 150000,
      originalPrice: 200000,
      description: "Album ảnh trống cho phép bạn tự do sáng tạo, trang trí theo ý thích. Đi kèm nhiều phụ kiện trang trí đa dạng.",
      category: "Album ảnh",
      rating: 4.5,
      sold: 234,
      features: ["Tự trang trí", "Nhiều phụ kiện", "Sáng tạo tự do", "Phù hợp mọi lứa tuổi"],
      images: ["/iaht-logo.png", "/logo-transparent.png", "/bg-empty.png"],
      specifications: {
        material: "Giấy kraft + các phụ kiện trang trí",
        size: "25x25x4cm",
        weight: "0.9kg",
        origin: "Việt Nam"
      }
    },
    {
      id: 9,
      title: "Khung ảnh đa khung 5 ảnh phong cách gallery",
      thumbnail: "/background.png",
      price: 380000,
      originalPrice: 480000,
      description: "Khung ảnh đa khung cho phép trưng bày 5 bức ảnh cùng lúc, tạo hiệu ứng gallery wall ấn tượng cho không gian sống.",
      category: "Khung ảnh",
      rating: 4.8,
      sold: 78,
      features: ["Đa khung 5 ảnh", "Hiệu ứng gallery", "Dễ lắp đặt", "Thiết kế linh hoạt"],
      images: ["/background.png", "/bg-full.png", "/logo.png"],
      specifications: {
        material: "Gỗ MDF phủ melamine",
        size: "60x40cm",
        weight: "1.5kg",
        origin: "Malaysia"
      }
    },
    {
      id: 10,
      title: "Album ảnh cưới cao cấp bọc lụa",
      thumbnail: "/logo-transparent.png",
      price: 650000,
      originalPrice: 850000,
      description: "Album ảnh cưới sang trọng bọc lụa cao cấp, thiết kế đặc biệt cho ngày trọng đại. Mỗi chi tiết được chăm chút tỉ mỉ.",
      category: "Album ảnh",
      rating: 5.0,
      sold: 45,
      features: ["Bọc lụa cao cấp", "Thiết kế đặc biệt", "Sang trọng", "Kỷ niệm đặc biệt"],
      images: ["/logo-transparent.png", "/bg-full.png", "/iaht-logo.png"],
      specifications: {
        material: "Lụa tơ tằm + giấy ảnh cao cấp",
        size: "40x30x5cm",
        weight: "2.0kg",
        origin: "Nhật Bản"
      }
    },
    {
      id: 11,
      title: "Khung ảnh LED phát sáng 20x25cm",
      thumbnail: "/bg-empty.png",
      price: 290000,
      originalPrice: 380000,
      description: "Khung ảnh với công nghệ LED tích hợp, tạo hiệu ứng phát sáng đẹp mắt. Pin sạc tiện lợi, có thể điều chỉnh độ sáng.",
      category: "Khung ảnh",
      rating: 4.6,
      sold: 198,
      features: ["Công nghệ LED", "Pin sạc tiện lợi", "Điều chỉnh độ sáng", "Hiệu ứng đẹp"],
      images: ["/bg-empty.png", "/background.png", "/logo.png"],
      specifications: {
        material: "Nhựa ABS + LED",
        size: "20x25cm",
        weight: "0.8kg",
        origin: "Trung Quốc"
      }
    },
    {
      id: 12,
      title: "Album ảnh polaroid mini 100 hình",
      thumbnail: "/bg-full.png",
      price: 120000,
      originalPrice: 160000,
      description: "Album ảnh nhỏ gọn dành cho ảnh polaroid, có thể mang theo bên mình. Thiết kế cute, nhiều màu sắc lựa chọn.",
      category: "Album ảnh",
      rating: 4.4,
      sold: 412,
      features: ["Dành cho polaroid", "Nhỏ gọn", "Nhiều màu sắc", "Dễ mang theo"],
      images: ["/bg-full.png", "/logo-transparent.png", "/iaht-logo.png"],
      specifications: {
        material: "Giấy cứng + PVC",
        size: "12x10x2cm",
        weight: "0.2kg",
        origin: "Hàn Quốc"
      }
    },
    {
      id: 13,
      title: "Khung ảnh treo tường set 9 khung",
      thumbnail: "/logo.png",
      price: 450000,
      originalPrice: 600000,
      description: "Bộ 9 khung ảnh treo tường với nhiều kích thước khác nhau, tạo bộ sưu tập ảnh ấn tượng trên tường nhà bạn.",
      category: "Khung ảnh",
      rating: 4.9,
      sold: 56,
      features: ["Bộ 9 khung", "Nhiều kích thước", "Treo tường", "Tạo bộ sưu tập"],
      images: ["/logo.png", "/bg-empty.png", "/background.png"],
      specifications: {
        material: "Gỗ thông + kính",
        size: "Đa kích thước",
        weight: "2.5kg",
        origin: "Việt Nam"
      }
    },
    {
      id: 14,
      title: "Album ảnh học sinh kỷ yếu",
      thumbnail: "/iaht-logo.png",
      price: 200000,
      originalPrice: 260000,
      description: "Album ảnh kỷ yếu dành cho học sinh, sinh viên với thiết kế trẻ trung, năng động. Có thể in tên lớp, trường theo yêu cầu.",
      category: "Album ảnh",
      rating: 4.6,
      sold: 289,
      features: ["Dành cho học sinh", "Thiết kế trẻ trung", "In tên theo yêu cầu", "Màu sắc đa dạng"],
      images: ["/iaht-logo.png", "/logo.png", "/bg-full.png"],
      specifications: {
        material: "Giấy glossy + bìa cứng",
        size: "25x20x3cm",
        weight: "0.7kg",
        origin: "Việt Nam"
      }
    },
    {
      id: 15,
      title: "Khung ảnh từ tính dán tủ lạnh",
      thumbnail: "/background.png",
      price: 45000,
      originalPrice: 65000,
      description: "Khung ảnh từ tính tiện lợi, có thể dán trên tủ lạnh, bảng từ. Thiết kế nhỏ gọn, đáng yêu cho những khoảnh khắc thường ngày.",
      category: "Khung ảnh",
      rating: 4.3,
      sold: 678,
      features: ["Từ tính mạnh", "Dán tủ lạnh", "Nhỏ gọn", "Giá rẻ"],
      images: ["/background.png", "/logo-transparent.png", "/bg-empty.png"],
      specifications: {
        material: "Nhựa PVC + nam châm",
        size: "7x5cm",
        weight: "0.05kg",
        origin: "Trung Quốc"
      }
    },
    {
      id: 16,
      title: "Album ảnh da thật handmade",
      thumbnail: "/logo-transparent.png",
      price: 580000,
      originalPrice: 750000,
      description: "Album ảnh làm từ da thật 100%, hoàn toàn handmade bởi nghệ nhân lành nghề. Mỗi cuốn đều là một tác phẩm nghệ thuật độc đáo.",
      category: "Album ảnh",
      rating: 4.9,
      sold: 23,
      features: ["Da thật 100%", "Hoàn toàn handmade", "Nghệ thuật độc đáo", "Limited edition"],
      images: ["/logo-transparent.png", "/iaht-logo.png", "/bg-full.png"],
      specifications: {
        material: "Da bò thật + chỉ cotton",
        size: "30x25x4cm",
        weight: "1.3kg",
        origin: "Việt Nam"
      }
    },
    {
      id: 17,
      title: "Khung ảnh xoay 360 độ để bàn",
      thumbnail: "/bg-empty.png",
      price: 180000,
      originalPrice: 240000,
      description: "Khung ảnh có thể xoay 360 độ, đặt trên bàn làm việc. Thiết kế hiện đại với chân đế chắc chắn, có thể xem ảnh ở nhiều góc độ.",
      category: "Khung ảnh",
      rating: 4.5,
      sold: 134,
      features: ["Xoay 360 độ", "Để bàn", "Chân đế chắc chắn", "Hiện đại"],
      images: ["/bg-empty.png", "/logo.png", "/background.png"],
      specifications: {
        material: "Nhựa ABS + kim loại",
        size: "15x20cm",
        weight: "0.4kg",
        origin: "Nhật Bản"
      }
    },
    {
      id: 18,
      title: "Album ảnh flip book tự làm",
      thumbnail: "/bg-full.png",
      price: 95000,
      originalPrice: 130000,
      description: "Album ảnh dạng flip book cho phép tạo hiệu ứng động từ các bức ảnh tĩnh. Thích hợp làm quà tặng độc đáo và sáng tạo.",
      category: "Album ảnh",
      rating: 4.2,
      sold: 167,
      features: ["Hiệu ứng flip book", "Tự làm", "Quà tặng độc đáo", "Sáng tạo"],
      images: ["/bg-full.png", "/logo-transparent.png", "/iaht-logo.png"],
      specifications: {
        material: "Giấy photo + bìa cứng",
        size: "10x8x1cm",
        weight: "0.15kg",
        origin: "Việt Nam"
      }
    },
    {
      id: 19,
      title: "Khung ảnh thông minh kết nối WiFi",
      thumbnail: "/logo.png",
      price: 1200000,
      originalPrice: 1500000,
      description: "Khung ảnh thông minh có thể kết nối WiFi, hiển thị ảnh từ điện thoại, cloud. Màn hình LCD chất lượng cao, nhiều tính năng thông minh.",
      category: "Khung ảnh",
      rating: 4.7,
      sold: 34,
      features: ["Kết nối WiFi", "Màn hình LCD", "Tính năng thông minh", "Điều khiển từ xa"],
      images: ["/logo.png", "/bg-full.png", "/background.png"],
      specifications: {
        material: "Nhựa ABS + màn hình LCD",
        size: "25x20x3cm",
        weight: "1.0kg",
        origin: "Trung Quốc"
      }
    },
    {
      id: 20,
      title: "Album ảnh eco-friendly từ giấy tái chế",
      thumbnail: "/iaht-logo.png",
      price: 140000,
      originalPrice: 190000,
      description: "Album ảnh thân thiện môi trường làm từ 100% giấy tái chế. Góp phần bảo vệ môi trường mà vẫn đảm bảo chất lượng và thẩm mỹ.",
      category: "Album ảnh",
      rating: 4.4,
      sold: 201,
      features: ["100% giấy tái chế", "Thân thiện môi trường", "Chất lượng cao", "Ý nghĩa xã hội"],
      images: ["/iaht-logo.png", "/bg-empty.png", "/logo-transparent.png"],
      specifications: {
        material: "Giấy tái chế + keo sinh học",
        size: "20x20x2cm",
        weight: "0.5kg",
        origin: "Đan Mạch"
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
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Vật Liệu In Ảnh Cao Cấp
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Khám phá bộ sưu tập khung ảnh và album ảnh chất lượng cao,
            được thiết kế để lưu giữ những khoảnh khắc đáng nhớ của bạn
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
