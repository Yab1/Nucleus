import { primaryRoutes, secondaryRoutes } from "@/routes";
import { IRoute } from "@/typing";
import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-1/5 px-10 pt-5 border-r border-gray-700 font">
      <Link
        href="/"
        className="flex place-items-center gap-2 text-black font-semibold text-lg mb-16"
      >
        <Image src="/logo.png" width={40} height={40} alt="Nucleus Logo" />
        Nucleus
      </Link>

      <div className="flex flex-col gap-6">
        {primaryRoutes.map(({ name, path, icon }: IRoute) => {
          const IconComponent = icon;

          return (
            <div className="pl-3 flex flex-col">
              <Link
                key={crypto.randomUUID()}
                href={path}
                className="flex place-items-center gap-3 text-black font-medium"
              >
                <IconComponent size={20} color="gray" />
                {name}
                <span className="bg-blue-950 text-white text-sm font-medium me-2 px-2 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-auto">
                  9
                </span>
              </Link>
            </div>
          );
        })}
      </div>

      <hr className="h-px my-8 bg-gray-500 border-0 dark:bg-gray-700"></hr>

      <div className="flex flex-col gap-6">
        {secondaryRoutes.map(({ name, path, icon }: IRoute) => {
          const IconComponent = icon;

          return (
            <div className="pl-3 flex flex-col">
              <Link
                key={crypto.randomUUID()}
                href={path}
                className="flex place-items-center gap-4 text-white font-medium text-lg"
              >
                <IconComponent size={25} color="white" />
                {name}
              </Link>
            </div>
          );
        })}
      </div>
    </aside>
  );
}
