import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <main className=" box-border flex flex-col items-center bg-[#121212] p-8 text-white font-PlusJakartaSans min-h-screen">
      <Outlet />
    </main>
  );
};
export default Body;
