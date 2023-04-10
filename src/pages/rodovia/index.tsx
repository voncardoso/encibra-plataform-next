import Sidbar from "@/components/Sidbar";
import { AppProps } from "next/app";

import { usePathname} from 'next/navigation';
import { useRouter } from "next/router";
import { Outlet } from "react-router-dom";

export default function DashboarRodovias() {
  const router = useRouter()
  return (
    <main className="bg-background h-full">
      <Sidbar />
    </main>
  );
}
