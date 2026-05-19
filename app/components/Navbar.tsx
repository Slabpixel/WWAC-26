import Image from "next/image";
import Link from "next/link";

type NavLinkProperties = {
  label: string;
  link: string;
};

const Navbar = () => {
  const navLinks: NavLinkProperties[] = [
    {
      label: "About Event",
      link: "#about",
    },
    {
      label: "Schedule",
      link: "#schedule",
    },
    {
      label: "Speaker",
      link: "#speaker",
    },
    {
      label: "Tickets",
      link: "#tickets",
    },
    {
      label: "Contact",
      link: "#contact",
    },
  ];

  return (
    <nav className="w-full fixed top-0 left-0 z-99 bg-transparent lg:border-b lg:border-background/20">
      <div className="max-w-[1440px] mx-auto flex justify-between items-center px-4 sm:px-8 lg:px-10 py-5">
        <Link href={"/"}>
          <Image
            src={"/icons/nav-logo.svg"}
            alt="Logo"
            width={170}
            height={24}
            className="w-auto h-3.5 sm:h-5 lg:h-6"
          />
        </Link>

        {/* Mobile Menu */}
        <Image
          src={"/icons/nav-mobile-menu.svg"}
          alt="Mobile Menu"
          width={28}
          height={24}
          className="lg:hidden"
        />

        {/* Desktop Links */}
        <div className="hidden lg:flex">
          {navLinks.map((link) => (
            <Link
              href={link.link}
              key={link.label}
              className="py-3 px-4 cursor-pointer text-background font-roboto-mono leading-[100%] hover:text-foreground transition-colors duration-500 ease-out"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
