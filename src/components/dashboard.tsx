import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export const Dashboard = () => {
  return (
    <div className="rounded-md flex flex-col gap-10  w-full bg-[#20192b] p-10">
      <h1 className="font-bold text-2xl text-white self-start ">Destacados</h1>
      <section className="flex items-center justify-center w-full">
        <div className="grid grid-cols-3 gap-4 place-content-center  p-5">
          <div className="w-[300px] h-[100px] bg-green-500 text-center rounded-md p-5">
            Java Things
          </div>

          <div className="w-[300px] h-[100px] bg-green-500 text-center rounded-md p-5">
            <Link to={"/workspace/hello"}>Math Studies</Link>
          </div>
          <div className="w-[300px] h-[100px] bg-green-500 text-center rounded-md p-5">
            Math Studies
          </div>

          <Button className="w-[200px] h-[50px] bg-black text-white ">
            Crear Espacio de trabajo
          </Button>
        </div>
      </section>
    </div>
  );
};
