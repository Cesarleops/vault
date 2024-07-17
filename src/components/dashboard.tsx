import { Button } from "./ui/button";

export const Dashboard = () => {
  return (
    <section className="flex flex-col justify-center items-center w-full bg-[#20192b]">
      <div className="grid grid-cols-3 gap-4 place-content-center">
        <div className="w-[200px] h-[100px] bg-green-500 text-center rounded-md p-5">
          Java Things
        </div>

        <div className="w-[200px] h-[100px] bg-green-500 text-center rounded-md p-5">
          Math Studies
        </div>
        <Button className="w-[200px] h-[50px] bg-black text-white ">
          Crear Espacio de trabajo
        </Button>
      </div>
    </section>
  );
};
