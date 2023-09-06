import { useState } from "react";
import Link from "next/link";
import { BackArrowIcon, DatesIcon, HashtagsIcon, HomeIcon, MenuIcon, RateUsIcon, RecipesIcon, UserHistoryIcon, UsersIcon } from "@/icons";

const Navdrawer = ({ children }) => {
  const [isOpen, SetIsOpen] = useState(false);
  return (
    <div className="flex">
      <div className="absolute z-20" onClick={() => SetIsOpen(true)}>
        {MenuIcon}
      </div>
      <div
        className={`${isOpen ? "max-w-[500px]" : "max-w-[0px]"}
                overflow-auto transition-all ease-in-out duration-500 h-screen bg-light-green z-20 fixed`}
      >
        <div className="border border-dark-green border-4 rounded-lg p-2 w-fit h-full">
          <div className="w-fit p-1" onClick={() => SetIsOpen(false)}>
            <button>{BackArrowIcon}</button>
          </div>
          <div
            className={`${
              isOpen ? "max-w-[500px] max-h-[400px]" : "max-w-[0px] max-h-[0px]"
            }
            overflow-auto transition-all ease-in-out duration-500`}
          >
            <div className="px-4 pb-4">
                <div className="grid grid-rows-4 gap-4">
                <div>
                  <Link className="flex items-center gap-7" href={"/home"}>
                    {HomeIcon}
                    Inicio
                  </Link>
                </div>
                <div>
                  <Link className="flex items-center gap-7" href={"/home"}>
                    {UsersIcon}
                    Usuarios
                  </Link>
                </div>
                <div>
                  <Link className="flex items-center gap-7" href={"/home"}>
                    {RecipesIcon}
                    Mis recetas
                  </Link>
                </div>
                <div>
                  <Link className="flex items-center gap-7" href={"/home"}>
                    {DatesIcon}
                    Calendario
                  </Link>
                </div>
                <div>
                  <Link className="flex items-center gap-7" href={"/home"}>
                    {HashtagsIcon}
                    Hashtags
                  </Link>
                </div>
                <div>
                  <Link className="flex items-center gap-7" href={"/home"}>
                    {UserHistoryIcon}
                    Historia de Usuarios
                  </Link>
                </div>
                <div>
                  <Link className="flex items-center gap-7" href={"/home"}>
                    {RateUsIcon}
                    Calificanos
                  </Link>
                </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="">{children}</div>
      </div>
    </div>
  );
};

export default Navdrawer;
