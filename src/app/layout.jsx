import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mikochat Ai",
  description: "project chat ai",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark text-foreground bg-background">
      <body className={inter.className} suppressHydrationWarning={true}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
