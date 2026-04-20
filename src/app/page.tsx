import { InputControl, InputPrefix, InputRoot } from "@/components/Input";
import { SettingsTabs } from "@/components/SettingsTabs";
import { Bold, Italic, Link, List, ListOrdered, Mail } from "lucide-react";
import * as FileInput from "@/components/Form/FileInput";
import { SelectItem } from "@/components/Form/select/SelectItem";
import Select from "@/components/Form/select";
import Textarea from "@/components/Form/Textarea";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>

      <SettingsTabs />

      <div className="mt-6 flex flex-col">
        <div className="flex items-center justify-between border-b border-zinc-200 pb-5">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900">Personal Info</h2>
            <span className="text-sm text-zinc-500">
              Update your photo and personal details here.
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm border bprder-zinc-300 text-zinc-700 hover:bg-zinc-50 hover:cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              form="settings"
              className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm bg-violet-600 text-white hover:bg-violet-700 hover: cursor-pointer"
            >
              Save
            </button>
          </div>
        </div>

        <form
          id="settings"
          className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200"
        >
          <div className="grid gap-3 grid-cols-form pb-5">
            <label
              htmlFor="firstName"
              className="text-sm font-medium text-zinc-700"
            >
              Name
            </label>
            <div className="grid gap-6 grid-cols-2">
              <InputRoot>
                <InputControl id="firstName" defaultValue="John" />
              </InputRoot>

              <InputRoot>
                <InputControl defaultValue="Doe" />
              </InputRoot>
            </div>
          </div>

          <div className="grid gap-3 grid-cols-form pb-5">
            <label
              htmlFor="email"
              className="text-sm font-medium text-zinc-700"
            >
              Email address
            </label>
            <InputRoot>
              <InputPrefix>
                <Mail className="w-5 h-5 text-zinc-500" />
              </InputPrefix>
              <InputControl
                id="email"
                type="email"
                defaultValue="johndoe@email.com"
              />
            </InputRoot>
          </div>

          <div className="grid gap-3 grid-cols-form pb-5">
            <label
              htmlFor="photo"
              className="text-sm font-medium text-zinc-700"
            >
              Your Photo
              <span className="block mt-0.5 text-sm font-normal text-zinc-500">
                This will be displayed on your profile.
              </span>
            </label>
            <FileInput.Root className="flex items-start gap-5">
              <FileInput.ImagePreview />
              <FileInput.Trigger />
              <FileInput.Control />
            </FileInput.Root>
          </div>

          <div className="grid gap-3 grid-cols-form pb-5">
            <label htmlFor="role" className="text-sm font-medium text-zinc-700">
              Role
            </label>
            <InputRoot>
              <InputControl id="role" defaultValue="Role" />
            </InputRoot>
          </div>

          <div className="grid gap-3 grid-cols-form pb-5">
            <label
              htmlFor="country"
              className="text-sm font-medium text-zinc-700"
            >
              Country
            </label>
            <Select placeholder="Select a country...">
              <SelectItem value="br" text="Brazil" />
              <SelectItem value="us" text="United States" />
            </Select>
          </div>

          <div className="grid gap-3 grid-cols-form pb-5">
            <label
              htmlFor="timezone"
              className="text-sm font-medium text-zinc-700"
            >
              Timezone
            </label>
            <Select placeholder="Select a timezone...">
              <SelectItem
                value="utc8"
                text="Pacific Standard Time (UTC-08:00)"
              />
              <SelectItem value="utc3" text="America São Paulo (UTC-03:00)" />
            </Select>
          </div>

          <div className="grid gap-3 grid-cols-form pb-5">
            <label htmlFor="bio" className="text-sm font-medium text-zinc-700">
              Bio
              <span className="block mt-0.5 text-sm font-normal text-zinc-500">
                Write a short introduction.
              </span>
            </label>
            <div className="space-y-3">
              <div className="grid gap-3 grid-cols-2">
                <Select placeholder="" defaultValue="normal">
                  <SelectItem value="normal" text="Normal Text" />
                  <SelectItem value="md" text="Markdown" />
                </Select>

                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    className="p-2 hover:bg-zinc-100 rounded-md hover:cursor-pointer"
                  >
                    <Bold className="w-4 h-4 text-zinc-500" strokeWidth={3} />
                  </button>

                  <button
                    type="button"
                    className="p-2 hover:bg-zinc-100 rounded-md hover:cursor-pointer"
                  >
                    <Italic className="w-4 h-4 text-zinc-500" strokeWidth={3} />
                  </button>

                  <button
                    type="button"
                    className="p-2 hover:bg-zinc-100 rounded-md hover:cursor-pointer"
                  >
                    <Link className="w-4 h-4 text-zinc-500" strokeWidth={3} />
                  </button>

                  <button
                    type="button"
                    className="p-2 hover:bg-zinc-100 rounded-md hover:cursor-pointer"
                  >
                    <List className="w-4 h-4 text-zinc-500" strokeWidth={3} />
                  </button>

                  <button
                    type="button"
                    className="p-2 hover:bg-zinc-100 rounded-md hover:cursor-pointer"
                  >
                    <ListOrdered
                      className="w-4 h-4 text-zinc-500"
                      strokeWidth={3}
                    />
                  </button>
                </div>
              </div>
              <Textarea
                id="bio"
                defaultValue={`I'm a Product Designer based in Melbourne, Australia`}
              />
            </div>
          </div>

          <div className="grid gap-3 grid-cols-form pb-5">
            <label
              htmlFor="portifolioProjects"
              className="text-sm font-medium text-zinc-700"
            >
              Portfolio projects
              <span className="block mt-0.5 text-sm font-normal text-zinc-500">
                Share a few snippets of your work.
              </span>
            </label>
            <FileInput.Root>
              <FileInput.Trigger />
              <FileInput.Control multiple />
              <FileInput.FileList />
            </FileInput.Root>
          </div>

          <div className="flex items-center justify-end gap-2">
            <button
              type="button"
              className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm border bprder-zinc-300 text-zinc-700 hover:bg-zinc-50 hover:cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm bg-violet-600 text-white hover:bg-violet-700 hover: cursor-pointer"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
