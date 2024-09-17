import AsideDashboard from "@/components/UI/AsideDashboard/AsideDashboard";
import Footer from "@/components/UI/Footer";
import Header from "@/components/UI/Header";

export default function Layoutlogin({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header />
      <main className={`relative pt-24 flex`}>
        <AsideDashboard />
        <section className=" p-3 sm:p-8 md:p-16 w-full lg:w-3/4">{children}</section>
      </main>
      <Footer />
    </div>
  );
}
