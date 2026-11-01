import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "./globals.css";
import NavBar from "@/components/Navigation/NavBar";

config.autoAddCss = false;

const bricola = Bricolage_Grotesque({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Career Planning",
  description:
    "A career planning website that helps graduates organize their job search, follow a clear plan, discover opportunities, and track their applications and progress.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${bricola.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
