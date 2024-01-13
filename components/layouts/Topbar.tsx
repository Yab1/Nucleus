"use client";

import { useEffect } from "react";
import { Notifications, Settings, UserMenu } from "@/components/widgets";
import { Typography } from "@material-tailwind/react";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

export default function Topbar() {
  const darkMode = useSelector((state: RootState) => state.ui.darkMode);

  useEffect(() => {
    const html = document.querySelector("html") as HTMLHtmlElement;
    const storedDarkModeString = localStorage.getItem("nucleus_dark_mode");
    const isDarkMode = storedDarkModeString
      ? JSON.parse(storedDarkModeString)
      : null;

    console.log(isDarkMode);

    isDarkMode === true
      ? html.setAttribute("class", "dark")
      : html.removeAttribute("class");
  }, [darkMode]);

  return (
    <header className="h-20 px-10 py-5 flex place-items-center justify-between border-b border-grayish-blue">
      <div>
        <Typography placeholder={undefined} variant="h5">
          Getting Started
        </Typography>
        <Typography placeholder={undefined} variant="small" color="gray">
          Take a few minutes to discover about new features!
        </Typography>
      </div>

      <div className="flex gap-4 place-items-center">
        <Notifications />
        <Settings />
        <span className="h-14 w-px bg-grayish-blue"></span>
        <UserMenu />
      </div>
    </header>
  );
}
