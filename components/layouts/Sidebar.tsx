"use client";

import Image from "next/image";
import Link from "next/link";
import { Awsomebar } from "../widgets";
import { primaryRoutes } from "@/routes";
import { Typography } from "@material-tailwind/react";

export default function Sidebar() {
  return (
    <aside className="w-1/6 border-r border-grayish-blue">
      <Link
        href="/"
        className="flex place-items-center gap-2 text-black font-semibold text-lg border-b border-grayish-blue h-20 pl-5"
      >
        <Image src="/logo.png" width={40} height={40} alt="Nucleus Logo" />
        Nucleus
      </Link>

      <div className="flex flex-col gap-5 my-5">
        <Awsomebar />
      </div>

      <nav className="flex flex-col ml-6 gap-5">
        {primaryRoutes.map(({ title, routes }) => (
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
                <div key={routeTitle} className="pl-3 flex flex-col my-5">
                  <Link
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
  );
}
