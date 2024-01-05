import Image from "next/image";
import Link from "next/link";

export default function Topbar() {
  return (
    <header className="h-20 px-10 flex place-items-end">
      <Link href="/" className="flex place-items-center gap-2">
        <Image src="/logo.png" width={50} height={50} alt="Nucleus Logo" />
        <div className="flex flex-col">
          <h1 className="text-white font-bold text-lg">Nucleus</h1>
          <p className="text-gray-400 font-semibold ">workspace</p>
        </div>
      </Link>
    </header>
  );
}
