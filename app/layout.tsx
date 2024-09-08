import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "@/components/provider/Provider";

const inter = Inter({ subsets: ["latin"] });

export default ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
