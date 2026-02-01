import { LoaderCircle } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen animate-spin">
      <LoaderCircle className="text-primary-gray size-14" />
    </div>
  );
}
