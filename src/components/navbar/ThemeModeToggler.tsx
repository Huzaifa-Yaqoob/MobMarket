"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { Button } from "../ui/button";

export default function ThemeModeToggler() {
  const { theme, setTheme } = useTheme();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => setHasMounted(true));

  // this line is the key to avoid the error.
  if (!hasMounted) return null;

  const themeToggler = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  return (
    <Button variant={"ghost"} onClick={themeToggler}>
      {theme === "dark" ? <Moon /> : <Sun />}
    </Button>
  );
}
