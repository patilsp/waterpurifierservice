import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/registry/new-york/ui/checkbox";
import { Complaint } from "../data/schema";
import { DataTableColumnHeader } from "./data-table-column-header";
import { DataTableRowActions } from "./data-table-row-actions";

export const columns: ColumnDef<Complaint>[] = [
  
  {
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Job Sheet ID" />
    ),
    cell: ({ row }) => {
      const id = row.getValue("id");
      const formattedId = Number.isInteger(id) ? `JS-${id}` : `JS-${parseInt(id, 12)}`;
      return <div className="">{formattedId}</div>;
    },
    enableSorting: true,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Customer Name" />
    ),
    cell: ({ row }) => <div className="">{row.getValue("name")}</div>,
    enableSorting: true,
    enableHiding: false,
  },
  {
    accessorKey: "mobile",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Mobile Number" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("mobile")}</div>,
    enableSorting: true,
    enableHiding: false,
  },
 
 
  {
    accessorKey: "complaintType",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Complaint Type" />
    ),
    cell: ({ row }) => <div className="">{row.getValue("complaintType")}</div>,
    enableSorting: true,
    enableHiding: true,
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => <div className="w-[125px] rounded bg-slate-300 p-1 text-sm text-center dark:bg-slate-700">{row.getValue("status")}</div>,
    enableSorting: true,
    enableHiding: true,
  },

];
