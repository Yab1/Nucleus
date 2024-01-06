import { FaRegClock, FaUserCircle } from "react-icons/fa";
import { TiFlashOutline } from "react-icons/ti";
import { LuCalendar } from "react-icons/lu";
import { SlPeople } from "react-icons/sl";
import { GoProject } from "react-icons/go";
import { CiGrid41 } from "react-icons/ci";
import { RiInbox2Fill } from "react-icons/ri";
import { AiFillSetting } from "react-icons/ai";
import { BiSolidHelpCircle } from "react-icons/bi";
import { RouteArray } from "@/typing";

export const primaryRoutes: RouteArray = [
  {
    name: "Tasks",
    path: "/tasks",
    icon: FaRegClock,
  },
  { name: "Activities", path: "/activities", icon: TiFlashOutline },
];

export const secondaryRoutes: RouteArray = [
  { name: "Dashboard", path: "/", icon: CiGrid41 },
  { name: "Projects", path: "/projects", icon: GoProject },
  { name: "Teams", path: "/teams", icon: SlPeople },
  { name: "Calendar", path: "/calendar", icon: LuCalendar },
];

export const tertiaryRoutes: RouteArray = [
  {
    name: "my profile",
    path: "/profile",
    icon: FaUserCircle,
  },
  {
    name: "inbox",
    path: "/inbox",
    icon: RiInbox2Fill,
  },
  {
    name: "setting",
    path: "/setting",
    icon: AiFillSetting,
  },
  {
    name: "help",
    path: "/help",
    icon: BiSolidHelpCircle,
  },
];
