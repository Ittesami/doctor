import "./globals.css";

export const metadata = {
  title: "Dr. Farida Khan",
  description:
    "Expert Gynecologist Surgeons",
  keywords:
    "gynecologist, surgeon, women's health, fertility, laparoscopic surgery",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
