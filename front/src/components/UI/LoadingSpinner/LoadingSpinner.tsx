import { Spinner } from "@nextui-org/react";

export default function LoadingSpinner() {
  return (
    <div className="flex w-full h-full items-center justify-center">
      <Spinner size="lg" />
    </div>
  );
}
