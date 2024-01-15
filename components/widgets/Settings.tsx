"use client";

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
import { settingRoutes } from "@/routes";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export default function Settings() {
  const darkMode = useSelector((state: RootState) => state.ui.darkMode);
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <IconButton
        placeholder={undefined}
        color="white"
        className="rounded-lg border border-light-primary w-9 h-9 dark:border-dark-primary dark:bg-dark-tertiary dark:shadow-gray-900 dark:hover:shadow-gray-900"
        onClick={handleOpen}
      >
        <IoSettingsOutline size={19} color={darkMode ? "#eaeaea" : "black"} />
      </IconButton>

      <Dialog
        placeholder={undefined}
        size="xl"
        open={open}
        handler={handleOpen}
        className="h-[90%] dark:bg-dark-primary flex flex-col overflow-hidden"
      >
        <DialogHeader
          placeholder={undefined}
          className="p-0 border-b border-light-primary dark:border-dark-primary h-20"
        >
          <div className="w-1/5 flex gap-3 border-r border-light-primary dark:border-dark-primary h-full items-center pl-5 bg-light-primary dark:bg-dark-primary">
            <span className="rounded-lg border border-light-primary w-8 h-8 grid place-content-center dark:border-dark-primary">
              <IoSettingsOutline
                size={19}
                color={darkMode ? "#eaeaea" : "black"}
              />
            </span>

            <Typography
              placeholder={undefined}
              variant="h5"
              className="text-light-primary dark:text-white"
            >
              Setting
            </Typography>
          </div>

          <IconButton
            placeholder={undefined}
            color="white"
            className="rounded-lg shadow-none w-9 h-9 self-start bg-light-gray dark:bg-charcoal-gray rounded-ee-none ml-auto"
            onClick={handleOpen}
          >
            <GrClose size={19} color={darkMode ? "#eaeaea" : "black"} />
          </IconButton>
        </DialogHeader>

        <DialogBody
          placeholder={undefined}
          className="p-0 flex flex-1 overflow-hidden rounded-b-xl"
        >
          <aside className="w-1/5 border-r border-light-primary bg-light-primary dark:bg-dark-primary dark:border-dark-primary h-full">
            <nav className="flex flex-col ml-6 gap-7 pt-7">
              {settingRoutes.map(({ title, routes }) => (
                <div key={title} className="flex flex-col gap-3">
                  <Typography
                    placeholder={undefined}
                    className="font-thin text-[10px] !text-gray-500 uppercase"
                  >
                    {title}
                  </Typography>
                  <div className="flex flex-col gap-5">
                    {routes.map(({ routeTitle, routePath, routeIcon }) => {
                      const IconComponent = routeIcon;

                      return (
                        <Link
                          key={routeTitle}
                          href={routePath}
                          className="flex place-items-center gap-3"
                        >
                          <IconComponent
                            size={21}
                            color={darkMode ? "#d2d2d2" : "#4d4764"}
                          />
                          <Typography
                            placeholder={undefined}
                            variant="small"
                            className="text-light-secondary dark:text-dark-secondary"
                          >
                            {routeTitle}
                          </Typography>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ))}
            </nav>
          </aside>

          <main className="flex-1 flex flex-col p-5 overflow-y-auto h-full rounded-ee-xl gap-10">
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
