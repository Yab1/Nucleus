import { IconType } from "react-icons";

export interface IRoute {
  name: string;
  path: string;
  icon: IconType;
}

export type RouteArray = Array<IRoute>;
