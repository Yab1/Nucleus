import { LayoutArray } from "@/typing";
import { FaRegClock } from "react-icons/fa";
import { LuCalendar } from "react-icons/lu";
import { SlPeople } from "react-icons/sl";
import { GoProject } from "react-icons/go";
import { CiGrid41, CiUser } from "react-icons/ci";
import { RiInbox2Fill, RiSettingsLine } from "react-icons/ri";
import { VscSymbolColor, VscGraph } from "react-icons/vsc";
import { IoShareSocialOutline } from "react-icons/io5";

export const primaryRoutes: LayoutArray = [
  {
    title: "General",
    routes: [
      {
        routeTitle: "Dashboard",
        routePath: "/dashboard",
        routeIcon: CiGrid41,
      },
      {
        routeTitle: "Inbox",
        routePath: "/inbox",
        routeIcon: RiInbox2Fill,
      },
    ],
  },
  {
    title: "Features",
    routes: [
      {
        routeTitle: "Projects",
        routePath: "/projects",
        routeIcon: GoProject,
      },
      {
        routeTitle: "My Tasks",
        routePath: "/tasks",
        routeIcon: FaRegClock,
      },
      {
        routeTitle: "Team members",
        routePath: "/team",
        routeIcon: SlPeople,
      },
    ],
  },
  {
    title: "Tools",
    routes: [
      {
        routeTitle: "Calendar",
        routePath: "/calendar",
        routeIcon: LuCalendar,
      },
      {
        routeTitle: "Report",
        routePath: "/report",
        routeIcon: VscGraph,
      },
    ],
  },
];

export const settingRoutes: LayoutArray = [
  {
    title: "General",
    routes: [
      {
        routeTitle: "Edit Profile",
        routePath: "#profile",
        routeIcon: CiUser,
      },
      {
        routeTitle: "Themes",
        routePath: "#themes",
        routeIcon: VscSymbolColor,
      },
    ],
  },
  {
    title: "Notification",
    routes: [
      {
        routeTitle: "Personal",
        routePath: "#personal",
        routeIcon: RiSettingsLine,
      },
      {
        routeTitle: "Workspace",
        routePath: "#workspace",
        routeIcon: CiUser,
      },
    ],
  },
  {
    title: "Apps",
    routes: [
      {
        routeTitle: "Social Media",
        routePath: "#socials",
        routeIcon: IoShareSocialOutline,
      },
    ],
  },
];
