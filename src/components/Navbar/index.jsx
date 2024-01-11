"use client";
import MenuItems from "./components/MenuItems";
import ExtraMenu from "./components/ExtraMenu";
import Logo from "./components/Logo";

export default function NavBar() {
  return (
    <div className="font-body fixed h-20 w-full top-0 left-0 bg-black text-white z-[99] flex justify-between items-center p-10">
      {/* Logo */}
      <Logo />

      {/* MenuItems */}
      <MenuItems />

      {/* Extra Menu */}
      <ExtraMenu />
    </div>
  );
}
