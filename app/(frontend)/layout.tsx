import NavBar from "@/components/Frontend/NavBar";
import { ReactNode } from "react";

export default function Layout({children}:{children:ReactNode}) {
  return (
    <div>
        <NavBar/>
        {children}
    </div>
  )
}
