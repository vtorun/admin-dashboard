import Image from "next/image";
import Input from "./input";
import { BiSolidBellRing } from "react-icons/bi";
import avatar from "@/assets/images/man.jpg";
export default function Header() {
  return (
    <header className="border-b border-zinc-3000 bg-white flex items-center justify-between px-4 py-2">
      <Input />
      <div className="flex gap-5 items-center">
        <BiSolidBellRing className="text-xl cursor-pointer" />
        <div className="flex gap-3">
          <Image
            src={avatar}
            alt="avatar"
            width={50}
            height={50}
            className="size-12 rounded-full"
          />
          <div>
            <p className="font-semibold text-black">Volkan Torun</p>
            <p className="text-sm text-zinc-500 px-8">Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
}
