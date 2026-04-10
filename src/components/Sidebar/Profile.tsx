import { LogOut } from "lucide-react";

export default function Profile() {
  return (
    <div className="grid items-center gap-3 grid-cols-profile">
      <img
        src="https://github.com/AYRtonMeD.png"
        alt="foto perfil"
        className="w-10 h-10 rounded-full"
      />
      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700 truncate">
          JonDoe
        </span>
        <span className="text-sm text-zinc-500 truncate">JonDoe@email.com</span>
      </div>

      <button
        type="button"
        className="ml-auto p-2 hover:bg-zinc-100 rounded-md hover:cursor-pointer"
      >
        <LogOut className="w-5 h-5 text-zinc-500" />
      </button>
    </div>
  );
}
