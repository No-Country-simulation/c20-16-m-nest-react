"use client";
import Hero from "@/components/hero/Hero";
import Header from "@/components/UI/Header";
import { useTestCont } from "@/context/zustang";

export default function Home() {
  const { inc, count, dec }: any = useTestCont();
  return (
    <main className="w-full">
      <Header />
      <Hero />
      <div>{count}</div>
      <button className="border-2 border-black" onClick={inc}>
        incrementar +1
      </button>
      <button className="border-2 border-black" onClick={dec}>
        decrementa -1
      </button>
    </main>
  );
}
