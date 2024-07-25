"use client";

import { useRouter } from "next/navigation";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { Row } from "@tanstack/react-table";
import { Button } from "@/registry/new-york/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
  DropdownMenuShortcut,
  DropdownMenuRadioItem,
  DropdownMenuRadioGroup,
} from "@/registry/new-york/ui/dropdown-menu";
import { names } from "../data/data";
import { complaintsSchema } from "../data/schema";
import toast from 'react-hot-toast';

interface DataTableRowActionsProps {
  row: Row<Complaint>;
  onEdit: (complaintId: string) => void;
  onDelete: (complaintId: string) => void;
  onRefresh?: () => void; // Optional prop
}

export function DataTableRowActions({
  row,
  onEdit,
  onDelete,
  onRefresh,
}: DataTableRowActionsProps) {
  const router = useRouter();
  const complaint = complaintsSchema.parse(row.original);

  const handleEdit = () => {
    if (complaint.id) {
      router.push(`/update-complaint?id=${complaint.id}`);
    } else {
      console.error("Complaint ID is undefined");
    }
  };

  const handleDelete = async () => {
    const hasConfirmed = confirm("Are you sure you want to delete this complaint?");
    if (hasConfirmed) {
      try {
        const response = await fetch(`/api/complaint/${complaint.id}`, {
          method: "DELETE",
        });
        if (!response.ok) {
          throw new Error("Failed to delete complaint");
        } else {
          toast.success("Complaint has been deleted!");
          if (onRefresh) {
            onRefresh(); 
          } else {
            // Fallback option if onRefresh is not provided
            router.refresh(); // Use this if router.refresh() is available
            // window.location.reload(); // Use this as a last resort to force a full page reload
          }
        }
        if (onDelete) {
          onDelete(complaint.id);
        }
      } catch (error) {
        toast.error("Error deleting complaint: " + error.message);
      }
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex size-8 bg-slate-100 p-0 data-[state=open]:bg-muted"
        >
          <DotsHorizontalIcon className="size-4" />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[160px]">
        <DropdownMenuItem onSelect={handleEdit}>Edit</DropdownMenuItem>
        <DropdownMenuItem>Make a copy</DropdownMenuItem>
        <DropdownMenuItem>Favorite</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Names</DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuRadioGroup value={complaint.label}>
              {names.map((label) => (
                <DropdownMenuRadioItem key={label.value} value={label.value}>
                  {label.label}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSeparator />
        <DropdownMenuItem onSelect={handleDelete}>
          Delete
          <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
