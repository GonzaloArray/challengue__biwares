import { cn } from "../../lib/utils"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "./table"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className="flex flex-col items-center justify-center  w-full h-screen text-white">
      <h2>Cargando...</h2>
      <Table>
        <TableCaption>        <div
          className={cn("animate-pulse rounded-md w-full  bg-slate-800", className)}
          {...props}
        /></TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-1/6"> <div
              className={cn("animate-pulse rounded-md w-  bg-slate-800", className)}
              {...props}
            /></TableHead>
            <TableHead className="w-2/6"> <div
          className={cn("animate-pulse rounded-md w-full  bg-slate-800", className)}
          {...props}
        /></TableHead>
            <TableHead className="w-2/6"> <div
          className={cn("animate-pulse rounded-md w-full  bg-slate-800", className)}
          {...props}
        /></TableHead>
            <TableHead className="text-right w-1/6"> <div
          className={cn("animate-pulse rounded-md w-full  bg-slate-800", className)}
          {...props}
        /></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium"> <div
          className={cn("animate-pulse rounded-md w-full  bg-slate-800", className)}
          {...props}
        /></TableCell>
            <TableCell> <div
          className={cn("animate-pulse rounded-md w-full  bg-slate-800", className)}
          {...props}
        /></TableCell>
            <TableCell> <div
          className={cn("animate-pulse rounded-md w-full  bg-slate-800", className)}
          {...props}
        /></TableCell>
            <TableCell>  <div
          className={cn("animate-pulse rounded-md w-full  bg-slate-800", className)}
          {...props}
        /></TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium"> <div
          className={cn("animate-pulse rounded-md w-full  bg-slate-800", className)}
          {...props}
        /></TableCell>
            <TableCell> <div
          className={cn("animate-pulse rounded-md w-full  bg-slate-800", className)}
          {...props}
        /></TableCell>
            <TableCell> <div
          className={cn("animate-pulse rounded-md w-full  bg-slate-800", className)}
          {...props}
        /></TableCell>
            <TableCell>  <div
          className={cn("animate-pulse rounded-md w-full  bg-slate-800", className)}
          {...props}
        /></TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium"> <div
          className={cn("animate-pulse rounded-md w-full  bg-slate-800", className)}
          {...props}
        /></TableCell>
            <TableCell> <div
          className={cn("animate-pulse rounded-md w-full  bg-slate-800", className)}
          {...props}
        /></TableCell>
            <TableCell> <div
          className={cn("animate-pulse rounded-md w-full  bg-slate-800", className)}
          {...props}
        /></TableCell>
            <TableCell>  <div
          className={cn("animate-pulse rounded-md w-full  bg-slate-800", className)}
          {...props}
        /></TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium"> <div
          className={cn("animate-pulse rounded-md w-full  bg-slate-800", className)}
          {...props}
        /></TableCell>
            <TableCell> <div
          className={cn("animate-pulse rounded-md w-full  bg-slate-800", className)}
          {...props}
        /></TableCell>
            <TableCell> <div
          className={cn("animate-pulse rounded-md w-full  bg-slate-800", className)}
          {...props}
        /></TableCell>
            <TableCell>  <div
          className={cn("animate-pulse rounded-md w-full  bg-slate-800", className)}
          {...props}
        /></TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium"> <div
          className={cn("animate-pulse rounded-md w-full  bg-slate-800", className)}
          {...props}
        /></TableCell>
            <TableCell> <div
          className={cn("animate-pulse rounded-md w-full  bg-slate-800", className)}
          {...props}
        /></TableCell>
            <TableCell> <div
          className={cn("animate-pulse rounded-md w-full  bg-slate-800", className)}
          {...props}
        /></TableCell>
            <TableCell>  <div
          className={cn("animate-pulse rounded-md w-full  bg-slate-800", className)}
          {...props}
        /></TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium"> <div
          className={cn("animate-pulse rounded-md w-full  bg-slate-800", className)}
          {...props}
        /></TableCell>
            <TableCell> <div
          className={cn("animate-pulse rounded-md w-full  bg-slate-800", className)}
          {...props}
        /></TableCell>
            <TableCell> <div
          className={cn("animate-pulse rounded-md w-full  bg-slate-800", className)}
          {...props}
        /></TableCell>
            <TableCell>  <div
          className={cn("animate-pulse rounded-md w-full  bg-slate-800", className)}
          {...props}
        /></TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium"> <div
          className={cn("animate-pulse rounded-md w-full  bg-slate-800", className)}
          {...props}
        /></TableCell>
            <TableCell> <div
          className={cn("animate-pulse rounded-md w-full  bg-slate-800", className)}
          {...props}
        /></TableCell>
            <TableCell> <div
          className={cn("animate-pulse rounded-md w-full  bg-slate-800", className)}
          {...props}
        /></TableCell>
            <TableCell>  <div
          className={cn("animate-pulse rounded-md w-full  bg-slate-800", className)}
          {...props}
        /></TableCell>
          </TableRow>
        </TableBody>
      </Table>
</div>
   


  )
}

export { Skeleton }
