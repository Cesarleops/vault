import { Sidebar } from "./components/sidebar";
import { Dashboard } from "./components/dashboard";
import { TopBar } from "./components/top-bar";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Workspace } from "./components/workspace";

export const App = () => {
  return (
    <div className="w-screen h-screen flex gap-10 pt-10 pb-2">
      <TopBar />
      <Sidebar />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/workspace/:id" element={<Workspace />} />
        </Routes>
      </HashRouter>
    </div>
  );
};
