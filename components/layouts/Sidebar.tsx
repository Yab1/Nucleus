"use client";

import Image from "next/image";
import Link from "next/link";
import { Awsomebar } from "../widgets";
import { primaryRoutes } from "@/routes";
import { Typography } from "@material-tailwind/react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export default function Sidebar() {
  const darkMode = useSelector((state: RootState) => state.ui.darkMode);

  return (
    <aside className="w-1/6 border-r border-light-primary dark:bg-dark-primary dark:border-dark-primary">
      <Link
        href="/"
        className="flex place-items-center gap-2 text-black font-semibold text-lg border-b border-light-primary h-20 pl-5 dark:border-gunmetal dark:text-white bg-danger-"
      >
        <Image src="/logo.png" width={40} height={40} alt="Nucleus Logo" />
        Nucleus
      </Link>

      <div className="flex flex-col gap-5 my-5">
        <Awsomebar />
      </div>

      <nav className="flex flex-col ml-6 gap-7">
        {primaryRoutes.map(({ title, routes }) => (
          <div key={title} className="flex flex-col gap-3">
            <Typography
              placeholder={undefined}
              className="font-thin text-[10px] !text-dark-tertiary uppercase"
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
  );
}
