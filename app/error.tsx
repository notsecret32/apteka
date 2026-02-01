"use client";

import { Button } from "@/components/ui/button";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ reset }: ErrorProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 h-screen">
      <h1 className="uppercase font-bold text-4xl">Произошла ошибка</h1>
      <p>Попробуйте еще раз.</p>
      <Button className="cursor-pointer" onClick={() => reset()}>
        Повторить попытку
      </Button>
    </div>
  );
}
