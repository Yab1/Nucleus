"use client";

import { settingRoutes } from "@/routes";
import {
  Dialog,
  DialogBody,
  DialogHeader,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import Link from "next/link";
import { useState } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { GrClose } from "react-icons/gr";
import {
  EditProfile,
  Personal,
  Socials,
  Themes,
  Workspace,
} from "../settingSections";

export default function Settings() {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <IconButton
        placeholder={undefined}
        color="white"
        className="rounded-lg border border-grayish-blue w-9 h-9"
        onClick={handleOpen}
      >
        <IoSettingsOutline size={19} color="black" />
      </IconButton>

      <Dialog
        placeholder={undefined}
        size="xl"
        open={open}
        handler={handleOpen}
        className="h-4/5 overflow-hidden"
      >
        <DialogHeader
          placeholder={undefined}
          className="flex p-0 border-b border-e-grayish-blue justify-between"
        >
          <div className="h-20 flex place-items-center px-3 gap-3 border-r rounded-ss-lg border-grayish-blue w-1/5 bg-off-white">
            <span className="rounded-lg border border-grayish-blue w-8 h-8 grid place-content-center">
              <IoSettingsOutline size={19} color="black" />
            </span>
            <Typography placeholder={undefined} variant="h5" color="black">
              Setting
            </Typography>
          </div>

          <IconButton
            placeholder={undefined}
            color="white"
            className="rounded-lg shadow-none bg-off-white w-9 h-9 self-start"
            onClick={handleOpen}
          >
            <GrClose size={19} color="black" />
          </IconButton>
        </DialogHeader>
        <DialogBody placeholder={undefined} className="p-0 flex h-full">
          <aside className="w-1/5 border-r border-grayish-blue h-full bg-off-white rounded-s-lg">
            <nav className="flex flex-col ml-6 gap-5 mt-7">
              {settingRoutes.map(({ title, routes }) => (
                <div key={title}>
                  <Typography
                    placeholder={undefined}
                    variant="small"
                    color="gray"
                    className="font-thin text-sm"
                  >
                    {title}
                  </Typography>

                  {routes.map(({ routeTitle, routePath, routeIcon }) => {
                    const IconComponent = routeIcon;

                    return (
                      <div className="pl-3 flex flex-col my-5">
                        <Link
                          key={routeTitle}
                          href={routePath}
                          className="flex place-items-center gap-3"
                        >
                          <IconComponent size={20} color="#504965" />
                          <Typography
                            placeholder={undefined}
                            variant="small"
                            className="text-[#504965]"
                          >
                            {routeTitle}
                          </Typography>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              ))}
            </nav>
          </aside>

          <main className="flex-1 p-5 gap-10 flex flex-col overflow-y-auto">
            <EditProfile />
            <Themes />
            <Personal />
            <Workspace />
            <Socials />
          </main>
        </DialogBody>
      </Dialog>
    </>
  );
}
