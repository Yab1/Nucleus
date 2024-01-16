"use client";

import { useEffect } from "react";
import { Notifications, Settings, UserMenu } from "@/components/widgets";
import { Typography } from "@material-tailwind/react";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "@/redux/slices";
import { usePathname } from "next/navigation";

export default function Topbar() {
  const darkMode = useSelector((state: RootState) => state.ui.darkMode);
  const dispatch = useDispatch();
  const pathname = usePathname();

  useEffect(() => {
    const html = document.querySelector("html") as HTMLHtmlElement;
    const storedDarkModeString = localStorage.getItem("nucleus_dark_mode");
    const isDarkMode = storedDarkModeString
      ? JSON.parse(storedDarkModeString)
      : null;

    dispatch(toggleDarkMode(isDarkMode ? true : false));

    isDarkMode === true
      ? html.setAttribute("class", "dark")
      : html.removeAttribute("class");
  }, [darkMode]);

  return (
    <header className="h-20 px-5 py-5 flex place-items-center justify-between border-b border-light-primary dark:bg-dark-primary dark:border-dark-primary">
      <div>
        <Typography
          placeholder={undefined}
          variant="h5"
          className="text-light-primary dark:text-white capitalize"
        >
          {pathname.slice(1)}
        </Typography>
        <Typography
          placeholder={undefined}
          variant="small"
          className="text-light-tertiary dark:text-dark-tertiary"
        >
          Take a few minutes to discover about new features!
        </Typography>
      </div>

      <div className="flex gap-4 place-items-center">
        <Notifications />
        <Settings />
        <span className="h-14 w-px border-r border-light-primary dark:border-dark-primary"></span>
        <UserMenu />
      </div>
    </header>
  );
}
