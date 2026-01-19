import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "Nền tảng dịch vụ tiệc cưới",
  description: "Kết nối dịch vụ tiệc cưới nhanh chóng và uy tín",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
