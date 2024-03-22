import "./globals.css";
export const metadata = {
  title: "LOGIST_APP",
  description: "Grow Your Business With Our Logistics Service",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  );
}
