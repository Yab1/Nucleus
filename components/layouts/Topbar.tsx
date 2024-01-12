"use client";

import { Notifications, Settings, UserMenu } from "@/components/widgets";
import { Typography } from "@material-tailwind/react";

export default function Topbar() {
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
