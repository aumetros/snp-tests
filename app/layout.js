import { Inter } from "next/font/google";
import "styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TestYourself",
  description: "Приложение для создания и прохождения тестов.",
  keywords: "Тест, тесты, вопросы и ответы",
  author: "Алексей Шевляков",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
