import { Sidebar } from "./components/sidebar";
import { Dashboard } from "./components/dashboard";

export const App = () => {
  return (
    <>
      <div className="w-screen h-screen flex gap-10 py-2">
        <Sidebar />
        <Dashboard />
      </div>
    </>
  );
};
