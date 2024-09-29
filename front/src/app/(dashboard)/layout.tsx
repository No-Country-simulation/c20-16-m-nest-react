import AsideDashboard from "@/components/UI/AsideDashboard/AsideDashboard";
import Footer from "@/components/UI/Footer";
import Header from "@/components/UI/Header";
import { usersId } from "@/context/zustang";
import { URLS } from "@/data/cofigEnv";
import { decodeJWT } from "@/services/deCode";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Layoutlogin({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  //const {setUser}: any =  usersId();
  const cookieStore = cookies();
  const token = cookieStore.get("token-user");

  if (!token) {
    redirect("/");
  }
  const { id }: any = decodeJWT(token?.value);

  //hacer una funcion aparte
  const userId = async (id: number, token: any) => {
    try {
      const dataUser = await fetch(`${URLS.URL}/api/v1/users/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token?.value}`,
        },
      });
      const response = await dataUser.json();
      //console.log(response);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  const resUser = userId(id, token);
  console.log(resUser);
  return (
    <div>
      <Header />
      <main className={`relative pt-24 flex`}>
        <AsideDashboard userLogin={resUser} />
        <section className=" p-3 sm:p-8 md:p-16 w-full lg:w-3/4">
          {children}
        </section>
      </main>
      <Footer />
    </div>
  );
}
