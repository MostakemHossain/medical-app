import MegaMenu from "@/components/Frontend/MegaMenu";
import NavBar from "@/components/Frontend/NavBar";
import { ReactNode } from "react";

export default function Layout({children}:{children:ReactNode}) {
  return (
    <div className="bg-blue-950">
        <NavBar/>
        <div className="max-w-6xl mx-auto py-3">
      <MegaMenu/>
      </div>
        {children}
    </div>
  )
}
