"use client";

import { Badge, IconButton } from "@material-tailwind/react";
import { GoBell } from "react-icons/go";

export default function Notifications() {
  return (
    <Badge content="5" color="blue" withBorder>
      <IconButton
        placeholder={undefined}
        color="white"
        className="rounded-lg border border-grayish-blue w-9 h-9"
      >
        <GoBell size={19} color="black" />
      </IconButton>
    </Badge>
  );
}
