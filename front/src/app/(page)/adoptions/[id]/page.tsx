import DetailAdoption from "@/components/DetailAdoption/DetailAdoption";

export default function SpecificDetailAdoption({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  return <DetailAdoption idParam={id} />;
}
