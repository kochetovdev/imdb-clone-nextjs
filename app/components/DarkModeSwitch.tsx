"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { IoMoonSharp } from "react-icons/io5";
import { MdLightMode } from "react-icons/md";

const DarkModeSwitch = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  return (
    <>
      {mounted && currentTheme === "dark" && (
        <IoMoonSharp
          className="text-lg cursor-pointer hover:text-amber-500"
          onClick={() => setTheme("light")}
        />
      )}
      {mounted && currentTheme === "light" && (
        <MdLightMode
          className="text-lg cursor-pointer hover:text-amber-500"
          onClick={() => setTheme("dark")}
        />
      )}
    </>
  );
};

export default DarkModeSwitch;
