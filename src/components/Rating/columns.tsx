"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { Button } from "../ui/button";
import { Row } from "@tanstack/react-table";
import StarRating from "./star-rating";

export type Pelicula = {
  id: string;
  name: string;
  release_date: string;
  genero: string[];
  promedio: number | undefined;
  user_score: number | undefined;
};

export const columns: ColumnDef<Pelicula>[] = [
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "name",
    header: () => <div className="">Título</div>,
    cell: ({ row }) => (
      <div className="max-w-[200px] truncate font-bold text-base">
        {row.getValue("name")}
      </div>
    ),
  },
  {
    accessorKey: "release_date",
    sortingFn: "datetime",
    header: ({ column }) => {
      return (
        <Button
          className=""
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Fecha De Lanzamiento
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="px-5">{row.getValue("release_date")}</div>
    ),
  },
  {
    accessorKey: "genero",
    header: "Géneros",
    cell: ({ row }) => {
      const genero = row.getValue("genero") as string[];
      return <div className="max-w-[200px] truncate">{genero?.join(", ")}</div>;
    },
    filterFn: (row: Row<Pelicula>, columnId: string, filterValue: string[]) => {
      const genres = row.getValue(columnId) as string[];
      return filterValue.every((value: string) => genres.includes(value));
    },
  },
  {
    accessorKey: "promedio",
    sortingFn: "alphanumeric",
    header: ({ column }) => {
      return (
        <Button
          className="ml-0 pl-0 text-wrap w-40"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Puntaje general (Promedio)
          <ArrowUpDown className="ml-2 h-6 w-6" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return (
        <div className="max-w-[200px] text-center truncate">
          {row.getValue("promedio")}
        </div>
      );
    },
  },
  {
    accessorKey: "user_score",
    sortingFn: "auto",
    sortUndefined: "last",
    invertSorting: true,
    header: ({ column }) => {
      return (
        <Button
          className="ml-0 pl-0"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Puntaje del usuario
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return (
        row.getValue("user_score") && (
          <StarRating
            currentRating={row.getValue("user_score")}
            onRatingChange={row.getValue("user_score")}
          />
        )
      );
    },
  },
];
