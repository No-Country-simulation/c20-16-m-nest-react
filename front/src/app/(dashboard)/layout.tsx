import AsideDashboard from "@/components/UI/AsideDashboard/AsideDashboard";
import Footer from "@/components/UI/Footer";
import Header from "@/components/UI/Header";
import { URLS } from "@/data/cofigEnv";
import { decodeJWT } from "@/services/deCode";
import { cookies } from "next/headers";

export default async function Layoutlogin({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = cookies();
  const token = cookieStore.get("token-user");
  console.log(decodeJWT(token?.value));
  try {
    const dataUser = await fetch(`${URLS.URL}/api/v1/users`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token?.value}`,
      },
    });
    const response = await dataUser.json();
    console.log(response);
  } catch (error) {
    console.log(error);
  }
  //setUser()
  return (
    <div>
      <Header />
      <main className={`relative pt-24 flex`}>
        <AsideDashboard />
        <section className=" p-3 sm:p-8 md:p-16 w-full lg:w-3/4">
          {children}
        </section>
      </main>
      <Footer />
    </div>
  );
}
