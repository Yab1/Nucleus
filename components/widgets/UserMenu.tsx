"use client";

import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Typography,
} from "@material-tailwind/react";
import { HiLogout } from "react-icons/hi";

export default function UserMenu() {
  return (
    <div className="flex place-items-center gap-5">
      <div>
        <div className="flex flex-col items-end">
          <Typography
            placeholder={undefined}
            variant="small"
            className="text-light-primary dark:text-white"
          >
            Alexander Hipp
          </Typography>
          <Typography
            placeholder={undefined}
            variant="small"
            className="text-light-tertiary text-xs dark:text-dark-tertiary"
          >
            Business man
          </Typography>
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
            className="rounded-full shadow-sm shadow-blue-gray-500/40 cursor-pointer ring-2 ring-electric-purple"
          />
        </MenuHandler>

        <MenuList placeholder={undefined}>
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
