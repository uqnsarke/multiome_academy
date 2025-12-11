import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Multiome Academy",
  description: "Learn Multiome Analysis From Scratch"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
