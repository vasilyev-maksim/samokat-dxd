import localFont from "next/font/local";
import type { Metadata } from "next";
import "./normalize.css";
import "./globals.css";

// Font files can be colocated inside of `pages`
const myFont = localFont({
  // src: "./Euclid Circular A Regular.ttf"
  src: [
    { path: "/fonts/Euclid Circular A Light.ttf", weight: "400" },
    { path: "/fonts/Euclid Circular A Regular.ttf", weight: "500" },
    { path: "/fonts/Euclid Circular A SemiBold.ttf", weight: "600" },
  ],
});

export const metadata: Metadata = {
  title: "Помогаем вместе",
  description: "Поддержите подопечных фонда и получите подарок от Самоката",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={myFont.className}>{children}</body>
    </html>
  );
}
