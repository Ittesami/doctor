"use client";

import { Box } from "@mui/material";
import { MaterialReactTable, useMaterialReactTable } from "material-react-table";

export default function AdminDataTable({
  columns,
  data,
  emptyState,
  tableOptions = {},
}) {
  const table = useMaterialReactTable({
    columns,
    data,
    enableColumnActions: false,
    enableColumnFilters: true,
    enableSorting: false,
    enableGlobalFilter: false,
    enablePagination: true,
    paginationDisplayMode: "pages",
    columnFilterDisplayMode: "popover",
    initialState: {
      pagination: {
        pageSize: 10,
        pageIndex: 0,
      },
    },
    muiTablePaperProps: {
      elevation: 0,
      sx: {
        boxShadow: "none",
        border: "1px solid #e2e8f0",
        borderRadius: 3,
        overflow: "hidden",
        backgroundColor: "#fff",
      },
    },
    muiTableHeadCellProps: {
      sx: {
        backgroundColor: "#f8fafc",
        color: "#475569",
        fontWeight: 800,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        fontSize: "11px",
        py: 1.1,
        px: 1.5,
      },
    },
    muiTableBodyCellProps: {
      sx: {
        py: 1.2,
        px: 1.5,
        color: "#334155",
        fontSize: "0.8rem",
      },
    },
    muiTableBodyRowProps: ({ row }) => ({
      sx: {
        backgroundColor: row.index % 2 === 0 ? "#ffffff" : "#f8fafc",
        "&:hover": {
          backgroundColor: row.index % 2 === 0 ? "#f8fafc" : "#f1f5f9",
        },
      },
    }),
    muiTableContainerProps: {
      sx: {
        maxHeight: "none",
      },
    },
    ...tableOptions,
  });

  if (!data || data.length === 0) {
    return emptyState ?? (
      <Box sx={{ backgroundColor: "#fff", borderRadius: 3, p: 3, border: "1px solid #e2e8f0" }}>
        No records found.
      </Box>
    );
  }

  return (
    <Box sx={{ backgroundColor: "#fff", borderRadius: 3 }}>
      <MaterialReactTable table={table} />
    </Box>
  );
}
