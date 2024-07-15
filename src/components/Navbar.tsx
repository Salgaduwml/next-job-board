import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <header className="shadow-sm">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-3 py-4">
        <Link href={"/"}>
          <Image src={logo} alt="logo" width={40} height={40} />
        </Link>
        <Button asChild>
          <Link href="/jobs/new">Post a job</Link>
        </Button>
      </nav>
    </header>
  );
};

export default Navbar;
