import { Outfit } from "next/font/google";
import "./globals.css";
import { AppContextProvider } from "@/context/AppContext";
import { Toaster } from "react-hot-toast";
import { ClerkProvider } from "@clerk/nextjs";
import Head from "next/head";

const outfit = Outfit({ subsets: ["latin"], weight: ["300", "400", "500"] });

export const metadata = {
  title: "Toraz - Handymade",
  description: "E-Commerce Handymade for You",
};

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/logo.png" />
        <title>اسم موقعك</title>
      </Head>
      <ClerkProvider>
        <html lang="ar" dir="rtl">
          <body className={`${outfit.className} antialiased text-gray-700`}>
            <Toaster />
            <AppContextProvider>{children}</AppContextProvider>
          </body>
        </html>
      </ClerkProvider>
    </>
  );
}
