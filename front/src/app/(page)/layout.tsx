import Footer from "@/components/UI/Footer";
import Header from "@/components/UI/Header";

export default function LayoutPages({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header />
      <main className={`min-h-screen`}>{children}</main>
      <Footer />
    </div>
  );
}
