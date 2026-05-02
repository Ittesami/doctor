import "./globals.css";

export const metadata = {
  title: "Prof. Dr. Md. Ahsan Habib - Colorectal Surgeon",
  description:
    "Expert Colorectal Surgeon specializing in laser surgery, HIPEC, laparoscopic colorectal cancer surgery, fistula, and advanced anorectal procedures at Dhaka Medical College",
  keywords:
    "colorectal surgeon, fistula surgery, piles treatment, laser surgery, HIPEC, colonoscopy, Dhaka Medical College, Bangladesh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
