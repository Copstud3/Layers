import Image from "next/image";
import logoImage from "@/assets/images/logo.svg";
import Link from "next/link";

export default function Header() {
  return (
    <div className="mx-8 md:mx-44 xl:mx-[400px] py-2 flex justify-center items-center border-white/15 border-2 mt-6 rounded-full backdrop-blur">
      <Link href="/">
        <Image src={logoImage} alt="logo" />
      </Link>
    </div>
  );
}
