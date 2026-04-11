"use client";

import * as Tabs from "@radix-ui/react-tabs";

interface TabItemsProps {
  value: string;
  title: string;
  isSelected?: boolean;
}

export default function TabItem({
  value,
  title,
  isSelected = false,
}: TabItemsProps) {
  return (
    <Tabs.Trigger
      value={value}
      className="relative px-1 pb-4 text-sm font-medium text-zinc-500 hover:text-violet-700 hover:cursor-pointer data-[state=active]:text-violet-700"
    >
      <span>{title}</span>

      {isSelected && (
        <div className="absolute -bottom-px left-0 right-0 h-0.5 bg-violet-700"></div>
      )}
    </Tabs.Trigger>
  );
}
