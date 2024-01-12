import Image from "next/image";
import Link from "next/link";
import { Awsomebar } from "../widgets";

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

      <div className="flex flex-col gap-5 mt-5">
        <Awsomebar />
      </div>
    </aside>
  );
}
