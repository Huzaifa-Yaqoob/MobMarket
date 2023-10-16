"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function ThemeModeToggler(): React.ReactElement {
  const { theme, setTheme } = useTheme();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => setHasMounted(true));

  // this line is the key to avoid the error.
  if (!hasMounted) return <></>;

  const themeToggler = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  return (
    <span onClick={themeToggler} className="text-xs cursor-pointer">
      {theme === "dark" ? <Moon size={20} /> : <Sun size={20} />}
    </span>
  );
}
