import { LayoutArray, RouteArray } from "@/typing";
import { FaRegClock, FaUserCircle } from "react-icons/fa";
import { TiFlashOutline } from "react-icons/ti";
import { LuCalendar } from "react-icons/lu";
import { SlPeople } from "react-icons/sl";
import { GoProject } from "react-icons/go";
import { CiGrid41 } from "react-icons/ci";
import { RiInbox2Fill } from "react-icons/ri";
import { AiFillSetting } from "react-icons/ai";
import { BiSolidHelpCircle } from "react-icons/bi";
import { MdOutlineSecurity, MdAttachMoney } from "react-icons/md";
import { BsWallet2 } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { VscSymbolColor, VscGraph } from "react-icons/vsc";

export const primaryRoutes: LayoutArray = [
  {
    title: "General",
    routes: [
      {
        routeTitle: "Dashboard",
        routePath: "/",
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
// { name: "Activities", path: "/activities", icon: TiFlashOutline },
// export const primaryRoutes: RouteArray = [
//   {
//     name: "Tasks",
//     path: "/tasks",
//     icon: FaRegClock,
//   },
//   { name: "Activities", path: "/activities", icon: TiFlashOutline },
// ];

// export const secondaryRoutes: RouteArray = [
//   { name: "Dashboard", path: "/", icon: CiGrid41 },
//   { name: "Projects", path: "/projects", icon: GoProject },
//   { name: "Teams", path: "/teams", icon: SlPeople },
//   { name: "Calendar", path: "/calendar", icon: LuCalendar },
// ];

// export const tertiaryRoutes: RouteArray = [
//   {
//     name: "my profile",
//     path: "/profile",
//     icon: FaUserCircle,
//   },
//   {
//     name: "inbox",
//     path: "/inbox",
//     icon: RiInbox2Fill,
//   },
//   {
//     name: "settings",
//     path: "/settings",
//     icon: AiFillSetting,
//   },
//   {
//     name: "help",
//     path: "/help",
//     icon: BiSolidHelpCircle,
//   },
// ];

// export const settingRoutes: RouteArray = [
//   {
//     name: "Personal Details",
//     path: "/settings/profile",
//     icon: CgProfile,
//   },
//   {
//     name: "Security",
//     path: "/settings/security",
//     icon: MdOutlineSecurity,
//   },
//   {
//     name: "Plans & Pricing",
//     path: "/settings/plans & pricing",
//     icon: BsWallet2,
//   },
//   {
//     name: "Payment & Billing",
//     path: "/settings/plans & pricing",
//     icon: MdAttachMoney,
//   },
//   {
//     name: "Themes",
//     path: "/settings/themes",
//     icon: VscSymbolColor,
//   },
// ];
