import { Folder, Home, Settings } from "lucide-react";

export const Sidebar = () => {
  return (
    <nav className="bg-[#20192b] text-white w-[100px] flex flex-col gap-10 p-10 rounded-lg ml-2 items-center">
      <Home />
      <Folder />
      <Settings />
    </nav>
  );
};
