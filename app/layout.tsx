"use client";

import { useState } from "react";
import "./globals.css";
import type { Metadata } from "next";
import ToggleDirectionButton from "@/components/manageResource/shared/ToggleDirectionButton";

export const metadata: Metadata = {
  title: "Manage recourse",
  description: "Mange resource",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [direction, setDirection] = useState("rtl");

  const toggleDirection = () => {
    const newDirection = direction === "ltr" ? "rtl" : "ltr";
    setDirection(newDirection);
  };
  return (
    <html lang={direction === "ltr" ? "en" : "ar"} dir={direction}>
      <body>
        {children}
        <ToggleDirectionButton
          toggleDirection={toggleDirection}
          isRTL={direction === "rtl"}
        />
      </body>
    </html>
  );
}
