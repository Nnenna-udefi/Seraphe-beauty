"use client";
import React, { useEffect, useState } from "react";
import About from "../../components/about";
import { api } from "@/components/lib/api";
import { useSite } from "@/components/helper/siteContext";
import { getPopularStories } from "@/components/helper/getPopularStories";
import { Team } from "@/components/types/api";

export default function AboutPage() {
  const [teams, setTeams] = useState<Team[]>([]);
  const { tips, trends, lifestyle } = useSite();

  useEffect(() => {
    async function fetchTeams() {
      try {
        const teamData = await api.publicShop.getTeam();
        setTeams(teamData);
      } catch (error) {
        console.error("Failed to load teams:", error);
      }
    }
    fetchTeams();
  }, []);

  const popularStories = getPopularStories(tips, trends, lifestyle, 4);
  return (
    <div>
      <About teams={teams} popularStories={popularStories} />
    </div>
  );
}
