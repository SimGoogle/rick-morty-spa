import React from "react";
import { useQuery } from "@tanstack/react-query";
import { keepPreviousData } from "@tanstack/react-query";
import { useNavigate, useSearch } from "@tanstack/react-router";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  createColumnHelper,
} from "@tanstack/react-table";
import { fetchCharacters, Character } from "../api/api";

const columnHelper = createColumnHelper<Character>();

export const CharacterList: React.FC = () => {
  const search = useSearch({ from: "/" }) as { page?: number };
  const page = search.page ?? 1;

  const navigate = useNavigate();

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["characters", page],
    queryFn: () => fetchCharacters(page),
    placeholderData: keepPreviousData,
  });

  const table = useReactTable({
    data: data?.results ?? [],
    columns: [
      columnHelper.accessor("image", {
        header: "Image",
        cell: (info) => <img src={info.getValue()} alt="char" width={50} />,
      }),
      columnHelper.accessor("name", { header: "Name" }),
      columnHelper.accessor("status", { header: "Status" }),
      columnHelper.accessor("species", { header: "Species" }),
    ],
    getCoreRowModel: getCoreRowModel(),
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h2>Characters</h2>
      <button onClick={() => refetch()}>🔄 Refresh</button>

      <table border={1} cellPadding={6}>
        <thead>
          {table.getHeaderGroups().map((hg) => (
            <tr key={hg.id}>
              {hg.headers.map((h) => (
                <th key={h.id}>
                  {flexRender(h.column.columnDef.header, h.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr
              key={row.original.id}
              style={{ cursor: "pointer" }}
              onClick={() => navigate({ to: `/character/${row.original.id}` })}
            >
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ marginTop: "10px" }}>
        <button
          onClick={() => navigate({ to: "/", search: { page: page - 1 } })}
          disabled={!data?.info.prev}
        >
          ◀ Prev
        </button>
        <span>
          Page {page} of {data?.info.pages}
        </span>
        <button
          onClick={() => navigate({ to: "/", search: { page: page + 1 } })}
          disabled={!data?.info.next}
        >
          Next ▶
        </button>
      </div>
    </div>
  );
};
