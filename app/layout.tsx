import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#fafafa] text-black">

        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        {children}
        <Footer />

      </body>
    </html>
  );
}