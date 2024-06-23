import { ResponsiveBar } from "@nivo/bar";
import { useEffect, useState, useContext } from "react";
import { Button } from "@/components/ui/button";
import { UserContext } from "@/context/userContext";

export const BarChart = (props: any) => {
  const { data, histogram, peliculas } = props;
  const { user, setUser } = useContext(UserContext);
  const [genre, setGenero] = useState("");
  const [graf, setGraf] = useState(data);
  const [histoGraf, setHistoGraf] = useState(data);
  const [peliPorRating, setPeliPorRating] = useState([]);
  const [mostrarPeli, setMostrarPeli] = useState([
    "No hay títulos que mostrar",
  ]);
  const genres = [
    "Action",
    "Adventure",
    "Animation",
    "Children's",
    "Comedy",
    "Crime",
    "Documentary",
    "Drama",
    "Fantasy",
    "Film-Noir",
    "Horror",
    "Musical",
    "Mystery",
    "Romance",
    "Sci-Fi",
    "Thriller",
    "War",
    "Western",
  ];

  function transformarObjetoAArray(obj: any) {
    return Object.entries(obj).map(([clave, valor]) => ({
      prop: clave,
      ...valor,
    }));
  }

  useEffect(() => {
    if (genre) {
      setGraf(data.filter((e: { genre: any }) => e.genre === genre));
      const arr = transformarObjetoAArray(histogram[genre]);
      setHistoGraf(arr);
    }
  }, [genre]);

  useEffect(() => {
    const pelis = Object.fromEntries(peliPorRating)[user?.id];

    if (pelis) {
      const res = pelis.map((peliId: number) => {
        const peli = peliculas.find((p: { id: number }) => p.id == peliId);
        return peli ? peli.Name : "No votaste ninguna peli en este rango";
      });
      setMostrarPeli(res);
    } else {
      setMostrarPeli(["No hay títulos que mostrar"]);
    }
  }, [peliPorRating]);

  return (
    <>
      <header className="mt-20 grid sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-9 2xl:grid-cols-12 gap-3 flex-wrap text-white">
        {genres.map((g) => (
          <Button
            key={g}
            variant={"borde"}
            className={`${genre == g ? "bg-blue-500" : ""}`}
            onClick={() => setGenero(g)}
          >
            {g}
          </Button>
        ))}
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <h2 className="text-2xl my-10 font text-white">
            {genre || "Selecciona un género"}
          </h2>
          {genre && (
            <>
              <p className="mb-10">
                Evolución histórica del promedio de puntuación para este genero
                de todos los usuarios{" "}
              </p>
              <div {...props}>
                <ResponsiveBar
                  data={graf}
                  keys={["average_rating"]}
                  indexBy="year"
                  margin={{ top: 0, right: 0, bottom: 40, left: 40 }}
                  padding={0.3}
                  colors={["#2563eb"]}
                  axisBottom={{
                    tickSize: 0,
                    tickPadding: 16,
                  }}
                  axisLeft={{
                    tickSize: 0,
                    tickValues: 5,
                    tickPadding: 16,
                  }}
                  gridYValues={5}
                  theme={{
                    tooltip: {
                      chip: {
                        borderRadius: "9999px",
                      },
                      container: {
                        fontSize: "12px",
                        textTransform: "capitalize",
                        borderRadius: "6px",
                      },
                    },
                    grid: {
                      line: {
                        stroke: "#f3f4f6",
                      },
                    },
                  }}
                  tooltipLabel={({ id }) => `${id}`}
                  enableLabel={false}
                  role="application"
                  ariaLabel="peliculas por rating"
                />
              </div>
            </>
          )}
        </div>
        {genre && (
          <div>
            <h2 className="text-2xl my-10 font text-white">Histograma</h2>
            <p className="mb-10">
              {" "}
              Muestra la puntuación de todos los usuarios para este género.
            </p>
            <div {...props}>
              <ResponsiveBar
                data={histoGraf}
                keys={["0-18", "19-25", "26-45", "+46"]}
                indexBy="prop"
                margin={{ top: 0, right: 0, bottom: 40, left: 40 }}
                padding={0.3}
                axisBottom={{
                  tickSize: 0,
                  tickPadding: 16,
                }}
                axisLeft={{
                  tickSize: 0,
                  tickValues: 5,
                  tickPadding: 16,
                }}
                gridYValues={5}
                theme={{
                  tooltip: {
                    chip: {
                      borderRadius: "9999px",
                    },
                    container: {
                      fontSize: "12px",
                      textTransform: "capitalize",
                      borderRadius: "6px",
                    },
                  },
                  grid: {
                    line: {
                      stroke: "#f3f4f6",
                    },
                  },
                }}
                onClick={(x) => {
                  setPeliPorRating(x.data.users);
                }}
                tooltipLabel={({ id }) => `${id}`}
                enableLabel={false}
                role="application"
                ariaLabel="peliculas por rating"
              />
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <h2>Puntuación de peliculas elijidas por mi:</h2>
        {mostrarPeli.length === 0 && <h2>No se encontraron resultados</h2>}
        {mostrarPeli.map((e, index) => (
          <div className="bg-blue-800 p-2 rounded-lg" key={index}>{e}</div>
        ))}
      </div>
    </>
  );
};
