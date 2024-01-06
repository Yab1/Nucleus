import { Awsomebar, Notifications, UserMenu } from "@/components/widgets";

export default function Topbar() {
  return (
    <header className="h-20 px-10 py-5 flex place-items-center gap-5">
      <Awsomebar />
      <Notifications />
      <UserMenu />
    </header>
  );
}
