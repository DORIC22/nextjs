// layout.js

import localFont from "next/font/local";
import Header from "@/components/header";
import Footer from "@/components/footer";
import "./globals.css";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata = {
    title: "Переименуйте в свой проект",
    description: "Своё описание",
};

export default function RootLayout({ children }) {
    return (
        <html lang="ru">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased h-[calc(100vh)] flex flex-col`}>
        <Header />
        <main className="flex-grow flex justify-center bg-gray-200">
            {children} {/* Здесь будет отображаться содержимое страниц */}
        </main>
        <Footer />
        </body>
        </html>
    );
}
