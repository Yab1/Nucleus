"use client";

import Link from "next/link";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Typography,
} from "@material-tailwind/react";
import { HiLogout } from "react-icons/hi";
import { secondaryRoutes, tertiaryRoutes } from "@/routes";

export default function UserMenu() {
  return (
    <div className="flex place-items-center gap-5">
      <div>
        <div className="flex flex-col items-end">
          <p className="text-xs font-semibold">Alexander Hipp</p>
          <p className="text-[9px] text-gray-400">Business man</p>
        </div>
      </div>

      <Menu>
        <MenuHandler>
          <Avatar
            placeholder={undefined}
            src="/alexander-hipp.jpg"
            alt="profile picture of user"
            size="md"
            variant="rounded"
            className="rounded-full shadow-sm shadow-blue-gray-500/40 cursor-pointer"
          />
        </MenuHandler>

        <MenuList placeholder={undefined}>
          {tertiaryRoutes.map(({ name, path, icon }) => {
            const IconComponent = icon;
            return (
              <MenuItem placeholder={undefined} key={name}>
                <Link href={path}>
                  <div
                    className={"flex items-center gap-2 " + (true ? "" : "")}
                  >
                    <IconComponent size={20} />
                    <Typography
                      placeholder={undefined}
                      variant="small"
                      className="font-medium capitalize"
                    >
                      {name}
                    </Typography>
                  </div>
                </Link>
              </MenuItem>
            );
          })}
          <hr className="my-2 border-blue-gray-50" />
          <MenuItem
            placeholder={undefined}
            className="flex items-center gap-2"
            onClick={() => console.log("Signout was clicked")}
          >
            <HiLogout size={20} />
            <Typography
              placeholder={undefined}
              variant="small"
              className="font-medium"
            >
              Sign Out
            </Typography>
          </MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
}
