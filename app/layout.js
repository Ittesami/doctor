import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import JsonLd from "@/components/JsonLd";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { GTMScript, GTMNoScript } from "@/components/GoogleTagManager";
import { buildPhysicianSchema } from "@/lib/schema";

export const metadata = {
  title: "Prof. Dr. Md. Ahsan Habib - Colorectal Surgeon | drmdahsanhabib.com",
  description:
    "Expert Colorectal Surgeon specializing in laser surgery, HIPEC, laparoscopic colorectal cancer surgery, fistula, and advanced anorectal procedures at Dhaka Medical College. Chambers in Dhanmondi, Dhaka and Tangail.",
  keywords:
    "colorectal surgeon, fistula surgery, piles treatment, laser surgery, HIPEC, colonoscopy, Dhaka Medical College, Bangladesh, Dr Ahsan Habib, drmdahsanhabib",
  metadataBase: new URL("https://www.drmdahsanhabib.com"),
  openGraph: {
    title: "Prof. Dr. Md. Ahsan Habib - Colorectal Surgeon",
    description:
      "Professor & Head of Department, Colorectal Surgery, Dhaka Medical College. Pioneer in laser colorectal surgery & HIPEC in Bangladesh.",
    url: "https://www.drmdahsanhabib.com",
    siteName: "Dr. Md. Ahsan Habib",
    locale: "en_US",
    type: "website",
  },
  ...(process.env.GOOGLE_SITE_VERIFICATION && {
    verification: { google: process.env.GOOGLE_SITE_VERIFICATION },
  }),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <GTMScript />
      </head>
      <body suppressHydrationWarning>
        <GTMNoScript />
        <JsonLd data={buildPhysicianSchema()} />
        <LanguageProvider>{children}</LanguageProvider>
        <GoogleAnalytics />
      </body>
    </html>
  );
}
