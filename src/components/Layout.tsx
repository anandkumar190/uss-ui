import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import type { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  footerContent?: any;
  contactConfig?: any;
  seo?: any;
}

export function Layout({ children, footerContent, contactConfig, seo }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar seo={seo} />
      <main className="flex-1">{children}</main>
      <Footer footerContent={footerContent} contactConfig={contactConfig} />
    </div>
  );
}
