"use client";

import {
  BarChart,
  CheckSquare,
  Cog,
  Flag,
  Home,
  LifeBuoy,
  Menu,
  Search,
  SquareStack,
  Users,
} from "lucide-react";
import { Logo } from "./Logo";
import NavItem from "./NaviItem";
import UsedSpaceWidget from "./UsedSpaceWidget";
import Profile from "./Profile";
import { InputControl, InputPrefix, InputRoot } from "../Input";
import * as Collapsible from "@radix-ui/react-collapsible";
import Button from "../Button";

export default function Sidebar() {
  return (
    <Collapsible.Root
      className={`border-r border-zinc-200 flex flex-col border-b gap-6 p-4 fixed left-0 top-0 right-0 data-[state=open]:bottom-0 
                  lg:data-[state=closed]:bottom-0 z-20 bg-white lg:right-auto lg:w-80 lg:border-r lg:px-5 lg:py-8
                  dark:bg-zinc-900 dark:border-zinc-800`}
    >
      <div className="flex items-center justify-between">
        <Logo />
        <Collapsible.Trigger asChild className="lg:hidden">
          <Button variant="ghost">
            <Menu className="h-6 w-6 text" />
          </Button>
        </Collapsible.Trigger>
      </div>

      <Collapsible.Content
        forceMount
        className="flex data-[state=closed]:hidden lg:data-[state=closed]:flex flex-col gap-6 flex-1"
      >
        <InputRoot>
          <InputPrefix className="h-5 w-5 shrink-0 text-zinc-500">
            <Search className="h-5 w-5 shrink-0 text-zinc-500" />
          </InputPrefix>
          <InputControl placeholder="Search" />
        </InputRoot>

        <nav className="space-y-0.5">
          <NavItem title="Home" icon={Home} />
          <NavItem title="Dashboard" icon={BarChart} />
          <NavItem title="Projects" icon={SquareStack} />
          <NavItem title="Tasks" icon={CheckSquare} />
          <NavItem title="Reporting" icon={Flag} />
          <NavItem title="Users" icon={Users} />
        </nav>

        <div className="mt-auto flex flex-col gap-6">
          <nav className="space-y-0.5">
            <NavItem title="Support" icon={LifeBuoy} />
            <NavItem title="Settings" icon={Cog} />
          </nav>

          <UsedSpaceWidget />

          <div className="h-px bg-zinc-200 dark:bg-zinc-700" />

          <Profile />
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  );
}
