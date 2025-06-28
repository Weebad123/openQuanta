"use client";

import { useTheme } from "next-themes";

export default function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <>
      <button onClick={() => setTheme("dark")}>Dark</button>
      <button onClick={() => setTheme("light")}>Light</button>
    </>
  );
}
