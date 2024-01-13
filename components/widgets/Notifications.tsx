"use client";

import { RootState } from "@/redux/store";
import { Badge, IconButton } from "@material-tailwind/react";
import { GoBell } from "react-icons/go";
import { useSelector } from "react-redux";

export default function Notifications() {
  const darkMode = useSelector((state: RootState) => state.ui.darkMode);

  return (
    <Badge content="5" color="blue" withBorder className="border-none">
      <IconButton
        placeholder={undefined}
        color="white"
        className="rounded-lg border border-light-primary w-9 h-9 dark:border-dark-primary dark:bg-dark-tertiary dark:shadow-gray-900 dark:hover:shadow-gray-800"
      >
        <GoBell size={19} color={darkMode ? "#eaeaea" : "black"} />
      </IconButton>
    </Badge>
  );
}
