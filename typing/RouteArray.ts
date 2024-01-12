import { IconType } from "react-icons";

export interface IRoute {
  routeTitle: string;
  routePath: string;
  routeIcon: IconType;
}

export type RouteArray = Array<IRoute>;

export interface Layout {
  title: string;
  routes: RouteArray;
}

export type LayoutArray = Array<Layout>;
