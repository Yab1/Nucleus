"use client";

import { IconButton } from "@material-tailwind/react";
import { IoSettingsOutline } from "react-icons/io5";

export default function Settings() {
  return (
    <IconButton
      placeholder={undefined}
      color="white"
      className="rounded-lg border border-grayish-blue w-9 h-9"
    >
      <IoSettingsOutline size={19} color="black" />
    </IconButton>
  );
}
