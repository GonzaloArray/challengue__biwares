import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/userContext";
import { FaPowerOff } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";

import { StarFilledIcon } from "@radix-ui/react-icons";
import { useNavigate, useLocation } from "react-router-dom";
import { LineChartIcon } from "lucide-react";
import { MdLocalMovies } from "react-icons/md";
import Graphic from "./Graphic";
import Rating from "./Rating";

export function Dashboard() {
  const { user, setUser } = useContext(UserContext);
  const [data, setData] = useState({ ratings: [], peliculas: [] });
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
    } else {
      fetch(
        `https://script.google.com/macros/s/AKfycbyGZPRQ0tqucsonA5a9MpFZi9-hblcSI6fvguMtrmBjfC5z3CU1IywBWblBwii4_mZg6Q/exec?id=${user.id}`
      )
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch((error) => console.error("Error fetching users:", error));
    }
  }, [user, navigate]);

  // Actualiza la vista activa basada en la ruta actual
  const activeView = location.pathname.includes("graficos")
    ? "graficos"
    : "puntuacion";

  const handleLogout = () => {
    setUser(null);
    navigate("/");
  };

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="grid h-screen min-h-screen w-full bg-slate-950 text-white">
      <div
        className={`fixed left-0 top-0 z-50 flex justify-center overflow-hidden h-full rounded-r-xl bg-slate-800 text-white transform transition-transform duration-300 ${
          isSidebarVisible ? "w-[200px]" : "w-[100px]"
        }`}
      >
        <div className="fixed w-full h-full py-4 flex flex-col justify-between items-start flex-1 px-3">
          <div className={`flex w-full ${isSidebarVisible ? 'items-center justify-between' : 'flex-col items-center justify-center gap-2'}`}>
            <div className="flex items-center gap-2 justify-start">
              <MdLocalMovies className="text-[#0385ff] text-[2rem]" />
              {
                isSidebarVisible ? <p className="text-md">Movie page</p> : ''
              }
            </div>
            <button onClick={toggleSidebar} className="border p-1 rounded-lg">
              <IoIosArrowBack className={`transition-all ${isSidebarVisible ? 'rotate-0' : 'rotate-180'}`}/>
            </button>
          </div>
          <nav className={`grid -mt-24 w-full text-sm font-medium border-b pb-5 ${isSidebarVisible ? 'items-start justify-start':'items-start justify-center'}`}>
            <button
              className={`flex items-center gap-3 rounded-lg py-2 text-muted-foreground transition-all hover:text-primary ${
                activeView === "puntuacion" ? "text-primary" : ""
              }`}
              onClick={() => navigate("/dashboard/puntuacion")}
            >
              <StarFilledIcon className="h-4 w-4" />
              {isSidebarVisible ? 'Puntuación' : ''}
            </button>
            <button
              className={`flex items-center gap-3 rounded-lg py-2 text-muted-foreground transition-all hover:text-primary ${
                activeView === "graficos" ? "text-primary" : ""
              }`}
              onClick={() => navigate("/dashboard/graficos")}
            >
              <LineChartIcon className="h-4 w-4" />
              {isSidebarVisible ? 'Analytics' : ''}
            </button>
          </nav>
          <div
            className={`flex gap-2 w-full ${isSidebarVisible ? 'items-center' : 'justify-center'}`}
          >
            <button
              className={`text-sm flex gap-2 ${isSidebarVisible ? 'items-center text-center' : 'justify-center'}`}
              type="button"
              onClick={handleLogout}
            >
              <FaPowerOff />
              {isSidebarVisible ? <p>Cerrar sesión</p> : ''}
            </button>
          </div>
        </div>
      </div>
      <div
        className={`flex flex-col overflow-hidden ${
          isSidebarVisible ? "ml-[200px]" : "ml-[100px]"
        } z-0 transition-margin duration-300`}
      >
        <main className={`flex flex-1 w-full bg-slate-950 flex-col gap-4 p-4 md:gap-8 md:p-6 ${activeView == 'graficos' ? 'overflow-auto' : 'overflow-hidden'}`}>
          {activeView === "puntuacion" && <Rating />}
          {activeView === "graficos" && (
            <div className="grid">{data && <Graphic data={data} />}</div>
          )}
        </main>
      </div>
    </div>
  );
}