"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <>
      <button onClick={() => setTheme("dark")}>
        <Moon />
      </button>
      <button onClick={() => setTheme("light")}>
        <Sun />
      </button>
    </>
  );
}
