import Header from "@/components/UI/Header";

export default function Layoutlogin({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div lang="en">
      <div className={`relative px-3`}>
        {children}
      </div>
    </div>
  );
}
