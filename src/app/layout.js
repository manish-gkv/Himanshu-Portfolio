import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar";
import PageTransitionWrapper from "@/components/PageTransitionWrapper"; // ✅

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Himanshu Saini",
  description:
    "Personal website of Himanshu Saini, a software engineer and problem solver.",
  name: "Himanshu Saini",
  content: "Personal website of Himanshu Saini, a software engineer and problem solver.",
  keywords: ["himanshu saini", "himanshu saini TCS", "himanshu saini data engineer", "himanshu saini software developer",
    "himanshu saini Noida"
  ]
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NavBar />
        <PageTransitionWrapper>
          {children}
        </PageTransitionWrapper>
      </body>
    </html>
  );
}
