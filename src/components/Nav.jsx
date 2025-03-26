import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants"; // Assuming you have a navLinks.js file for navigation links
const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center w-full max-w-[1440px] mx-auto">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29}></img>
        </a>
        <ul className="flex-1 hidden lg:flex justify-center items-center gap-16 ">
          {navLinks.map((navLink) => {
            return (
              <li key={navLink.label}>
                <a
                  href={navLink.href}
                  className="font-montserrat leading-normal text-lg text-slate-gray"
                >
                  {navLink.label}
                </a>
              </li>
            );
          })}
        </ul>
        <div className="lg:hidden">
          <img src={hamburger} alt="hamburger" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
