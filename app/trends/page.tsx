"use client"
import { useState } from 'react';
import Trends from "../../components/trends";

export default function TrendPage() {
  const [selectedTag, setSelectedTag] = useState<string | null>('All');
  const availableTags = ['Skincare', 'Makeup', 'Haircare', 'Wellness'];

  return (
    <div>
      <Trends 
        tags={availableTags}
        selectedTag={selectedTag}
        onTagSelect={setSelectedTag}
      />
    </div>
  );
}
