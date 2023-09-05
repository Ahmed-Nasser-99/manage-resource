import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manage recourse",
  description: "Mange resource",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-#DFE1E3">{children}</body>
    </html>
  );
}
