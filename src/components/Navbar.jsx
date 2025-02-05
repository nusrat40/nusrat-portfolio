import resume from "../assets/nusrat_jahan.pdf";
import { Link } from "react-scroll";

const Navbar = () => {
  const links = (
  
    <>
    <li className="hover:text-[#ec5b53]">
      <Link to="home" smooth={true} duration={800}>
        Home
      </Link>
    </li>
    <li className="hover:text-[#ec5b53]">
      <Link to="about" smooth={true} duration={800}>
        About
      </Link>
    </li>
    <li className="hover:text-[#ec5b53]">
      <Link to="resume" smooth={true} duration={800}>
        Resume
      </Link>
    </li>
    <li className="hover:text-[#ec5b53]">
      <Link to="projects" smooth={true} duration={800}>
        Projects
      </Link>
    </li>
    <li className="hover:text-[#ec5b53]">
      <Link to="contact" smooth={true} duration={800}>
        Contact
      </Link>
    </li>
  </>
  );

  return (
    <div className="navbar fixed z-10 bg-opacity-100 bg-[#fefafa] open-sans container mx-auto md:px-20">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#ec5b53] italic">
          Nusrat
        </h1>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 scroll-smooth">{links}</ul>
      </div>
      <div className="navbar-end">
        <a href={resume} download="nusrat_jahan.pdf">
          <button className=" bg-[#ec5b53] text-white p-3 rounded-lg hover:bg-red-600">
            Download Resume
          </button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
