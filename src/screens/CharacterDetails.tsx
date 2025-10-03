import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams, Link } from "@tanstack/react-router";
import { fetchCharacter } from "../api/api";

export const CharacterDetails: React.FC = () => {
  const { id } = useParams({ from: "/character/$id" });

  const { data, isLoading, error } = useQuery({
    queryKey: ["character", id],
    queryFn: () => fetchCharacter(id),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Failed to load</div>;

  return (
    <div>
      <Link to="/">⬅ Back</Link>
      <h2>{data?.name}</h2>
      <img src={data?.image} alt={data?.name} />
      <p>Status: {data?.status}</p>
      <p>Species: {data?.species}</p>
    </div>
  );
};
