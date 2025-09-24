import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const font = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vật Liệu Nhập Khẩu",
  description:
    "Cung cấp vật liệu xây dựng nhập khẩu chất lượng cao từ các thương hiệu hàng đầu thế giới. Khám phá danh mục sản phẩm đa dạng của chúng tôi ngay hôm nay!",
  openGraph: {
    title: "Vật Liệu Nhập Khẩu",
    description:
      "Cung cấp vật liệu xây dựng nhập khẩu chất lượng cao từ các thương hiệu hàng đầu thế giới. Khám phá danh mục sản phẩm đa dạng của chúng tôi ngay hôm nay!",
    url: "https://vatlieu.farmcode.io.vn",
    images: [
      {
        url: "https://vietmylogistic.com/wp-content/uploads/2021/06/vat-lieu-xay-dung.jpg",
        width: 1200,
        height: 630,
        alt: "Vật Liệu Nhập Khẩu",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={font.className}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
