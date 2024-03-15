import MegaMenu from "@/components/Frontend/MegaMenu";
import NavBar from "@/components/Frontend/NavBar";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-white">
      <NavBar />
      <div className="bg-white mx-auto py-4 fixed top-20 w-full left-0 z-50 right-0 border-t border-gray-400/30">
        <MegaMenu />
      </div>
      {children}
    </div>
  );
}
