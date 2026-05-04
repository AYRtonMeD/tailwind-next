import { LogOut } from "lucide-react";
import Button from "../Button";

export default function Profile() {
  return (
    <div className="grid items-center gap-3 grid-cols-profile">
      <img
        src="https://github.com/AYRtonMeD.png"
        alt="foto perfil"
        className="w-10 h-10 rounded-full"
      />
      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700 truncate dark:text-zinc-100">
          JonDoe
        </span>
        <span className="text-sm text-zinc-500 truncate dark:text-zinc-400">
          JonDoe@email.com
        </span>
      </div>

      <Button type="button" variant="ghost">
        <LogOut className="w-5 h-5 text-zinc-500" />
      </Button>
    </div>
  );
}
