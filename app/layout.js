
import './globals.css';

export const metadata = {
  title: 'Dr. Md. Ahsan Habib - Colorectal Surgeon',
  description: 'Expert Colorectal Surgeon specializing in fistula surgery, laser treatment, and advanced surgical procedures',
  keywords: 'colorectal surgeon, fistula surgery, piles treatment, laser surgery, Dhaka Medical College',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}